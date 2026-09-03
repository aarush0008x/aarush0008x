# Design System & Build Specification (`build.md`)

## 🎨 Strict Color Palette (Tokens)
- **Background**: `#2C2C2C` (Deep Slate Base)
- **Surface Elevation 1**: `#242424` (Card Backgrounds)
- **Surface Elevation 2**: `#1E1E1E` (Media & Terminal Backgrounds)
- **Surface Elevation 3**: `#141414` (Inset Wells)
- **Brand Accent Primary**: `#802938` (Muted Burgundy Accent)
- **Brand Accent Hover**: `#9E3A4C` (Active State)
- **Text Primary (Headings)**: `#F7F6F4` (High-Contrast Off-White)
- **Text Secondary (Body)**: `#D6D2CB` (Soft Warm Gray)
- **Text Muted (Microcopy)**: `#96928B` (Captions & Tags)
- **Border Default**: `rgba(247, 246, 244, 0.1)`
- **Border Accent**: `rgba(128, 41, 56, 0.4)`
- **Status Live**: `#4ADE80` (Emerald Green)

---

## 🔤 Type Scale (Desktop & Mobile)
- **H1 (Hero Heading)**: Desktop `64px` (`4rem`), Mobile (375px) `36px` (`2.25rem`) — Weight: 800
- **H2 (Section Heading)**: Desktop `36px` (`2.25rem`), Mobile (375px) `24px` (`1.5rem`) — Weight: 700
- **H3 (Card Title)**: Desktop `24px` (`1.5rem`), Mobile (375px) `18px` (`1.125rem`) — Weight: 600
- **Body Regular**: Desktop `16px` (`1rem`), Mobile (375px) `14px` (`0.875rem`) — Line-height: 1.6
- **Small / Monospace**: Desktop `12px` (`0.75rem`), Mobile (375px) `11px` (`0.6875rem`) — Letter-spacing: +0.05em

---

## 📏 Spacing Scale (4px Base Harmonic System)
- `4px` (`gap-1`, `p-1`)
- `8px` (`gap-2`, `p-2`)
- `12px` (`gap-3`, `p-3`)
- `16px` (`gap-4`, `p-4`)
- `24px` (`gap-6`, `p-6`)
- `32px` (`gap-8`, `p-8`)
- `48px` (`py-12`)
- `64px` (`py-16`)
- `96px` (`py-24`)

---

## 📱 Mobile (375px) Responsive Rules
- **Breakpoints**: `sm` = 640px, `md` = 768px, `lg` = 1024px, `xl` = 1280px.
- **Hero**: Stacks vertically at `< 1024px`. Photo collage scales down with uncropped aspect ratios.
- **Projects Grid**: Converts from `col-span-8 / col-span-4` bento grid to `100% full-width` single column (`col-span-12`).
- **Architecture Modals**: Max width constrained to `94vw`, touch-friendly close button with `min-h-[44px]`.
- **Ask Aarush AI**: Floating toggle button fixed at bottom-right thumb zone; modal takes `92vw` width on mobile.
