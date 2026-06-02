# 🐉 RPG - The Legend of Dragon (Dragon Repeller) - Premium Edition

[![Website Link](https://img.shields.io/badge/Play%20Game-Live%20Demo-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white)](https://tinonurcahya.github.io/RPG-dragon-game-js/)

**Dragon Repeller Premium Edition** adalah game RPG petualangan teks berbasis web klasik yang telah dirombak secara total untuk menghadirkan antarmuka visual kelas dunia (*premium aesthetics*), umpan balik visual yang interaktif, serta efek suara dinamis langsung di browser Anda.

Anda bermain sebagai pahlawan kota yang ditugaskan untuk meningkatkan kekuatan, membeli persenjataan legendaris, membasmi monster di gua rahasia, dan pada akhirnya mengalahkan Naga ganas yang mengisolasi penduduk kota.

---

## 🌟 Fitur-Fitur Premium Unggulan

Game ini telah ditingkatkan secara menyeluruh dengan fitur-fitur modern berikut:

### 🎨 1. Tampilan Visual & Tata Letak Premium
* **Glassmorphic UI**: Panel kaca transparan modern menggunakan blur latar belakang mewah (`backdrop-filter`), border tipis bercahaya, dan pendaran bayangan halus bergaya antarmuka premium modern.
* **Ambient Glow**: Latar belakang bernuansa cyber-fantasy gelap dengan cahaya pendaran ungu/emas misterius di tengah layar.
* **Tipografi Modern**: Integrasi Google Fonts menggunakan **Cinzel Decorative** untuk judul fantasi yang megah dan **Outfit** untuk tulisan antarmuka yang bersih dan mudah dibaca.
* **Ikon FontAwesome**: Penambahan ikon pendukung dinamis pada indikator statistik (XP, Health, Gold) dan elemen pertarungan.
* 🌐 **Dukungan Multi-Bahasa (i18n)**: Pilihan 3 bahasa secara real-time — 🇬🇧 **English**, 🇮🇩 **Bahasa Indonesia**, dan 🇯🇵 **日本語** — tanpa me-reload halaman. Seluruh elemen antarmuka, pesan pertarungan, nama monster, nama lokasi, teks tombol, dan gelar karakter otomatis berpindah bahasa secara menyeluruh saat tombol bahasa ditekan.

### ✨ 2. Efek Visual Imersif
* 🖼️ **Panel Visualisasi Ilustrasi Fantasi (Artwork Viewport)**: Menambahkan area khusus di bagian atas permainan yang memuat gambar ilustrasi lanskap berkualitas tinggi (digital fantasy art) secara dinamis sesuai lokasi (Town Square, Store, Cave) dan jenis monster yang sedang Anda lawan (Slime, Beast, Dragon) dengan transisi memudar halus (*cross-fade transition*).
* **Partikel Mengambang (Floating Particles)**: Aliran dinamis partikel debu bintang emas/ungu melayang lembut di latar belakang panel game untuk menciptakan atmosfer magis yang hidup.
* **Ledakan Partikel Emas (Particle Burst)**: Letusan partikel emas selebrasi yang meletus setiap kali Anda membeli item, membeli senjata baru, atau memenangkan mini-game tebak angka.
* **Dampak Getar Layar (Dynamic Screen Shake)**: Seluruh panel game akan bergetar saat Anda menerima serangan atau meluncurkan serangan ke monster.
* **Kilatan Layar Merah (Screen Damage Flash)**: Layar akan berkedip merah seketika ketika Anda terkena damage dari monster untuk memperkuat sensasi pertarungan.

### 📊 3. Statistik Pemain & Sistem Level Dinamis
* **Sistem Kenaikan Level Dinamis**: Karakter Anda akan otomatis naik tingkat (Level) seiring terkumpulnya poin pengalaman (XP).
* **Gelar Petualang yang Berevolusi**: Gelar Anda akan otomatis bertransformasi berdasarkan tingkat level:
  * **LVL 1-2**: 🛡️ **Dragon Slayer** (Novice)
  * **LVL 3-4**: 🏹 **Wyrm Hunter** (Intermediate)
  * **LVL 5+**: 👑 **Legendary Hero** (Legend!)
* **Progress Bar Darah Teranimasi**: Bar kesehatan melengkung bergradasi merah yang beradaptasi secara real-time saat HP bertambah atau berkurang.

### ⚔️ 4. Sistem Combat & Log Tempur Taktis
* **Continuous Scrollable Combat Log**: Mengganti kotak teks statis dengan area catatan combat bergulir secara otomatis dengan penumpukan riwayat aksi pertempuran sebelumnya.
* **🔥 Sistem Serangan Kritis (Critical Hits)**: Setiap serangan memiliki **kesempatan 15%** meluncurkan *Critical Hit* ber-damage ganda (2x). Ditandai dengan log api menyala (`🔥 CRITICAL HIT!`), getaran layar yang lebih dahsyat, serta efek suara sabetan nyaring.
* **🛡️ Sistem Tangkisan Monster (Monster Block)**: Monster memiliki **kesempatan 20%** untuk menepis/menangkis serangan Anda. Serangan yang ditangkis menghasilkan damage 0, menampilkan pesan tameng (`🛡️ Monster blocked your attack!`), dan berbunyi ketukan tameng logam yang khas.
* **⚡ Mekanik Dodge (Menghindar) yang Direvitalisasi**: Tombol *Dodge* kini sangat berguna! Anda memiliki **peluang 70%** untuk sukses menghindar. Jika sukses:
  * 💚 **Pulihkan +5 Health**: Mengambil nafas dan memulihkan stamina/nyawa secara instan.
  * ⚡ **Serangan Balik (Counter Attack) 40%**: Peluang menyerang balik dengan damage sebesar 50% kekuatan senjata aktif Anda tanpa risiko senjata patah!
* **💰 Loot Koin Emas Acak**: Koin emas rampasan dari monster bernilai dinamis dengan rentang acak **`±25%` dari nilai dasar**, didukung visualisasi laporan loot terperinci (Base Gold vs. Bonus Gold).
* **Pewarnaan Log Berdasarkan Aksi**:
  * 🔴 Red: Player menerima damage / kejadian buruk.
  * 🔵 Blue: Serangan fisik player ke monster.
  * 🟢 Green: Keberhasilan beli, penyembuhan HP, dan kemenangan.
  * 🟣 Purple/Gray: Notifikasi sistem dan nama lokasi.

### 🎒 5. Lencana Visual Slot Inventory
* **Inventory Badge Slots**: Daftar tas persenjataan Anda ditampilkan sebagai slot lencana bundar modern.
* **Penanda Senjata Aktif**: Senjata berkekuatan tertinggi yang sedang aktif akan otomatis disorot dengan warna emas bercahaya disertai ikon target bidikan.

### 🔊 6. Efek Suara Sintetis (Web Audio API)
Efek audio 8-bit berkualitas tinggi yang disintesis secara real-time langsung melalui browser Anda tanpa perlu mendownload file audio tambahan (0KB download asset):
* ⚔️ **Blade Slash**: Suara sabetan pedang berfrekuensi cepat saat menyerang monster.
* 💥 **Heavy Impact**: Suara dentuman berat berfrekuensi rendah saat Anda terluka.
* 🧪 **Magical Heal**: Nada melodi magis naik yang indah saat menggunakan potion kesehatan.
* 🪙 **Gold Chime**: Bunyi gemerincing ganda logam koin saat bertransaksi senjata di Store.
* 🎉 **Victory Melody**: Arpeggio tangga nada major yang riang pada saat memenangkan game.
* 💀 **Sad Low Sweep**: Efek dengung nada turun yang dramatis saat karakter mati.

---
## 🎮 Cara Bermain

1. **Town Square (Alun-Alun Kota)**: Titik awal perjalanan Anda. Dari sini Anda bisa pergi berbelanja di toko (*Store*), menjelajahi gua monster (*Cave*), atau langsung menantang Naga (*Dragon*).
2. **Store (Toko Peralatan)**: Gunakan koin emas Anda untuk memulihkan darah (10 Gold) atau membeli senjata yang lebih kuat (30 Gold) seperti Dagger, Claw Hammer, hingga Pedang Legendaris (Sword).
3. **Cave (Gua Monster)**: Hadapi monster Slime atau Fanged Beast secara taktis untuk mengumpulkan XP dan Gold.
4. **Mini-game Rahasia (Easter Egg)**: Temukan mini-game rahasia dengan menebak angka pilihan di dalam permainan. Menangkan tebakan untuk memperoleh hadiah koin emas yang melimpah!
5. **Kalahkan sang Naga**: Setelah mengumpulkan persenjataan terkuat dan darah yang memadai, hadapi sang Naga untuk menamatkan permainan dan menyelamatkan kota!

---

## 🛠️ Teknologi yang Digunakan

* **HTML5**: Kerangka struktur modern.
* **Vanilla CSS3**: Styling kustom penuh, layout Flexbox & Grid, efek Glassmorphism, variabel CSS, dan keyframes animation.
* **Vanilla JavaScript (ES6)**: Sistem logika RPG, Web Audio API Sound Synthesizer, generator partikel dinamis, dan manipulasi DOM interaktif.
* **FontAwesome**: Pustaka ikon RPG yang lengkap.
* **Google Fonts**: Tipografi berkualitas premium.

---

## 🔗 Live Demo

Rasakan petualangan fantasi epik ini secara langsung melalui tautan berikut:
👉 **[Mainkan Dragon Repeller Premium Edition](https://tinonurcahya.github.io/RPG-dragon-game-js/)**

---

*Dibuat dengan 💖 sebagai proyek portofolio interaktif yang menakjubkan.*
