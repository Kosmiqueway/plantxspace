# Brand usage

Use the provided assets without altering geometry, proportions, stroke weights, or colors. Do not add gradients, outlines, or drop shadows.

## When to use each asset
- **Logo mark (`public/logo-mark.svg`)**: Use for small-square contexts such as GitHub avatars, social icons, and compact buttons.
- **Logo wordmark (`public/logo-wordmark.svg`)**: Use for primary website headers, navigation branding, and wide placements where text legibility is needed.

## Usage guidance
- Maintain clear space equal to the radius of the central node when placing near other elements.
- Keep backgrounds simple and high-contrast; prefer solid light or dark fields.
- Do not crop or rotate the mark or wordmark.
- Scale uniformly; avoid stretching on one axis.
- Preserve the provided `currentColor` behavior so assets inherit the surrounding text color.
- For dark backgrounds, set the surrounding text color to a light neutral; for light backgrounds, use a dark neutral.
- Recommended defaults:
  - GitHub avatar: `logo-mark.svg`
  - Website header: `logo-wordmark.svg`
