import { serve } from "bun";
import { join } from "path";
import { existsSync } from "fs";

const dist = join(import.meta.dir, "dist");

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname === "/" ? "/index.html" : url.pathname;
    let filePath = join(dist, path);

    if (existsSync(filePath)) {
      return new Response(Bun.file(filePath));
    }

    // Fallback for React Router routes
    return new Response(Bun.file(join(dist, "index.html")));
  },
});
