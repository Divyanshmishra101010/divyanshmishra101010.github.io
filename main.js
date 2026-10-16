/**
 * DIVYANSH MISHRA | PORTFOLIO CORE ENGINE
 * Features:
 * - Interactive Neural Net / Agent Graph Particle Canvas
 * - Full Interactive REPL Terminal Simulator
 * - Project Filter System
 * - Interactive Architecture Deep-Dive Modal
 * - Python Code Tab Switcher & Clipboard Manager
 * - Contact Toast & Dynamic Year
 */

document.addEventListener('DOMContentLoaded', () => {
  initNeuralCanvas();
  initHeroTerminal();
  initProjectFilters();
  initCodeShowcase();
  initArchitectureModal();
  initContactAndToasts();
  initNavbarScroll();
  initCurrentYear();
});

/* ===================================================================
   1. NEURAL NETWORK / AGENT GRAPH CANVAS
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

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

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

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting edges
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

      // Connect to cursor
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
   2. HERO INTERACTIVE TERMINAL SIMULATOR (CLI REPL)
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
<div class="terminal-output-line">  <span class="t-yellow">whoami</span>          - Brief background & identity info</div>
<div class="terminal-output-line">  <span class="t-yellow">agents --status</span> - Inspect active autonomous agent swarms</div>
<div class="terminal-output-line">  <span class="t-yellow">stack</span>           - Core frameworks & Python backend technologies</div>
<div class="terminal-output-line">  <span class="t-yellow">rag --eval</span>      - Benchmark vector retrieval & hybrid search</div>
<div class="terminal-output-line">  <span class="t-yellow">contact</span>         - Reveal direct communication channels</div>
<div class="terminal-output-line">  <span class="t-yellow">clear</span>           - Clear the terminal console buffer</div>
`,
    whoami: `
<div class="terminal-output-line"><span class="t-cyan">[IDENTITY]</span>: Divyansh Mishra</div>
<div class="terminal-output-line"><span class="t-purple">[ROLE]</span>: GenAI, Autonomous Agent Systems & Python Backend Specialist</div>
<div class="terminal-output-line"><span class="t-green">[CORE PHILOSOPHY]</span>: Deterministic backend discipline meets non-deterministic generative intelligence.</div>
<div class="terminal-output-line"><span class="t-comment">Specializing in stateful multi-agent DAGs (LangGraph), hybrid RAG retrieval, and high-concurrency FastAPI microservices.</span></div>
`,
    'agents --status': `
<div class="terminal-output-line"><span class="t-cyan">[SWARM RUNTIME CLUSTER - 4 NODES ONLINE]</span></div>
<div class="terminal-output-line">  ● <span class="t-green">SupervisorAgent</span>: [ID: sup-01] Mode: LangGraph State Machine (Status: IDLE, Ready)</div>
<div class="terminal-output-line">  ● <span class="t-green">RetrievalAgent</span>:  [ID: rag-42] Qdrant Dense+Sparse Index (Recall: 94.6%)</div>
<div class="terminal-output-line">  ● <span class="t-green">CodeWorkerNode</span>:  [ID: ast-09] Python AST / Pytest Sandbox (Sandboxed)</div>
<div class="terminal-output-line">  ● <span class="t-yellow">ReflectionAgent</span>: [ID: ref-03] Hallucination & Faithfulness Guardrail</div>
<div class="terminal-output-line"><span class="t-comment">All agent state checkpoints persisted in Redis / SQLite backend.</span></div>
`,
    agents: `
<div class="terminal-output-line"><span class="t-yellow">Tip:</span> Try running <span class="t-cyan">agents --status</span> to view live swarm telemetry.</div>
`,
    stack: `
<div class="terminal-output-line"><span class="t-cyan">[PRODUCTION TECH STACK]</span></div>
<div class="terminal-output-line">  ▸ <span class="t-purple">AI & Agents</span>: LangGraph, CrewAI, AutoGen, LlamaIndex, DSPy, OpenAI/Anthropic/Gemini APIs</div>
<div class="terminal-output-line">  ▸ <span class="t-green">Python Core</span>: Python 3.12+, FastAPI, AsyncIO, Celery, Pydantic v2, Pytest</div>
<div class="terminal-output-line">  ▸ <span class="t-yellow">Data & Vectors</span>: Qdrant, ChromaDB, PostgreSQL, Redis, Cohere Rerank</div>
<div class="terminal-output-line">  ▸ <span class="t-red">Ops & Tooling</span>: Docker, Git CI/CD, LangSmith, vLLM / Ollama, Prometheus</div>
`,
    'stack --core': `
<div class="terminal-output-line"><span class="t-cyan">[CORE STACK]</span>: Python 3.12 (AsyncIO) | LangGraph | FastAPI | Qdrant | Redis | Docker</div>
`,
    'rag --eval': `
<div class="terminal-output-line"><span class="t-comment">Executing RAG benchmark on enterprise dataset (100,000 vectors)...</span></div>
<div class="terminal-output-line">  [1/3] Dense Embeddings (Text-Embedding-3-Large): <span class="t-green">Cosine Top-10 retrieved in 18ms</span></div>
<div class="terminal-output-line">  [2/3] Sparse BM25 Keyword Search: <span class="t-green">Reciprocal Rank Fusion applied</span></div>
<div class="terminal-output-line">  [3/3] Cross-Encoder Rerank (Cohere): <span class="t-green">Top-3 selected (Confidence score: 0.962)</span></div>
<div class="terminal-output-line"><span class="t-cyan">✔ Total RAG latency: 142ms. Zero hallucinations detected by guardrail.</span></div>
`,
    rag: `
<div class="terminal-output-line"><span class="t-yellow">Tip:</span> Try running <span class="t-cyan">rag --eval</span> to see the benchmark trace.</div>
`,
    contact: `
<div class="terminal-output-line"><span class="t-cyan">[CONTACT CHANNELS]</span></div>
<div class="terminal-output-line">  Email:    <span class="t-green">divyansh.mishra.work@example.com</span></div>
<div class="terminal-output-line">  GitHub:   <span class="t-purple">github.com/your-username</span></div>
<div class="terminal-output-line">  LinkedIn: <span class="t-yellow">linkedin.com/in/your-username</span></div>
`,
    'python -v': `
<div class="terminal-output-line">Python 3.12.3 (CPython, UTF-8, x86_64)</div>
`,
    'python -version': `
<div class="terminal-output-line">Python 3.12.3</div>
`,
    hire: `
<div class="terminal-output-line"><span class="t-green">🎉 Let's collaborate!</span> Scroll down to the contact form or email me directly at divyansh.mishra.work@example.com.</div>
`
  };

  function executeCommand(cmdStr) {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    const lowerCmd = rawCmd.toLowerCase();

    // Render user input line in terminal history
    const userLine = document.createElement('div');
    userLine.className = 'terminal-output-line';
    userLine.innerHTML = `<span class="terminal-prompt">divyansh@agent-node:~$</span> <span class="t-cyan">${escapeHtml(rawCmd)}</span>`;
    terminalHistory.appendChild(userLine);

    if (lowerCmd === 'clear') {
      terminalHistory.innerHTML = '';
      terminalBody.scrollTop = 0;
      return;
    }

    // Determine command response
    let responseHtml = commandResponses[lowerCmd];
    if (!responseHtml) {
      responseHtml = `<div class="terminal-output-line"><span class="t-red">zsh: command not found: ${escapeHtml(rawCmd)}</span>. Type <span class="t-yellow">'help'</span> for a list of supported commands.</div>`;
    }

    const respContainer = document.createElement('div');
    respContainer.innerHTML = responseHtml;
    terminalHistory.appendChild(respContainer);

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // Handle Keyboard Input
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    }
  });

  // Handle Quick Command Chips
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
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ===================================================================
   4. CODE PLAYGROUND / BLUEPRINT TABS & CLIPBOARD
   =================================================================== */
function initCodeShowcase() {
  const tabs = document.querySelectorAll('.code-tab');
  const blocks = {
    'agent-py': document.getElementById('code-agent-py'),
    'fastapi-py': document.getElementById('code-fastapi-py'),
    'state-py': document.getElementById('code-state-py')
  };
  const copyBtn = document.getElementById('copy-code-btn');
  const copyText = document.getElementById('copy-btn-text');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const targetKey = tab.getAttribute('data-tab');
      Object.keys(blocks).forEach((key) => {
        if (blocks[key]) {
          blocks[key].classList.toggle('active', key === targetKey);
        }
      });
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const activeBlock = document.querySelector('.code-block.active code');
      if (activeBlock) {
        navigator.clipboard.writeText(activeBlock.innerText).then(() => {
          copyText.innerText = 'Copied!';
          showToast('Python snippet copied to clipboard');
          setTimeout(() => {
            copyText.innerText = 'Copy Code';
          }, 2200);
        });
      }
    });
  }
}

/* ===================================================================
   5. ARCHITECTURE DEEP-DIVE MODAL
   =================================================================== */
function initArchitectureModal() {
  const modalOverlay = document.getElementById('arch-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const previewBtns = document.querySelectorAll('.p-link-preview');

  if (!modalOverlay || !modalClose) return;

  const archDetails = {
    'agent-arch': {
      title: 'Autonomous Multi-Agent Task Orchestrator Architecture',
      content: `
        <p><strong>Pattern:</strong> Hierarchical Supervisor State Graph (Cyclic DAG) with LangGraph.</p>
        <br>
        <p><strong>1. Supervisor Layer:</strong> The supervisor receives goal prompts and dynamically compiles sub-task dependencies using Pydantic JSON schema constraints. It routes execution through a persistent SQLite checkpointer.</p>
        <br>
        <p><strong>2. Worker Swarm:</strong> Sub-agents (ResearchAgent, CodeExecutorAgent, WebScraperAgent) communicate asynchronously via memory queues. Tools execute in isolated Docker containers to prevent rogue side-effects.</p>
        <br>
        <p><strong>3. Resilience & Reflection:</strong> If a subagent encounters a tool error or syntax validation failure, the state machine triggers a reflection loop rather than terminating the pipeline, allowing automatic retry with corrective context.</p>
      `
    },
    'rag-pipeline': {
      title: 'Enterprise Hybrid RAG System Architecture',
      content: `
        <p><strong>Pattern:</strong> Multi-Stage Retrieval with Reciprocal Rank Fusion & Cross-Encoder Rerank.</p>
        <br>
        <p><strong>1. Ingestion:</strong> Semantic chunking with hierarchical parent-document tracking. Text is simultaneously indexed into Qdrant for dense semantic embeddings and an inverted index for sparse BM25 exact-token matching.</p>
        <br>
        <p><strong>2. Hybrid Fusion:</strong> When a user query arrives, dense vector similarity (cosine) and BM25 scores are normalized and merged using Reciprocal Rank Fusion (RRF).</p>
        <br>
        <p><strong>3. Cohere Reranking & Evaluation:</strong> The top-25 merged documents are evaluated by a cross-encoder model to select the top-3 most contextually relevant passages. A TruLens/Ragas guardrail validates that the final LLM response is grounded in facts.</p>
      `
    },
    'gateway-arch': {
      title: 'High-Throughput Async LLM Gateway Architecture',
      content: `
        <p><strong>Pattern:</strong> Async Reverse Proxy with Redis Semantic Caching & Worker Pools.</p>
        <br>
        <p><strong>1. Request Ingestion:</strong> FastAPI running with uvloop workers processes thousands of incoming concurrent prompts. Token bucket algorithms enforce dynamic tenant rate-limits.</p>
        <br>
        <p><strong>2. Semantic Cache:</strong> Before forwarding to costly upstream providers (OpenAI, Anthropic, Ollama), incoming queries are checked against vector embeddings stored in Redis. Semantically identical questions are returned in < 15ms.</p>
        <br>
        <p><strong>3. Streaming SSE:</strong> Outputs are piped chunk-by-chunk using Server-Sent Events, ensuring the lowest time-to-first-token (TTFT) for end users.</p>
      `
    },
    'agent-self-heal': {
      title: 'Self-Healing Code Agent Architecture',
      content: `
        <p><strong>Pattern:</strong> AST Parsing + Automated Pytest Feedback Loop.</p>
        <br>
        <p><strong>1. Codebase Parsing:</strong> Ingests Python modules, constructing Abstract Syntax Trees (AST) to identify function signatures, docstrings, and cyclomatic complexity hotspots.</p>
        <br>
        <p><strong>2. Test-Driven Verification:</strong> Proposed code refactors or fixes are executed within a sandboxed temporary environment running Pytest. If test exit code != 0, the traceback is parsed and fed back to the LLM agent to iteratively revise the diff.</p>
      `
    }
  };

  previewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-preview');
      const data = archDetails[key];
      if (data) {
        modalTitle.innerText = data.title;
        modalContent.innerHTML = data.content;
        modalOverlay.classList.add('active');
      }
    });
  });

  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
}

/* ===================================================================
   6. CONTACT FORM & TOAST NOTIFICATIONS
   =================================================================== */
function initContactAndToasts() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text');

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText.innerText.trim()).then(() => {
        copyEmailBtn.innerHTML = '<span>Copied!</span>';
        showToast('Email address copied to clipboard');
        setTimeout(() => {
          copyEmailBtn.innerHTML = '<span>Copy</span>';
        }, 2200);
      });
    });
  }

  // Global handler for contact form submit
  window.handleContactSubmit = function () {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const msgInput = document.getElementById('form-message');

    if (!nameInput.value || !emailInput.value) {
      showToast('Please fill out your name and email');
      return;
    }

    showToast(`Thanks ${nameInput.value}! Message recorded. I will reply to ${emailInput.value} shortly.`);

    nameInput.value = '';
    emailInput.value = '';
    const subject = document.getElementById('form-subject');
    if (subject) subject.value = '';
    if (msgInput) msgInput.value = '';
  };
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ===================================================================
   7. NAVBAR SCROLL & MOBILE MENU
   =================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ===================================================================
   8. DYNAMIC COPYRIGHT YEAR
   =================================================================== */
function initCurrentYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.innerText = new Date().getFullYear();
  }
}
