# Quickstart

Change your details, deploy. You shouldn't need to open a component.

## Fork, don't clone

Use GitHub's **Fork** button rather than cloning directly. A fork is your own repo — you can push to
it, deploy it, and still pull in upstream fixes later if you want them:

```bash
git clone https://github.com/<you>/Portfolio_v2.git
cd Portfolio_v2

# optional: keep a line back to upstream for future fixes
git remote add upstream https://github.com/DevonGifford/Portfolio_v2.git
git fetch upstream && git merge upstream/main    # when you want them

npm install
npm run dev          # localhost:3000
```

Requires **Node 24** — see [mise.toml](mise.toml).

---

## 1. Config — [`content/site.config.ts`](content/site.config.ts)

One file: name, role, taglines, email, socials, resume path, SEO, nav links and button labels.

```ts
export const siteConfig = {
  name: "Your Name",
  role: "Frontend Developer",
  taglines: ["Frontend Developer", "React Enjoyer"],
  email: "you@example.com",
  social: {
    github: "https://github.com/you",
    linkedin: "https://linkedin.com/in/you",
  },
  resumePath: "/assets/your-cv.pdf",
  // …seo, nav, labels, footer
} as const;
```

> Adding a key to `social` needs a matching icon in
> [`SocialLinks.tsx`](src/components/common/SocialLinks.tsx). Leave it out and `npm run typecheck`
> names the one that's missing.

---

## 2. Static files

| Replace                                                                   | With                               |
| ------------------------------------------------------------------------- | ---------------------------------- |
| [`public/assets/DevonGifford-FullstackDeveloper-2025.pdf`](public/assets) | your CV — then update `resumePath` |
| [`public/assets/images/Devon_circle.png`](public/assets/images)           | your photo                         |
| [`public/assets/images/LogoBig.png`](public/assets/images)                | your logo                          |
| [`public/assets/PortfolioDemoDevon.png`](public/assets)                   | your social preview image          |
| [`public/favicon.ico`](public)                                            | your favicon                       |

Keep the filenames, or update the imports in
[`public/assets/index.ts`](public/assets/index.ts).

Project screenshots go in [`ProjectPictures/big-images/`](public/assets/images/ProjectPictures/big-images),
skill icons in [`Skills/`](public/assets/images/Skills) — both are imported by name, so add yours to
the barrel.

---

## 3. Content — [`content/`](content)

| File                                                                                                 | Holds                      |
| ---------------------------------------------------------------------------------------------------- | -------------------------- |
| [`experience.ts`](content/experience.ts)                                                             | work history               |
| [`projects.ts`](content/projects.ts)                                                                 | capstone and mini projects |
| [`skills.ts`](content/skills.ts)                                                                     | skill icon groups          |
| [`banner.ts`](content/banner.ts), [`about.ts`](content/about.ts), [`contact.ts`](content/contact.ts) | section copy               |

Each file is a plain array your editor autocompletes:

```ts
export const experience = [
  {
    key: "acme", // unique — also the tab id
    label: "Acme Corp",
    sub: "Senior Engineer",
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

Two things that aren't obvious:

**Prose is written in segments**, so styling stays out of your writing:

```ts
paragraphs: [
  [
    { text: "I have " },
    { text: "7+ years", highlight: true },     // accent green
    { text: " of experience building things." },
  ],
],
```

Segments are joined exactly as written — mind the spaces.

**Images are imports, not path strings.** A string won't typecheck:

```ts
import shot from "@/public/assets/images/ProjectPictures/big-images/MyProject_big.png";

image: { src: shot, alt: "My project", width: 500, height: 300 },
```

---

## 4. Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). No environment variables,
no build config.

Before it gets that far, a few things run on your behalf:

| When            | What                                                             |
| --------------- | ---------------------------------------------------------------- |
| on commit       | Prettier and ESLint, on staged files only                        |
| on push         | typecheck, content validation, the test suite                    |
| on pull request | [CI](.github/workflows/ci.yml) — typecheck → lint → test → build |

The [test suites](src/tests) are deliberately few and load-bearing. They check that every content entry
parses, that links are real URLs and entry keys are unique, that the error messages name the section
and field, that your theme colour matches the CSS token, and that **every item in your content
actually renders** — so deleting a project and forgetting to remove its card fails the suite.

Run them yourself with `npm run test`, or `npm run check` for the whole gate
(typecheck → lint → test → build). `npx lefthook uninstall` turns the git hooks off.

---

Bad content fails the build, naming the section, entry and field:

```
Invalid content in "projects (capstone)":
  - projects (capstone) entry "My Project" has an invalid "gitLink": Invalid URL
```
