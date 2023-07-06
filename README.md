<!-- :ogo -->
<p align='center'>
    <img src="public/assets/PortfolioDemoLogo.png" alt="Demo" title="DemoImage" width="150" height="150">
</p>

<!-- Introduction Text -->
<div align="center">
    <h1>👋 Welcome to my Portfolio's GitHub Repo 👋 </h1>
    <h3> www.devongifford.com 🎯 - vesion 3.0 </h3>
    <h5>
        This is the second iteration of <a href="">devongifford.com🎯</a>
        <h6>
            built with <a href="https://nextjs.org">Next.js</a> &
            hosted by <a href="https://vercel.com/">Vercel</a> <br>
            other technologies used in this project include:
        </h6>
    </h5>
</div>

<!-- Tech Used in this Project -->
<p align='center'>
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=ts,tailwind,nextjs,vercel,github,vscode" />
    </a>
</p>
<hr>

<!-- Demo Image -->
<p align='center'>
    <img src="public/assets/PortfolioDemoDevon.png" alt="Demo" title="DemoImage" width="650" height="650">
</p>


<h1 align='center'> Welcome & Introductory </h1>

### About & History of this project 🤓
---------------------------------------------------

Once upon a time, I embarked on a journey into the world of web development. 
Inspired by a captivating portfolio website, I was initially demoralized by the advanced technologies used, such as Framer-Motion-Animations, Gatsby.js, TypeScript, and Tailwind CSS. 
<br/>
<br/>
However, I saw this as an opportunity for growth and dedicated myself to learning. Over six months, I tirelessly studied and practiced, acquiring the skills to build the once seemingly unattainable portfolio project from scratch
<br/>
<br/>
Not only did I replicate the design, but I also added my own innovative ideas and enhancements. This experience taught me the importance of tenacity, adaptability, and continuous learning in web development.
<br/>
I hope my journey inspires other developers and showcases my ability to overcome challenges and strive for excellence. My story reflects resilience, adaptability, and a commitment to personal and professional development, making me a valuable asset to any team or organization.

### Credit where credit is due: <em>Brittany Chiang</em> 🙏
---------------------------------------------------

As mentioned in the about section, while I built this website from scratch myself, I heavily used Brittany Chiang's website as inspiration and therefore all credit goes to her.

Website - https://brittanychiang.com/ <br>
GitHub - https://github.com/bchiang7/v4
<br><br>

<h1 align='center'>"To-Do-List" & "The-Done-List"</h1>

### Version 3.0 - now complete ... ✅
---------------------------------------------------

<!-- VERSION 4.1 -->
<details>
<summary>
<h3> List of issues/features I have fixed/added this patch: </h3>
</summary>
<ul>

<li><h6> Making the main projects section's code more DRY </h6>
<li><h6> Updating information and links </h6>
<li><h6> Fixing some typescript erros and warnings </h6>
<li><h6> Adding some images of the projects created with photoshop (GIMP) </h6>
<li><h6> Fixing some minor styling bugs </h6>
<li><h6> MAde the website entirely responsive and mobile friendly </h6>

</ul>

</details> 
<!-- CLOSING DIV -->

<!-- VERSION 3.0 -->
<details>
<summary>
<h3> Future version ideas... </h3>
</summary>
<li><h6> Adding an initial load animation </h6>
<li><h6> Adding more projects to the list </h6>

</details> 
<!-- CLOSING DIV -->








<br><br>

### Previouse Versions and Fixes 👴
---------------------------------------------------

<!-- VERSION 2.1 -->
<details>
<summary>
<h3> Version 2.1 </h3>
</summary>
A list of all the issues I have fixed and features I have added.

<!-- NAVBAR SECTION -->
<details>
<summary><h6> NavBar Section </h6></summary>
<li> Create interactive logo and fixing the broken link
<pre><code>
Initially I wanted this to be an interactive logo that would have some kind of a hover effect.
However, I decided against it and rather put in a simple tailwind animation.
Eventually I want this to reload the page.
</code></pre>
<li> Clean up the mobile version of the navbar - centering and styling
<pre><code>
This was a small fix, as there was simple implementation of some styling fixes 
I also decided to include links to my different social media pages. 
</code></pre>
</details> 

<!-- HOME/BANNER SECTION -->
<details>
<summary><h6> Banner Page section </h6></summary>
<li> Increase the size and responsivness of the heading text's 
<pre><code>
This was a small fix, as there was simple implementation of some styling fixes.
As well as some media queries.
</code></pre>
<li> Update button link & styling
<pre><code>
Solution🎯
</code></pre>
</details> 

<!-- ABOUT SECTION -->
<details>
<summary><h6> About Section </h6></summary>
<li> Complete overhaul of the layout of this section - ersponsivness issues
<pre><code>
Initially I was using flex box to handle this, 
however this was causing responsivness issues in the image section.
I decided to implement a grid style for this section on larger screens
then add a media querey to turn it back into flex style for mobile devices 
and to float the image in the text portion for mobile device viewing.
</code></pre>
<li> Update the styling of favourite technologies heading
<pre><code>
This was a small fix, as there was simple implementation of some styling updates
</code></pre>
</details>

<!-- EXPERIENCES SECTION -->
<details>
<summary><h6> Experiences section </h6></summary>
<li> Creating a mobile view section section - with a hidden horizontal screen 
<pre><code>
This was decevingly less easy to implement as I would have to create a parent div for the sidebar.
This was necessary to handle the overflow-x
Additionally I wanted to hide the scroll bar and had to implement @layers in the global.css
</code></pre>
<li> Decrease the gap between 'About' & 'Experiences' section
<pre><code>
Relativley simple however had to balance this between media queries and screen sizes and padding.
</code></pre>
</details>

<!-- PROJECTS SECTION -->
<details>
<summary><h6> Projects Section </h6></summary>
<li> Make titel fo projects clickable and with a hover effect. (mobile and desktop view)
<pre><code>
Solution 🎯
</code></pre>
<li> Fix responsivness of noteworthy projects forsmall mobile devices
<pre><code>
I solved this by turning this from a gird layout to a flex-box layout and then having min and max widths.
</code></pre>
<li> Fix animation loading bug 
<pre><code>
My previouse fix was causing some issues of when having the more noteworthy projects open
would cause issues when scrolling to the bottom and scrolling back up.
I had to implement an auto-closing of more projects when scrolling past the projects section into contact.
</code></pre>
<li> Import small photos for moible view
<pre><code>
This was a challenge as I wanted to implement the pictures of the project as a background image.
So what I ended up doing was;
- I edited/photo-shopped the images to work as a background images.
- Implementing a tailwind style for the different background images.
- Then using mediaqueries I could swap between the two different styles.
Eventually I want to clean this code up and keep it DRY
</code></pre>
</details>

<!-- Contact & Footer Section -->
<details>
<summary><h6> Contact & Footer Section </h6></summary>
<li> Fix footer bug not showing up in medium screen sizes
<pre><code>
This was simple fix of amending how the media queries were being implemented.
</code></pre>
<li> Adding credit to Brittany Chiangs website on all resolutions
<pre><code>
I added links to Brittany's website in the footer
I also made it so this section will alwasy be shown no matter the screen size
</code></pre>
<li> Increase size of headings and responsivness of text
<pre><code>
This was simple styling and media-queries implementation
</code></pre>
</details>

</details> 
<!-- CLOSING -->

<!-- ----------------------------------------------------------------------------------- -->

<!-- VERSION 2.0 -->
<details>
<summary>
<h3> Version 2.0 </h3>
</summary>

<!-- NAVBAR SECTION -->
<details>
<summary><h6> NavBar Section </h6></summary>
<li> Create a Logo for my portfolio and include it in the Navbar Section
<pre><code>
Created my logo with online logo maker
</code></pre>
<li> Create a mobile view for the Navbar section with media queries 
<pre><code>
This was a little challenging at first as I had to rework my initial simple navbar.
I needed it to be able to incorporate all the other links that would be lost in the smaller mobile screen 
- such as my email and images with links to github, twitter, linkedin etc.
Further I wanted the mobile view to have animated-loading with framer-motion 
</code></pre>
<li> Adding a button with a link to a pdf of my CV 
<pre><code>
Simple enough to incorporate as just had to include my pdf in the assets folder, 
then wrap it with an anchor tag to link open it to open in a new tab. 
</code></pre>
</details> 

<!-- HOME/BANNER SECTION -->
<details>
<summary><h6> Banner Page section </h6></summary>
<li> Include a auto typing heading effect with job titles 
<pre><code>
I have used this in a previouse portfolio, 
a portfolio I actually built with python and the flask framework.  
So I found an npm package that had the same capabilities and followed the documentation to implement it.  
Simple enough   
</code></pre>
<li> Include a delayed loading effect 
<pre><code>
Again I have used framer-motion in some past projects.
However because of all the different moving parts in this project, 
I had to find a way to make it simpler to understand and use. 
I did this by rather applying this to sections and divs instead of individual elements.
</code></pre>
<li> Update the links and sizing of the headings with media queries 
<pre><code>
Very simply just used media queries within tailwind.
</code></pre>
</details> 

<!-- ABOUT SECTION -->
<details>
<summary><h6> About Section </h6></summary>
<li> Create Skills-Icons with some hover effects
<pre><code>
Simply added some images to my assets folder
Imported them to the component 
Applied some tailwind styling with simple animation
Applied media queries to handle responsivness
</code></pre>
<li> Update the profile image and try replicate the design and animations of Britanny Chiang
<pre><code>
This was challenging to replicating the animation
I solved the first problem by wrapping the children div in a container div
using groups, group-styling and absolute styling, as well as z indexes
</code></pre>
<li> Making the image dynamic 
<pre><code>
The second problem I decided to keep it more simple for mobile devices
by simplifying the image and then floating it inside the text section.
</code></pre>
</details>

<!-- EXPERIENCES SECTION -->
<details>
<summary><h6> Experiences section </h6></summary>
<li> Replicate the same style as Brittany Chang
<pre><code>
When I initially tried to do this, it was getting a little convoluded.
I initially tried to keep this in one component, however soon realised this would not work.
So I had to create pages then create a sidebar that could link to the different pages 
</code></pre>
<li> Trying to implement a way to keep this code dry and easier to update
<pre><code>
I did this by seperating my work experiences into a seperate folder 
I could then call on the different files depending on the onClick 
</code></pre>
</details>

<!-- PROJECTS SECTION -->
<details>
<summary><h6> Projects Section </h6></summary>
<li> Fixing a bug with medium screen sizes causing componenets to dissapear
<pre><code>
This was a simple fix with an error in how I was using and implementing the media-queries
</code></pre>
<li> Create a special Mobile view for capston projects
<pre><code>
This was a challenge as I wanted to implement the pictures of the project as a background image.
So what I ended up doing was;
- I edited/photo-shopped the images to work as a background images.
- Implementing a tailwind style for the different background images.
- Then using mediaqueries I could swap between the two different styles.
Eventually I want to clean this code up and keep it DRY
</code></pre>
<li> Fixing a bug for styling issues in the 'other noteworthy projects'
<pre><code>
This bug was created because of the framer-motion implementation.
There was an issue of how the different cards were being called in.
</code></pre>
</details>

</details> 
<!-- CLOSING -->



<!-- ----------------------------------------------------------------------------------- -->



<!-- VERSION 1.0  -->
<details>
<summary>
   <h3> Version 1.0 <em>(initial creation)</em></h3>
</summary>
A high level overview and list of required componenets & thoughts behind creating and instantiating my portfolio:
<br>
Adding all the information (CV, about... data)
<!-- TICKET 1 -->
<details>
<summary><h6> Setting up the environment </h6></summary>
<ul>
<li>Installing Node.js: Download and install Node.js from https://nodejs.org
<li>Create a new project directory: Open a terminal and navigate to the desired location for your project. Run the command <code>mkdir project-portfo </code> to create a new directory.
<li>Initializing a new Next.js project: Inside the project directory, run <code>npx create-next-app .</code>  to initialize a new Next.js project.
<li>Install Tailwind CSS: Run <code> npm install tailwindcss </code> to install Tailwind CSS as a project dependency.
</ul>
</details>
<!-- TICKET 2 -->
<details>
<summary>
<h6> Configuring Tailwind CSS: </h6>
</summary>
<ul>
<li>Generating a Tailwind CSS configuration file: <br>Run <code> npx tailwindcss init</code> to generate the tailwind.config.js file.
<li>Customize the configuration: Open tailwind.config.js and modify the default settings.
<li>Including Tailwind CSS in my project - Open the styles/globals.css file and add the necessaites.
<li>Setting up container sizes for theme and mobile views
<li>Setting up screen sizes horizontal aspect ratio
<li>Incorporating google fonts
</ul>
</details>
<!-- Component List -->
<details>
<summary>
<h6> Creating basic layout and list of components made: </h6>
</summary>
Various components needed & created:
<ul>
<li>NavBar Section - with a mobile and clickable
<li>Splash/Banner Page 
<li>About Page - with a profile picture and list of skills
<li>Experiences Page - copy of CV information
<li>Capstone Project Portfolio Page
<li>Small Projects 
<li>Small Project Card components
<li>Contact Page
<li>Footer Page
<li>Creating an assets folder for images, favicon and pdf's - including index.ts for exporting images
</ul>
<pre>
<code>Implement the layout in the pages with pages/index.ts file and import the list of components.
</code>
</pre>
</details>
</details>
<!-- CLOSING -->

<br><br>


<h1 align='center'>Building, Running & Forking</h1>


### 🍴🔱 Forking this repo 🍴🔱
---------------------------------------------------

Yes, you are welcome to fork this repo. <br>
However, please give all proper credit by linking back to https://brittanychiang.com/
<br><br>
Website - https://brittanychiang.com/ <br>
GitHub - https://github.com/bchiang7/v4
<br>

<h6> You could also give me a star if you like this project 😉⭐ </h6>
<br>

### 🏃‍♂️💨 Running this project locally 🏃‍♂️💨
---------------------------------------------------

System Requirements:
<ul>
<li>Node.js 16.8 or later.
<li>macOS, Windows (including WSL), and Linux are supported.
</ul>

First, Install dependencies
```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Third, Open up <code>localhost:3000</code> to view your application. <br>
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<ul>
<li>You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
<li>[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.
<li>The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
<li>This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
</ul>
<br>
<br>

### 👷‍♂️🏗 Building and Deploying on Vercel 👷‍♂️🏗 
---------------------------------------------------

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<br>
<br>
<br>




<h2 align='center'>📃🖋 MIT LICENSE 📃🖋</h2>

<p align='center'>
Copyright 2023 - Devon Gifford
</p>
<p align='center'>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
</p>
<p align='center'>
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>