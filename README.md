# Divyansh Mishra - GenAI, Agentic AI & Python Backend Portfolio

A high-performance, dark-themed developer portfolio tailored for engineers specializing in **Generative AI, Autonomous Agent Swarms (LangGraph, AutoGen, CrewAI), Production RAG Pipelines, and Scalable Python Async Backends (FastAPI, Redis, Qdrant)**.

Designed with an obsidian glassmorphism aesthetic and interactive high-tech terminal elements. **Zero external build tools or complex frameworks required**—instantly deployable to **GitHub Pages** or **Vercel** in under 2 minutes.

---

## ⚡ Live Features

1. **Interactive Neural / Agent Graph Background**: Real-time canvas rendering connected agent nodes with mouse proximity repulsion and glowing filaments.
2. **Interactive Hero Terminal Simulator (CLI REPL)**:
   - Mac/Linux-style window with active status badges.
   - Run live commands: `help`, `whoami`, `agents --status`, `stack`, `rag --eval`, `contact`, `clear`.
   - Clickable quick-run command chips for instant execution.
3. **Agentic System Architecture Flow**: Visual breakdown of supervisor routing, specialized subagents, sandboxed execution, and guardrail evaluation.
4. **Featured Projects with Filter Tabs**:
   - Filter by *All*, *Agentic AI & Swarms*, *GenAI & RAG*, *Python Backend & APIs*.
   - Includes interactive architecture deep-dive modals explaining state machines, hybrid retrieval, and semantic caching.
5. **Technical Skill Matrix**: Categorized proficiency grid spanning Agentic Frameworks, Python Core, Vector Stores, and MLOps.
6. **Live Python Agent Blueprint**: Interactive code showcase tab with syntax highlighting for `agent_runtime.py`, `main.py (FastAPI)`, and `state_schema.py` + 1-click clipboard copy.
7. **Contact Channels & Form**: Quick email copy button with toast alert, GitHub/LinkedIn links, and direct message input.
8. **100% Mobile & Ultra-wide Responsive**: Optimized typography, mobile hamburger menu, and 60fps animations.

---

## 🚀 How to Host on GitHub Pages (Free & Instant)

You have two simple options on GitHub:

### Option A: User Portfolio Site (`your-username.github.io`) [Recommended]
If you name your repository `<your-username>.github.io`, it will be served directly at `https://<your-username>.github.io`.

1. Go to [github.com/new](https://github.com/new) and create a public repository named `<your-username>.github.io` (e.g., `divyanshmishra.github.io`).
2. Open terminal in this portfolio folder:
   ```bash
   cd "C:\Users\divyansh.mishra\.gemini\antigravity-ide\scratch\portfolio"
   git init
   git add .
   git commit -m "feat: initial commit of GenAI portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages** (under "Code and automation").
   - Under **Build and deployment**, ensure Source is set to **Deploy from a branch**.
   - Branch: `main`, folder: `/(root)`, click **Save**.
4. Within 60 seconds, your portfolio is live at `https://<your-username>.github.io`!

---

### Option B: Project Subdirectory Site (`your-username.github.io/portfolio`)
1. Create a repository named `portfolio` on GitHub.
2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings** → **Pages** → Source: `Deploy from a branch` → Select `main` / `/ (root)` → **Save**.
4. Your site will be live at `https://<your-username>.github.io/portfolio`.

---

## 🔺 Alternative: Deploy on Vercel (1-Click)

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: Leave as **Other** (Static HTML).
5. Click **Deploy**. Vercel will instantly issue a free custom `*.vercel.app` URL with automatic global CDN and SSL.

---

## 🛠️ Personalization Checklist

Open `index.html` and customize the following placeholders:
- [ ] Replace `your-username` with your actual GitHub & LinkedIn handles.
- [ ] Replace `divyansh.mishra.work@example.com` with your preferred public email address.
- [ ] In the `<article class="project-card">` sections, update project descriptions or repository links to match your specific repos.
- [ ] (Optional) In `main.js`, add custom commands to the `commandResponses` dictionary in `initHeroTerminal()`.

---

## 📂 File Structure

```
portfolio/
├── index.html        # Main semantic webpage, metadata, and sections
├── styles.css        # Obsidian dark theme, glassmorphism, terminal UI & responsive styles
├── main.js           # Particle canvas, interactive terminal, modals, and tab filters
└── README.md         # Deployment & documentation guide
```
