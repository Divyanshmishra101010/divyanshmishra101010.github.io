# Divyansh Mishra — Distributed Systems & AI Observatory

An award-winning, executive-grade **Live Distributed Systems & AI Observatory** portfolio for **Divyansh Mishra**, Python Backend Engineer & AI/LLM Systems Engineer at **Hexaview Technologies**.

Built with an Executive Minimalist Light aesthetic (Stripe, Linear & Vercel inspired), featuring live architectural simulators, interactive pipeline animations, Raycast-style keyboard command palette, and an in-page high-resolution resume viewer with universal webpage force-download.

---

## ⚡ Key Highlights & Observatory Architecture

### 1. 🎛️ Dual-Mode Switcher (Navbar)
- **Executive View**: Fast 30-second recruiter skim with high-impact production metrics, Bento Grid summary, and instant 1-click in-page resume viewer.
- **Architect View**: Deep technical dive into live interactive distributed systems diagrams, telemetry graphs, and live trade execution simulations.

### 2. ⚡ Interactive SMA Rebalancing Benchmark Simulator
- Simulates Divyansh's production multi-tenant rebalancer from Hexaview Technologies.
- **Live Pipeline Flow**: `Client Accounts (1,240)` &rarr; `Target Model Matrix` &rarr; `FastAPI & Async Worker` &rarr; `Validated Trade Proposals`.
- **Live Telemetry Counter**: Proves latency reduction from **2+ Hours (Previous Manual Spreadsheet Process) down to <2 Seconds (Automated Flow, >99.9% latency cut)** with **0% allocation mismatch errors**.
- **Dynamic Trade Stream**: Real-time generation of atomic buy/sell orders in the terminal log drawer.

### 3. 🤖 Agentic RAG Financial Pipeline Interactive Map
- Step-by-step visual node graph of the multimodal document intelligence platform:
  1. **Brokerage Statement Ingestion**: Multimodal OCR via Llama APIs (99.4% extraction accuracy).
  2. **ChromaDB Vector Store**: High-dimensional embeddings with Maximal Marginal Relevance (MMR, k=6, fetch_k=20).
  3. **Live Financial Tools**: Automated tool-calling with Yahoo Finance & Financial Modeling Prep (FMP) APIs (Redis caching slashes query latency by 60%).
  4. **Streaming LLM Output**: Token-streamed synthesis with source verification citations.
- Interactive telemetry inspection console for each node.

### 4. ⌘ Command Palette (`Cmd + K` / `Ctrl + K`)
- Raycast & Linear style keyboard action center.
- Instant search and keyboard navigation (`↑`, `↓`, `↵`, `ESC`) for:
  - Downloading Official Resume PDF
  - Launching live rebalancer simulator
  - Tracing Agentic RAG pipeline flow
  - Toggling Executive vs Architect modes
  - Copying direct email address
  - Opening LeetCode and GitHub profiles

### 5. 📄 In-Page Resume Viewer & Universal Force-Download
- Embedded high-res document viewer with responsive iframe & object wrappers.
- **Blob-based Webpage Force-Download**: Uses client-side Blob object URLs (`fetch -> blob -> URL.createObjectURL -> link.click()`), ensuring standard Save-File dialogs trigger reliably across GitHub Pages, Netlify, Vercel, or custom CDN domains.
- Fullscreen modal inspection mode with 1-click download actions.

### 6. 🍱 Executive Bento Grid & Verified Credentials
- **Hexaview Technologies (2024–Present)**: >99.9% Rebalance Latency Cut, 60% Doc Analysis Latency Cut, 1000+ SSO Enterprise Users.
- **LeetCode Competitive Standing**: 700+ Problems Solved, 1800+ Contest Rating (Top 7% Globally).
- **Galgotias University (2020–2024)**: B.Tech in CSE with **8.7 / 10 CGPA**.
- **Coursify-AI**: Autonomous multimodal course generator (FastAPI, Google Gemini, OpenAI).

---

## 🚀 Instant Deployment (GitHub Pages)

### Host at `https://divyanshmishra101010.github.io`

```bash
git add .
git commit -m "feat: transform portfolio into live distributed systems and AI observatory"
git push origin main
```

In GitHub Repository Settings:
- Go to **Settings** &rarr; **Pages**
- Source: **Deploy from a branch** (`main` / `/(root)`)
- Click **Save**

Site is immediately live at: **`https://divyanshmishra101010.github.io`**

---

## 📂 File Architecture

```
portfolio/
├── Divyansh_Mishra_Resume.pdf    # Official resume PDF (downloadable)
├── index.html                   # Observatory HTML5 structure & semantic elements
├── styles.css                   # Executive Minimalist Light theme & responsive multi-device styles
├── main.js                      # Simulators, command palette, mode switcher & blob downloader
└── README.md                    # Architecture & deployment documentation
```
