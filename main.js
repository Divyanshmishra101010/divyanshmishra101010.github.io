/**
 * DIVYANSH MISHRA | PORTFOLIO CORE ENGINE
 * Real resume data integrated — Hexaview Technologies, RAG, FastAPI
 */

document.addEventListener('DOMContentLoaded', () => {
  initNeuralCanvas();
  initHeroTerminal();
  initProjectFilters();
  initCodeShowcase();
  initContactAndToasts();
  initNavbarScroll();
  initCurrentYear();
  initExperienceStyles();
});

/* ===================================================================
   1. NEURAL NETWORK CANVAS
   =================================================================== */
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 75;
  const connectionDistance = 140;
  let mouse = { x: null, y: null, maxDist: 180 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.color = Math.random() > 0.4 ? 'rgba(0, 242, 254, ' : 'rgba(168, 85, 247, ';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + '0.7)';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color.includes('242') ? '#00f2fe' : '#a855f7';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.maxDist) {
          const mAlpha = (1 - mdist / mouse.maxDist) * 0.45;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ===================================================================
   2. INTERACTIVE HERO TERMINAL SIMULATOR
   Real data from Divyansh's resume
   =================================================================== */
function initHeroTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalHistory = document.getElementById('terminal-history');
  const terminalBody = document.getElementById('hero-terminal-body');
  const commandChips = document.querySelectorAll('.cmd-chip');

  if (!terminalInput || !terminalHistory) return;

  const commandResponses = {
    help: `
<div class="terminal-output-line"><span class="t-cyan">Available Commands:</span></div>
<div class="terminal-output-line">  <span class="t-yellow">whoami</span>        - Identity, current role & background</div>
<div class="terminal-output-line">  <span class="t-yellow">experience</span>    - Professional experience at Hexaview Technologies</div>
<div class="terminal-output-line">  <span class="t-yellow">stack</span>         - Full technical skill set and tools</div>
<div class="terminal-output-line">  <span class="t-yellow">projects</span>      - Key projects built and deployed</div>
<div class="terminal-output-line">  <span class="t-yellow">leetcode</span>      - Competitive programming stats</div>
<div class="terminal-output-line">  <span class="t-yellow">education</span>     - Academic background</div>
<div class="terminal-output-line">  <span class="t-yellow">contact</span>       - Email, GitHub, LinkedIn</div>
<div class="terminal-output-line">  <span class="t-yellow">clear</span>         - Clear terminal output</div>
`,
    whoami: `
<div class="terminal-output-line"><span class="t-cyan">[IDENTITY]</span>: Divyansh Mishra</div>
<div class="terminal-output-line"><span class="t-purple">[ROLE]</span>: Python Backend Engineer / AI Engineer @ Hexaview Technologies, Noida</div>
<div class="terminal-output-line"><span class="t-green">[SUMMARY]</span>: 2+ years building scalable backends and AI-powered applications.</div>
<div class="terminal-output-line"><span class="t-comment">Core: Python, FastAPI, Flask, PostgreSQL, Redis, AWS, LangChain, LangGraph, OpenAI.</span></div>
<div class="terminal-output-line"><span class="t-comment">Focus: High-performance REST APIs, RAG pipelines, multi-tenant architectures, Agentic AI.</span></div>
`,
    experience: `
<div class="terminal-output-line"><span class="t-cyan">[HEXAVIEW TECHNOLOGIES]</span> Python Backend Engineer / AI Engineer (2024 - Present)</div>
<div class="terminal-output-line"></div>
<div class="terminal-output-line">  <span class="t-yellow">Project 1:</span> Financial Document Intelligence & Agentic AI Platform</div>
<div class="terminal-output-line">    <span class="t-green">&#10003;</span> Agentic RAG chatbot with LangChain + OpenAI for brokerage PDF analysis</div>
<div class="terminal-output-line">    <span class="t-green">&#10003;</span> 60% reduction in report-generation latency via Redis + async tasks</div>
<div class="terminal-output-line"></div>
<div class="terminal-output-line">  <span class="t-yellow">Project 2:</span> SMA Portfolio Rebalancing Platform</div>
<div class="terminal-output-line">    <span class="t-green">&#10003;</span> Rebalancing time: 2+ hours -> 2 seconds (>99.9% reduction)</div>
<div class="terminal-output-line">    <span class="t-green">&#10003;</span> 100% elimination of allocation errors in trade generation</div>
<div class="terminal-output-line"></div>
<div class="terminal-output-line">  <span class="t-yellow">Project 3:</span> Multi-Tenant SSO & Authentication Platform</div>
<div class="terminal-output-line">    <span class="t-green">&#10003;</span> JWT (RSA) + RBAC serving 3 apps / 1000+ users</div>
`,
    stack: `
<div class="terminal-output-line"><span class="t-cyan">[TECH STACK]</span></div>
<div class="terminal-output-line">  <span class="t-purple">Languages</span>  : Python, SQL</div>
<div class="terminal-output-line">  <span class="t-cyan">AI / LLM</span>   : LangChain, LangGraph, LangSmith, RAG, AI Agents, OpenAI, Gemini, Prompt Eng.</div>
<div class="terminal-output-line">  <span class="t-green">Backend</span>    : FastAPI, Flask, REST APIs, Async Programming, Microservices, JWT, Background Tasks</div>
<div class="terminal-output-line">  <span class="t-yellow">Databases</span>  : PostgreSQL, Redis, ChromaDB | SQLAlchemy, Alembic</div>
<div class="terminal-output-line">  <span class="t-red">Cloud/Ops</span>  : AWS (Lambda, S3, EC2, RDS, CloudWatch, IAM, SQS, SNS), Docker, Git</div>
`,
    projects: `
<div class="terminal-output-line"><span class="t-cyan">[PROJECTS]</span></div>
<div class="terminal-output-line">  <span class="t-green">1.</span> Coursify-AI       — AI course generator (FastAPI + Gemini + OpenAI) | Live Demo</div>
<div class="terminal-output-line">  <span class="t-green">2.</span> Agentic RAG Bot    — Financial chatbot with LangChain + ChromaDB + custom tools</div>
<div class="terminal-output-line">  <span class="t-green">3.</span> Portfolio Rebalancer — Multi-tenant FastAPI + PostgreSQL + async trade engine</div>
<div class="terminal-output-line">  <span class="t-green">4.</span> SSO Platform       — JWT (RSA) + RBAC + subdomain mapping for 1000+ users</div>
<div class="terminal-output-line"><span class="t-comment">Scroll down to the Projects section for full details.</span></div>
`,
    leetcode: `
<div class="terminal-output-line"><span class="t-cyan">[COMPETITIVE PROGRAMMING]</span></div>
<div class="terminal-output-line">  Platform      : <span class="t-green">LeetCode</span></div>
<div class="terminal-output-line">  Problems Solved: <span class="t-yellow">700+</span></div>
<div class="terminal-output-line">  Contest Rating : <span class="t-yellow">1800+</span></div>
<div class="terminal-output-line">  Focus Areas   : Dynamic Programming, Graphs, Trees, Sliding Window, Binary Search</div>
`,
    education: `
<div class="terminal-output-line"><span class="t-cyan">[EDUCATION]</span></div>
<div class="terminal-output-line">  Degree  : Bachelor of Technology in Computer Science</div>
<div class="terminal-output-line">  College : <span class="t-green">Galgotias University</span></div>
<div class="terminal-output-line">  Years   : 2020 - 2024</div>
<div class="terminal-output-line">  CGPA    : <span class="t-yellow">8.7 / 10</span></div>
`,
    contact: `
<div class="terminal-output-line"><span class="t-cyan">[CONTACT]</span></div>
<div class="terminal-output-line">  Email   : <span class="t-green">divyanshmishra101010@gmail.com</span></div>
<div class="terminal-output-line">  Phone   : <span class="t-green">+91-7992010347</span></div>
<div class="terminal-output-line">  GitHub  : <span class="t-purple">github.com/Divyanshmishra101010</span></div>
<div class="terminal-output-line">  LinkedIn: <span class="t-yellow">linkedin.com/in/divyansh-mishra</span></div>
`
  };

  function executeCommand(cmdStr) {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;
    const lowerCmd = rawCmd.toLowerCase();

    const userLine = document.createElement('div');
    userLine.className = 'terminal-output-line';
    userLine.innerHTML = `<span class="terminal-prompt">divyansh@hexaview:~$</span> <span class="t-cyan">${escapeHtml(rawCmd)}</span>`;
    terminalHistory.appendChild(userLine);

    if (lowerCmd === 'clear') {
      terminalHistory.innerHTML = '';
      terminalBody.scrollTop = 0;
      return;
    }

    let responseHtml = commandResponses[lowerCmd];
    if (!responseHtml) {
      responseHtml = `<div class="terminal-output-line"><span class="t-red">zsh: command not found: ${escapeHtml(rawCmd)}</span>. Type <span class="t-yellow">'help'</span> for available commands.</div>`;
    }

    const respContainer = document.createElement('div');
    respContainer.innerHTML = responseHtml;
    terminalHistory.appendChild(respContainer);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    }
  });

  commandChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      executeCommand(cmd);
      terminalInput.focus();
    });
  });
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/* ===================================================================
   3. PROJECT FILTER SYSTEM
   =================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => { card.style.display = 'none'; }, 250);
        }
      });
    });
  });
}

/* ===================================================================
   4. CODE TAB SWITCHER & CLIPBOARD
   =================================================================== */
function initCodeShowcase() {
  const tabs = document.querySelectorAll('.code-tab');
  const blocks = {
    'rag-py': document.getElementById('code-rag-py'),
    'fastapi-py': document.getElementById('code-fastapi-py'),
    'schema-py': document.getElementById('code-schema-py')
  };
  const copyBtn = document.getElementById('copy-code-btn');
  const copyText = document.getElementById('copy-btn-text');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const targetKey = tab.getAttribute('data-tab');
      Object.keys(blocks).forEach((key) => {
        if (blocks[key]) blocks[key].classList.toggle('active', key === targetKey);
      });
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const activeBlock = document.querySelector('.code-block.active code');
      if (activeBlock) {
        navigator.clipboard.writeText(activeBlock.innerText).then(() => {
          copyText.innerText = 'Copied!';
          showToast('Code snippet copied to clipboard');
          setTimeout(() => { copyText.innerText = 'Copy Code'; }, 2200);
        });
      }
    });
  }
}

/* ===================================================================
   5. CONTACT & TOASTS
   =================================================================== */
function initContactAndToasts() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text');

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText.innerText.trim()).then(() => {
        copyEmailBtn.innerHTML = '<span>Copied!</span>';
        showToast('Email copied to clipboard!');
        setTimeout(() => { copyEmailBtn.innerHTML = '<span>Copy</span>'; }, 2200);
      });
    });
  }

  window.handleContactSubmit = function () {
    const name = document.getElementById('form-name');
    const email = document.getElementById('form-email');
    const subject = document.getElementById('form-subject');
    const msg = document.getElementById('form-message');
    if (!name.value || !email.value) { showToast('Please fill in your name and email'); return; }
    showToast(`Thanks ${name.value}! Message sent. I'll reply to ${email.value} soon.`);
    name.value = ''; email.value = '';
    if (subject) subject.value = '';
    if (msg) msg.value = '';
  };
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 3200);
}

/* ===================================================================
   6. NAVBAR SCROLL & MOBILE MENU
   =================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }
}

/* ===================================================================
   7. DYNAMIC YEAR
   =================================================================== */
function initCurrentYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) yearElem.innerText = new Date().getFullYear();
}

/* ===================================================================
   8. EXPERIENCE SECTION DYNAMIC STYLES (injected inline for robustness)
   =================================================================== */
function initExperienceStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .experience-timeline { display: flex; flex-direction: column; gap: 2rem; }
    .exp-card { background: var(--bg-card); backdrop-filter: blur(16px); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 2rem 2rem 1.5rem; transition: all var(--transition-smooth); }
    .exp-card:hover { border-color: var(--border-accent); box-shadow: 0 15px 40px rgba(0,242,254,0.07); }
    .exp-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
    .exp-company-info { display: flex; align-items: center; gap: 1.2rem; }
    .exp-company-logo { width: 52px; height: 52px; background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple)); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1rem; color: #040914; flex-shrink: 0; }
    .exp-role { font-size: 1.25rem; font-weight: 700; color: #fff; }
    .exp-company { font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.2rem; }
    .exp-duration { display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem; }
    .exp-badge { background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); color: #4ade80; font-size: 0.72rem; font-family: var(--font-mono); padding: 0.2rem 0.6rem; border-radius: 12px; }
    .exp-dates { font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); }
    .exp-projects-list { display: flex; flex-direction: column; gap: 1.8rem; }
    .exp-project { border-left: 2px solid rgba(0,242,254,0.2); padding-left: 1.4rem; position: relative; }
    .ep-title-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.85rem; }
    .ep-dot { width: 10px; height: 10px; background: var(--accent-cyan); border-radius: 50%; box-shadow: 0 0 8px var(--accent-cyan); position: absolute; left: -6px; flex-shrink: 0; }
    .ep-title-row h4 { font-size: 1.05rem; font-weight: 700; color: #e2e8f0; }
    .ep-points { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }
    .ep-points li { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; padding-left: 1rem; position: relative; }
    .ep-points li::before { content: '▸'; position: absolute; left: 0; color: var(--accent-cyan); }
    .ep-points strong { color: #e2e8f0; }
    .ep-tech-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .ep-tech-pills span { font-family: var(--font-mono); font-size: 0.7rem; background: rgba(0,242,254,0.07); border: 1px solid rgba(0,242,254,0.2); color: var(--accent-cyan); padding: 0.2rem 0.55rem; border-radius: 4px; }
    .featured-card { border-color: rgba(0,242,254,0.2); }
    @media (max-width: 768px) { .exp-header { flex-direction: column; align-items: flex-start; } .exp-duration { align-items: flex-start; } }
  `;
  document.head.appendChild(style);
}
