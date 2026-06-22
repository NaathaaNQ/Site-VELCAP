/* =========================================================
   VELCAP — plateforme tournante + interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Contenu des 7 univers ---------- */
  const PANELS = [
    {
      tag: "Le socle",
      title: "L'Association",
      subtitle: "Le moteur collectif",
      cta: "Adhérer à VELCAP",
      body:
        "VELCAP, c'est d'abord une association : une communauté qui partage l'effort, le dépassement et la convivialité. On y entre pour soi, on y reste pour les autres.",
      list: [
        "Une gouvernance associative transparente",
        "Des événements et temps forts toute l'année",
        "Bénévolat, vie de club et entraide",
        "Une licence, sept disciplines accessibles",
      ],
    },
    {
      tag: "Athlétisme",
      title: "Club FFA",
      subtitle: "Courir, sauter, se dépasser",
      cta: "Prendre une licence FFA",
      body:
        "Affilié à la Fédération Française d'Athlétisme, le club FFA accueille du débutant au compétiteur : running, route, trail, piste et école d'athlétisme.",
      list: [
        "Entraînements encadrés tous niveaux",
        "Compétitions FFA officielles",
        "École d'athlé pour les jeunes",
        "Préparation 5/10 km, semi & marathon",
      ],
    },
    {
      tag: "Cyclisme",
      title: "Club FFC",
      subtitle: "La route, la piste, le peloton",
      cta: "Prendre une licence FFC",
      body:
        "Sous l'égide de la Fédération Française de Cyclisme, le club FFC réunit les passionnés de vélo : route, piste et sorties collectives, dans l'esprit d'équipe.",
      list: [
        "Sorties club encadrées chaque semaine",
        "Compétitions et courses FFC",
        "Tous niveaux, du loisir au licencié",
        "Sécurité, mécanique et stratégie de course",
      ],
    },
    {
      tag: "Haut niveau",
      title: "Team Élite",
      subtitle: "L'exigence de la performance",
      cta: "Candidater à la Team Élite",
      body:
        "La Team Élite rassemble nos athlètes les plus performants. Encadrement renforcé, suivi individualisé et objectifs de podium : ici, on vise le sommet.",
      list: [
        "Suivi de performance individualisé",
        "Préparation physique & mentale",
        "Calendrier de compétitions ciblé",
        "Représenter les couleurs VELCAP",
      ],
    },
    {
      tag: "Événement",
      title: "La Corrida",
      subtitle: "La course signature",
      cta: "S'inscrire à la Corrida",
      body:
        "La Corrida, c'est LE rendez-vous VELCAP : une course populaire et festive qui rassemble coureurs, familles et supporters autour d'une même énergie.",
      list: [
        "Parcours pour tous, du sprint au défi",
        "Ambiance festive et dossard solidaire",
        "Animations, village et récompenses",
        "Un moment fort pour tout le territoire",
      ],
    },
    {
      tag: "Engagement",
      title: "Nos Actions",
      subtitle: "Le sport qui rassemble",
      cta: "Soutenir nos actions",
      body:
        "VELCAP agit au-delà du chrono : accès au sport pour tous, jeunesse, santé et solidarité. Nos actions font vivre les valeurs du club sur le terrain.",
      list: [
        "Sport-santé & inclusion",
        "Interventions auprès de la jeunesse",
        "Actions solidaires et caritatives",
        "Partenariats locaux et citoyens",
      ],
    },
    {
      tag: "Sur-mesure",
      title: "Coaching Privé",
      subtitle: "Ton plan, ta progression",
      cta: "Demander un coaching",
      body:
        "Besoin d'un accompagnement individuel ? Nos coachs construisent un programme sur-mesure : objectifs, planning et suivi, en course à pied comme à vélo.",
      list: [
        "Bilan & objectifs personnalisés",
        "Plan d'entraînement adapté",
        "Suivi régulier et ajustements",
        "Coaching présentiel ou à distance",
      ],
    },
  ];

  const deck = document.getElementById("deck");
  const dotsWrap = document.getElementById("dots");
  const counterNow = document.getElementById("counterNow");
  const counterTotal = document.getElementById("counterTotal");
  const N = PANELS.length;
  let current = 0;
  let autoplay = false;
  let autoTimer = null;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pad = (n) => String(n + 1).padStart(2, "0");

  /* ---------- Construction des panneaux ---------- */
  PANELS.forEach((p, i) => {
    const panel = document.createElement("article");
    panel.className = "panel";
    panel.dataset.index = i;
    panel.setAttribute("role", "group");
    panel.setAttribute("aria-roledescription", "panneau");
    panel.setAttribute("aria-label", `${pad(i)} — ${p.title}`);
    panel.innerHTML = `
      <div class="board">
        <header class="board__head">
          <div><span class="board__index">${pad(i)} / ${pad(N - 1)}</span><span class="board__tag">${p.tag}</span></div>
          <h3 class="board__title">${p.title}</h3>
          <p class="board__subtitle">${p.subtitle}</p>
        </header>
        <div class="board__body">
          <p>${p.body}</p>
          <ul class="board__list">${p.list.map((li) => `<li>${li}</li>`).join("")}</ul>
          <a class="board__cta" href="#engage">${p.cta} →</a>
        </div>
        <span class="board__scrollhint">défiler</span>
      </div>`;

    // Clic sur un panneau latéral => l'activer
    panel.addEventListener("click", (e) => {
      if (!panel.classList.contains("is-active") && !e.target.closest("a")) {
        goTo(i);
      }
    });
    deck.appendChild(panel);

    // Dot de navigation
    const dot = document.createElement("button");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Aller à ${p.title}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const panels = Array.from(deck.querySelectorAll(".panel"));
  const dots = Array.from(dotsWrap.querySelectorAll("button"));
  counterTotal.textContent = pad(N - 1);

  /* ---------- Positionnement 3D (effet plateforme tournante) ---------- */
  function render() {
    panels.forEach((panel, i) => {
      // décalage circulaire le plus court (-3..+3)
      let off = i - current;
      if (off > N / 2) off -= N;
      if (off < -N / 2) off += N;
      const abs = Math.abs(off);

      panel.classList.toggle("is-active", off === 0);
      panel.classList.toggle("is-hidden", abs > 2);

      const tx = off * 56;                 // décalage latéral (%)
      const tz = -abs * 230;               // profondeur
      const ry = off * -48;                // rotation (drum)
      const scale = off === 0 ? 1 : 0.86 - (abs - 1) * 0.06;

      panel.style.transform =
        `translate(-50%, -50%) translateX(${tx}%) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`;
      panel.style.zIndex = String(50 - abs);
      panel.style.opacity = abs > 2 ? "0" : "1";

      // accessibilité : seul l'actif est focusable/scrollable
      const body = panel.querySelector(".board__body");
      if (body) body.setAttribute("tabindex", off === 0 ? "0" : "-1");
      panel.setAttribute("aria-hidden", off === 0 ? "false" : "true");
    });

    dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
    document.querySelectorAll("[data-goto]").forEach((b) => {
      b.classList.toggle("is-active", Number(b.dataset.goto) === current);
    });
    counterNow.textContent = pad(current);
  }

  function goTo(i) {
    current = ((i % N) + N) % N;
    render();
  }
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  /* ---------- Contrôles ---------- */
  document.getElementById("next").addEventListener("click", () => { stopAuto(); next(); });
  document.getElementById("prev").addEventListener("click", () => { stopAuto(); prev(); });
  document.querySelectorAll("[data-goto]").forEach((b) => {
    b.addEventListener("click", () => { stopAuto(); goTo(Number(b.dataset.goto)); closeMenu(); });
  });

  // Clavier (quand la plateforme est visible)
  const stage = document.getElementById("stage");
  document.addEventListener("keydown", (e) => {
    const r = stage.getBoundingClientRect();
    const visible = r.top < window.innerHeight * 0.7 && r.bottom > 0;
    if (!visible) return;
    if (e.key === "ArrowRight") { stopAuto(); next(); }
    if (e.key === "ArrowLeft") { stopAuto(); prev(); }
  });

  // Swipe / drag horizontal sur la scène
  let startX = null;
  const onStart = (x) => { startX = x; };
  const onEnd = (x) => {
    if (startX === null) return;
    const d = x - startX;
    if (Math.abs(d) > 50) { stopAuto(); d < 0 ? next() : prev(); }
    startX = null;
  };
  stage.addEventListener("touchstart", (e) => onStart(e.touches[0].clientX), { passive: true });
  stage.addEventListener("touchend", (e) => onEnd(e.changedTouches[0].clientX));
  stage.addEventListener("mousedown", (e) => onStart(e.clientX));
  stage.addEventListener("mouseup", (e) => onEnd(e.clientX));

  /* ---------- Rotation auto ---------- */
  const apBtn = document.getElementById("autoplay");
  function startAuto() {
    if (reduceMotion) return;
    autoplay = true; apBtn.setAttribute("aria-pressed", "true");
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 4200);
  }
  function stopAuto() {
    autoplay = false; apBtn.setAttribute("aria-pressed", "false");
    clearInterval(autoTimer);
  }
  apBtn.addEventListener("click", () => (autoplay ? stopAuto() : startAuto()));
  stage.addEventListener("mouseenter", () => { if (autoplay) clearInterval(autoTimer); });
  stage.addEventListener("mouseleave", () => { if (autoplay) startAuto(); });

  render();

  /* ---------- Menu mobile ---------- */
  const burger = document.querySelector(".burger");
  const topnav = document.querySelector(".topnav");
  function closeMenu() { burger.classList.remove("is-open"); topnav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", () => {
    const open = topnav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });

  /* ---------- Compteurs animés (hero) ---------- */
  function animateCount(el) {
    const target = Number(el.dataset.count);
    if (!target || Number.isNaN(target)) return;
    let v = 0;
    const step = Math.max(1, Math.round(target / 30));
    const id = setInterval(() => {
      v += step;
      if (v >= target) { v = target; clearInterval(id); }
      el.textContent = v + (el.dataset.suffix || "");
    }, 35);
  }

  /* ---------- Reveal au scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-in");
        if (en.target.dataset.count) animateCount(en.target);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll(".hero__inner > *, .platform__head, .engage__inner > *")
    .forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));

  /* ---------- Formulaire d'engagement ---------- */
  const form = document.getElementById("engageForm");
  const feedback = document.getElementById("engageFeedback");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { feedback.textContent = "Merci de remplir tous les champs."; return; }
    const data = new FormData(form);
    feedback.textContent = `Merci ${data.get("name")} ! Ta demande « ${data.get("interest")} » est bien notée. On te recontacte très vite. 🔴`;
    form.reset();
  });

  /* ---------- Année footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
