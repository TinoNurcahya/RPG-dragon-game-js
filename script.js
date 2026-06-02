// =============================================
// LANGUAGE / i18n SYSTEM
// =============================================
let currentLang = "en";

const translations = {
  en: {
    // Static UI Labels
    xp: "XP",
    health: "Health",
    gold: "Gold",
    inventory: "Inventory",
    // Character Titles
    titleNovice: "Dragon Slayer",
    titleMid: "Wyrm Hunter",
    titleLegend: "Legendary Hero",
    // Welcome
    welcome: 'Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.',
    // Location texts
    locTownSquare: 'You are in the town square. You see a sign that says "Store".',
    locStore: "You enter the store.",
    locCave: "You enter the cave. You see some monsters.",
    locFight: "You are fighting a monster.",
    locKillMonster: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
    locLose: "You die. &#x2620;",
    locWin: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    locEasterEgg: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    // Buttons
    btnGoStore: "Go to store",
    btnGoCave: "Go to cave",
    btnFightDragon: "Fight dragon",
    btnBuyHealth: "Buy 10 health (10 gold)",
    btnBuyWeapon: "Buy weapon (30 gold)",
    btnGoTown: "Go to town square",
    btnFightSlime: "Fight slime",
    btnFightBeast: "Fight fanged beast",
    btnAttack: "Attack",
    btnDodge: "Dodge",
    btnRun: "Run",
    btnReplay: "REPLAY?",
    btnPickNum2: "2",
    btnPickNum8: "8",
    btnGoTownQ: "Go to town square?",
    // Store messages
    storeBoughtHealth: '<i class="fa-solid fa-prescription-bottle-medical"></i> You bought 10 Health for 10 Gold.',
    storeNoGoldHealth: '<i class="fa-solid fa-circle-xmark"></i> You do not have enough gold to buy health.',
    storeBoughtWeapon: '<i class="fa-solid fa-hammer"></i> You purchased a <strong>{weapon}</strong>!',
    storeNoGoldWeapon: '<i class="fa-solid fa-circle-xmark"></i> You do not have enough gold to buy a weapon.',
    storeMaxWeapon: "You already have the most powerful weapon!",
    storeSellWeapon: "Sell weapon for 15 gold",
    storeSoldWeapon: '<i class="fa-solid fa-coins"></i> You sold a <strong>{weapon}</strong> for 15 Gold.',
    storeSellOnlyWeapon: "<i class=\"fa-solid fa-triangle-exclamation\"></i> Don't sell your only weapon!",
    // Combat messages
    monsterAttacks: '<i class="fa-solid fa-dragon"></i> <strong>The {monster}</strong> attacks!',
    playerTookDamage: "You took <strong>{damage} damage</strong>.",
    monsterMissed: "The attack missed you!",
    playerAttacks: '<i class="fa-solid fa-gavel"></i> You strike back with your <strong>{weapon}</strong>.',
    criticalHit: '🔥 <strong>CRITICAL HIT!</strong> You hit the {monster} for <strong>{damage} damage</strong>!',
    normalHit: "You hit the {monster} for <strong>{damage} damage</strong>!",
    playerMissed: "Your attack <strong>missed</strong> the {monster}.",
    monsterBlocked: '<i class="fa-solid fa-shield"></i> The {monster} <strong>blocked</strong> your attack!',
    weaponBroke: '<i class="fa-solid fa-burst"></i> Your <strong>{weapon}</strong> broke!',
    dodgeSuccess: '<i class="fa-solid fa-person-running"></i> You dodged the {monster}\'s attack successfully!',
    dodgeFail: '<i class="fa-solid fa-person-falling-burst"></i> You tried to dodge but got hit for <strong>{damage} damage</strong>!',
    lootGold: '💰 You looted <strong>{gold} Gold</strong> (Base: {base} Gold) and gained <strong>{xp} XP</strong>!',
    // Easter egg
    eggPicked: "You picked {guess}. Here are the random numbers:",
    eggWin: '<i class="fa-solid fa-trophy"></i> Right! You win 20 gold!',
    eggLose: '<i class="fa-solid fa-face-frown"></i> Wrong! You lose 10 health!',
    // Monster names
    monsterSlime: "slime",
    monsterBeast: "fanged beast",
    monsterDragon: "dragon",
  },
  id: {
    xp: "XP",
    health: "Kesehatan",
    gold: "Emas",
    inventory: "Inventaris",
    titleNovice: "Pembasmi Naga",
    titleMid: "Pemburu Wyrm",
    titleLegend: "Pahlawan Legendaris",
    welcome: 'Selamat datang di Dragon Repeller. Kamu harus mengalahkan naga yang menghalangi penduduk kota. Kamu berada di alun-alun kota. Kemana kamu ingin pergi? Gunakan tombol di atas.',
    locTownSquare: 'Kamu berada di alun-alun kota. Kamu melihat papan bertuliskan "Toko".',
    locStore: "Kamu memasuki toko.",
    locCave: "Kamu memasuki gua. Kamu melihat beberapa monster.",
    locFight: "Kamu sedang bertarung melawan monster.",
    locKillMonster: 'Monster itu berteriak "Arg!" saat sekarat. Kamu mendapatkan poin pengalaman dan menemukan emas.',
    locLose: "Kamu mati. &#x2620;",
    locWin: "Kamu mengalahkan naga! KAMU MENANG! &#x1F389;",
    locEasterEgg: "Kamu menemukan permainan rahasia. Pilih angka di atas. Sepuluh angka akan dipilih secara acak antara 0 dan 10. Jika angkamu cocok dengan salah satu angka acak, kamu menang!",
    btnGoStore: "Pergi ke toko",
    btnGoCave: "Pergi ke gua",
    btnFightDragon: "Lawan naga",
    btnBuyHealth: "Beli 10 nyawa (10 emas)",
    btnBuyWeapon: "Beli senjata (30 emas)",
    btnGoTown: "Kembali ke alun-alun",
    btnFightSlime: "Lawan slime",
    btnFightBeast: "Lawan buas bertaring",
    btnAttack: "Serang",
    btnDodge: "Hindari",
    btnRun: "Lari",
    btnReplay: "MAIN LAGI?",
    btnPickNum2: "2",
    btnPickNum8: "8",
    btnGoTownQ: "Kembali ke alun-alun?",
    storeBoughtHealth: '<i class="fa-solid fa-prescription-bottle-medical"></i> Kamu membeli 10 Nyawa seharga 10 Emas.',
    storeNoGoldHealth: '<i class="fa-solid fa-circle-xmark"></i> Emas kamu tidak cukup untuk membeli nyawa.',
    storeBoughtWeapon: '<i class="fa-solid fa-hammer"></i> Kamu membeli <strong>{weapon}</strong>!',
    storeNoGoldWeapon: '<i class="fa-solid fa-circle-xmark"></i> Emas kamu tidak cukup untuk membeli senjata.',
    storeMaxWeapon: "Kamu sudah memiliki senjata paling kuat!",
    storeSellWeapon: "Jual senjata (dapat 15 emas)",
    storeSoldWeapon: '<i class="fa-solid fa-coins"></i> Kamu menjual <strong>{weapon}</strong> seharga 15 Emas.',
    storeSellOnlyWeapon: '<i class="fa-solid fa-triangle-exclamation"></i> Jangan jual satu-satunya senjatamu!',
    monsterAttacks: '<i class="fa-solid fa-dragon"></i> <strong>{monster}</strong> menyerang!',
    playerTookDamage: "Kamu menerima <strong>{damage} kerusakan</strong>.",
    monsterMissed: "Serangan musuh meleset!",
    playerAttacks: '<i class="fa-solid fa-gavel"></i> Kamu balas menyerang dengan <strong>{weapon}</strong>.',
    criticalHit: '🔥 <strong>SERANGAN KRITIS!</strong> Kamu memukul {monster} sebesar <strong>{damage} kerusakan</strong>!',
    normalHit: "Kamu memukul {monster} sebesar <strong>{damage} kerusakan</strong>!",
    playerMissed: "Seranganmu <strong>meleset</strong> dari {monster}.",
    monsterBlocked: '<i class="fa-solid fa-shield"></i> {monster} <strong>menangkis</strong> seranganmu!',
    weaponBroke: '<i class="fa-solid fa-burst"></i> <strong>{weapon}</strong>-mu hancur!',
    dodgeSuccess: '<i class="fa-solid fa-person-running"></i> Kamu berhasil menghindari serangan {monster}!',
    dodgeFail: '<i class="fa-solid fa-person-falling-burst"></i> Kamu mencoba menghindar tapi terkena <strong>{damage} kerusakan</strong>!',
    lootGold: '💰 Kamu mendapatkan <strong>{gold} Emas</strong> (Dasar: {base} Emas) dan <strong>{xp} XP</strong>!',
    eggPicked: "Kamu memilih {guess}. Ini angka-angka acaknya:",
    eggWin: '<i class="fa-solid fa-trophy"></i> Benar! Kamu menang 20 emas!',
    eggLose: '<i class="fa-solid fa-face-frown"></i> Salah! Kamu kehilangan 10 nyawa!',
    monsterSlime: "slime",
    monsterBeast: "buas bertaring",
    monsterDragon: "naga",
  },
  jp: {
    xp: "経験値",
    health: "体力",
    gold: "ゴールド",
    inventory: "所持品",
    titleNovice: "竜殺し",
    titleMid: "ワームハンター",
    titleLegend: "伝説の勇者",
    welcome: 'ドラゴンリペラーへようこそ。町を封鎖しているドラゴンを倒さなければなりません。あなたは町の広場にいます。どこへ行きますか？上のボタンを使ってください。',
    locTownSquare: 'あなたは町の広場にいます。「店」という看板が見えます。',
    locStore: "あなたは店に入りました。",
    locCave: "あなたは洞窟に入りました。モンスターが見えます。",
    locFight: "あなたはモンスターと戦っています。",
    locKillMonster: 'モンスターは「ウオォ！」と叫びながら死にました。経験値とゴールドを手に入れました。',
    locLose: "あなたは死にました。&#x2620;",
    locWin: "ドラゴンを倒した！ゲームクリア！&#x1F389;",
    locEasterEgg: "隠しゲームを発見しました！上の数字を選んでください。0〜10の数字が10個ランダムに選ばれます。あなたの数字が一致したら勝ちです！",
    btnGoStore: "店へ行く",
    btnGoCave: "洞窟へ行く",
    btnFightDragon: "ドラゴンと戦う",
    btnBuyHealth: "体力+10購入（10G）",
    btnBuyWeapon: "武器を購入（30G）",
    btnGoTown: "広場へ戻る",
    btnFightSlime: "スライムと戦う",
    btnFightBeast: "牙の獣と戦う",
    btnAttack: "攻撃",
    btnDodge: "回避",
    btnRun: "逃げる",
    btnReplay: "もう一度？",
    btnPickNum2: "2",
    btnPickNum8: "8",
    btnGoTownQ: "広場へ戻る？",
    storeBoughtHealth: '<i class="fa-solid fa-prescription-bottle-medical"></i> 体力10を10Gで購入しました。',
    storeNoGoldHealth: '<i class="fa-solid fa-circle-xmark"></i> 体力を買うゴールドが足りません。',
    storeBoughtWeapon: '<i class="fa-solid fa-hammer"></i> <strong>{weapon}</strong>を購入しました！',
    storeNoGoldWeapon: '<i class="fa-solid fa-circle-xmark"></i> 武器を買うゴールドが足りません。',
    storeMaxWeapon: "すでに最強の武器を持っています！",
    storeSellWeapon: "武器を15Gで売る",
    storeSoldWeapon: '<i class="fa-solid fa-coins"></i> <strong>{weapon}</strong>を15Gで売りました。',
    storeSellOnlyWeapon: '<i class="fa-solid fa-triangle-exclamation"></i> 唯一の武器を売ってはいけません！',
    monsterAttacks: '<i class="fa-solid fa-dragon"></i> <strong>{monster}</strong>が攻撃してきた！',
    playerTookDamage: "<strong>{damage}のダメージ</strong>を受けました。",
    monsterMissed: "敵の攻撃はかわした！",
    playerAttacks: '<i class="fa-solid fa-gavel"></i> <strong>{weapon}</strong>で反撃した！',
    criticalHit: '🔥 <strong>クリティカルヒット！</strong> {monster}に<strong>{damage}ダメージ</strong>を与えた！',
    normalHit: "{monster}に<strong>{damage}ダメージ</strong>を与えた！",
    playerMissed: "{monster}への攻撃が<strong>外れた</strong>。",
    monsterBlocked: '<i class="fa-solid fa-shield"></i> {monster}が攻撃を<strong>ガードした</strong>！',
    weaponBroke: '<i class="fa-solid fa-burst"></i> <strong>{weapon}</strong>が壊れてしまった！',
    dodgeSuccess: '<i class="fa-solid fa-person-running"></i> {monster}の攻撃をうまく回避した！',
    dodgeFail: '<i class="fa-solid fa-person-falling-burst"></i> 回避しようとしたが、<strong>{damage}ダメージ</strong>を受けた！',
    lootGold: '💰 <strong>{gold}G</strong>（基本: {base}G）と<strong>経験値{xp}</strong>を獲得した！',
    eggPicked: "{guess}を選びました。ランダムな数字：",
    eggWin: '<i class="fa-solid fa-trophy"></i> 正解！20G獲得！',
    eggLose: '<i class="fa-solid fa-face-frown"></i> 不正解！体力が10減った！',
    monsterSlime: "スライム",
    monsterBeast: "牙の獣",
    monsterDragon: "ドラゴン",
  }
};

// Helper: get translated string, replace placeholders like {weapon}, {monster}, etc.
function t(key, vars = {}) {
  let str = translations[currentLang][key] || translations["en"][key] || key;
  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }
  return str;
}

function setLanguage(lang) {
  currentLang = lang;
  // Update html lang attribute for accessibility & SEO
  const langMap = {en: "en", id: "id", jp: "ja"};
  document.documentElement.lang = langMap[lang] || "en";
  // Update active button
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById("lang-" + lang);
  if (activeBtn) activeBtn.classList.add("active");
  // Update static data-i18n labels
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  // Refresh monster names to match current lang
  updateMonsterNamesForLang();
  // Re-render current location text and buttons
  refreshCurrentLocationLang();
}

// =============================================
// GAME STATE
// =============================================
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let currentLocationIndex = 0; // track active location index

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// New UI Elements
const healthBar = document.querySelector("#healthBar");
const monsterHealthBar = document.querySelector("#monsterHealthBar");
const inventoryList = document.querySelector("#inventoryList");
const textContainer = document.querySelector("#text-container");
const gamePanel = document.querySelector("#game");
const viewportArtwork = document.querySelector("#viewport-artwork");

// =============================================
// AUDIO
// =============================================
let audioCtx;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSound(type) {
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === "hit") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now); osc.stop(now + 0.15);
    } else if (type === "critical") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.35);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now); osc.stop(now + 0.35);
    } else if (type === "damage") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(50, now + 0.2);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now); osc.stop(now + 0.2);
    } else if (type === "heal") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      osc.frequency.setValueAtTime(1046.50, now + 0.24);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.start(now); osc.stop(now + 0.4);
    } else if (type === "win") {
      const notes = [261.63, 329.63, 392.00, 523.25];
      notes.forEach((freq, idx) => {
        const time = now + idx * 0.12;
        const oscNote = audioCtx.createOscillator();
        const gainNote = audioCtx.createGain();
        oscNote.type = "sine";
        oscNote.frequency.value = freq;
        oscNote.connect(gainNote);
        gainNote.connect(audioCtx.destination);
        gainNote.gain.setValueAtTime(0.2, time);
        gainNote.gain.exponentialRampToValueAtTime(0.01, time + 0.35);
        oscNote.start(time); oscNote.stop(time + 0.35);
      });
    } else if (type === "lose") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(40, now + 0.6);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now); osc.stop(now + 0.6);
    } else if (type === "buy") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.setValueAtTime(1318.51, now + 0.06);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now); osc.stop(now + 0.2);
    }
  } catch (e) {
    console.log("Audio error:", e);
  }
}

// =============================================
// PARTICLES
// =============================================
function initParticles() {
  const container = document.getElementById("particles-container");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 8 + 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = (Math.random() * 100) + "%";
    particle.style.animationDelay = (Math.random() * 6) + "s";
    particle.style.setProperty("--duration", (Math.random() * 4 + 4) + "s");
    particle.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    container.appendChild(particle);
  }
}

function triggerBurst() {
  const container = document.getElementById("particles-container");
  if (!container) return;
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 6 + 6;
    const duration = Math.random() * 2 + 1.5;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = (Math.random() * 80 + 10) + "%";
    particle.style.bottom = "50px";
    particle.style.setProperty("--duration", duration + "s");
    particle.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");
    container.appendChild(particle);
    setTimeout(() => particle.remove(), duration * 1000);
  }
}

// =============================================
// ARTWORK VIEWPORT
// =============================================
function setArtwork(src) {
  if (!viewportArtwork) return;
  viewportArtwork.classList.add("fade-out");
  setTimeout(() => {
    viewportArtwork.src = src;
    viewportArtwork.classList.remove("fade-out");
  }, 400);
}

// =============================================
// GAME DATA
// =============================================
const weapons = [
  {name: "stick", power: 5},
  {name: "dagger", power: 30},
  {name: "claw hammer", power: 50},
  {name: "sword", power: 100},
];

const monsters = [
  {nameKey: "monsterSlime", level: 2, health: 15},
  {nameKey: "monsterBeast", level: 8, health: 60},
  {nameKey: "monsterDragon", level: 20, health: 300},
];

// Returns monster display name in current language
function getMonsterName(idx) {
  return t(monsters[idx].nameKey);
}

// Locations use keys for i18n
const locations = [
  {
    name: "town square",
    index: 0,
    buttonKeys: ["btnGoStore", "btnGoCave", "btnFightDragon"],
    "button functions": [goStore, goCave, fightDragon],
    textKey: "locTownSquare",
    artwork: "assets/town_square.png",
  },
  {
    name: "store",
    index: 1,
    buttonKeys: ["btnBuyHealth", "btnBuyWeapon", "btnGoTown"],
    "button functions": [buyHealth, buyWeapon, goTown],
    textKey: "locStore",
    artwork: "assets/store.png",
  },
  {
    name: "cave",
    index: 2,
    buttonKeys: ["btnFightSlime", "btnFightBeast", "btnGoTown"],
    "button functions": [fightSlime, fightBeast, goTown],
    textKey: "locCave",
    artwork: "assets/cave.png",
  },
  {
    name: "fight",
    index: 3,
    buttonKeys: ["btnAttack", "btnDodge", "btnRun"],
    "button functions": [attack, dodge, goTown],
    textKey: "locFight",
    artwork: null, // set dynamically per monster
  },
  {
    name: "kill monster",
    index: 4,
    buttonKeys: ["btnGoTown", "btnGoTown", "btnGoTown"],
    "button functions": [goTown, goTown, easterEgg],
    textKey: "locKillMonster",
    artwork: "assets/town_square.png",
  },
  {
    name: "lose",
    index: 5,
    buttonKeys: ["btnReplay", "btnReplay", "btnReplay"],
    "button functions": [restart, restart, restart],
    textKey: "locLose",
    artwork: "assets/cave.png",
  },
  {
    name: "win",
    index: 6,
    buttonKeys: ["btnReplay", "btnReplay", "btnReplay"],
    "button functions": [restart, restart, restart],
    textKey: "locWin",
    artwork: "assets/town_square.png",
  },
  {
    name: "easter egg",
    index: 7,
    buttonKeys: ["btnPickNum2", "btnPickNum8", "btnGoTownQ"],
    "button functions": [pickTwo, pickEight, goTown],
    textKey: "locEasterEgg",
    artwork: "assets/store.png",
  },
];

// Re-render buttons & initial text when language changes (without changing game state)
function refreshCurrentLocationLang() {
  const loc = locations[currentLocationIndex];
  if (!loc) return;
  button1.innerText = t(loc.buttonKeys[0]);

  // Special: if on store screen and sell weapon override is active, re-translate that
  const isSellMode = loc.name === "store" && button2.onclick === sellWeapon;
  if (isSellMode) {
    button2.innerText = t("storeSellWeapon");
  } else {
    button2.innerText = t(loc.buttonKeys[1]);
  }

  button3.innerText = t(loc.buttonKeys[2]);

  // Update stat labels
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  // Refresh player title
  updateStats();

  // If currently in fight, refresh monster name display
  if (loc.name === "fight" && fighting !== undefined) {
    monsterName.innerText = getMonsterName(fighting);
  }
}

function updateMonsterNamesForLang() {
  if (currentLocationIndex === 3 && fighting !== undefined) {
    monsterName.innerText = getMonsterName(fighting);
  }
}

// =============================================
// UI HELPERS
// =============================================
function updateStats() {
  xpText.innerText = xp;
  goldText.innerText = gold;
  healthText.innerText = health;
  healthBar.style.width = Math.max(0, Math.min(100, health)) + "%";

  const playerLvlEl = document.querySelector("#playerLvl");
  const playerTitleEl = document.querySelector("#playerTitle");
  const lvl = Math.floor(xp / 15) + 1;
  if (playerLvlEl) playerLvlEl.innerText = lvl;
  if (playerTitleEl) {
    if (lvl >= 5) playerTitleEl.textContent = t("titleLegend");
    else if (lvl >= 3) playerTitleEl.textContent = t("titleMid");
    else playerTitleEl.textContent = t("titleNovice");
  }
}

function updateInventoryUI() {
  if (!inventoryList) return;
  inventoryList.innerHTML = "";
  inventory.forEach(item => {
    const span = document.createElement("span");
    span.className = "inventory-item";
    const activeWeaponName = weapons[currentWeapon].name;
    if (item === activeWeaponName) {
      span.classList.add("active");
      span.innerHTML = `<i class="fa-solid fa-crosshairs"></i> ${item}`;
    } else {
      span.innerHTML = item;
    }
    inventoryList.appendChild(span);
  });
}

function triggerDamageEffect(isPlayer) {
  if (isPlayer) {
    document.body.classList.remove("flash-damage");
    void document.body.offsetWidth;
    document.body.classList.add("flash-damage");
    gamePanel.classList.remove("shake");
    void gamePanel.offsetWidth;
    gamePanel.classList.add("shake");
  } else {
    monsterStats.classList.remove("shake");
    void monsterStats.offsetWidth;
    monsterStats.classList.add("shake");
  }
}

function addLog(message, type = "") {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  if (type) entry.classList.add(type);
  entry.innerHTML = message;
  text.appendChild(entry);
  textContainer.scrollTop = textContainer.scrollHeight;
}

// =============================================
// LOCATION UPDATE
// =============================================
function update(location) {
  currentLocationIndex = location.index;
  monsterStats.style.display = "none";
  button1.innerText = t(location.buttonKeys[0]);
  button2.innerText = t(location.buttonKeys[1]);
  button3.innerText = t(location.buttonKeys[2]);
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];

  text.innerHTML = "";
  addLog(t(location.textKey), "system");
  updateInventoryUI();

  if (location.artwork) setArtwork(location.artwork);
}

// =============================================
// NAVIGATION
// =============================================
function goTown()  { update(locations[0]); }
function goStore() { update(locations[1]); }
function goCave()  { update(locations[2]); }

// =============================================
// STORE
// =============================================
function buyHealth() {
  initAudio();
  if (gold >= 10) {
    gold -= 10;
    health = Math.min(100, health + 10);
    updateStats();
    playSound("heal");
    triggerBurst();
    addLog(t("storeBoughtHealth"), "success");
  } else {
    addLog(t("storeNoGoldHealth"), "warning");
  }
}

function buyWeapon() {
  initAudio();
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      const newWeapon = weapons[currentWeapon].name;
      inventory.push(newWeapon);
      updateStats();
      updateInventoryUI();
      playSound("buy");
      triggerBurst();
      addLog(t("storeBoughtWeapon", {weapon: newWeapon}), "success");
    } else {
      addLog(t("storeNoGoldWeapon"), "warning");
    }
  } else {
    addLog(t("storeMaxWeapon"), "warning");
    button2.innerText = t("storeSellWeapon");
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  initAudio();
  if (inventory.length > 1) {
    gold += 15;
    const soldWeapon = inventory.shift();
    updateStats();
    updateInventoryUI();
    playSound("buy");
    addLog(t("storeSoldWeapon", {weapon: soldWeapon}), "success");
  } else {
    addLog(t("storeSellOnlyWeapon"), "warning");
  }
}

// =============================================
// COMBAT SETUP
// =============================================
function fightSlime()  { fighting = 0; goFight(); }
function fightBeast()  { fighting = 1; goFight(); }
function fightDragon() { fighting = 2; goFight(); }

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = getMonsterName(fighting);

  const monsterIcon = document.querySelector(".monster-label i");
  if (monsterIcon) {
    const iconMap = ["fa-solid fa-droplet", "fa-solid fa-paw", "fa-solid fa-dragon"];
    monsterIcon.className = iconMap[fighting];
  }

  monsterHealthText.innerText = monsterHealth;
  monsterHealthBar.style.width = "100%";

  const artworkMap = ["assets/slime.png", "assets/beast.png", "assets/dragon.png"];
  setArtwork(artworkMap[fighting]);
  clearLogOnNextAction = true; // clear initial fight text on first combat action
}

// =============================================
// COMBAT ACTIONS
// =============================================
// Track whether the log should clear on next action
let clearLogOnNextAction = false;

function attack() {
  initAudio();
  if (clearLogOnNextAction) {
    text.innerHTML = "";
    clearLogOnNextAction = false;
  }

  const monsterNameStr = getMonsterName(fighting);
  const weaponNameStr = weapons[currentWeapon].name;
  const damageTaken = getMonsterAttackValue(monsters[fighting].level);

  addLog(t("monsterAttacks", {monster: monsterNameStr}), "damage-player");
  if (damageTaken > 0) {
    health -= damageTaken;
    addLog(t("playerTookDamage", {damage: damageTaken}), "damage-player");
    triggerDamageEffect(true);
    playSound("damage");
  } else {
    addLog(t("monsterMissed"), "success");
  }

  addLog(t("playerAttacks", {weapon: weaponNameStr}), "damage-monster");

  if (isMonsterHit()) {
    const isCritical = Math.random() < 0.15;
    let damageDealt = weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    if (isCritical) {
      damageDealt *= 2;
      addLog(t("criticalHit", {monster: monsterNameStr, damage: damageDealt}), "success");
      triggerDamageEffect(false);
      playSound("critical");
    } else {
      addLog(t("normalHit", {monster: monsterNameStr, damage: damageDealt}), "damage-monster");
      triggerDamageEffect(false);
      playSound("hit");
    }
    monsterHealth -= damageDealt;
  } else {
    addLog(t("monsterBlocked", {monster: monsterNameStr}), "warning");
    playSound("damage");
  }

  updateStats();
  monsterHealthText.innerText = Math.max(0, monsterHealth);
  monsterHealthBar.style.width = Math.max(0, (monsterHealth / monsters[fighting].health) * 100) + "%";

  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) winGame();
    else defeatMonster();
  }

  if (Math.random() <= 0.1 && inventory.length !== 1) {
    const brokenWeapon = inventory.pop();
    addLog(t("weaponBroke", {weapon: brokenWeapon}), "warning");
    if (currentWeapon > 0) currentWeapon--;
    updateInventoryUI();
  }
}

function getMonsterAttackValue(level) {
  const hit = level * 5 - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  initAudio();
  if (clearLogOnNextAction) {
    text.innerHTML = "";
    clearLogOnNextAction = false;
  }
  const monsterNameStr = getMonsterName(fighting);

  if (Math.random() < 0.7) {
    // Restore 5 Health
    health = Math.min(100, health + 5);
    updateStats();
    
    // Play a positive heal/dodge sound effect
    playSound("heal");
    
    // i18n support for dynamic messages
    let msgSuccess = "";
    if (currentLang === "en") {
      msgSuccess = `<i class="fa-solid fa-person-running"></i> You dodged ${monsterNameStr}'s attack! (+5 Health restored)`;
    } else if (currentLang === "id") {
      msgSuccess = `<i class="fa-solid fa-person-running"></i> Kamu menghindari serangan ${monsterNameStr}! (+5 Nyawa dipulihkan)`;
    } else {
      msgSuccess = `<i class="fa-solid fa-person-running"></i> ${monsterNameStr}の攻撃を回避した！(体力+5回復)`;
    }
    addLog(msgSuccess, "success");

    // 40% chance of Counter Attack
    if (Math.random() < 0.4) {
      // Counter damage: 50% of current weapon power (minimum 1)
      const weaponPower = weapons[currentWeapon].power;
      const counterDmg = Math.max(1, Math.floor(weaponPower * 0.5));
      monsterHealth -= counterDmg;
      
      let msgCounter = "";
      if (currentLang === "en") {
        msgCounter = `⚡ <strong>COUNTER ATTACK!</strong> You struck ${monsterNameStr} for <strong>${counterDmg} damage</strong>!`;
      } else if (currentLang === "id") {
        msgCounter = `⚡ <strong>SERANGAN BALIK!</strong> Kamu membalas ${monsterNameStr} sebesar <strong>${counterDmg} damage</strong>!`;
      } else {
        msgCounter = `⚡ <strong>カウンター！</strong> ${monsterNameStr}に<strong>${counterDmg}ダメージ</strong>を与えた！`;
      }
      
      // Delay slightly for dramatic combat feel
      setTimeout(() => {
        addLog(msgCounter, "damage-monster");
        // Shake screen on counter-attack
        triggerDamageEffect(false);
        playSound("slash");
        
        // Update Monster Health UI
        monsterHealthText.innerText = Math.max(0, monsterHealth);
        monsterHealthBar.style.width = Math.max(0, (monsterHealth / monsters[fighting].health) * 100) + "%";
        
        // Check if monster died from counter
        if (monsterHealth <= 0) {
          defeatMonster();
        }
      }, 300);
    }
  } else {
    const damage = getMonsterAttackValue(monsters[fighting].level);
    health -= damage;
    updateStats();
    addLog(t("dodgeFail", {damage: damage}), "damage-player");
    triggerDamageEffect(true);
    playSound("damage");
    if (health <= 0) { lose(); return; }
  }
}

function defeatMonster() {
  const baseGold = Math.floor(monsters[fighting].level * 6.7);
  const offsetLimit = Math.floor(baseGold * 0.25);
  const randomOffset = offsetLimit > 0 ? (Math.floor(Math.random() * (offsetLimit * 2)) - offsetLimit) : 0;
  const finalGold = Math.max(1, baseGold + randomOffset);
  gold += finalGold;
  xp += monsters[fighting].level;
  updateStats();
  update(locations[4]);
  addLog(t("lootGold", {gold: finalGold, base: baseGold, xp: monsters[fighting].level}), "success");
  triggerBurst();
}

function lose() {
  playSound("lose");
  update(locations[5]);
}

function winGame() {
  playSound("win");
  update(locations[6]);
}

function restart() {
  xp = 0; health = 100; gold = 50; currentWeapon = 0;
  inventory = ["stick"];
  updateStats();
  updateInventoryUI();
  goTown();
}

// =============================================
// EASTER EGG
// =============================================
function easterEgg() { update(locations[7]); }
function pickTwo()   { pick(2); }
function pickEight() { pick(8); }

function pick(guess) {
  initAudio();
  const numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 11));
  text.innerHTML = "";
  addLog(t("eggPicked", {guess: guess}), "system");
  addLog(`<strong>[ ${numbers.join(", ")} ]</strong>`, "system");

  if (numbers.includes(guess)) {
    addLog(t("eggWin"), "success");
    gold += 20;
    playSound("win");
    triggerBurst();
  } else {
    addLog(t("eggLose"), "damage-player");
    health -= 10;
    triggerDamageEffect(true);
    playSound("damage");
  }

  updateStats();
  if (health <= 0) lose();
}

// =============================================
// INIT
// =============================================
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Set initial welcome text and start
text.innerHTML = "";
addLog(t("welcome"), "system");
updateStats();
updateInventoryUI();
initParticles();
