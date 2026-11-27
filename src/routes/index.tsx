import { createFileRoute } from "@tanstack/react-router";

import landingPage from "@/content/nettone.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(landingPage, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
