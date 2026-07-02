// Minimal zero-dependency static file server for previewing the Sogody static site.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT) || 8001;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/babel; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".mp4": "video/mp4",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath === "/") urlPath = "/index.html";

    // Pretty URLs (e.g. /updates/some-slug/ or /updates/some-slug): fall back to
    // <path>/index.html for extensionless requests, so real per-article folders work.
    const candidates = [urlPath];
    if (!path.extname(urlPath)) {
      candidates.push(path.join(urlPath, "index.html"));
    }

    const tryNext = (i) => {
      if (i >= candidates.length) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Not found");
      }
      const filePath = path.join(ROOT, candidates[i]);
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        return res.end("Forbidden");
      }
      fs.readFile(filePath, (err, data) => {
        if (err) return tryNext(i + 1);
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
        res.end(data);
      });
    };
    tryNext(0);
  })
  .listen(PORT, () => console.log(`Sogody static site on http://localhost:${PORT}`));
