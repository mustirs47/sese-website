import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export interface PublicFile { path: string; content: string }

// Public verification and measurement identifiers are not credentials.
const credentialPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH |DSA |ENCRYPTED )?PRIVATE KEY-----/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\b(?:ghp|gho|ghu|ghs|github_pat)_[A-Za-z0-9_]{20,}\b/,
  /\bsk_(?:live|test)_[A-Za-z0-9]{16,}\b/,
  /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/,
  /\b(?:VITE_)?(?:SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|AWS_SECRET_ACCESS_KEY|DATABASE_URL|JWT_SECRET|SESSION_SECRET|LOVABLE_API_KEY|GOOGLE_SEARCH_CONSOLE_API_KEY)\s*[:=]\s*["'`][^"'`\s]{8,}/i,
  /\bVITE_[A-Z0-9_]*(?:SECRET|PRIVATE|SERVICE_ROLE|PASSWORD)[A-Z0-9_]*\b/,
  /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?):\/\/[^\s:/]+:[^\s@]+@/i,
];

export function findPublicExposure(files: PublicFile[]): string[] {
  return files.filter(file => {
    const segments = file.path.replaceAll("\\", "/").split("/");
    const basename = segments.at(-1) || "";
    const sensitiveFile = /^\.env(?:\.|$)/i.test(basename)
      || /\.(?:pem|key|p12|pfx|jks|keystore|map)$/i.test(basename)
      || segments.some(segment => [".git", ".ssh", ".aws"].includes(segment));
    return sensitiveFile || credentialPatterns.some(pattern => pattern.test(file.content));
  }).map(file => file.path);
}

export function assertNoPublicExposure(root: string): void {
  const files: PublicFile[] = [];
  function collect(directory: string) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) throw new Error("Security check: public source must not contain symlinks.");
      if (entry.isDirectory()) collect(absolute);
      else if (entry.isFile()) {
        files.push({ path: path.relative(root, absolute), content: readFileSync(absolute).toString("utf8") });
      }
    }
  }
  collect(path.join(root, "public"));
  collect(path.join(root, "src"));
  files.push({ path: "index.html", content: readFileSync(path.join(root, "index.html"), "utf8") });
  if (findPublicExposure(files).length) {
    // Never include matched values or credential derivatives in logs.
    throw new Error("Security check failed: sensitive files or private credentials in public source. Publication blocked.");
  }
}