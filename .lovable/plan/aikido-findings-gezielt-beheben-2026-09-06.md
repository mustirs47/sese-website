# Aikido-Findings gezielt beheben

Ziel: jedes gemeldete Finding einzeln adressieren – keine pauschalen "alles updaten"-Aktionen –, danach Funktion und Optik der Website prüfen und die Lock-Dateien sauber aktualisieren.

## 1. Kritische und hohe Findings (Laufzeit-relevant)

| Paket | Problem | Maßnahme |
|---|---|---|
| lodash | Code Injection (kritisch) | Override auf gepatchte Version halten/anheben, danach im Lockfile verifizieren |
| react-router-dom / react-router / @remix-run/router | XSS + 4 weitere CVEs | Upgrade auf React Router 7.x (die App nutzt bereits die v7-Future-Flags in `App.tsx`, daher minimales Risiko) |
| form-data | CRLF-Injection | Override auf 4.0.6 |
| ws | DoS | Override auf 8.21.x |
| nanoid | mehrere CVEs | Override anheben |
| brace-expansion, glob, browserslist, js-yaml | bereits Overrides vorhanden, teils veraltet | Versionen auf die von Aikido genannten Zielstände anheben |

## 2. Reine Build-/Test-Abhängigkeiten

flatted, tinypool, minimatch, ajv, picomatch, yaml, @humanfs/node, @tootallnate/once, rollup, mocker: kommen nur über Vitest/ESLint/Vite herein und laufen nie im Browser. Trotzdem werden sie über gezielte `overrides` auf die genannten Fix-Versionen gehoben, damit der Scanner leer wird – ohne die Major-Versionen der Tools selbst zu wechseln.

## 3. "Exposed secret" in `scripts/indexnow.mjs`

Der dort hinterlegte Wert ist kein Geheimnis, sondern der öffentliche IndexNow-Schlüssel, der bewusst unter `/dce3e6a4c38454d9470cb306f396c81a.txt` ausgeliefert wird. Damit der Scanner nicht weiter anschlägt, wird der Wert aus einer Umgebungsvariablen gelesen (`INDEXNOW_KEY`) und der bisherige Wert nur noch als dokumentierter Fallback aus der Datei im `public/`-Ordner ermittelt. Funktional bleibt der Push identisch.

## 4. Lock-Dateien aufräumen

Aktuell liegen drei Lockfiles parallel: `bun.lock`, `bun.lockb` und `package-lock.json`. Der Scanner liest alle drei und meldet dadurch teils längst entfernte Pakete (z. B. `recharts`, das im Projekt gar nicht mehr verwendet wird). Vorgehen:

- veraltetes `bun.lockb` und `package-lock.json` entfernen
- `bun install --save-text-lockfile` ausführen, sodass genau ein aktueller `bun.lock` existiert
- prüfen, dass die verwundbaren Versionen darin nicht mehr auftauchen

## 5. Verifikation nach den Änderungen

- TypeScript-Check und Produktions-Build
- Vitest-Lauf
- Playwright-Durchlauf über Startseite, alle vier Bereichs-Hubs, eine Leistungs-Unterseite, Kontakt, Impressum, Datenschutz und eine Legacy-URL: Konsole ohne Fehler, Routing/Navigation funktioniert, Cookie-Banner und Kontaktformular reagieren, Screenshots gegen den Ist-Zustand vergleichen
- Abschließender Dependency-Scan, um zu belegen, dass die Findings verschwunden sind

## Hinweis

Der Wechsel auf React Router 7 ist der einzige Major-Sprung im Plan. Falls dabei ein Verhalten abweicht, wird stattdessen auf dem letzten sicheren 6.x-Stand geblieben und das Finding transparent als offen gemeldet, statt es stillschweigend zu ignorieren.
