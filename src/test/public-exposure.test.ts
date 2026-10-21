import { describe, expect, it } from "vitest";
import { assertNoPublicExposure, findPublicExposure } from "../../scripts/security/publicExposure";
import { resolve } from "node:path";

describe("private credentials must never be published", () => {
  it("rejects private signing key material", () => {
    const content = ["-----BEGIN", "PRIVATE KEY-----"].join(" ");
    expect(findPublicExposure([{ path: "src/config.ts", content }])).toEqual(["src/config.ts"]);
  });
  it("rejects public environment files", () => {
    expect(findPublicExposure([{ path: "public/.env.production", content: "" }])).toEqual(["public/.env.production"]);
  });
  it("rejects browser-exposed private configuration", () => {
    const content = "import.meta.env." + ["VITE", "SESSION", "SECRET"].join("_");
    expect(findPublicExposure([{ path: "src/config.ts", content }])).toEqual(["src/config.ts"]);
  });
  it("rejects source maps in public assets", () => {
    expect(findPublicExposure([{ path: "public/app.js.map", content: "{}" }])).toEqual(["public/app.js.map"]);
  });
  it("allows intentionally public verification identifiers", () => {
    expect(findPublicExposure([{ path: "public/verification.txt", content: "public-site-verification" }])).toEqual([]);
  });
  it("checks the actual website source and public files", () => {
    expect(() => assertNoPublicExposure(resolve(process.cwd()))).not.toThrow();
  });
});