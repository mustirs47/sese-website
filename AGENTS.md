## Presentation architecture
- Keep the homepage's new service positioning in a separate data module and apply it to homepage-only navigation and schemas until the detail pages are migrated; this avoids changing their existing taxonomy prematurely.
- Keep monochrome surface colors in global semantic tokens, including light-section overrides, so controls retain contrast on either surface.
- Define typography, corner radii, shadows and motion centrally; narrowly scoped main-content compatibility selectors unify legacy cards without changing their layout.
- Serve fonts as project-hosted assets instead of runtime font-provider requests to preserve privacy and keep loading predictable.
- Honor reduced-motion preferences in CSS animations and programmatic scrolling so presentation effects never prevent access to content.
- Use shared transparent logo variants for navigation and the footer; derive browser and app icons from the same three-circle symbol to keep branding consistent.
- PageHero is text-only and service cards use their functional icons; do not import decorative service illustration assets into page bundles.