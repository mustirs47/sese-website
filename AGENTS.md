## Presentation architecture
- Use divisions as the site-wide source for the three service fields; homepage data contains concise teasers only, so navigation and structured data remain consistent.
- Keep existing Facility category URLs usable and give their service details canonical links to /facility/:slug; this preserves saved links without duplicate service indexing.
- Wrap the installed Lucide icons centrally with a uniform restrained line weight and decorative accessibility defaults; this keeps symbols consistent without adding dependencies.
- Keep monochrome surface colors in global semantic tokens, including light-section overrides, so controls retain contrast on either surface.
- Define typography, corner radii, shadows and motion centrally; narrowly scoped main-content compatibility selectors unify legacy cards without changing their layout.
- Serve fonts as project-hosted assets instead of runtime font-provider requests to preserve privacy and keep loading predictable.
- Honor reduced-motion preferences in CSS animations and programmatic scrolling so presentation effects never prevent access to content.
- Use cropped CDN-backed uploaded logo assets for navigation, footer and structured data; derive local browser and app icons from that same uploaded three-circle symbol to preserve proportions and branding.
- PageHero is text-only and service cards use their functional icons; do not import decorative service illustration assets into page bundles.