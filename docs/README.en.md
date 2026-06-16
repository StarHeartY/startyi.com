<div align="center">
  <h1>🚀 Yi Rui's Personal Portfolio</h1>
  <p>Personal business card & project showcase</p>
</div>

<p align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/中文简体-Readme-red" alt="中文简体"></a>
  <a href="#"><img src="https://img.shields.io/badge/English-Readme-blue" alt="English"></a>
</p>

## 💡 About The Project

This repository is the front-end source code for [startyi.com](https://startyi.com). Moving away from traditional bloated site builders, it has been rebuilt with a modern React/Next.js tech stack, removing the redundant blog module to focus on delivering a pure, minimalist, and tech-inspired digital business card.

Built with **Next.js**, **[shadcn/ui](https://ui.shadcn.com/)**, and **[Magic UI](https://magicui.design/)**. Deployed on **Cloudflare Pages**.

## ✨ Features

- **Separation of Data & View**: All personal information, education background, and projects (such as CalculatorX) are driven by a unified, standalone configuration file.
- **Modern Geek Tech Stack**: Built on Next.js 14, React, and TypeScript.
- **Stunning Visual Experience**: Combining TailwindCSS and Framer Motion to deliver advanced animations such as glowing grids and smooth transitions.
- **Optimized for Widescreen Layouts**: Rebuilt the base maximum width constraints and component scaling ratios for an improved desktop browsing experience.
- **Global Edge Acceleration**: Zero-config deployment on Cloudflare Pages, enjoying lightning-fast CDN distribution.

## 🛠️ Getting Started Locally

If you'd like to run or preview this project locally:

1. Clone the repository to your local environment:

   ```bash
   git clone https://github.com/StarHeartY/startyi.com.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo-name
   ```
3. Install dependencies (pnpm is recommended):

   ```bash
   pnpm install
   ```
4. Start the local development server:

   ```bash
   pnpm run dev
   ```
5. Open your browser and visit http://localhost:3000 to preview. You can update your personal information in real time by editing the `src/data/resume.tsx` file.

## 📄 Acknowledgments & License

- The base template was designed by [Dillion Verma](https://github.com/dillionverma/portfolio).
- UI components are powered by [Magic UI](https://magicui.design/) and [Aceternity UI](https://ui.aceternity.com/).

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
