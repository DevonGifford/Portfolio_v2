<div>
  <h3>Quick Start Guide</h3>
  <h5>
    <em>Make this portfolio your own in 5 minutes or less.</em>
  </h5>
  <hr/>
</div>

<!-- -------------------------------------------------------------------------- -->

Hey there! 👋
So, you're interested in making this portfolio your own? You've come to the right place. <br/>
I created this repository with exactly that in mind, and put together this guide to help you get up and running with as little hassle as possible.

Most of the content, configuration, and assets have been deliberately separated from the underlying React components. Everything is organised into clearly named files within `content/` and `public/`, so you can easily personalise the site without digging through the codebase.
This guide will walk you through **forking the repository, running it locally, replacing the default content and assets, and finally deploying your own version.**

<br/>

> [!NOTE]
> **Before you start.** Make sure you have the following installed on your machine:
>
> - **[Node.js 24](https://nodejs.org/en/download)** — JavaScript runtime.
> - **[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)** — Package manager (included with Node.js).
> - **[Git](https://git-scm.com/install/)** — Version control for cloning and managing the repository.
>
> _Need a hand getting set up? [Ask ChatGPT](https://chatgpt.com/) for help installing the prerequisites on your operating system._

<br/>
<br/>
<br/>

<!-- -------------------------------------------------------------------------- -->

## 1. Create Your Copy

First things first, let's get your own copy of the project up and running.

**1. Fork the repository** <br/>
Click **[Fork this repository](https://github.com/DevonGifford/Portfolio_v2/fork)** to create your own copy under your GitHub account.

**2. Clone your fork locally** <br/>

```bash
git clone https://github.com/<your-username>/Portfolio_v2.git
```

**3. Install dependencies and start developing** <br/>

```bash
npm install
npm run dev
```

> Once it's running, open **[http://localhost:3000](http://localhost:3000)** in your browser. You should now see your own local version of the portfolio!

<br/>
<br/>
<br/>

<!-- -------------------------------------------------------------------------- -->

## 2. Personalise the site configuration

Now that your portfolio is running locally, it's time to make it yours! Starting with [`content/site.config.ts`](content/site.config.ts). <br/> This file brings together important site-wide settings in one place. Rather than updating the same details across multiple pages and components, you can manage them all from this single file. Anywhere that information is reused, the site pulls it from here, so you only need to update it once.

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

<br/>
<br/>
<br/>

<!-- -------------------------------------------------------------------------- -->

## 3. Update your content

All your portfolio content is kept separate from the UI, making it easy to update without touching the React components. Each content file uses TypeScript's satisfies syntax for type checking and Zod for additional validation, helping catch missing fields, invalid URLs, and other mistakes before they break your site.

| File                                             | Update this when you want to change…           |
| ------------------------------------------------ | ---------------------------------------------- |
| [`content/banner.ts`](content/banner.ts)         | Hero copy and calls to action                  |
| [`content/about.ts`](content/about.ts)           | About section paragraphs and portrait alt text |
| [`content/experience.ts`](content/experience.ts) | Work history and achievements                  |
| [`content/projects.ts`](content/projects.ts)     | Featured capstones and smaller projects        |
| [`content/skills.ts`](content/skills.ts)         | Tool groups and technology icons               |
| [`content/contact.ts`](content/contact.ts)       | Contact section copy                           |

---

<details>
<summary><strong>Poor Man's Rich Text</strong></summary>
<br/>
You'll notice throughout the project that some text is broken into smaller segments. Rather than introducing a full rich text system just to highlight a few words here and there, I've kept things simple.

Each segment contains its own text, and you can optionally add `highlight: true` to give it the portfolio's accent colour.

```ts
paragraphs: [
  [
    { text: "I have " },
    { text: "8+ years", highlight: true },
    { text: " of experience building web applications." },
  ],
],
```

The segments are joined exactly as written, so remember to include spaces where needed. You can also use `italic: true` for italic styling.

</details>

---

<details>
<summary><strong>Featured Projects</strong></summary>
<br/>
Just a few things worth knowing when adding your own projects. <br/>
You can manage your larger featured projects through `capstoneProjects` and smaller ones through `miniProjects`, both found in [`content/projects.ts`](content/projects.ts).

Each featured project requires:

- A unique `title` and a `description`
- A static image import
- A GitHub URL and live URL
- At least one technology in `techStackList`

You can also use `layout: "reversed"` to display the image on the opposite side of the text on desktop. The mobile layout takes care of itself.

#### A quick note on project images

Desktop and mobile use slightly different image references, so make sure to provide both.

**Desktop:** Import the image file directly.

```ts
import projectImage from "@/public/assets/images/ProjectPictures/big-images/MyProject_big.webp";

image: {
  src: projectImage,
  alt: "My project screenshot",
  width: 500,
  height: 300,
},
```

**Mobile:** Use the corresponding public path in `imageUrl`.

```ts
imageUrl: "/assets/images/ProjectPictures/small-images/myproject_small.webp",
```

</details>

---

<br/>
<br/>
<br/>

<!-- -------------------------------------------------------------------------- -->

## 4. Replace images and static files

Next, let's replace the default images and files with your own. <br/> The main static assets live under [`public/`](public). These files are deliberately named for what
they _are_ rather than whose they are, so in most cases you can **overwrite the file and keep the
name** — no code change needed.

| Asset          | File                                                                                                               | To use your own                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Logo           | [`public/assets/images/logo.png`](public/assets/images/logo.png)                                                   | Replace the file, keep the name                  |
| Profile photo  | [`public/assets/images/profile-picture.jpeg`](public/assets/images/profile-picture.jpeg)                           | Replace the file, keep the name                  |
| Social preview | [`public/assets/social-preview.png`](public/assets/social-preview.png)                                             | Replace the file, keep the name                  |
| Favicon        | [`public/favicon.ico`](public/favicon.ico)                                                                         | Replace the file, keep the name                  |
| CV             | [`public/assets/DevonGifford-FullstackDeveloper-2026.pdf`](public/assets/DevonGifford-FullstackDeveloper-2026.pdf) | **Rename to your own**, then update `resumePath` |

---

<details>
<summary><strong>CV Naming Convention</strong></summary>
<br/>
Your CV is the exception. Unlike the other assets, its filename should be exactly how you'd like it to appear when someone downloads it.

I've deliberately avoided using a generic filename with a separate download name, as that's one more thing to remember when personalising the portfolio.

**To replace your CV:**

1. Rename the existing PDF to your preferred filename.
2. Update `resumePath` in [`content/site.config.ts`](content/site.config.ts) to match.

This also means an incorrect filename can be caught by the tests, rather than someone accidentally downloading a CV with my name on it!

</details>

---

<details>
<summary><strong>File Extensions & Testing</strong></summary>
<br/>
A couple of things worth keeping in mind when replacing your assets.

**Changing file extensions?** If you replace a `.png` with a `.jpg`, for example, you'll also need to update its reference.

- **Logo and profile photo:** Update the corresponding import in [`public/assets/index.ts`](public/assets/index.ts).
- **Social preview:** Update `seo.ogImage` in [`content/site.config.ts`](content/site.config.ts).
- **Favicon:** Make sure its configured path matches the new filename.

**Want to check everything works?** Run the test suite afterwards:

```bash
npm run test
```

The content tests will help catch missing files and incorrect asset references before you deploy.

</details>

---

<br/>
<br/>
<br/>

<!-- -------------------------------------------------------------------------- -->

## 5. Deploy to Vercel

Once you're happy with your portfolio, it's time to get it online! <br/> The easiest way to deploy is through [Vercel](https://vercel.com), which works out of the box with Next.js. You won't need any special configuration to get started.

1. Push your changes to your GitHub repository.
2. Head over to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Keep the default Next.js settings and click **Deploy**.

That's it! Once the build finishes, Vercel will give you a live URL you can share. Any future changes you push to your main branch will automatically trigger a new deployment.

<br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br/>
