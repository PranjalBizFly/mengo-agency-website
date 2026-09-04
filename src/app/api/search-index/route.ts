import { searchIndex } from "@/lib/search-index";

/**
 * The search index, as a static JSON asset.
 *
 * A route handler rather than a module the dialog imports, and that is the
 * whole point: importing it from a client component would pull the entire
 * content corpus — every capability, every workflow, five hundred pages of
 * prose — into the browser bundle. As a fetch it is one prerendered file,
 * requested the first time somebody actually opens search and cached after.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=3600, must-revalidate",
    },
  });
}
