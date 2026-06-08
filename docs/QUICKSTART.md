# Quickstart

Fork this, make it yours, deploy it. You should not need to open a component.

**Requires** Node 24 (see `.nvmrc`) and npm.

```bash
git clone https://github.com/<you>/Portfolio_v2.git
cd Portfolio_v2
npm install
npm run dev          # http://localhost:3000
```

---

## Where everything lives

Two places hold everything you'd want to change:

| You want to change                                           | Edit                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| Your name, role, email, socials, CV, SEO, nav, button labels | `site.config.ts`                                              |
| Work history                                                 | `content/experience.ts`                                       |
| Projects                                                     | `content/projects.ts`                                         |
| Skill icons                                                  | `content/skills.ts`                                           |
| Hero / About / Contact copy                                  | `content/banner.ts`, `content/about.ts`, `content/contact.ts` |
| Colours, fonts, breakpoints                                  | the `@theme` block in `app/globals.css`                       |

Everything else — `components/`, `lib/`, `app/` — is machinery. If you find yourself editing a
component to change words, something is in the wrong place; open an issue.

---

## 1. Make it yours (5 minutes)

Open **`site.config.ts`** and change the obvious things: `name`, `role`, `taglines`, `email`,
`social`, and `seo`.

Three files to swap while you're there:

- **Your CV** — drop a PDF in `public/assets/` and point `resumePath` at it.
- **Your photo** — replace `public/assets/images/Devon_circle.png` (keep the filename, or update
  the import in `public/assets/index.ts`).
- **Your logo** — replace `public/assets/images/LogoBig.png`. It is the only asset with no config
  entry; its alt text is generated from `siteConfig.name`.

> **Socials:** every key in `social` needs a matching icon in
> `components/common/SocialLinks.tsx`. Adding a key without a matching icon is a **compile error**,
> so `npm run typecheck` will tell you exactly which one is missing — copy an existing entry.

---

## 2. Your content

Each file in `content/` is a plain TypeScript array with a `satisfies` annotation. Your editor will
autocomplete the fields and underline mistakes as you type.

```ts
// content/experience.ts
export const experience = [
  {
    key: "acme", // unique; also the tab id
    label: "Acme Corp", // sidebar tab
    sub: "Senior Engineer", // sidebar subtitle
    componentProps: {
      title: "Senior Engineer",
      company: "Acme Corp",
      dates: "Jan 2025 - Present",
      intro: "One paragraph on the role.",
      bullets: [{ heading: "What you did", content: "How it went." }],
    },
  },
] satisfies JobEntries;
```

Adding a job means adding its `key` to the `JobTabKey` union at the top of the same file — the
compiler will tell you if you forget.

### Prose is written in segments

Paragraphs are arrays of text runs, so styling stays out of your writing:

```ts
paragraphs: [
  [
    { text: "I have " },
    { text: "7+ years", highlight: true },   // accent green
    { text: " of experience building things." },
    { text: "mostly on the web", emphasis: true },  // italic
  ],
],
```

Segments are concatenated exactly as written — **mind the leading and trailing spaces.**

### Images are imports, not paths

```ts
import myProject from "@/public/assets/images/ProjectPictures/big-images/MyProject_big.png";

image: { src: myProject, alt: "My project", width: 500, height: 300 },
```

A string path won't typecheck. Importing gives you build-time image optimisation, and a missing file
breaks the build rather than shipping a broken page.

---

## 3. If you get something wrong

Content is validated when you build. Errors name the section, the entry and the field:

```
Invalid content in "experience":
  - experience entry "acme" is missing "componentProps.dates"

Invalid content in "projects (capstone)":
  - projects (capstone) entry "My Project" has an invalid "gitLink": Invalid URL
```

You'll see these in `npm run dev`, `npm run build` and `npm run test`. Nothing invalid can deploy.

---

## 4. Colours and fonts

Tailwind v4 — there is no `tailwind.config.ts`. Tokens live in the `@theme` block of
`app/globals.css`:

```css
@theme {
  --color-bodyColor: #0a192f; /* page background */
  --color-textGreen: #64ffda; /* the accent */
  --color-textLight: #ccd6f6; /* headings */
  --color-textDark: #8892b0; /* body copy */
  --color-cardColor: #112240; /* card backgrounds */
}
```

Change a value there and every `bg-cardColor` / `text-textGreen` across the site follows.

> `siteConfig.theme.cardColor` mirrors one of these for reference. If you change the CSS, change it
> too — `npm run test` fails if they drift apart.

---

## 5. Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). No environment variables, no
build configuration — the defaults work.

---

## Commands

| Command                    | Does                                                 |
| -------------------------- | ---------------------------------------------------- |
| `npm run dev`              | Dev server on :3000                                  |
| `npm run build`            | Production build (validates all content)             |
| `npm run check`            | typecheck → lint → test → build. Run before pushing. |
| `npm run test`             | Test suite                                           |
| `npm run validate:content` | Content validation only — fast                       |
| `npm run format`           | Prettier                                             |

Git hooks run automatically: formatting and linting on commit, typecheck and tests on push.
`npx lefthook uninstall` turns them off.

---

## How it fits together

```
content/*.ts  +  site.config.ts     ← you edit these
        ↓
lib/content/index.ts                ← validates once, at build time
        ↓
app/page.tsx                        ← server component
        ↓  (passed as props)
components/sections/*               ← receive typed, already-checked data
```

Validation runs on the server only, so the schema library never reaches the browser. Components
receive data that is already known-good, which is why none of them do defensive checks.
