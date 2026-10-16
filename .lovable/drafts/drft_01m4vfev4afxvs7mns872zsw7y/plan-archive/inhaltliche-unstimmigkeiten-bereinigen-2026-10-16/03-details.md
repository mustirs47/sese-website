## Vorgehen

- Ohne Ihre Rückmeldung formuliere ich alle Punkte 1–11 vorsichtig um. Wenn Sie bestimmte Punkte bestätigen (z. B. es gibt wirklich 24/7-Bereitschaft, FLL-zertifizierte Baumpfleger, interne Audits), lasse ich diese stehen.
- Geänderte Texte gelten auch für Suchmaschinen-Beschreibungen und FAQ-Daten, damit Google dieselben Aussagen sieht.
- Danach Prüfung aller Seiten mobil und am Desktop.

## Technische Details

- Betroffene Dateien: `src/data/divisions.ts`, `divisionDetails.ts`, `serviceDetails.ts`, `legacyRoutes.ts`, `src/pages/{Branchen,Arbeitsweise,Qualifikationen,KarrierePage,KontaktPage,Magdeburg,MagdeburgReinigung}.tsx`, `src/components/sections/{TeamSection,QualificationsSection,TrustBar,FAQSection}.tsx`, `public/llms.txt`.
- Rechtstexte (Impressum, Datenschutz) bleiben inhaltlich unverändert.
- Vitest und Playwright-Durchlauf über alle Sitemap-Seiten nach den Änderungen.
