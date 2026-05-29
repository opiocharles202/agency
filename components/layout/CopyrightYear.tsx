// Build-time year constant — avoids Next.js 16 cacheComponents prerender restrictions
// on new Date() in both Server and Client components.
export const CURRENT_YEAR = new Date().getFullYear();

