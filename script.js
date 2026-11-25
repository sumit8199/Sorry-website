(() => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const totalSlides = slides.length;
  let currentIndex = 0;
  let soundEnabled = true;
  let audioCtx = null;

  const pageBadge = document.getElementById("page-badge");
  const dotsTrack = document.getElementById("dots-track");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const soundToggle = document.getElementById("sound-toggle");
  const soundIcon = document.getElementById("sound-icon");
  const burstLayer = document.getElementById("burst-layer");
  const particlesLayer = document.getElementById("particles-layer");

  // Mount SVG stickers & decorations
  if (typeof window.mountIllustrations === "function") {
    window.mountIllustrations();
  }

  const ephemeralLayer = document.getElementById("ephemeral-layer");

  // ==================== WORD-BY-WORD & TILE TEXT REVEAL ====================
  function setupTextAnimations() {
    // Index Page 1 cutout letter tiles for popcorn pop-in
    document.querySelectorAll(".c-tile:not(.c-spacer)").forEach((tile, idx) => {
      tile.style.setProperty("--tile-i", idx);
    });

    // Wrap text in paragraphs/quotes/confessions for sequential appearing animation
    const textTargets = document.querySelectorAll(
      ".cover-quote, .lined-body p, .letter-paragraph, .journal-body, .ps-line, .pinned-confession p"
    );

    textTargets.forEach((el) => {
      const originalText = el.textContent.trim().replace(/\s+/g, " ");
      el.setAttribute("aria-label", originalText);
      el.textContent = "";
      const words = originalText.split(" ");
      words.forEach((word, idx) => {
        const span = document.createElement("span");
        span.className = "reveal-word";
        // Cap delay spread so long paragraphs finish cleanly in ~2.2s
        const cappedIdx = Math.min(idx, 68);
        span.style.setProperty("--w", cappedIdx);
        span.textContent = idx < words.length - 1 ? `${word} ` : word;
        el.appendChild(span);
      });
    });
  }

  function replaySlideAnimations(slide) {
    // Force reflow on active slide so CSS animations replay cleanly on revisit
    const animated = slide.querySelectorAll(
      ".anim-pop, .anim-up, .anim-float, .c-tile, .reveal-word, .script-heading, .serif-heading, .cutout-banner, .salutation"
    );
    animated.forEach((node) => {
      node.style.animation = "none";
    });
    void slide.offsetWidth;
    animated.forEach((node) => {
      node.style.animation = "";
    });
  }

  // ==================== PER-PAGE APPEARING & DISAPPEARING ELEMENTS ====================
  // Each page has unique whispers/stickers and varied anchor zones around the edges
  const PAGE_EPHEMERAL_CONFIG = [
    {
      // Page 1
      items: ["psst... open me 💌", "made with love ♥", "for my favourite human", "🥺👉👈", "✨", "🌸"],
      zones: [
        { left: "4%", top: "24%" },
        { right: "4%", top: "18%" },
        { left: "6%", bottom: "14%" },
        { right: "6%", bottom: "16%" },
        { left: "44%", top: "10%" },
      ],
    },
    {
      // Page 2
      items: ["I'm really sorry 🥺", "hate making u sad", "hug? 🫂", "❤️‍🩹", "please forgive me", "🫶🏻"],
      zones: [
        { left: "3%", top: "18%" },
        { right: "4%", top: "15%" },
        { left: "5%", bottom: "14%" },
        { right: "5%", bottom: "18%" },
        { left: "58%", top: "10%" },
      ],
    },
    {
      // Page 3
      items: ["my fav person ♥", "love your smile :)", "thinking of u", "🤧😙", "🎵", "✨"],
      zones: [
        { left: "4%", top: "16%" },
        { right: "4%", top: "18%" },
        { left: "3%", bottom: "15%" },
        { right: "5%", bottom: "14%" },
        { left: "35%", top: "9%" },
      ],
    },
    {
      // Page 4
      items: ["read every point ♥", "you matter most", "didn't mean it 😭", "🫶🏻", "always loved", "🌸"],
      zones: [
        { left: "3%", top: "22%" },
        { right: "3%", top: "20%" },
        { left: "4%", bottom: "12%" },
        { right: "4%", bottom: "13%" },
        { left: "16%", top: "11%" },
      ],
    },
    {
      // Page 5
      items: ["wish I could rewind ↺", "hugging u tight 🫂", "ur feelings matter", "💔→❤️‍🩹", "😘"],
      zones: [
        { left: "4%", top: "17%" },
        { right: "4%", top: "16%" },
        { left: "4%", bottom: "14%" },
        { right: "6%", bottom: "15%" },
        { left: "46%", top: "9%" },
      ],
    },
    {
      // Page 6
      items: ["no goodbyes 🥺", "stronger together", "more chapters left", "🌙✨", "🥰"],
      zones: [
        { left: "3%", top: "20%" },
        { right: "3%", top: "22%" },
        { left: "5%", bottom: "13%" },
        { right: "4%", bottom: "15%" },
        { left: "48%", top: "9%" },
      ],
    },
    {
      // Page 7
      items: ["food dates soon? 🍟", "late-night talks 🌙", "same team! 😌", "📸", "💞"],
      zones: [
        { left: "4%", top: "18%" },
        { right: "4%", top: "18%" },
        { left: "5%", bottom: "16%" },
        { right: "5%", bottom: "16%" },
        { left: "22%", top: "10%" },
      ],
    },
    {
      // Page 8
      items: ["pinky promise 🤞🏻", "I'll listen better", "I'll be gentler", "💖", "✨"],
      zones: [
        { left: "5%", top: "24%" },
        { right: "5%", top: "22%" },
        { left: "6%", bottom: "16%" },
        { right: "6%", bottom: "15%" },
        { left: "45%", top: "10%" },
      ],
    },
    {
      // Page 9
      items: ["miss my happy place", "don't take long 🥺", "craving u ♥", "🌸", "🫂♥️"],
      zones: [
        { left: "4%", top: "18%" },
        { right: "4%", top: "16%" },
        { left: "5%", bottom: "14%" },
        { right: "5%", bottom: "14%" },
        { left: "42%", top: "9%" },
      ],
    },
  ];

  let ephemeralTimer = null;
  let ephemeralStep = 0;

  function spawnEphemeralForPage(pageIndex) {
    if (!ephemeralLayer) return;
    const cfg = PAGE_EPHEMERAL_CONFIG[pageIndex] || PAGE_EPHEMERAL_CONFIG[0];
    const text = cfg.items[ephemeralStep % cfg.items.length];
    const zone = cfg.zones[(ephemeralStep * 2 + pageIndex) % cfg.zones.length];
    ephemeralStep += 1;

    const el = document.createElement("div");
    const isEmojiOnly = text.length <= 4;
    el.className = `ephemeral-item ${isEmojiOnly ? "ephemeral-glyph" : "ephemeral-pill"}`;
    el.textContent = text;

    // Slight jitter within the safe zone so consecutive items never overlap identically
    const jitterX = (Math.random() - 0.5) * 4;
    const jitterY = (Math.random() - 0.5) * 4;
    if (zone.left) el.style.left = `calc(${zone.left} + ${jitterX.toFixed(1)}%)`;
    if (zone.right) el.style.right = `calc(${zone.right} + ${jitterX.toFixed(1)}%)`;
    if (zone.top) el.style.top = `calc(${zone.top} + ${jitterY.toFixed(1)}%)`;
    if (zone.bottom) el.style.bottom = `calc(${zone.bottom} + ${jitterY.toFixed(1)}%)`;

    const lifeSec = 2.7 + Math.random() * 0.9;
    el.style.setProperty("--life", `${lifeSec.toFixed(2)}s`);
    el.style.setProperty("--r0", `${((Math.random() - 0.5) * 18).toFixed(1)}deg`);
    el.style.setProperty("--r1", `${((Math.random() - 0.5) * 10).toFixed(1)}deg`);
    el.style.setProperty("--r2", `${((Math.random() - 0.5) * 14).toFixed(1)}deg`);
    if (isEmojiOnly) {
      el.style.setProperty("--gsize", `${22 + Math.floor(Math.random() * 10)}px`);
    }

    ephemeralLayer.appendChild(el);
    setTimeout(() => el.remove(), lifeSec * 1000 + 80);
  }

  function startEphemeralCycle(pageIndex) {
    clearInterval(ephemeralTimer);
    if (ephemeralLayer) ephemeralLayer.innerHTML = "";

    // Spawn two staggered items quickly so the page feels immediately alive
    setTimeout(() => {
      if (currentIndex === pageIndex) spawnEphemeralForPage(pageIndex);
    }, 350);
    setTimeout(() => {
      if (currentIndex === pageIndex) spawnEphemeralForPage(pageIndex);
    }, 1050);

    ephemeralTimer = setInterval(() => {
      if (currentIndex === pageIndex) spawnEphemeralForPage(pageIndex);
    }, 1750);
  }

  // ==================== GENTLE WEB AUDIO CHIMES ====================
  function playTone(freq = 523.25, duration = 0.14, type = "sine", delay = 0) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime + delay;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.06, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.02);
    } catch {
      // Ignore audio errors if blocked by browser policy
    }
  }

  function playChimeChord() {
    playTone(523.25, 0.18, "triangle", 0);
    playTone(659.25, 0.2, "triangle", 0.06);
    playTone(783.99, 0.28, "triangle", 0.12);
  }

  function playSoftPop() {
    playTone(587.33, 0.11, "sine", 0);
    playTone(880, 0.14, "sine", 0.05);
  }

  soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
    soundToggle.title = soundEnabled ? "Sound effects: On" : "Sound effects: Off";
    if (soundEnabled) playSoftPop();
  });

  // ==================== AMBIENT & BURST PARTICLES ====================
  function initAmbientParticles() {
    const glyphs = ["♥", "✦", "🌸", "💌", "✨"];
    for (let i = 0; i < 14; i++) {
      const span = document.createElement("span");
      span.className = "ambient-particle";
      span.textContent = glyphs[i % glyphs.length];
      span.style.left = `${(i * 7.3 + 4) % 96}%`;
      span.style.animationDuration = `${12 + (i % 7) * 2.5}s`;
      span.style.animationDelay = `${-(i * 1.4)}s`;
      span.style.fontSize = `${13 + (i % 4) * 3}px`;
      particlesLayer.appendChild(span);
    }
  }

  function spawnBurst(x, y, emojis = ["♥️", "✨", "🫂", "🌸"], count = 12) {
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "burst-particle";
      p.textContent = emojis[i % emojis.length];
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const dist = 55 + Math.random() * 85;
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
      p.style.setProperty("--ty", `${Math.sin(angle) * dist - 20}px`);
      p.style.setProperty("--rot", `${(Math.random() - 0.5) * 60}deg`);
      burstLayer.appendChild(p);
      setTimeout(() => p.remove(), 1200);
    }
  }

  function spawnBurstFromElement(el, emojis, count = 12) {
    const rect = el.getBoundingClientRect();
    spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, emojis, count);
  }

  // ==================== SLIDE NAVIGATION ====================
  function buildDots() {
    dotsTrack.innerHTML = "";
    slides.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot-btn";
      dot.setAttribute("aria-label", `Go to page ${idx + 1}`);
      dot.setAttribute("role", "tab");
      dot.addEventListener("click", () => goToSlide(idx));
      dotsTrack.appendChild(dot);
    });
  }

  function goToSlide(index, isUserAction = true) {
    if (index < 0 || index >= totalSlides) return;
    currentIndex = index;

    slides.forEach((slide, idx) => {
      const isActive = idx === currentIndex;
      slide.classList.toggle("active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      if (isActive) {
        slide.scrollTop = 0;
        replaySlideAnimations(slide);
      }
    });

    const dots = dotsTrack.querySelectorAll(".dot-btn");
    dots.forEach((dot, idx) => {
      const isActive = idx === currentIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });

    pageBadge.textContent = `Page ${currentIndex + 1} of ${totalSlides}`;
    btnPrev.disabled = currentIndex === 0;
    btnNext.textContent = currentIndex === totalSlides - 1 ? "Answer 🥺" : "Next ›";
    startEphemeralCycle(currentIndex);
    if (isUserAction) playSoftPop();
  }

  btnPrev.addEventListener("click", () => goToSlide(currentIndex - 1));
  btnNext.addEventListener("click", () => {
    if (currentIndex === totalSlides - 1) {
      openGateModal();
    } else {
      goToSlide(currentIndex + 1);
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const gateModal = document.getElementById("gate-modal");
    if (!gateModal.hidden) {
      if (e.key === "Escape") closeGateModal();
      return;
    }
    if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
    if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
  });

  // Touch swipe navigation
  let touchStartX = 0;
  let touchStartY = 0;
  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    }
  }, { passive: true });

  // ==================== PAGE-SPECIFIC INTERACTIONS ====================

  // Page 1: "Open This Please💌"
  const btnOpenLetter = document.getElementById("btn-open-letter");
  btnOpenLetter.addEventListener("click", () => {
    spawnBurstFromElement(btnOpenLetter, ["💌", "♥️", "✨", "🎀"], 16);
    playChimeChord();
    setTimeout(() => goToSlide(1), 240);
  });

  // Page 2: Mend the heart & pop stickers (tribute to Video cake-click reveal!)
  const btnMendHeart = document.getElementById("btn-mend-heart");
  const mendHeartIcon = document.getElementById("mend-heart-icon");
  const mendHeartText = document.getElementById("mend-heart-text");
  const popZone = document.getElementById("page2-pop-stickers");
  let heartMended = false;

  btnMendHeart.addEventListener("click", () => {
    heartMended = !heartMended;
    btnMendHeart.classList.toggle("is-done", heartMended);
    if (heartMended) {
      mendHeartIcon.textContent = "❤️‍🩹";
      mendHeartText.textContent = "Hug received 🫂";
      spawnBurstFromElement(btnMendHeart, ["❤️‍🩹", "🫂", "🥺", "✨"], 14);
      playChimeChord();
      popZone.innerHTML = `
        <span class="pop-badge" style="top:-8px; left:6px; transform:rotate(-8deg);">hug sent 🫂</span>
        <span class="pop-badge" style="bottom:6px; right:0px; transform:rotate(7deg);">really sorry 🥺</span>
      `;
    } else {
      mendHeartIcon.textContent = "💔";
      mendHeartText.textContent = "Tap to send a gentle hug";
      popZone.innerHTML = "";
    }
  });

  // Page 4: Interactive heart checklist
  document.querySelectorAll(".check-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const checked = pill.classList.toggle("checked");
      pill.setAttribute("aria-pressed", String(checked));
      const bullet = pill.querySelector(".heart-bullet");
      bullet.textContent = checked ? "♥️" : "🤍";
      if (checked) {
        spawnBurstFromElement(pill, ["♥️", "✨"], 6);
        playSoftPop();
      }
    });
  });

  // Page 5: "Rewind & Hug Instead" toggle
  const btnRedoMoment = document.getElementById("btn-redo-moment");
  const redoScene = document.getElementById("art-redo-scene");
  const redoPolaroid = document.getElementById("redo-polaroid");
  const redoCaption = document.getElementById("redo-caption");
  const redoBtnLabel = document.getElementById("redo-btn-label");
  let isHealed = false;

  btnRedoMoment.addEventListener("click", () => {
    isHealed = !isHealed;
    btnRedoMoment.classList.toggle("is-done", isHealed);
    redoPolaroid.classList.toggle("is-healed", isHealed);
    if (isHealed) {
      redoScene.innerHTML = window.SVG_ASSETS.redoHug;
      redoCaption.textContent = "hugging you instead of arguing 🫂";
      redoBtnLabel.textContent = "Show Hurt Moment Again";
      spawnBurstFromElement(redoPolaroid, ["🫂", "♥️", "😘", "✨"], 14);
      playChimeChord();
    } else {
      redoScene.innerHTML = window.SVG_ASSETS.redoHurt;
      redoCaption.textContent = "what I wish I did instead...";
      redoBtnLabel.textContent = "Rewind & Hug Instead";
    }
  });

  // Page 7: 3 Keepsake Polaroids (tribute to Video's 3-Gift Picker!)
  const keepsakeMessages = {
    talks: "More 2 AM sleepy voice notes & endless talks 🌙💬",
    dates: "More food dates where we steal bites from each other 🧁🍟",
    team: "Always on the same team, even on messy days 😌💞",
  };
  const toastEl = document.getElementById("keepsake-toast");
  let toastTimer = null;

  document.querySelectorAll(".keepsake-card").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.keepsake;
      const msg = keepsakeMessages[key] || "More memories with you ♥";
      toastEl.textContent = msg;
      toastEl.hidden = false;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toastEl.hidden = true;
      }, 3200);
      spawnBurstFromElement(card, ["💞", "📸", "✨", "🫂"], 10);
      playSoftPop();
    });
  });

  // Page 8: Wax Seal Stamp
  const btnWaxSeal = document.getElementById("btn-wax-seal");
  const waxSealVisual = document.getElementById("wax-seal-visual");
  const waxSealLabel = document.getElementById("wax-seal-label");
  let isSealed = false;

  btnWaxSeal.addEventListener("click", () => {
    isSealed = !isSealed;
    btnWaxSeal.classList.toggle("is-sealed", isSealed);
    if (isSealed) {
      waxSealVisual.textContent = "💖";
      waxSealLabel.textContent = "Promise sealed with love 🤞🏻✨";
      spawnBurstFromElement(waxSealVisual, ["💖", "🤞🏻", "✨", "♥️"], 15);
      playChimeChord();
    } else {
      waxSealVisual.textContent = "🤞🏻";
      waxSealLabel.textContent = "Tap to seal this promise";
    }
  });

  // ==================== PAGE 9: KITTEN GATE MODAL (Video 00:13-00:23) ====================
  const gateModal = document.getElementById("gate-modal");
  const gateAsk = document.getElementById("gate-state-ask");
  const gateRetry = document.getElementById("gate-state-retry");
  const gateYay = document.getElementById("gate-state-yay");

  function showGateState(stateName) {
    gateAsk.hidden = stateName !== "ask";
    gateRetry.hidden = stateName !== "retry";
    gateYay.hidden = stateName !== "yay";
  }

  function openGateModal() {
    showGateState("ask");
    gateModal.hidden = false;
    playSoftPop();
  }

  function closeGateModal() {
    gateModal.hidden = true;
  }

  document.getElementById("btn-open-question").addEventListener("click", openGateModal);

  document.getElementById("btn-gate-no").addEventListener("click", () => {
    showGateState("retry");
    playTone(392, 0.16, "sine", 0);
    playTone(349.23, 0.22, "sine", 0.12);
  });

  document.getElementById("btn-gate-okay").addEventListener("click", () => {
    showGateState("ask");
    playSoftPop();
  });

  document.getElementById("btn-gate-yes").addEventListener("click", () => {
    showGateState("yay");
    playChimeChord();
    const card = gateModal.querySelector(".gate-card");
    spawnBurstFromElement(card, ["♥️", "🫂", "🥰", "🌸", "✨", "💌"], 24);
  });

  document.getElementById("btn-gate-close").addEventListener("click", () => {
    closeGateModal();
    goToSlide(0);
  });

  gateModal.addEventListener("click", (e) => {
    if (e.target === gateModal) closeGateModal();
  });

  // ==================== BACKGROUND CLICK SPARKLE ====================
  document.querySelector(".scrapbook-stage").addEventListener("click", (e) => {
    if (e.target.closest("button, a, input")) return;
    spawnBurst(e.clientX, e.clientY, ["✨", "♥️", "🌸", "💌"], 7);
  });

  // ==================== INIT ====================
  setupTextAnimations();
  initAmbientParticles();
  buildDots();
  goToSlide(0, false);
})();
