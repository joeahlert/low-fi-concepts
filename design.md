# Design Rules — Low-Fi Concepts

This repository uses **[figma/sds](https://github.com/figma/sds) (Simple Design System)** as its
**sole and exclusive design system**. All low-fidelity concepts, mockups, prototypes, and screens
built here MUST be assembled only from SDS components, SDS tokens, and SDS layout primitives.

The goal of low-fi work is to explore structure and flow quickly — using a single, consistent,
pre-approved kit so concepts stay comparable, on-brand, and trivially upgradeable to high fidelity.

---

## 0. The One Rule

> **If it is not already in SDS, do not invent it.**
> Compose existing SDS primitives, compositions, and layout components using SDS tokens.
> If a concept truly needs something SDS does not have, **stop and ask** — do not hand-roll it.

---

## 1. Components — use SDS only

- Build screens **only** from components that already exist in `src/ui`.
- **Never** create new visual components, and **never** restyle existing ones.
- **Never** import from `@react-aria`, `@react-stately`, raw HTML-styled elements, or any
  third-party UI kit (MUI, Chakra, Bootstrap, Tailwind UI, shadcn, etc.).
- Import via the configured aliases (see `vite.config.ts`):

```tsx
import { Flex, Section, Grid } from "layout";
import {
  Accordion, AccordionItem,
  Avatar, Button, Checkbox, Dialog, Fieldset,
  Icon, IconButton, Image, Input, Link, ListBox, Logo, Menu,
  Navigation, NavigationPill, Notification, Pagination, Radio, Search,
  Select, Slider, Switch, Tab, Table, Tag,
  Text, TextHeading, TextSmall, Textarea, Tooltip,
} from "primitives";
import { Card, Footer, Header } from "compositions";
import { IconChevronLeft } from "icons";
import { placeholder } from "images";
import { useMediaQuery } from "hooks";
```

### Allowed component inventory (the complete kit)

- **Primitives** (`src/ui/primitives/`): Accordion, Avatar, Button, Checkbox, Dialog, Fieldset,
  Icon, IconButton, Image, Input, Link, ListBox, Logo, Menu, Navigation, Notification,
  Pagination, Radio, Search, Select, Slider, Switch, Tab, Table, Tag, Text, Textarea, Tooltip.
- **Compositions** (`src/ui/compositions/`): Cards, Footers, Forms, Headers, Sections.
- **Layout** (`src/ui/layout/`): Flex, Section, Grid.
- **Icons** (`src/ui/icons/`): use only icons that already exist. Do not add SVGs.

If a needed primitive/icon/composition is **not** in the lists above, it does not exist for this
project — ask before proceeding.

---

## 2. Color — tokens only, no raw values

- **Never** write a hex (`#111`), `rgb()`, `hsl()`, or named CSS color anywhere.
- Use semantic SDS color variables from `src/theme.css` only. Prefer **semantic role** tokens over
  raw primitive ramps.

Use the role tokens (light / dark / high-contrast modes are handled by SDS automatically):

- Backgrounds: `var(--sds-color-background-default-default)`, `...-brand-default`, `...-danger-default`,
  `...-positive-default`, `...-neutral-default`, `...-disabled-default`.
- Text: `var(--sds-color-text-default-default)`, `...-default-secondary`, `...-default-tertiary`,
  `...-brand-on-brand`, `...-danger-default`, `...-positive-default`, `...-disabled-default`.
- Borders: `var(--sds-color-border-default-default)`, `...-brand-default`, `...-danger-default`, etc.
- Icons: `var(--sds-color-icon-default-default)`, `...-brand-default`, etc.

**Do not** reach for the raw ramps (`--sds-color-gray-500`, `--sds-color-red-500`, …) in concept
work — those are primitives that feed the semantic roles. Always consume the role token.

---

## 3. Spacing, radius, sizing — tokens only

- Spacing/gap/padding: `var(--sds-size-space-*)` — e.g. `100, 150, 200, 300, 400, 600, 800, 1200, 1600, 2400`.
  - In SDS components these map to numeric props: `<Section padding="400">`, `<Flex gap="200">`.
- Radius: `var(--sds-size-radius-*)` — `100, 200, 400, full`.
- Icon sizes: `var(--sds-size-icon-small | -medium | -large)`.
- Stroke/borders: `var(--sds-size-stroke-border)`, `var(--sds-size-stroke-focus-ring)`.
- **Never** use arbitrary px/rem values (`padding: 13px`, `gap: 10px`, `border-radius: 6px`).

---

## 4. Typography — tokens only

- Font family: `var(--sds-typography-family-sans | -serif | -mono)` (Inter / Noto Serif / Roboto Mono).
- Size: `var(--sds-typography-scale-01 … -10)` or the semantic body/heading typography tokens.
- Weight: `var(--sds-typography-weight-*)` (regular, medium, semibold, bold, …).
- Prefer the typography **components** for all text: `TextHeading`, `Text`, `TextSmall`, etc.
- **Never** set a raw `font-size`, `font-family`, or `font-weight` literal.

---

## 5. Layout — components, not custom CSS

- Use `Flex`, `Section`, and `Grid` for **all** positioning and spacing.
- **Never** write custom CSS Grid/Flexbox, absolute positioning, or utility classes
  (`display: flex`, `grid-cols-3`, `gap-4`, etc.) to lay out a screen.

```tsx
<Section padding="1600">
  <Flex direction="column" gap="600" alignPrimary="center">
    <Flex direction={isMobile ? "column" : "row"} gap="400" type="third">
      {items.map((i) => <Card key={i.id} {...i} />)}
    </Flex>
  </Flex>
</Section>
```

---

## 6. Component APIs — read before you use

- Read the component's TypeScript file in `src/ui/...` before using it; use its real props.
- Use semantic SDS prop names: `variant` (not `type`), `isSelected` (not `active`), `size`, etc.
- Do not pass props that don't exist; do not override styles via `style={{...}}` or `className`
  hacks to change appearance.

---

## 7. Low-fi specific guidance

- Favor **structure over polish**: greys, placeholders, and default variants are encouraged.
- Use `placeholder` images from `images` and existing icons for any media.
- Use `Text`/`TextHeading` with lorem or realistic copy — no custom fonts or hero styling.
- Keep concepts in light mode by default; SDS handles dark / high-contrast via the same tokens.
- One concept = a composition of SDS pieces. If you can't build it from the kit, it's a gap to
  discuss, not a thing to build.

---

## 8. Hard "never" list

- ❌ No hardcoded colors (hex/rgb/hsl/named).
- ❌ No arbitrary spacing/radius/font sizes (raw px/rem).
- ❌ No new or restyled components.
- ❌ No third-party UI libraries or raw React Aria/Stately imports.
- ❌ No custom layout CSS (flex/grid/absolute) — use layout components.
- ❌ No new icons, fonts, or image assets.
- ❌ No `style={{...}}` or `className` overrides that change SDS appearance.

## 9. When SDS is missing something

1. Stop.
2. Describe the gap (what the concept needs vs. what SDS offers).
3. Ask for direction before adding anything outside SDS.

---

**Source of truth:** SDS components in `src/ui`, tokens in `src/theme.css`, and the SDS usage
guide in `.cursor/rules/usage-guidelines.mdc`. This `design.md` governs all concept work in this repo.
