# Amharic UI Font & Layout Rules

## Typography
- Primary Amharic font: `Noto Sans Ethiopic` (weights 400/600/700).
- Fallbacks: `Inter`, `Segoe UI`, system fonts.
- Use `:root[lang="am"]` to switch the base font family.
- Increase letter spacing slightly for long-form readability.
- Prefer line-height between 1.5 and 1.7 for long paragraphs.

## Bilingual Layout
- English and Amharic can appear side-by-side in the editor.
- For mixed posts, use clear section headers or pill labels (`EN` / `AM`).
- Keep paragraphs short to avoid dense visual blocks.

## Input & Editor
- Ensure input fields support Unicode and preserve Amharic punctuation.
- Allow mixed language within the same paragraph.
- Provide Amharic placeholder text where appropriate.

## Direction & RTL Safety
- Amharic is LTR, but UI should remain RTL-safe.
- Use `[dir="rtl"]` overrides for padding/margins in case of future RTL support.

## CSS Implementation
- `:root[lang="am"] { font-family: "Noto Sans Ethiopic", "Inter", sans-serif; }`
- Use language attributes on the root or relevant containers.
- Avoid overly tight tracking or low contrast in dark mode.
