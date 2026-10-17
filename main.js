/**
 * DIVYANSH MISHRA | DISTRIBUTED SYSTEMS & AI OBSERVATORY ENGINE
 * Python Backend & AI/LLM Systems Engineer
 * Hexaview Technologies · FastAPI · Agentic RAG · SMA Rebalancer
 */

document.addEventListener('DOMContentLoaded', () => {
  initModeSwitcher();
  initObservatorySimulators();
  initCommandPalette();
  initProjectFilters();
  initCodeShowcase();
  initResumeViewerAndModal();
  initContactAndToasts();
  initNavbarScroll();
  initCurrentYear();
});

/* ===================================================================
   2. DUAL-MODE SWITCHER (Executive View vs Architect View)
   =================================================================== */
function initModeSwitcher() {
  const execBtn = document.getElementById('mode-executive-btn');
  const archBtn = document.getElementById('mode-architect-btn');
  const bentoSection = document.getElementById('bento-summary');
  const observatorySection = document.getElementById('observatory');

  function setMode(mode) {
    document.documentElement.setAttribute('data-view-mode', mode);

    if (execBtn && archBtn) {
      execBtn.classList.toggle('active', mode === 'executive');
      execBtn.setAttribute('aria-checked', mode === 'executive');
      archBtn.classList.toggle('active', mode === 'architect');
      archBtn.setAttribute('aria-checked', mode === 'architect');
    }

    if (mode === 'executive') {
      showToast('Executive View: 30-sec recruiter skim with key metrics & resume');
      if (bentoSection) {
        bentoSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      showToast('Architect View: Live Distributed System Observatory & Simulators');
      if (observatorySection) {
        observatorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  if (execBtn) {
    execBtn.addEventListener('click', () => setMode('executive'));
  }
  if (archBtn) {
    archBtn.addEventListener('click', () => setMode('architect'));
  }

  window.setPortfolioMode = setMode;
}

/* ===================================================================
   3. OBSERVATORY: LIVE DISTRIBUTED SYSTEM & AI SIMULATORS
   =================================================================== */
function initObservatorySimulators() {
  // Tab Switching
  const tabRebalancer = document.getElementById('tab-rebalancer-btn');
  const tabRag = document.getElementById('tab-rag-btn');
  const panelRebalancer = document.getElementById('sim-rebalancer-panel');
  const panelRag = document.getElementById('sim-rag-panel');

  if (tabRebalancer && tabRag && panelRebalancer && panelRag) {
    tabRebalancer.addEventListener('click', () => {
      tabRebalancer.classList.add('active');
      tabRag.classList.remove('active');
      panelRebalancer.style.display = 'block';
      panelRag.style.display = 'none';
    });

    tabRag.addEventListener('click', () => {
      tabRag.classList.add('active');
      tabRebalancer.classList.remove('active');
      panelRag.style.display = 'block';
      panelRebalancer.style.display = 'none';
    });
  }

  // --- SIMULATOR 1: SMA Portfolio Rebalancer Engine ---
  const triggerSimBtn = document.getElementById('trigger-sim-btn');
  const simBtnText = document.getElementById('sim-btn-text');
  const simOutputLog = document.getElementById('sim-output-log');
  const logStatusChip = document.getElementById('log-status-chip');
  const simEngineTime = document.getElementById('sim-engine-time');

  const nodeAccounts = document.getElementById('node-accounts');
  const nodeModel = document.getElementById('node-model');
  const nodeEngine = document.getElementById('node-engine');
  const nodeOrders = document.getElementById('node-orders');

  const statusAccounts = document.getElementById('status-accounts');
  const statusModel = document.getElementById('status-model');
  const statusEngine = document.getElementById('status-engine');
  const statusOrders = document.getElementById('status-orders');

  const pulse1 = document.getElementById('pulse-1');
  const pulse2 = document.getElementById('pulse-2');
  const pulse3 = document.getElementById('pulse-3');

  let isSimRunning = false;

  if (triggerSimBtn) {
    triggerSimBtn.addEventListener('click', () => {
      if (isSimRunning) return;
      isSimRunning = true;

      if (simBtnText) simBtnText.innerText = 'Triggering Rebalance...';
      triggerSimBtn.classList.add('disabled');
      if (logStatusChip) {
        logStatusChip.innerText = 'RUNNING AUTOMATED FLOW';
        logStatusChip.style.background = 'rgba(245, 158, 11, 0.2)';
        logStatusChip.style.color = '#f59e0b';
      }

      // Step 1: Ingest Accounts
      if (nodeAccounts) nodeAccounts.classList.add('active-pulse');
      if (statusAccounts) statusAccounts.innerText = 'Ingesting 1,240 Accounts...';
      if (pulse1) pulse1.classList.add('running');

      const startTime = Date.now();
      let logBuffer = `[${new Date().toISOString()}] [BASELINE] Previous manual process took ~2+ hours per client batch with spreadsheets\n`;
      logBuffer += `[${new Date().toISOString()}] [AUTOMATED_FLOW] FastAPI multi-tenant async engine dispatched\n`;
      logBuffer += `[${new Date().toISOString()}] [ACCOUNTS] Locked 1,240 client account states across tenant partitions\n`;
      if (simOutputLog) simOutputLog.innerHTML = `<code>${escapeHtml(logBuffer)}</code>`;

      setTimeout(() => {
        // Step 2: Compare against Target Models
        if (nodeModel) nodeModel.classList.add('active-pulse');
        if (statusModel) statusModel.innerText = 'Weights Verified';
        if (pulse2) pulse2.classList.add('running');

        logBuffer += `[${new Date().toISOString()}] [MODEL_MATRIX] Target portfolio weights verified & mapped\n`;
        logBuffer += `[${new Date().toISOString()}] [DRIFT_CALC] Calculated delta drift deltas across equity/fixed asset classes\n`;
        if (simOutputLog) simOutputLog.innerHTML = `<code>${escapeHtml(logBuffer)}</code>`;
      }, 550);

      setTimeout(() => {
        // Step 3: Concurrency Engine Execution
        if (nodeEngine) nodeEngine.classList.add('active-pulse');
        if (statusEngine) statusEngine.innerText = 'Async Worker Running...';
        if (pulse3) pulse3.classList.add('running');

        logBuffer += `[${new Date().toISOString()}] [ASYNC_WORKER] Spawning parallel async tasks for batch reconciliations\n`;
        logBuffer += `[${new Date().toISOString()}] [SQL_OPTIMIZE] PostgreSQL relational matrix calculation in 0.04s\n`;
        if (simOutputLog) simOutputLog.innerHTML = `<code>${escapeHtml(logBuffer)}</code>`;
      }, 1100);

      setTimeout(() => {
        // Step 4: Trade Orders Generated
        if (nodeOrders) nodeOrders.classList.add('active-pulse');
        if (statusOrders) statusOrders.innerText = '348 Trades Generated!';

        const elapsedSeconds = ((Date.now() - startTime) / 1000).toFixed(2);
        if (simEngineTime) {
          simEngineTime.innerText = `< 2 Seconds (0${elapsedSeconds}s)`;
        }

        logBuffer += `[${new Date().toISOString()}] [PROPOSALS] Generated 348 atomic trade proposals:\n`;
        logBuffer += `   -> BUY  AAPL  | 450 shares @ $234.10 | Delta: +2.1%\n`;
        logBuffer += `   -> SELL MSFT  | 120 shares @ $420.50 | Delta: -1.4%\n`;
        logBuffer += `   -> BUY  NVDA  | 380 shares @ $138.20 | Delta: +1.8%\n`;
        logBuffer += `   -> SELL GOOGL | 190 shares @ $185.00 | Delta: -0.9%\n`;
        logBuffer += `[${new Date().toISOString()}] [VERIFICATION] 100% allocation accuracy. 0% mismatch errors.\n`;
        logBuffer += `[${new Date().toISOString()}] [IMPACT] Previous Manual Process (~2+ Hours) vs Automated Flow (${elapsedSeconds}s) -> >99.9% latency cut!\n`;

        if (simOutputLog) {
          simOutputLog.innerHTML = `<code>${escapeHtml(logBuffer)}</code>`;
          simOutputLog.scrollTop = simOutputLog.scrollHeight;
        }

        if (logStatusChip) {
          logStatusChip.innerText = 'AUTOMATED FLOW COMPLETE (0 ERRORS)';
          logStatusChip.style.background = 'rgba(16, 185, 129, 0.2)';
          logStatusChip.style.color = '#10b981';
        }

        if (simBtnText) simBtnText.innerText = 'Trigger Rebalance Again';
        triggerSimBtn.classList.remove('disabled');
        isSimRunning = false;
        showToast('Automated Rebalance completed in under 2s vs 2+ hours manual (>99.9% faster)!');

        setTimeout(() => {
          [nodeAccounts, nodeModel, nodeEngine, nodeOrders].forEach((n) => n && n.classList.remove('active-pulse'));
          [pulse1, pulse2, pulse3].forEach((p) => p && p.classList.remove('running'));
        }, 3000);
      }, 1950);
    });
  }

  // --- SIMULATOR 2: Agentic RAG Flow Visualizer ---
  const triggerRagSimBtn = document.getElementById('trigger-rag-sim-btn');
  const ragCards = document.querySelectorAll('.rag-flow-card');
  const rdbTitle = document.getElementById('rdb-title');
  const rdbChip = document.getElementById('rdb-chip');
  const rdbContent = document.getElementById('rdb-content');

  const stepDetails = {
    1: {
      title: 'Step 01: Multimodal Statement Ingestion (Llama APIs)',
      chip: 'VISION OCR',
      content: `<strong>Llama API Multimodal Extractor:</strong> Heterogeneous financial statements (brokerage PDFs, scans, tables) are converted to structured JSON models. Optical parsing reaches 99.4% precision on dense tabular securities holdings.`
    },
    2: {
      title: 'Step 02: Maximal Marginal Relevance Retrieval (ChromaDB)',
      chip: 'MMR VECTOR',
      content: `<strong>Vector Store Semantic Retrieval:</strong> Query vectors are matched against OpenAI text-embedding-3-large embeddings in ChromaDB using MMR (k=6, fetch_k=20). Maximizes contextual diversity while suppressing redundant financial statement disclaimers.`
    },
    3: {
      title: 'Step 03: Live Financial Tool Execution (Yahoo Finance & FMP)',
      chip: 'DYNAMIC TOOLS',
      content: `<strong>Automated Tool Calling:</strong> LangChain tools fetch real-time market data (P/E, beta, 52-week ranges) via Yahoo Finance & FMP APIs. Redis cache reduces repetitive market inquiries by 60% with sub-10ms response times.`
    },
    4: {
      title: 'Step 04: Token Streaming & Automated Synthesis',
      chip: 'GPT-4O SSE',
      content: `<strong>Server-Sent Events (SSE) Streaming:</strong> Responses are generated at 45+ tokens/second with inline verification citations pointing directly back to brokerage statement line items and live market metrics.`
    }
  };

  ragCards.forEach((card) => {
    card.addEventListener('click', () => {
      const step = card.getAttribute('data-step');
      ragCards.forEach((c) => c.classList.remove('active-rag'));
      card.classList.add('active-rag');

      const data = stepDetails[step];
      if (data && rdbTitle && rdbChip && rdbContent) {
        rdbTitle.innerText = data.title;
        rdbChip.innerText = data.chip;
        rdbContent.innerHTML = `<p>${data.content}</p>`;
      }
    });
  });

  if (triggerRagSimBtn) {
    triggerRagSimBtn.addEventListener('click', () => {
      let currentStep = 1;
      showToast('Tracing live Agentic RAG query workflow...');

      function highlightStep(step) {
        ragCards.forEach((c) => c.classList.remove('active-rag'));
        const activeCard = document.getElementById(`rag-step-${step}`);
        if (activeCard) activeCard.classList.add('active-rag');

        const data = stepDetails[step];
        if (data && rdbTitle && rdbChip && rdbContent) {
          rdbTitle.innerText = data.title;
          rdbChip.innerText = `STREAMING STEP ${step}/4`;
          rdbContent.innerHTML = `<p>${data.content}</p>`;
        }
      }

      highlightStep(1);
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep <= 4) {
          highlightStep(currentStep);
        } else {
          clearInterval(interval);
          if (rdbChip) rdbChip.innerText = 'FLOW COMPLETED';
          showToast('Agentic RAG pipeline trace successfully completed!');
        }
      }, 900);
    });
  }
}

/* ===================================================================
   4. RAYCAST / LINEAR STYLE COMMAND PALETTE (CMD + K / CTRL + K)
   =================================================================== */
function initCommandPalette() {
  const modal = document.getElementById('cmd-palette-modal');
  const input = document.getElementById('cmd-palette-input');
  const resultsContainer = document.getElementById('cmd-palette-results');
  const triggerBtn = document.getElementById('cmd-palette-trigger');

  if (!modal || !input || !resultsContainer) return;

  const commands = [
    {
      title: 'Download Official Resume (PDF)',
      icon: '📄',
      category: 'Resume',
      action: () => {
        if (typeof window.triggerResumeDownload === 'function') {
          window.triggerResumeDownload();
        }
      }
    },
    {
      title: 'View In-Page Resume & Credentials',
      icon: '👁️',
      category: 'Resume',
      action: () => {
        const resumeSec = document.getElementById('resume');
        if (resumeSec) resumeSec.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: 'Open Fullscreen Resume Modal',
      icon: '🔍',
      category: 'Resume',
      action: () => {
        const navResumeBtn = document.getElementById('nav-resume-btn');
        if (navResumeBtn) navResumeBtn.click();
      }
    },
    {
      title: 'Run SMA Rebalancing Benchmark Simulator',
      icon: '⚡',
      category: 'Observatory',
      action: () => {
        const obsSec = document.getElementById('observatory');
        if (obsSec) obsSec.scrollIntoView({ behavior: 'smooth' });
        const triggerSimBtn = document.getElementById('trigger-sim-btn');
        if (triggerSimBtn) triggerSimBtn.click();
      }
    },
    {
      title: 'Trace Agentic RAG Pipeline Flow',
      icon: '🤖',
      category: 'Observatory',
      action: () => {
        const tabRagBtn = document.getElementById('tab-rag-btn');
        if (tabRagBtn) tabRagBtn.click();
        const obsSec = document.getElementById('observatory');
        if (obsSec) obsSec.scrollIntoView({ behavior: 'smooth' });
        const triggerRagSimBtn = document.getElementById('trigger-rag-sim-btn');
        if (triggerRagSimBtn) triggerRagSimBtn.click();
      }
    },
    {
      title: 'Switch to Executive View (Recruiter Skim)',
      icon: '👔',
      category: 'View Mode',
      action: () => {
        if (typeof window.setPortfolioMode === 'function') {
          window.setPortfolioMode('executive');
        }
      }
    },
    {
      title: 'Switch to Architect View (Deep Technical)',
      icon: '🛠️',
      category: 'View Mode',
      action: () => {
        if (typeof window.setPortfolioMode === 'function') {
          window.setPortfolioMode('architect');
        }
      }
    },
    {
      title: 'Explore Featured Projects (Coursify-AI, SSO)',
      icon: '🚀',
      category: 'Projects',
      action: () => {
        const projSec = document.getElementById('projects');
        if (projSec) projSec.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: 'View Hexaview Technologies Production Systems',
      icon: '🏢',
      category: 'Experience',
      action: () => {
        const expSec = document.getElementById('experience');
        if (expSec) expSec.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: 'Open LeetCode Profile (700+ Solved, 1800+ Rating)',
      icon: '⚡',
      category: 'Algorithms',
      action: () => {
        window.open('https://leetcode.com/u/Divyansh_Mishra10/', '_blank');
      }
    },
    {
      title: 'Open Coursify-AI Live Demo (AI Course Generator)',
      icon: '✨',
      category: 'Projects',
      action: () => {
        window.open('https://coursify-by-ai.vercel.app/', '_blank');
      }
    },
    {
      title: 'Copy Direct Email (divyanshmishra101010@gmail.com)',
      icon: '✉️',
      category: 'Contact',
      action: () => {
        navigator.clipboard.writeText('divyanshmishra101010@gmail.com').then(() => {
          showToast('Email address copied to clipboard!');
        });
      }
    },
    {
      title: 'Open GitHub Profile (Divyanshmishra101010)',
      icon: '🐙',
      category: 'Social',
      action: () => {
        window.open('https://github.com/Divyanshmishra101010', '_blank');
      }
    },
    {
      title: 'Open LinkedIn Profile (divyansh-mishra-101764207)',
      icon: '💼',
      category: 'Social',
      action: () => {
        window.open('https://www.linkedin.com/in/divyansh-mishra-101764207/', '_blank');
      }
    }
  ];

  let selectedIndex = 0;
  let filteredCommands = [...commands];

  function renderCommands() {
    resultsContainer.innerHTML = '';
    if (filteredCommands.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">No commands found matching "${escapeHtml(input.value)}"</div>`;
      return;
    }

    filteredCommands.forEach((cmd, idx) => {
      const item = document.createElement('div');
      item.className = `cmd-result-item ${idx === selectedIndex ? 'selected' : ''}`;
      item.innerHTML = `
        <span class="cmd-item-icon">${cmd.icon}</span>
        <span class="cmd-item-title">${escapeHtml(cmd.title)}</span>
        <span class="cmd-item-cat">${escapeHtml(cmd.category)}</span>
      `;
      item.addEventListener('click', () => {
        closeCommandPalette();
        cmd.action();
      });
      resultsContainer.appendChild(item);
    });
  }

  function openCommandPalette() {
    modal.classList.add('active');
    input.value = '';
    filteredCommands = [...commands];
    selectedIndex = 0;
    renderCommands();
    setTimeout(() => input.focus(), 50);
  }

  function closeCommandPalette() {
    modal.classList.remove('active');
    input.blur();
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openCommandPalette);
  }

  // Keyboard shortcut: Cmd + K or Ctrl + K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    }

    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCommandPalette();
    }
  });

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    filteredCommands = commands.filter(
      (c) => c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)
    );
    selectedIndex = 0;
    renderCommands();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredCommands.length;
      renderCommands();
      scrollToSelected();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
      renderCommands();
      scrollToSelected();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        closeCommandPalette();
        filteredCommands[selectedIndex].action();
      }
    }
  });

  function scrollToSelected() {
    const selectedItem = resultsContainer.querySelector('.cmd-result-item.selected');
    if (selectedItem) {
      selectedItem.scrollIntoView({ block: 'nearest' });
    }
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCommandPalette();
    }
  });
}

/* ===================================================================
   5. IN-PAGE RESUME PDF VIEWER & FORCE-DOWNLOAD ENGINE
   =================================================================== */
function initResumeViewerAndModal() {
  const resumeSection = document.getElementById('resume');
  const navResumeBtn = document.getElementById('nav-resume-btn');
  const heroViewResumeBtn = document.getElementById('hero-view-resume-btn');
  const profileResumeBtn = document.getElementById('profile-resume-btn');
  const fullscreenBtn = document.getElementById('fullscreen-resume-btn');
  const modal = document.getElementById('resume-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  function openResumeModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function scrollToResumeSection() {
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Universal Webpage-Based PDF Download Function
  function triggerResumeDownload() {
    const fileName = 'Divyansh_Mishra_Resume.pdf';
    const relativePdfPath = './' + fileName;

    showToast('Starting download: ' + fileName + '...');

    // Fetch PDF as Blob to force native file save dialog
    fetch(relativePdfPath, { cache: 'no-cache' })
      .then((res) => {
        if (!res.ok) throw new Error('HTTP error ' + res.status);
        return res.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobUrl;
        tempLink.download = fileName;
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 2000);

        showToast('Resume downloaded successfully!');
      })
      .catch((err) => {
        // Fallback for file:// local sandbox or restricted origins
        console.warn('Blob download fallback:', err);
        const fallbackLink = document.createElement('a');
        fallbackLink.href = relativePdfPath;
        fallbackLink.download = fileName;
        fallbackLink.target = '_blank';
        document.body.appendChild(fallbackLink);
        fallbackLink.click();
        document.body.removeChild(fallbackLink);
        showToast('Resume download triggered!');
      });
  }

  window.triggerResumeDownload = triggerResumeDownload;

  // Bind to all elements with class .js-download-resume
  const downloadBtns = document.querySelectorAll('.js-download-resume');
  downloadBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerResumeDownload();
    });
  });

  if (heroViewResumeBtn) {
    heroViewResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToResumeSection();
    });
  }

  if (profileResumeBtn) {
    profileResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToResumeSection();
    });
  }

  if (navResumeBtn) {
    navResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      openResumeModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      closeResumeModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeResumeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeResumeModal();
    }
  });
}


function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/* ===================================================================
   7. PROJECT FILTERS
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
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 180);
        }
      });
    });
  });
}

/* ===================================================================
   8. CODE BLUEPRINT DRAWER & CLIPBOARD
   =================================================================== */
function initCodeShowcase() {
  const toggleBtn = document.getElementById('toggle-blueprint-btn');
  const toggleText = document.getElementById('blueprint-toggle-text');
  const blueprintBox = document.getElementById('blueprint-box');

  if (toggleBtn && blueprintBox) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = blueprintBox.style.display === 'none' || !blueprintBox.style.display;
      blueprintBox.style.display = isHidden ? 'block' : 'none';
      if (toggleText) {
        toggleText.innerText = isHidden ? 'Hide Code Blueprint' : 'Show Code Blueprint';
      }
    });
  }

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
          if (copyText) copyText.innerText = 'Copied!';
          showToast('Python blueprint copied to clipboard');
          setTimeout(() => {
            if (copyText) copyText.innerText = 'Copy Code';
          }, 2200);
        });
      }
    });
  }
}

/* ===================================================================
   9. CONTACT SYSTEM & GLOBAL TOASTS
   =================================================================== */
function initContactAndToasts() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text');

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText.innerText.trim()).then(() => {
        copyEmailBtn.innerHTML = '<span>Copied!</span>';
        showToast('Email address copied to clipboard: divyanshmishra101010@gmail.com');
        setTimeout(() => {
          copyEmailBtn.innerHTML = '<span>Copy</span>';
        }, 2200);
      });
    });
  }

  window.handleContactSubmit = function () {
    const name = document.getElementById('form-name');
    const email = document.getElementById('form-email');
    const subject = document.getElementById('form-subject');
    const msg = document.getElementById('form-message');

    if (!name || !email || !name.value || !email.value) {
      showToast('Please provide your name and email address');
      return;
    }

    showToast(`Thank you, ${name.value}! Your message has been received.`);
    name.value = '';
    email.value = '';
    if (subject) subject.value = '';
    if (msg) msg.value = '';
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
   10. NAVBAR SCROLL & MOBILE DRAWER
   =================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
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
   11. DYNAMIC YEAR
   =================================================================== */
function initCurrentYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.innerText = new Date().getFullYear();
  }
}
