// Allow importing .css files in TypeScript (used by Next.js App Router layout)
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
