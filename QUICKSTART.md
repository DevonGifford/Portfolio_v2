# Quickstart

This portfolio is designed to be easy to make your own. Most of the content, images, links, and metadata live in `content/` and `public/`, so you can personalise almost everything without needing to touch the underlying React components.
The guide below will take you from forking the repository to running it locally, replacing the default content and assets, and deploying your own version.

> [!NOTE]
> **Before you start:** Make sure you have **Node.js 24**, **npm**, and **Git** installed locally. <br/>
> _The expected Node version is defined in both [`mise.toml`](mise.toml) and `package.json`, so the project should make it fairly obvious if you're running an incompatible version. Once those are in place, you're ready to create your copy and start customising._
> <br/>

<br/>

## 1. Create your copy

Use GitHub’s **Fork** button to create your own copy, then clone your fork locally:

```bash
git clone https://github.com/DevonGifford/Portfolio_v2.git
cd Portfolio_v2
```

Install the dependencies and start the development server: [http://localhost:3000](http://localhost:3000)

```bash
npm install
npm run dev
```

If you want to keep your fork up to date with the original repository, add it as a second remote:

```bash
git remote add upstream https://github.com/DevonGifford/Portfolio_v2.git
git fetch upstream
git merge upstream/main
```

<br/>
<br/>

## 2. Personalise the site configuration

Start with [`content/site.config.ts`](content/site.config.ts). This is the central place for your identity, links, SEO metadata, navigation labels, and footer text. <br/>
Common fields to update:

| Field        | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| `name`       | Your display name                                          |
| `role`       | Your professional title                                    |
| `taglines`   | Rotating hero text                                         |
| `email`      | Contact email address                                      |
| `social`     | Links shown in the navigation and footer                   |
| `resumePath` | Public path to your CV                                     |
| `seo`        | Page title, description, canonical URL, and social preview |
| `nav`        | Section names and order in the navigation                  |
| `labels`     | Headings and button text used across the site              |

> Every key in `social` needs a matching icon entry in [`SocialMediaLinks.tsx`](src/components/common/SocialMediaLinks.tsx). <br/>
> TypeScript will identify a missing or unsupported key when you run `npm run typecheck`.

<br/>
<br/>

## 3. Update your content

The content modules are deliberately separated from the UI:

| File                                             | Update this when you want to change…           |
| ------------------------------------------------ | ---------------------------------------------- |
| [`content/banner.ts`](content/banner.ts)         | Hero copy and calls to action                  |
| [`content/about.ts`](content/about.ts)           | About section paragraphs and portrait alt text |
| [`content/experience.ts`](content/experience.ts) | Work history and achievements                  |
| [`content/projects.ts`](content/projects.ts)     | Featured capstones and smaller projects        |
| [`content/skills.ts`](content/skills.ts)         | Tool groups and technology icons               |
| [`content/contact.ts`](content/contact.ts)       | Contact section copy                           |

> Each module uses TypeScript’s `satisfies` syntax and is validated again at runtime with Zod. Invalid URLs, empty fields, duplicate entry keys, and missing required properties produce an actionable error instead of silently breaking the page.

---

<details>
  <summary>
    <strong>
      Text with emphasis
    </strong>
  </summary>
Section prose is written as text segments. This keeps styling out of the copy while allowing selected
words to use the portfolio’s accent colour or italic treatment:

```ts
paragraphs: [
  [
    { text: "I have " },
    { text: "8+ years", highlight: true },
    { text: " of experience building web applications." },
  ],
],
```

Segments are joined exactly as written, so include spaces at the start or end of a segment when
needed.

</details>

---

<details>
  <summary>
    <strong>
      Featured projects
    </strong>
  </summary>
Add or edit capstone projects in `capstoneProjects` and smaller projects in `miniProjects` inside
[`content/projects.ts`](content/projects.ts).

Featured projects require:

- a unique `title`
- a `description`
- a static image import
- a GitHub URL and live URL
- at least one technology in `techStackList`

Use `layout: "reversed"` to place the image on the opposite side of the text on desktop. The mobile
layout adapts automatically.

For static images, import the file rather than passing a string path to the desktop image:

```ts
import projectImage from "@/public/assets/images/ProjectPictures/big-images/MyProject_big.webp";

image: {
  src: projectImage,
  alt: "My project screenshot",
  width: 500,
  height: 300,
},
```

The `imageUrl` field is used by the mobile card background and should be the corresponding public
path, for example:

```ts
imageUrl: "/assets/images/ProjectPictures/small-images/myproject_small.webp",
```

</details>

---

<br/>
<br/>

## 4. Replace images and static files

The main static assets live under [`public/`](public). These files are deliberately named for what
they _are_ rather than whose they are, so in most cases you can **overwrite the file and keep the
name** — no code change needed.

| Asset          | File                                                                                                               | To use your own                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Logo           | [`public/assets/images/logo.png`](public/assets/images/logo.png)                                                   | Replace the file, keep the name                  |
| Profile photo  | [`public/assets/images/profile-picture.jpeg`](public/assets/images/profile-picture.jpeg)                           | Replace the file, keep the name                  |
| Social preview | [`public/assets/social-preview.png`](public/assets/social-preview.png)                                             | Replace the file, keep the name                  |
| Favicon        | [`public/favicon.ico`](public/favicon.ico)                                                                         | Replace the file, keep the name                  |
| CV             | [`public/assets/DevonGifford-FullstackDeveloper-2026.pdf`](public/assets/DevonGifford-FullstackDeveloper-2026.pdf) | **Rename to your own**, then update `resumePath` |

> [!NOTE]
> **Why the CV is the exception.** Its filename is the one a visitor ends up with in their Downloads
> folder, so it should carry your name, not a generic one. That is also why it is referenced as a
> plain string in [`content/site.config.ts`](content/site.config.ts) rather than imported: drop your
> PDF into `public/assets/`, point `resumePath` at it, and you are done — a one-line config edit, not
> a code change.

> The file **extension** is still load-bearing, and where you update it depends on the asset: <br/>
> • **Logo and profile photo** are static imports — a `.png` profile photo means updating its import
> line in [`public/assets/index.ts`](public/assets/index.ts). <br/>
> • **Social preview and favicon** are plain paths — a `social-preview.jpg` means updating
> `seo.ogImage` in [`content/site.config.ts`](content/site.config.ts).
>
> _Either way `npm run test` will tell you: the content suite checks that every one of these paths
> resolves to a file that actually exists._

> Project screenshots belong in [`public/assets/images/ProjectPictures/`](public/assets/images/ProjectPictures/). <br/>
> Skill icons belong in [`public/assets/images/Skills/`](public/assets/images/Skills/).
>
> _Skill icons and the profile/logo assets must also be exported from [`public/assets/index.ts`](public/assets/index.ts) before they can be imported into content or components._

<br/>
<br/>

## 5. Deploy to Vercel

1. Push your fork to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected Next.js settings.
4. Deploy.

> This project does not require environment variables for the default portfolio build.
> Vercel will run the production build automatically on future pushes.
