#!/usr/bin/env node
// IndexNow real-time push for Bing/Yandex/Seznam.
// Usage:
//   node scripts/indexnow.mjs                       -> submit all URLs from sitemap.xml
//   node scripts/indexnow.mjs /leistungen /kontakt  -> submit specific paths
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOST = "www.sentinel-services.de";
// IndexNow-Schlüssel: bewusst öffentlich (wird unter https://HOST/<key>.txt ausgeliefert).
// Bevorzugt aus der Umgebung, sonst aus der Key-Datei im public-Ordner.
function resolveKey() {
  const fromEnv = process.env.INDEXNOW_KEY?.trim();
  if (fromEnv) return fromEnv;
  const dir = resolve(__dirname, "../public");
  const file = readdirSync(dir).find((f) => /^[a-f0-9]{32}\.txt$/i.test(f));
  if (!file) throw new Error("Kein IndexNow-Key gefunden (INDEXNOW_KEY setzen oder Key-Datei in public/ ablegen).");
  return readFileSync(resolve(dir, file), "utf8").trim();
}
const KEY = resolveKey();
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";


function urlsFromSitemap() {
  const sitemap = readFileSync(resolve(__dirname, "../public/sitemap.xml"), "utf8");
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function urlsFromArgs(args) {
  return args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? "" : "/"}${p}`));
}

const args = process.argv.slice(2);
const urlList = args.length ? urlsFromArgs(args) : urlsFromSitemap();

const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

console.log(`Submitting ${urlList.length} URL(s) to IndexNow…`);
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const text = await res.text();
if (res.ok || res.status === 202) {
  console.log(`OK (${res.status}) – URLs accepted by IndexNow.`);
} else {
  console.error(`FAILED (${res.status}): ${text}`);
  process.exit(1);
}
