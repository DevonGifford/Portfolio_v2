# Quickstart

Fork it, change your details, deploy. You shouldn't need to open a component.

Requires **Node 24** (see `.nvmrc`).

```bash
git clone https://github.com/<you>/Portfolio_v2.git
cd Portfolio_v2
npm install
npm run dev          # localhost:3000
```

---

## 1. Config — `site.config.ts`

One file: name, role, taglines, email, socials, resume path, SEO, nav links and button labels.

> Adding a key to `social` needs a matching icon in `components/common/SocialLinks.tsx`. Leave it
> out and `npm run typecheck` tells you which one is missing.

---

## 2. Static files

| Replace                                                  | With                               |
| -------------------------------------------------------- | ---------------------------------- |
| `public/assets/DevonGifford-FullstackDeveloper-2025.pdf` | your CV — then update `resumePath` |
| `public/assets/images/Devon_circle.png`                  | your photo                         |
| `public/assets/images/LogoBig.png`                       | your logo                          |
| `public/assets/PortfolioDemoDevon.png`                   | your social preview image          |
| `public/favicon.ico`                                     | your favicon                       |

Keep the filenames, or update the imports in `public/assets/index.ts`.

Project screenshots go in `public/assets/images/ProjectPictures/big-images/`, skill icons in
`public/assets/images/Skills/` — both are imported by name, so add yours to the barrel.

---

## 3. Content — `content/`

| File                                  | Holds                      |
| ------------------------------------- | -------------------------- |
| `experience.ts`                       | work history               |
| `projects.ts`                         | capstone and mini projects |
| `skills.ts`                           | skill icon groups          |
| `banner.ts`, `about.ts`, `contact.ts` | section copy               |

Two things that aren't obvious:

- **Prose is written in segments.** `{ text: "7+ years", highlight: true }` renders in the accent
  green. Segments are joined exactly as written — mind the spaces.
- **Images are imports, not path strings.** `import shot from "@/public/assets/…png"` — a string
  won't typecheck.

---

## 4. Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). No environment variables,
no build config.

---

Bad content fails the build with a message naming the section, entry and field.
`npm run check` runs typecheck → lint → test → build.
