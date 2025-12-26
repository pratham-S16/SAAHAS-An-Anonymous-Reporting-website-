import sanitizeHtml from "sanitize-html";

export function sanitizeText(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: [],        // strip ALL HTML
    allowedAttributes: {}, // strip ALL attributes
  }).trim();
}
