/* ===========================================================
   Mochi Paws Café — all the interactive bits
   Sections:
   1. Cartoon animals (SVG)   5. Book nook (flip + seats)
   2. Data                    6. Pets (carousel + modal)
   3. Floating background     7. Opening hours
   4. Menu + offers           8. Donate
                              9. Bubble menu + peeking animals
   =========================================================== */

/* ---------- 1. CARTOON ANIMALS (drawn with SVG, no images needed) ---------- */
const INK = "#5b4562";
const animals = {
  cat(fur = "#ffd9b8", inner = "#ffb3c7") {
    return `<svg viewBox="0 0 120 120" role="img" aria-label="cute cat">
      <polygon points="20,50 26,10 58,32" fill="${fur}"/><polygon points="100,50 94,10 62,32" fill="${fur}"/>
      <polygon points="28,42 31,22 46,33" fill="${inner}"/><polygon points="92,42 89,22 74,33" fill="${inner}"/>
      <circle cx="60" cy="68" r="42" fill="${fur}"/>
      <circle cx="43" cy="66" r="5.5" fill="${INK}"/><circle cx="77" cy="66" r="5.5" fill="${INK}"/>
      <circle cx="45" cy="64" r="1.8" fill="#fff"/><circle cx="79" cy="64" r="1.8" fill="#fff"/>
      <circle cx="31" cy="78" r="7" fill="${inner}" opacity=".7"/><circle cx="89" cy="78" r="7" fill="${inner}" opacity=".7"/>
      <ellipse cx="60" cy="76" rx="4.5" ry="3.2" fill="#ff8fb1"/>
      <path d="M60 79 Q60 87 53 86 M60 79 Q60 87 67 86" stroke="${INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <g stroke="${INK}" stroke-width="1.8" stroke-linecap="round" opacity=".6">
        <line x1="14" y1="74" x2="30" y2="77"/><line x1="14" y1="84" x2="30" y2="82"/>
        <line x1="106" y1="74" x2="90" y2="77"/><line x1="106" y1="84" x2="90" y2="82"/></g>
    </svg>`;
  },
  dog(fur = "#f5d2a8", ear = "#d9a56f") {
    return `<svg viewBox="0 0 120 120" role="img" aria-label="cute puppy">
      <ellipse cx="22" cy="62" rx="15" ry="28" fill="${ear}" transform="rotate(12 22 62)"/>
      <ellipse cx="98" cy="62" rx="15" ry="28" fill="${ear}" transform="rotate(-12 98 62)"/>
      <circle cx="60" cy="64" r="40" fill="${fur}"/>
      <ellipse cx="60" cy="80" rx="22" ry="17" fill="#fff" opacity=".75"/>
      <circle cx="44" cy="58" r="5.5" fill="${INK}"/><circle cx="76" cy="58" r="5.5" fill="${INK}"/>
      <circle cx="46" cy="56" r="1.8" fill="#fff"/><circle cx="78" cy="56" r="1.8" fill="#fff"/>
      <ellipse cx="60" cy="73" rx="8" ry="5.5" fill="${INK}"/>
      <path d="M60 78 L60 84 M60 84 Q52 92 46 84 M60 84 Q68 92 74 84" stroke="${INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <ellipse cx="60" cy="92" rx="6" ry="7" fill="#ff8fb1"/>
      <circle cx="33" cy="72" r="6" fill="#ffb3c7" opacity=".6"/><circle cx="87" cy="72" r="6" fill="#ffb3c7" opacity=".6"/>
    </svg>`;
  },
  bunny(fur = "#fff", inner = "#ffc2d4") {
    return `<svg viewBox="0 0 120 120" role="img" aria-label="cute bunny">
      <ellipse cx="42" cy="26" rx="11" ry="28" fill="${fur}" stroke="#eadff0" stroke-width="2" transform="rotate(-8 42 26)"/>
      <ellipse cx="78" cy="26" rx="11" ry="28" fill="${fur}" stroke="#eadff0" stroke-width="2" transform="rotate(8 78 26)"/>
      <ellipse cx="42" cy="28" rx="5" ry="20" fill="${inner}" transform="rotate(-8 42 28)"/>
      <ellipse cx="78" cy="28" rx="5" ry="20" fill="${inner}" transform="rotate(8 78 28)"/>
      <circle cx="60" cy="74" r="38" fill="${fur}" stroke="#eadff0" stroke-width="2"/>
      <circle cx="46" cy="70" r="5" fill="${INK}"/><circle cx="74" cy="70" r="5" fill="${INK}"/>
      <circle cx="48" cy="68" r="1.7" fill="#fff"/><circle cx="76" cy="68" r="1.7" fill="#fff"/>
      <ellipse cx="60" cy="80" rx="4" ry="3" fill="#ff8fb1"/>
      <path d="M60 83 Q60 90 54 89 M60 83 Q60 90 66 89" stroke="${INK}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <circle cx="36" cy="82" r="6" fill="${inner}" opacity=".7"/><circle cx="84" cy="82" r="6" fill="${inner}" opacity=".7"/>
    </svg>`;
  }
};

/* ---------- 2. DATA (edit these to change the website's content!) ---------- */
const drinks = [
  { name: "Strawberry Cloud Latte", desc: "Pink milk, espresso, whipped cloud", price: 220, type: ["hot", "iced"], icon: "🍓", tint: "#ffd3e0" },
  { name: "Mochi Matcha",           desc: "Ceremonial matcha with mochi bits",  price: 240, type: ["hot", "iced"], icon: "🍵", tint: "#d3f2e3" },
  { name: "Kitty Cappuccino",       desc: "Latte art with a tiny cat face",     price: 190, type: ["hot"],         icon: "🐱", tint: "#ffe0cc" },
  { name: "Puppuccino",             desc: "Vanilla froth, safe for pups too",   price: 90,  type: ["hot", "sweet"], icon: "🐶", tint: "#fff2bd" },
  { name: "Lavender Honey Latte",   desc: "Floral, sweet, and calming",         price: 230, type: ["hot", "iced"], icon: "💜", tint: "#e4d9ff" },
  { name: "Cotton Candy Cold Brew", desc: "Cold brew topped with candy floss",  price: 250, type: ["iced", "sweet"], icon: "🍭", tint: "#d3e9ff" },
  { name: "Blueberry Bubble Tea",   desc: "Tapioca pearls + blueberry cream",   price: 210, type: ["iced", "sweet"], icon: "🫐", tint: "#d3e9ff" },
  { name: "Caramel Cuddle Mocha",   desc: "Chocolate, caramel and a warm hug",  price: 220, type: ["hot", "sweet"], icon: "🍯", tint: "#ffe0cc" },
  { name: "Paw Print Cookies",      desc: "Butter cookies, 3 pieces",           price: 120, type: ["sweet"],       icon: "🍪", tint: "#fff2bd" },
  { name: "Bunny Cheesecake",       desc: "Mini strawberry cheesecake slice",   price: 180, type: ["sweet"],       icon: "🍰", tint: "#ffd3e0" }
];

const offers = [
  { icon: "🎂", title: "Birthday Treat",    text: "Free cupcake + a pup photo on your birthday week.", code: "BDAYPAW", tint: "#ffd3e0" },
  { icon: "🎓", title: "Student Sip",       text: "15% off any drink with your college ID.",           code: "STUDY15", tint: "#e4d9ff" },
  { icon: "🐾", title: "Combo Cuddle",      text: "Any coffee + 30 mins of pet play for just ₹299.",   code: "CUDDLE299", tint: "#d3f2e3" },
  { icon: "☔", title: "Rainy Day Special", text: "Buy 1 hot drink, get a cookie free when it rains.", code: "RAINYDAY", tint: "#d3e9ff" }
];

const books = [
  { title: "The Cat Who Loved Books", emoji: "🐈", note: "Cozy fiction · 3 days", tint: "#ffd3e0" },
  { title: "Tiny Habits",              emoji: "🌱", note: "Self-help · 1 week",   tint: "#d3f2e3" },
  { title: "Manga Corner Vol. 1",      emoji: "🎌", note: "Manga · stay & read",  tint: "#e4d9ff" },
  { title: "Wings of Fire",            emoji: "🔥", note: "Autobiography · 1 week", tint: "#ffe0cc" },
  { title: "Poems for Rainy Days",     emoji: "🌧️", note: "Poetry · stay & read", tint: "#d3e9ff" },
  { title: "Recipes with Love",        emoji: "🍳", note: "Cookbook · 3 days",    tint: "#fff2bd" }
];

const pets = [
  { name: "Mochi",    kind: "cat", age: "1 yr",   tags: ["Cuddly", "Sleepy"],    fur: "#ffffff", inner: "#ffb3c7", tint: "#ffd3e0", about: "Loves laps and warm windows." },
  { name: "Biscuit",  kind: "dog", age: "8 mo",   tags: ["Playful", "Fetch pro"], fur: "#f5d2a8", inner: "#d9a56f", tint: "#fff2bd", about: "Will bring you every toy he owns." },
  { name: "Luna",     kind: "cat", age: "2 yrs",  tags: ["Shy", "Gentle"],        fur: "#d9d4e8", inner: "#c9b8f5", tint: "#e4d9ff", about: "Takes time, then purrs forever." },
  { name: "Waffles",  kind: "dog", age: "1.5 yrs", tags: ["Goofy", "Kid-friendly"], fur: "#ffe3b3", inner: "#e8b878", tint: "#ffe0cc", about: "Zoomies champion, belly rub lover." },
  { name: "Peanut",   kind: "cat", age: "6 mo",   tags: ["Kitten", "Zoomies"],    fur: "#ffd9b8", inner: "#ffb3c7", tint: "#d3f2e3", about: "Chases every shoelace in sight." },
  { name: "Cookie",   kind: "dog", age: "3 yrs",  tags: ["Calm", "Cuddler"],      fur: "#c9a27a", inner: "#8d6a4a", tint: "#d3e9ff", about: "A gentle soul who loves quiet walks." }
];

/* tiny helper */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- 3. FLOATING BACKGROUND DECOR ---------- */
(function floaties() {
  const box = $("#floaties");
  const icons = ["🫧", "🐾", "☁️", "💗", "✨", "🫧", "🐾"];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement("span");
    el.className = "floaty";
    el.textContent = icons[i % icons.length];
    el.style.left = Math.random() * 100 + "%";
    el.style.fontSize = 16 + Math.random() * 22 + "px";
    el.style.animationDuration = 14 + Math.random() * 16 + "s";
    el.style.animationDelay = -Math.random() * 25 + "s";
    box.appendChild(el);
  }
})();

/* ---------- 4. MENU + OFFERS ---------- */
const menuGrid = $("#menuGrid");
function renderMenu(filter = "all") {
  menuGrid.innerHTML = "";
  drinks
    .filter(d => filter === "all" || d.type.includes(filter))
    .forEach(d => {
      const card = document.createElement("article");
      card.className = "drink pop";
      card.style.setProperty("--tint", d.tint);
      card.innerHTML = `
        <div class="cup" aria-hidden="true">${d.icon}</div>
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <span class="price">₹${d.price}</span>`;
      menuGrid.appendChild(card);
    });
}
$("#menuChips").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  $$("#menuChips .chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  renderMenu(chip.dataset.filter);
});
renderMenu();

const offerGrid = $("#offerGrid");
offers.forEach(o => {
  const t = document.createElement("button");
  t.className = "ticket";
  t.style.setProperty("--tint", o.tint);
  t.innerHTML = `
    <div class="t-icon" aria-hidden="true">${o.icon}</div>
    <h3>${o.title}</h3>
    <p>${o.text}</p>
    <span class="code">${o.code}</span><span class="copied">Copied! ✓</span>`;
  t.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(o.code); } catch (_) { /* clipboard may be blocked; still show the tick */ }
    t.classList.add("done");
    setTimeout(() => t.classList.remove("done"), 2000);
  });
  offerGrid.appendChild(t);
});

/* ---------- 5. BOOK NOOK ---------- */
const shelf = $("#shelf");
books.forEach(b => {
  const el = document.createElement("button");
  el.className = "book";
  el.setAttribute("aria-label", `${b.title}. Tap to flip.`);
  el.innerHTML = `
    <div class="book-inner">
      <div class="book-face book-front" style="--tint:${b.tint}"><span class="emoji" aria-hidden="true">${b.emoji}</span><b>${b.title}</b></div>
      <div class="book-face book-back"><b>${b.title}</b><span>${b.note}</span></div>
    </div>`;
  el.addEventListener("click", () => el.classList.toggle("flipped"));
  shelf.appendChild(el);
});

const TOTAL_SEATS = 8;
let taken = 2;
const seatDots = $("#seatDots"), seatCount = $("#seatCount"), seatBtn = $("#seatBtn"), seatMsg = $("#seatMsg");
function renderSeats() {
  seatDots.innerHTML = "";
  for (let i = 0; i < TOTAL_SEATS; i++) {
    const d = document.createElement("span");
    d.className = "dot" + (i < taken ? " taken" : "");
    seatDots.appendChild(d);
  }
  seatCount.textContent = TOTAL_SEATS - taken;
  seatBtn.disabled = taken >= TOTAL_SEATS;
  if (taken >= TOTAL_SEATS) seatBtn.textContent = "All seats taken 😿";
}
seatBtn.addEventListener("click", () => {
  if (taken < TOTAL_SEATS) {
    taken++;
    renderSeats();
    seatMsg.textContent = "Seat saved for 30 minutes! 🪑💕";
  }
});
renderSeats();

/* ---------- 6. PETS: carousel + modal ---------- */
const carousel = $("#petCarousel");
function renderPets(filter = "all") {
  carousel.innerHTML = "";
  pets.filter(p => filter === "all" || p.kind === filter).forEach(p => {
    const card = document.createElement("article");
    card.className = "pet";
    card.style.setProperty("--tint", p.tint);
    card.innerHTML = `
      <div class="pet-face">${animals[p.kind](p.fur, p.inner)}</div>
      <h3>${p.name}</h3>
      <p class="meta">${p.kind === "cat" ? "Cat" : "Pup"} · ${p.age}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="pet-actions">
        <button class="btn btn-sm" data-act="adopt" data-name="${p.name}">Adopt me 💕</button>
        <button class="btn btn-sm btn-ghost" data-act="play" data-name="${p.name}">Play 🎾</button>
      </div>`;
    carousel.appendChild(card);
  });
  carousel.scrollTo({ left: 0 });
}
$("#petChips").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  $$("#petChips .chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  renderPets(chip.dataset.filter);
});
const step = () => (carousel.querySelector(".pet")?.offsetWidth || 250) + 20;
$("#nextPet").addEventListener("click", () => carousel.scrollBy({ left: step() }));
$("#prevPet").addEventListener("click", () => carousel.scrollBy({ left: -step() }));
carousel.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") carousel.scrollBy({ left: step() });
  if (e.key === "ArrowLeft")  carousel.scrollBy({ left: -step() });
});
renderPets();

/* modal */
const modal = $("#modal"), adoptForm = $("#adoptForm"), modalMsg = $("#modalMsg");
let currentPet = null, currentAct = "adopt", lastFocus = null;

function openModal(pet, act) {
  currentPet = pet; currentAct = act; lastFocus = document.activeElement;
  $("#modalPet").style.setProperty("--tint", pet.tint);
  $("#modalPet").innerHTML = animals[pet.kind](pet.fur, pet.inner);
  $("#modalTitle").textContent = act === "adopt" ? `Adopt ${pet.name}?` : `Play with ${pet.name}`;
  $("#modalIntro").textContent = act === "adopt"
    ? `${pet.about} Leave your details and our team will call you to arrange a meet-up.`
    : `${pet.about} Book a 30-minute play slot and we'll keep ${pet.name} ready.`;
  $("#aSubmit").textContent = act === "adopt" ? "Send adoption request" : "Book play time";
  modalMsg.textContent = ""; modalMsg.className = "modal-msg";
  adoptForm.reset();
  modal.hidden = false;
  $("#aName").focus();
}
function closeModal() { modal.hidden = true; lastFocus?.focus(); }

carousel.addEventListener("click", e => {
  const btn = e.target.closest("button[data-act]");
  if (!btn) return;
  openModal(pets.find(p => p.name === btn.dataset.name), btn.dataset.act);
});
$("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

adoptForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#aName").value.trim(), email = $("#aEmail").value.trim();
  const okEmail = /^\S+@\S+\.\S+$/.test(email);
  if (!name || !okEmail) {
    modalMsg.textContent = "Please add your name and a valid email.";
    modalMsg.className = "modal-msg error";
    return;
  }
  modalMsg.className = "modal-msg";
  modalMsg.textContent = currentAct === "adopt"
    ? `Yay ${name}! ${currentPet.name} can't wait to meet you 💕`
    : `See you soon, ${name}! ${currentPet.name} is excited 🎾`;
  setTimeout(closeModal, 2200);
});

/* ---------- 7. OPENING HOURS ("open now?") ---------- */
(function openNow() {
  const el = $("#openNow");
  const now = new Date(), day = now.getDay(), hour = now.getHours();
  const weekend = day === 0 || day === 6;
  const open = weekend ? 8 : 9, close = weekend ? 22 : 21;
  const isOpen = hour >= open && hour < close;
  el.textContent = isOpen ? "We're open right now! 🟢" : "We're closed right now 🌙";
  el.classList.add(isOpen ? "open" : "closed");
})();

/* ---------- 8. DONATE ---------- */
(function donate() {
  const GOAL = 30000;
  let raised = 18500, amount = 500;
  const raisedEl = $("#raised"), fill = $("#fill"), bar = $("#bar"), msg = $("#donateMsg"), custom = $("#customAmt");
  const fmt = n => "₹" + n.toLocaleString("en-IN");

  function paint() {
    raisedEl.textContent = fmt(raised);
    fill.style.width = Math.min(100, (raised / GOAL) * 100) + "%";
    bar.setAttribute("aria-valuenow", raised);
  }
  setTimeout(paint, 300); // small delay so the bar animates in

  $("#amounts").addEventListener("click", e => {
    const b = e.target.closest(".amt");
    if (!b) return;
    $$("#amounts .amt").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    amount = Number(b.dataset.amt);
    custom.value = "";
  });
  custom.addEventListener("input", () => {
    if (custom.value) { $$("#amounts .amt").forEach(x => x.classList.remove("active")); amount = Number(custom.value); }
  });

  $("#donateBtn").addEventListener("click", e => {
    if (!amount || amount < 10) { msg.style.color = "#d9577f"; msg.textContent = "Please choose or type at least ₹10."; return; }
    raised += amount;
    paint();
    msg.style.color = "#3c9d78";
    msg.textContent = `Thank you for ${fmt(amount)}! The pups are wagging their tails 🐶💕`;
    const r = e.currentTarget.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const h = document.createElement("span");
      h.className = "heart"; h.textContent = ["💗", "🐾", "💝", "✨"][i % 4];
      h.style.left = r.left + Math.random() * r.width + "px";
      h.style.top = r.top + "px";
      h.style.animationDelay = i * 0.08 + "s";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1800);
    }
  });
})();

/* ---------- 9. BUBBLE MENU + PEEKING ANIMALS ---------- */
const fab = $("#fabMenu"), fabBtn = $("#fabBtn");
function setFab(open) {
  fab.classList.toggle("open", open);
  fabBtn.setAttribute("aria-expanded", open);
  fabBtn.setAttribute("aria-label", open ? "Close bubble menu" : "Open bubble menu");
}
fabBtn.addEventListener("click", () => setFab(!fab.classList.contains("open")));
$$(".fab-item").forEach(a => a.addEventListener("click", () => setFab(false)));
document.addEventListener("click", e => { if (!fab.contains(e.target)) setFab(false); });

/* animals that pop up from the section edges */
$$(".peeker").forEach(p => {
  const kind = p.dataset.animal;
  const v = p.dataset.variant === "2";
  const colours = {
    cat:   v ? ["#d9d4e8", "#c9b8f5"] : ["#ffd9b8", "#ffb3c7"],
    dog:   v ? ["#c9a27a", "#8d6a4a"] : ["#f5d2a8", "#d9a56f"],
    bunny: v ? ["#ffe3ef", "#ffb3c7"] : ["#ffffff", "#ffc2d4"]
  }[kind];
  p.innerHTML = animals[kind](...colours);
  p.setAttribute("role", "button");
  p.setAttribute("tabindex", "0");
  p.setAttribute("aria-label", `Say hi to the ${kind}`);

  const talk = () => {
    if ($(".speech", p)) return;
    const s = document.createElement("div");
    s.className = "speech"; s.textContent = p.dataset.says;
    p.appendChild(s);
    setTimeout(() => s.remove(), 2200);
  };
  p.addEventListener("click", talk);
  p.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); talk(); } });
});

const peekObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    const peeker = en.target.querySelector(".peeker");
    if (peeker) peeker.classList.toggle("show", en.isIntersecting);
  });
}, { threshold: 0.25 });
$$("header.hero, section.section").forEach(s => peekObserver.observe(s));
