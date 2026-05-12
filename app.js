/**
 * SmartCart landing — SPA por hash, toolbar, i18n es/en (alineado a feature/i18n).
 */

import {
  applyHeadMeta,
  applyI18n,
  formatDemoMin,
  getBcCopy,
  getLocale,
  getModalCopy,
  setLocale,
  syncLangControls,
  t,
  tf,
  translateLayerName,
} from "./i18n.js";

function tierLabelKey(tier) {
  if (tier === "core") return "dominio.pillCore";
  if (tier === "supporting") return "dominio.pillSupport";
  return "dominio.pillGeneric";
}

/** @type {const} */
const BOUNDED_CONTEXTS = [
  {
    slug: "store-management",
    name: "Store Management",
    tier: "core",
    layers: ["Domain", "Application", "Interface", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    slug: "shopping-journey",
    name: "Shopping Journey",
    tier: "core",
    layers: ["Domain", "Application", "Interface", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    slug: "shopping-planning",
    name: "Shopping Planning",
    tier: "core",
    layers: ["Domain", "Application", "Interface", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    slug: "experience",
    name: "Experience",
    tier: "supporting",
    layers: ["Domain", "Application", "Interface", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    slug: "notification",
    name: "Notification",
    tier: "supporting",
    layers: ["Domain", "Application", "Interface", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    slug: "iam",
    name: "IAM",
    tier: "generic",
    layers: ["Domain", "Application", "Interface", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",
  },
  {
    slug: "verification",
    name: "Verification",
    tier: "generic",
    layers: ["Domain", "Application", "Interface", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
];

function trackEvent(name, detail = {}) {
  if (typeof console !== "undefined" && console.debug) {
    console.debug("[SmartCart]", name, detail);
  }
}

function getOutlet() {
  const el = document.querySelector("[data-outlet]");
  if (!el) throw new Error("Missing outlet");
  return el;
}

function cloneTemplate(id) {
  const tpl = document.getElementById(id);
  if (!tpl || !(tpl instanceof HTMLTemplateElement)) throw new Error(`Missing template ${id}`);
  return tpl.content.cloneNode(true);
}

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, "") || "/";
  const [path] = raw.split("?");
  const segments = path.split("/").filter(Boolean);
  return { segments };
}

/** Clave de navegación para resaltar toolbar / bottom-nav */
function getRouteKey() {
  const [a] = parseHash().segments;
  if (!a || a === "") return "inicio";
  return a;
}

/** Rutas antiguas → redirige (app móvil: descarga en lugar de lista) */
function normalizeDeprecatedRoute() {
  const { segments } = parseHash();
  const [a] = segments;
  const legacy = new Set(["dominio", "demo", "mapa", "informe", "lista-espera"]);
  if (!a || !legacy.has(a)) return false;
  const next = a === "lista-espera" ? "#/descarga" : "#/";
  if (window.location.hash !== next) window.location.hash = next;
  return true;
}

function isModalOpen() {
  const modal = document.querySelector("[data-modal]");
  return Boolean(modal && !modal.hidden);
}

function isNavOpen() {
  return Boolean(document.querySelector("[data-nav]")?.classList.contains("is-open"));
}

function refreshBodyScrollLock() {
  document.body.style.overflow = isNavOpen() || isModalOpen() ? "hidden" : "";
}

function setNavBackdrop(visible) {
  const bd = document.querySelector("[data-nav-backdrop]");
  if (!bd) return;
  bd.hidden = !visible;
  bd.setAttribute("aria-hidden", visible ? "false" : "true");
  refreshBodyScrollLock();
}

function updateActiveNav() {
  const key = getRouteKey();
  document.querySelectorAll("[data-route]").forEach((el) => {
    const r = el.getAttribute("data-route");
    const active = r === key;
    el.classList.toggle("is-active", active);
    if (el instanceof HTMLAnchorElement) {
      if (active) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll("[data-nav-item]").forEach((el) => {
    const item = el.getAttribute("data-nav-item");
    const active = item === key;
    el.classList.toggle("is-active", active);
    if (el instanceof HTMLAnchorElement) {
      if (active) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    }
  });
}

function pillClass(tier) {
  if (tier === "core") return "pill pill--core";
  if (tier === "supporting") return "pill pill--support";
  return "pill pill--generic";
}

function renderContextGrid(root) {
  const grid = root.querySelector("[data-context-grid]");
  if (!grid) return;

  grid.innerHTML = "";
  for (const bc of BOUNDED_CONTEXTS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "context-card";
    btn.setAttribute("data-link", "");
    btn.setAttribute("data-href", `#/dominio/${bc.slug}`);
    const copy = getBcCopy(bc.slug);
    btn.innerHTML = `
      <img class="context-card__img" src="${bc.image}" alt="" width="400" height="250" loading="lazy" />
      <div class="context-card__body">
        <div class="context-card__meta">${t(tierLabelKey(bc.tier))}</div>
        <h3>${bc.name}</h3>
        <p>${copy.tagline}</p>
      </div>
    `;
    const meta = btn.querySelector(".context-card__meta");
    if (meta) meta.className = `context-card__meta ${pillClass(bc.tier)}`;
    grid.appendChild(btn);
  }
}

function renderContextDetail(slug) {
  const bc = BOUNDED_CONTEXTS.find((x) => x.slug === slug);
  if (!bc) return null;

  const copy = getBcCopy(slug);
  const frag = cloneTemplate("tpl-context-detail");
  const title = frag.querySelector("[data-bc-title]");
  const tagline = frag.querySelector("[data-bc-tagline]");
  const pill = frag.querySelector("[data-bc-pill]");
  const desc = frag.querySelector("[data-bc-desc]");
  const layers = frag.querySelector("[data-bc-layers]");
  const image = frag.querySelector("[data-bc-image]");

  if (title) title.textContent = bc.name;
  if (tagline) tagline.textContent = copy.tagline;
  if (pill) {
    pill.textContent = t(tierLabelKey(bc.tier));
    pill.className = pillClass(bc.tier);
  }
  if (desc) desc.textContent = copy.description;
  if (layers) {
    layers.innerHTML = bc.layers.map((l) => `<li>${translateLayerName(l)}</li>`).join("");
  }
  if (image) {
    image.src = bc.image;
    image.alt = `Ilustración del contexto ${bc.name}`;
  }
  return frag;
}

const MODAL_KEYS = new Set(["comparador", "ruta", "crowd", "flow1", "flow2", "flow3", "flow4"]);

function openModal(key) {
  const k = typeof key === "string" ? key.trim() : "";
  if (!k || !MODAL_KEYS.has(k)) return;

  const data = getModalCopy(k);
  const titleKey = `modal.${k}.title`;
  const htmlKey = `modal.${k}.html`;
  let title = data.title === titleKey ? "" : String(data.title || "").trim();
  let html = data.html === htmlKey ? "" : String(data.html || "").trim();
  if (!title && !html) {
    trackEvent("modal_skip_empty", { key: k });
    return;
  }
  if (!title) title = "SmartCart";
  if (!html) html = `<p class="lead">${t("modal.bodyPlaceholder")}</p>`;

  closeMobileNav();

  const overlay = document.querySelector("[data-overlay]");
  const modal = document.querySelector("[data-modal]");
  const titleEl = document.querySelector("[data-modal-title]");
  const bodyEl = document.querySelector("[data-modal-body]");

  if (!overlay || !modal || !titleEl || !bodyEl) return;

  titleEl.textContent = title;
  bodyEl.innerHTML = html;

  overlay.hidden = false;
  modal.hidden = false;
  refreshBodyScrollLock();

  trackEvent("modal_open", { key: k });
  modal.querySelector("[data-modal-close]")?.focus();
}

function closeModal() {
  const overlay = document.querySelector("[data-overlay]");
  const modal = document.querySelector("[data-modal]");
  if (overlay) overlay.hidden = true;
  if (modal) modal.hidden = true;
  refreshBodyScrollLock();
}

/** Modal con contenido arbitrario (p. ej. perfil de colaborador). */
function openContentModal(title, bodyEl) {
  closeMobileNav();
  const overlay = document.querySelector("[data-overlay]");
  const modal = document.querySelector("[data-modal]");
  const titleEl = document.querySelector("[data-modal-title]");
  const bodyMount = document.querySelector("[data-modal-body]");
  if (!overlay || !modal || !titleEl || !bodyMount || !bodyEl) return;

  titleEl.textContent = title || "SmartCart";
  bodyMount.replaceChildren(bodyEl);

  overlay.hidden = false;
  modal.hidden = false;
  refreshBodyScrollLock();
  trackEvent("content_modal_open", { kind: "team" });
  modal.querySelector("[data-modal-close]")?.focus();
}

function openTeamMemberModal(btn) {
  const n = btn.getAttribute("data-team-member") || "";
  if (!/^[1-5]$/.test(n)) return;

  const thumb = btn.querySelector("img");
  const src = thumb?.getAttribute("src")?.trim() || "";

  const name = t(`colab.m${n}name`);
  const meta = t(`colab.m${n}meta`);
  const bio = t(`colab.m${n}bio`);
  const alt = t(`colab.m${n}alt`);

  const wrap = document.createElement("div");
  wrap.className = "team-modal";

  const img = document.createElement("img");
  img.className = "team-modal__photo";
  img.decoding = "async";
  img.width = 160;
  img.height = 160;
  img.alt = alt;
  if (src) img.src = src;

  const pMeta = document.createElement("p");
  pMeta.className = "team-modal__meta";
  pMeta.textContent = meta;

  const pBio = document.createElement("p");
  pBio.className = "team-modal__bio";
  pBio.textContent = bio;

  wrap.append(img, pMeta, pBio);
  openContentModal(name, wrap);
}

/** Un solo listener: enlaces internos, scroll suave en home y modales (evita que dejen de funcionar al re-renderizar). */
function setupDelegatedUi() {
  document.body.addEventListener("click", (e) => {
    const scrollEl = e.target.closest("[data-scroll-target]");
    if (scrollEl) {
      const id = scrollEl.getAttribute("data-scroll-target");
      if (id) {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMobileNav();
        trackEvent("scroll_to", { id });
        return;
      }
    }

    const modalEl = e.target.closest("[data-open-modal]");
    if (modalEl) {
      const raw = modalEl.getAttribute("data-open-modal");
      const mk = typeof raw === "string" ? raw.trim() : "";
      if (mk && MODAL_KEYS.has(mk)) {
        e.preventDefault();
        openModal(mk);
        return;
      }
    }

    const teamBtn = e.target.closest("button[data-team-member]");
    if (teamBtn) {
      e.preventDefault();
      openTeamMemberModal(teamBtn);
      return;
    }

    const link = e.target.closest("a[data-link], button[data-link]");
    if (!link || !link.hasAttribute("data-link")) return;
    const href = link.getAttribute("href") || link.getAttribute("data-href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const normalized = href.replace(/^#\/?/, "#/");
    trackEvent("route_nav", { to: normalized });
    if (window.location.hash === normalized) {
      render();
    } else {
      window.location.hash = normalized;
    }
    closeMobileNav();
  });
}

function closeMobileNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  nav?.classList.remove("is-open");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
  setNavBackdrop(false);
}

function setupHeader() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  toggle?.addEventListener("click", () => {
    const open = Boolean(nav?.classList.toggle("is-open"));
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    setNavBackdrop(open);
  });

  document.querySelector("[data-overlay]")?.addEventListener("click", closeModal);
  document.querySelector("[data-modal-close]")?.addEventListener("click", closeModal);
  document.querySelector("[data-modal]")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeMobileNav();
    }
  });
}

function setupNavBackdrop() {
  document.querySelector("[data-nav-backdrop]")?.addEventListener("click", () => {
    closeMobileNav();
  });
}

function setupScrollChrome() {
  const header = document.querySelector("[data-header]");
  const fab = document.querySelector("[data-back-top]");

  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    header?.classList.toggle("is-scrolled", y > 12);
    fab?.classList.toggle("is-visible", y > 400);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  fab?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    trackEvent("back_to_top", {});
  });
}

function setupFaqTabs(root) {
  const wrap = root.querySelector("[data-faq]");
  if (!wrap) return;

  const tabs = [...wrap.querySelectorAll("[data-faq-tab]")];
  const panels = [...wrap.querySelectorAll("[data-faq-panel]")];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.getAttribute("data-faq-tab");
      if (!id) return;
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((p) => {
        const on = p.getAttribute("data-faq-panel") === id;
        p.classList.toggle("is-active", on);
        p.toggleAttribute("hidden", !on);
      });
      trackEvent("faq_tab", { id });
    });
  });
}

function setupDemo(root) {
  const panel = root.querySelector("[data-demo-panel]");
  if (!panel) return;

  const basket = panel.querySelector("[data-demo-basket]");
  const pct = panel.querySelector("[data-demo-pct]");
  const time = panel.querySelector("[data-demo-time]");
  const outB = panel.querySelector("[data-demo-basket-out]");
  const outP = panel.querySelector("[data-demo-pct-out]");
  const outT = panel.querySelector("[data-demo-time-out]");
  const money = panel.querySelector("[data-demo-money]");
  const hint = panel.querySelector("[data-demo-hint]");
  const reset = panel.querySelector("[data-demo-reset]");
  const RATE_PER_MIN = 0.8;

  function fmtMoney(n) {
    return getLocale() === "en" ? `PEN ${n.toFixed(2)}` : `S/ ${n.toFixed(2)}`;
  }

  function sync() {
    const b = Number(basket?.value ?? 600);
    const p = Number(pct?.value ?? 12) / 100;
    const mins = Number(time?.value ?? 90);
    if (outB) outB.textContent = fmtMoney(b);
    if (outP) outP.textContent = `${Math.round(p * 100)}%`;
    if (outT) outT.textContent = formatDemoMin(mins);
    const saved = b * p;
    const timeVal = mins * RATE_PER_MIN;
    if (money) money.textContent = fmtMoney(saved);
    if (hint) {
      hint.textContent = tf("demo.hintFmt", {
        pct: String(Math.round(p * 100)),
        money: fmtMoney(saved),
        mins: String(mins),
        rate: String(RATE_PER_MIN),
        timeval: fmtMoney(timeVal),
      });
    }
  }

  [basket, pct, time].forEach((el) => el?.addEventListener("input", sync));
  reset?.addEventListener("click", () => {
    if (basket) basket.value = "600";
    if (pct) pct.value = "12";
    if (time) time.value = "90";
    sync();
    trackEvent("demo_reset", {});
  });
  sync();
}

function setupHomeInteractions(root) {
  const wrap = root.querySelector("[data-home-steps]");
  if (!wrap) return;

  const activate = (idx) => {
    wrap.querySelectorAll("[data-step-index]").forEach((btn) => {
      const on = btn.getAttribute("data-step-index") === idx;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    wrap.querySelectorAll("[data-step-panel]").forEach((panel) => {
      const on = panel.getAttribute("data-step-panel") === idx;
      panel.classList.toggle("is-active", on);
      panel.toggleAttribute("hidden", !on);
    });
  };

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-step-index]");
    if (!btn) return;
    const idx = btn.getAttribute("data-step-index");
    if (idx) activate(idx);
  });

  const counters = [...root.querySelectorAll("[data-counter]")];
  if (!counters.length || !("IntersectionObserver" in window)) {
    counters.forEach((el) => {
      const t = el.getAttribute("data-counter");
      if (t) el.textContent = t;
    });
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = Number(el.getAttribute("data-counter") || "0");
        const suffix = el.getAttribute("data-counter-suffix") || "";
        const dur = 900;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          const val = Math.round(target * (0.2 + 0.8 * p));
          el.textContent = `${val}${suffix}`;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.35 },
  );
  counters.forEach((c) => io.observe(c));
}

function setupReveal(root) {
  const sections = [...root.querySelectorAll("section")];
  sections.forEach((s) => s.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    sections.forEach((s) => s.classList.add("is-inview"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-inview");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
  );
  sections.forEach((s) => io.observe(s));
}

function setupWaitlist(root) {
  const form = root.querySelector("[data-waitlist]");
  if (!form || !(form instanceof HTMLFormElement)) return;

  const msg = root.querySelector("[data-waitlist-msg]");
  const storageKey = "smartcart_waitlist_demo";
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const setLoading = (on) => {
      submitBtn?.classList.toggle("is-loading", on);
      if (submitBtn instanceof HTMLButtonElement) submitBtn.disabled = on;
    };

    const finish = () => {
      setLoading(false);
    };

    const fd = new FormData(form);
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!msg) return;

    if (!ok) {
      msg.hidden = false;
      msg.textContent = t("waitlist.errFmt");
      msg.className = "form-msg is-err";
      trackEvent("waitlist_invalid", {});
      return;
    }

    msg.hidden = true;
    setLoading(true);
    trackEvent("waitlist_submit", {});

    window.setTimeout(() => {
      /** @type {string[]} */
      let list = [];
      try {
        list = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (!Array.isArray(list)) list = [];
      } catch {
        list = [];
      }

      msg.hidden = false;
      if (list.includes(email)) {
        msg.textContent = t("waitlist.dup");
        msg.className = "form-msg is-ok";
        finish();
        trackEvent("waitlist_duplicate", {});
        return;
      }

      list.push(email);
      localStorage.setItem(storageKey, JSON.stringify(list));
      msg.textContent = t("waitlist.ok");
      msg.className = "form-msg is-ok";
      form.reset();
      finish();
      trackEvent("waitlist_ok", {});
    }, 700);
  });
}

function applyShellI18n() {
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector(".site-footer");
  const bottom = document.querySelector("[data-bottom-nav]");
  const fab = document.querySelector("[data-back-top]");
  if (header) applyI18n(header);
  if (footer) applyI18n(footer);
  if (bottom) applyI18n(bottom);
  if (fab) applyI18n(fab);
}

function render() {
  closeModal();
  if (normalizeDeprecatedRoute()) return;

  const outlet = getOutlet();
  const { segments } = parseHash();
  const [a] = segments;

  let frag = null;

  if (!a || a === "") {
    frag = cloneTemplate("tpl-home");
  } else if (a === "beneficios") {
    frag = cloneTemplate("tpl-beneficios");
  } else if (a === "nosotros") {
    frag = cloneTemplate("tpl-nosotros");
  } else if (a === "colaboradores") {
    frag = cloneTemplate("tpl-colaboradores");
  } else if (a === "descarga") {
    frag = cloneTemplate("tpl-descarga");
  } else if (a === "faq") {
    frag = cloneTemplate("tpl-faq");
  } else {
    window.location.hash = "#/";
    return;
  }

  outlet.replaceChildren(frag);
  setupWaitlist(outlet);
  setupFaqTabs(outlet);
  setupDemo(outlet);
  setupReveal(outlet);
  if (!a || a === "") setupHomeInteractions(outlet);

  updateActiveNav();
  applyI18n(outlet);
  applyShellI18n();
  window.scrollTo(0, 0);
}

function init() {
  document.documentElement.lang = getLocale();
  applyHeadMeta();
  syncLangControls();

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-set-lang");
      if (lang) setLocale(lang);
    });
  });
  window.addEventListener("smartcart:locale", () => {
    document.documentElement.lang = getLocale();
    applyHeadMeta();
    syncLangControls();
    render();
  });

  setupHeader();
  setupNavBackdrop();
  setupScrollChrome();
  setupDelegatedUi();
  window.addEventListener("hashchange", render);
  if (!window.location.hash) window.location.hash = "#/";
  render();
}

init();
