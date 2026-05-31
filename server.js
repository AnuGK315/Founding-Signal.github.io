const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const root = __dirname;
const dataDir = path.join(root, "data");
const pollFile = path.join(dataDir, "poll-responses.json");
const port = Number(process.env.PORT || 4177);

const seedPoll = {
  options: [
    { label: "Rights", votes: 13 },
    { label: "Self-government", votes: 10 },
    { label: "Independence Day", votes: 8 },
    { label: "Checks on power", votes: 7 }
  ],
  responses: []
};

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8"
};

async function readPoll() {
  try {
    return JSON.parse(await fs.readFile(pollFile, "utf8"));
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(pollFile, JSON.stringify(seedPoll, null, 2));
    return structuredClone(seedPoll);
  }
}

async function writePoll(data) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(pollFile, JSON.stringify(data, null, 2));
}

function sendJson(response, status, value) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(value));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2048) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function handlePoll(request, response) {
  const poll = await readPoll();

  if (request.method === "GET") {
    sendJson(response, 200, { options: poll.options });
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  let payload;
  try {
    payload = JSON.parse(await readBody(request));
  } catch {
    sendJson(response, 400, { error: "Invalid JSON" });
    return;
  }

  const option = poll.options.find((item) => item.label === payload.label);
  if (!option) {
    sendJson(response, 400, { error: "Unknown poll option" });
    return;
  }

  option.votes += 1;
  poll.responses.push({
    label: option.label,
    createdAt: new Date().toISOString(),
    userAgent: request.headers["user-agent"] || "unknown"
  });
  await writePoll(poll);
  sendJson(response, 200, { options: poll.options });
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const file = await fs.readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = http.createServer((request, response) => {
  if (request.url.startsWith("/api/poll")) {
    handlePoll(request, response).catch(() => sendJson(response, 500, { error: "Poll unavailable" }));
    return;
  }

  serveStatic(request, response).catch(() => {
    response.writeHead(500);
    response.end("Server error");
  });
});

server.listen(port, () => {
  console.log(`Founding Signal running at http://127.0.0.1:${port}`);
});
