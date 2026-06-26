/* ============================================================
   YASIN ATIŞ — PORTFOLIO · main.js
   ============================================================ */

/* ── VERİ: PROJELER ─────────────────────────────────────────
   Her projeye ait görsel dosyalarını images/projects/ altına
   koyun. rooms dizisi her sekmeyi tanımlar.
   images dizisi: { src, caption } formatında.

   Örnek görsel yolu: "images/projects/villa-a/salon-1.jpg"
   ─────────────────────────────────────────────────────────── */
const BASE  = "images/projects/Zekeriyaköy Villa Projesi/";
const BASE2 = "images/projects/Büyükçekmece Villa Projesi/";

const PROJECTS = [
  {
    id: "zekerijakoy-villa",
    cat: "Konut · Villa",
    name: "Zekeriyaköy Villa Projesi",
    desc: "Lüks villa projesi için hazırlanmış dört farklı yatak odası konsepti. Oriental temadan minimalist bej paleti, şehir manzarasından kemer detaylarına uzanan geniş bir tasarım yelpazesi.",
    software: "3ds Max · Corona · V-Ray · Photoshop",
    year: "2024",
    thumb: BASE + "1.jpg",
    rooms: [
      {
        label: "Yatak Odası 1",
        images: [
          { src: BASE + "1.jpg", caption: "" },
          { src: BASE + "2.jpg", caption: "" },
          { src: BASE + "3.jpg", caption: "" },
          { src: BASE + "4.jpg", caption: "" },
          { src: BASE + "5.jpg", caption: "" },
          { src: BASE + "6.jpg", caption: "" },
          { src: BASE + "7.jpg", caption: "" },
          { src: BASE + "8.jpg", caption: "" },
          { src: BASE + "9.jpg", caption: "" },
        ]
      },
      {
        label: "Yatak Odası 2",
        images: [
          { src: BASE + "854.jpg", caption: "" },
          { src: BASE + "855.jpg", caption: "" },
          { src: BASE + "856.jpg", caption: "" },
          { src: BASE + "857.jpg", caption: "" },
          { src: BASE + "858.jpg", caption: "" },
          { src: BASE + "859.jpg", caption: "" },
          { src: BASE + "860.jpg", caption: "" },
          { src: BASE + "861.jpg", caption: "" },
        ]
      }
    ]
  },
  {
    id: "buyukcek-mece-villa",
    cat: "Konut · Villa",
    name: "Büyükçekmece Villa Projesi",
    desc: "Büyükçekmece'de lüks villa projesi için hazırlanmış iç mekan görselleştirmeleri.",
    software: "3ds Max · Corona · Photoshop",
    year: "2024",
    thumb: BASE2 + "725.jpg",
    rooms: [
      {
        label: null,
        images: [
          { src: BASE2 + "725.jpg" }, { src: BASE2 + "726.jpg" }, { src: BASE2 + "727.jpg" },
          { src: BASE2 + "728.jpg" }, { src: BASE2 + "729.jpg" }, { src: BASE2 + "730.jpg" },
          { src: BASE2 + "731.jpg" }, { src: BASE2 + "732.jpg" }, { src: BASE2 + "733.jpg" },
          { src: BASE2 + "734.jpg" }, { src: BASE2 + "735.jpg" }, { src: BASE2 + "736.jpg" },
          { src: BASE2 + "737.jpg" }, { src: BASE2 + "738.jpg" }, { src: BASE2 + "739.jpg" },
          { src: BASE2 + "740.jpg" }, { src: BASE2 + "741.jpg" }, { src: BASE2 + "742.jpg" },
          { src: BASE2 + "743.jpg" }, { src: BASE2 + "744.jpg" }, { src: BASE2 + "745.jpg" },
          { src: BASE2 + "746.jpg" }, { src: BASE2 + "747.jpg" }, { src: BASE2 + "748.jpg" },
          { src: BASE2 + "749.jpg" }, { src: BASE2 + "750.jpg" }, { src: BASE2 + "751.jpg" },
          { src: BASE2 + "752.jpg" }, { src: BASE2 + "753.jpg" }, { src: BASE2 + "754.jpg" },
        ]
      }
    ]
  },
  {
    id: "tv-unitesi-konseptleri",
    cat: "Ürün · Mobilya",
    name: "TV Ünitesi Konseptleri",
    desc: "Farklı iç mekan stillerine uygun TV ünitesi tasarım konseptleri.",
    software: "3ds Max · Corona · Photoshop",
    year: "2024",
    thumb: "images/projects/TV Ünitesi Konseptleri/694.jpg",
    rooms: [{
      label: null,
      images: ["18","22","23","30","31","670","671","672","673","674","675","676","677","678","679","680","681","682","683","684","685","686","687","688","689","690","691","692","693","694","695","696","697","698","699","700","701","702","703","704","705","706","707","708","709","710","711","712","713","714","715","716","717","718","719","720","723","724","v173","v175","v178","v179","v180","v184","v185","v186","v375","v376"]
        .map(n => ({ src: `images/projects/TV Ünitesi Konseptleri/${n}.jpg` }))
    }]
  },
  {
    id: "konsol-konseptleri",
    cat: "Ürün · Mobilya",
    name: "Konsol Konseptleri",
    desc: "Farklı stil ve boyutlarda konsol tasarım konseptleri.",
    software: "3ds Max · Corona · Photoshop",
    year: "2024",
    thumb: "images/projects/Konsol Konseptleri/v1.jpg",
    rooms: [{
      label: null,
      images: ["742","v1","v2","v3","v4","v5","v6","v7","v8","v9","v10","v11","v12","v13","v14","v15","v16","v17","v18","v19","v20","v21","v22","v23","v24","v25","v26","v27","v28","v29","v30","v31","v32","v33","V34","v35","v36","v37","v38","v39","v40","v41","v42","v43","v44","v45","v46","v47","v48","v49","v50","v52","v53","v54","v55","v56","v57","v58","v59","v60","v61","v62","v63","v64","v65","v66","v67","v68","v69","v70","v71","v72","v73","v74","v75","v76","v77","v78","v79","v80","v81","v82","v83","v84","v85","v86","v87","v89","v90","v91","v92","v93","v94","v95","v96","v97","v98","v99","v100","v101","v102","v103","v104","v105","v106","v107","v108","v109","v110","v111","v112","v113","v114","v115","v116","v117","v118","v119","v120","v121","v122","v123","v124","v125","v126","v127","v128","v129","v130","v131","v132","v133","v134","v135","v136","v137","v138","v139","v140","v141","v142","v143","v144","v145","v146","v147","v148","v149","v150","v151","v152","v153","v154","v155","v156","v157","v158","v159","v160","v161","v162","v163","v164","v165","v166","v167","v168","v169","v170","v171","v231","v232","v233","v234","v235","v236","v237","v238","v239","v240","v241","v242","v243","v244","v245","v246","v247","V248","v249","v250","v251","v252","v253","v254","v255","v256","v257","v258","v259","V260","v261","v262","v263","v264","v265","v266","v267","v268","v269","v270","v271","v272","v273","v274","v275","v276","v277","v278","v353","v354","v355","v356","v357","v358","v359","v360","v361","v362","v363","v364","v365","v366","v367","v368","v369","v371","v373","v374","v377","v378","v379","v380","v381","v382","v383","v384","v385","v386","v387"]
        .map(n => ({ src: `images/projects/Konsol Konseptleri/${n}.jpg` }))
    }]
  },
  {
    id: "dominik-projesi",
    cat: "Konut · Villa",
    name: "Dominik Projesi",
    desc: "Dominik villa projesi için hazırlanmış iç mekan görselleştirmeleri.",
    software: "3ds Max · Corona · Photoshop",
    year: "2024",
    thumb: "images/projects/Dominik Projesi/769.jpg",
    rooms: [{
      label: null,
      images: ["1","2","3","755","756","757","758","759","760","761","762","763","764","765","766","767","768","769"]
        .map(n => ({ src: `images/projects/Dominik Projesi/${n}.jpg` }))
    }]
  },
  {
    id: "zekerijakoy-projesi",
    cat: "Konut · Villa",
    name: "Zekeriyaköy Projesi",
    desc: "Zekeriyaköy'de villa projesi için hazırlanmış iç mekan görselleştirmeleri.",
    software: "3ds Max · Corona · Photoshop",
    year: "2024",
    thumb: "images/projects/Zekeriyaköy Projesi/1.jpg",
    rooms: [{
      label: null,
      images: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
        .map(n => ({ src: `images/projects/Zekeriyaköy Projesi/${n}.jpg` }))
    }]
  },
  {
    id: "yemek-masasi-konseptleri",
    cat: "Ürün · Mobilya",
    name: "Yemek Masası Konseptleri",
    desc: "Farklı stil ve malzemelerde yemek masası tasarım konseptleri.",
    software: "3ds Max · Corona · Photoshop",
    year: "2024",
    thumb: "images/projects/Yemek masası Konseptleri/v345.jpg",
    rooms: [{
      label: null,
      images: ["9","10","11","12","v345","v346","v347","v348","v818","v819","v820","v821","v824","v825","v826","v827","v832","v833","v834","v835","v836","v837","v838","v839","v840"]
        .map(n => ({ src: `images/projects/Yemek masası Konseptleri/${n}.jpg` }))
    }]
  }
];

/* ── VERİ: BLOG ──────────────────────────────────────────────
   cover: görsel yolu (images/blog/ altında)
   content: HTML string (paragraf, başlık ekleyebilirsiniz)
   ─────────────────────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: "corona-isik-ayarlari",
    tag: "Teknik",
    date: "Haziran 2025",
    title: "Corona Renderer'da Gerçekçi Işık Ayarları",
    excerpt: "Fotogerçekçi iç mekan render'ları için güneş ışığı, yapay aydınlatma ve HDRI kullanımına dair ipuçları.",
    cover: "images/blog/corona-isik.jpg",
    content: `
      <h2>Giriş</h2>
      <p>İç mekan render'larında ışık, sahneyi ya öldürür ya da hayata geçirir. Corona Renderer'ın fizik tabanlı ışık modeli bu konuda büyük kolaylık sağlasa da bazı ayarları doğru kurmak kritik önem taşır.</p>
      <h2>Güneş Işığı ve CoronaSun</h2>
      <p><strong>CoronaSun</strong> ve <strong>CoronaSky</strong> birlikte kullanıldığında saatlik ve mevsimlik ışık farklılıklarını gerçekçi biçimde simüle eder. Sahnenizin coğrafi konumunu ve saatini girin; güneş açısı otomatik olarak hesaplanır.</p>
      <h2>Yapay Aydınlatma</h2>
      <p>IES profilleri kullanan <strong>CoronaLight</strong>, gerçek armatür verilerini sahneye taşır. Spot, panel ve şerit aydınlatmalar için üretici firmaların IES dosyalarını indirip doğrudan kullanabilirsiniz.</p>
      <h2>HDRI ile Ortam Işığı</h2>
      <p>Ortam ışığı için yüksek çözünürlüklü bir HDRI dosyası, sahneye sofistike bir atmosfer katar. <em>16K çözünürlük</em> büyük pencereli sahnelerde yansımalarda belirgin fark yaratır.</p>
      <h2>Sonuç</h2>
      <p>Işık kurulumu sabır isteyen bir süreçtir. Her render testini küçük boyutta yapın, tatmin olduğunuzda tam çözünürlüğe geçin — bu iş akışı hem zamanı hem de render kaynaklarını verimli kullanmanızı sağlar.</p>
    `
  },
  {
    id: "mobilya-modelleme-sureci",
    tag: "Süreç",
    date: "Mayıs 2025",
    title: "Koltuk Takımı Modellemede İş Akışım",
    excerpt: "AutoCAD planından 3ds Max'e, polygon modellemeden Corona render'a: bir koltuk takımının tüm üretim süreci.",
    cover: "images/blog/mobilya-surec.jpg",
    content: `
      <h2>Referans Toplama</h2>
      <p>Her modelleme işine referans görselleri toplamakla başlarım. Ürünün gerçek fotoğrafları, teknik çizimleri ve ölçüleri olmadan model tutarsız çıkar.</p>
      <h2>AutoCAD'den 3ds Max'e</h2>
      <p>Teknik çizimler varsa AutoCAD'den DWG olarak alıp 3ds Max'e import ediyorum. Bu sayede ölçekler birebir oturuyor ve sonradan düzeltme yapmak zorunda kalmıyorum.</p>
      <h2>Polygon Modelleme</h2>
      <p>Box modelling ile başlayıp Editable Poly üzerinde çalışıyorum. Turbosmooth'u son aşamaya kadar düşük seviyede tutmak viewport performansını ciddi iyileştiriyor.</p>
      <h2>Malzeme ve Doku</h2>
      <p>Corona Physical Material ile kumaş simülasyonu için yüksek çözünürlüklü diffuse, normal ve roughness map kullanıyorum. Kumaş materyalleri için Substance Designer'dan ürettiğim dokular oldukça gerçekçi sonuçlar veriyor.</p>
      <h2>Render Ayarları</h2>
      <p>Son render için noise threshold'u 0.005'e indirip denoising açıyorum. Bu kombinasyon hem temiz hem de makul sürede render almanızı sağlar.</p>
    `
  },
  {
    id: "mimari-gorsellestirme-ipuclari",
    tag: "İpucu",
    date: "Nisan 2025",
    title: "Mimari Görselleştirmede 5 Kritik Detay",
    excerpt: "Yıllar içinde öğrendiğim, render kalitesini doğrudan etkileyen beş temel kural.",
    cover: "images/blog/ipuclari.jpg",
    content: `
      <h2>1. Ölçek Her Şeydir</h2>
      <p>Gerçek dışı ölçekler render'ı hemen bozar. Kapılar 210 cm, tavan yüksekliği 260-280 cm, koltuk oturma yüksekliği 42-45 cm olmalı. Bunları bir kere oturtun, sahne otomatik olarak daha inandırıcı görünecek.</p>
      <h2>2. Aksesuar Olmadan Olmaz</h2>
      <p>Boş bir mekân ne kadar iyi aydınlatılmış olsa da steril durur. Kitap, bitki, şamdan, çerçeve gibi küçük objeler sahneyi hayata geçirir.</p>
      <h2>3. Kamera Açısı Karakter Katar</h2>
      <p>İnsan göz hizasından (120-160 cm) çekilen görüntüler daha doğal hissettirir. Lens için 35-50mm eşdeğeri kullanın; çok geniş açı perspektifi bozar.</p>
      <h2>4. Post-Production Zorunludur</h2>
      <p>Render çıktısı ham malzemedir. Photoshop'ta renk gradasyonu, hafif vignette ve exposure düzeltmesi en iyi render'ları bile bir üst seviyeye taşır.</p>
      <h2>5. Referans Olmadan Render Olmaz</h2>
      <p>Çalışmaya başlamadan önce Behance, Pinterest ve gerçek fotoğraflardan oluşan bir moodboard hazırlayın. Hedefi görsel olarak tanımlamak, süreç içinde yön kaybetmenizi önler.</p>
    `
  }
];

/* ── VERİ: SKİLLS ────────────────────────────────────────── */
const SKILLS = [
  { name: "3ds Max",        pct: 96 },
  { name: "Corona Renderer",pct: 92 },
  { name: "V-Ray",          pct: 88 },
  { name: "Photoshop",      pct: 84 },
  { name: "AutoCAD",        pct: 80 },
  { name: "DaVinci Resolve",pct: 74 },
  { name: "Unreal Engine",  pct: 68 },
];

const FORMSPREE_URL = "https://formspree.io/f/xjgqgebk";

/* ── YARDIMCILAR ─────────────────────────────────────────── */
function $(id){ return document.getElementById(id); }

/* ── NAVİGASYON ──────────────────────────────────────────── */
let currentPage = "home";

function showPage(name){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  $("page-" + name).classList.add("active");
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.classList.toggle("active", a.dataset.page === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  currentPage = name;
  if(name === "projects") renderProjects();
  if(name === "blog")     renderBlog();
  closeMenu();
}

function goHome(){
  showPage("home");
}

function navToContact(){
  if(currentPage !== "home") showPage("home");
  setTimeout(() => {
    $("contact").scrollIntoView({ behavior: "smooth" });
  }, currentPage !== "home" ? 350 : 0);
  closeMenu();
}

function mobileNav(page){ showPage(page); }
function mobileNavContact(){ navToContact(); }

/* ── MOBİL MENÜ ──────────────────────────────────────────── */
function toggleMenu(){
  $("mobile-menu").classList.toggle("open");
  $("hamburger").classList.toggle("open");
}
function closeMenu(){
  $("mobile-menu").classList.remove("open");
  $("hamburger").classList.remove("open");
}

/* ── PROJELER ────────────────────────────────────────────── */
function renderProjects(){
  const list = $("projects-list");
  list.innerHTML = PROJECTS.map((p,i) => `
    <div class="proj-card" onclick="openProject('${p.id}')" style="animation-delay:${i*0.07}s">
      <div class="proj-thumb">
        <img src="${p.thumb}" alt="${p.name}" loading="lazy">
      </div>
      <div class="proj-info">
        <span class="proj-cat">${p.cat}</span>
        <p class="proj-name">${p.name}</p>
        <span class="proj-year">${p.year}</span>
      </div>
    </div>
  `).join("");
}

function openProject(id){
  const proj = PROJECTS.find(p => p.id === id);
  if(!proj) return;

  $("detail-cat").textContent   = proj.cat;
  $("detail-title").textContent = proj.name;
  $("detail-sub").textContent   = proj.software + " · " + proj.year;

  const hasTabs = proj.rooms.length > 1 && proj.rooms[0].label !== null;
  const tabs = $("room-tabs");

  if(hasTabs){
    tabs.style.display = "";
    tabs.innerHTML = proj.rooms.map((r,i) => `
      <button class="tab-btn${i===0?" active":""}" onclick="switchTab('${id}',${i},this)">${r.label}</button>
    `).join("");
    renderGallery(proj.rooms[0].images);
  } else {
    tabs.style.display = "none";
    tabs.innerHTML = "";
    renderGallery(proj.rooms[0].images);
  }

  showPage("detail");
}

function switchTab(projId, roomIdx, btn){
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const proj = PROJECTS.find(p => p.id === projId);
  renderGallery(proj.rooms[roomIdx].images);
}

let lbImages = [], lbIndex = 0;

function renderGallery(images){
  lbImages = images;
  $("detail-gallery").innerHTML = images.map((img, i) => `
    <div class="render-item" onclick="openLightbox(${i})">
      <img src="${img.src}" alt="${img.caption||''}" loading="lazy">
      <div class="wm-overlay">
        <svg class="wm-logo" viewBox="0 0 76 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="38" y2="58" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
          <line x1="76" y1="0" x2="38" y2="58" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
          <line x1="38" y1="58" x2="38" y2="102" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
          <line x1="10" y1="36" x2="66" y2="36" stroke="#c9a96e" stroke-width="7" stroke-linecap="round"/>
          <circle cx="38" cy="58" r="8" fill="#c9a96e"/>
        </svg>
        <span class="wm-text">Yasin Atış</span>
      </div>
    </div>
  `).join("");
}

/* ── LİGHTBOX ───────────────────────────────────────────── */
function openLightbox(i){
  lbIndex = i;
  $("lightbox").classList.add("active");
  updateLb();
  document.body.style.overflow = "hidden";
}

function updateLb(){
  const img = lbImages[lbIndex];
  const el  = $("lb-img");
  el.alt = img.caption || "";
  el.src = img.src;
  $("lb-counter").textContent = (lbIndex + 1) + " / " + lbImages.length;
}

function lbNav(dir){
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  updateLb();
}

function closeLightbox(e){
  if(!e || e.target === $("lightbox") || e.target.closest(".lb-close")){
    $("lightbox").classList.remove("active");
    $("lb-img").src = "";
    document.body.style.overflow = "";
  }
}

document.addEventListener("keydown", e => {
  if(!$("lightbox").classList.contains("active")) return;
  if(e.key === "ArrowLeft")  lbNav(-1);
  if(e.key === "ArrowRight") lbNav(1);
  if(e.key === "Escape")     closeLightbox();
});

/* ── BLOG ────────────────────────────────────────────────── */
function renderBlog(){
  $("blog-list").innerHTML = BLOG_POSTS.map((p,i) => `
    <div class="blog-card" onclick="openPost('${p.id}')" style="animation-delay:${i*0.08}s">
      <div class="blog-card-top">
        <span class="blog-tag">${p.tag}</span>
        <span class="blog-date">${p.date}</span>
      </div>
      <p class="blog-title">${p.title}</p>
      <p class="blog-excerpt">${p.excerpt}</p>
      <span class="blog-read">Devamını oku →</span>
    </div>
  `).join("");
}

function openPost(id){
  const post = BLOG_POSTS.find(p => p.id === id);
  if(!post) return;
  $("bd-tag").textContent   = post.tag;
  $("bd-date").textContent  = post.date;
  $("bd-title").textContent = post.title;
  $("bd-cover").innerHTML   = post.cover
    ? `<img src="${post.cover}" alt="${post.title}">`
    : "";
  $("bd-content").innerHTML = post.content;
  showPage("blog-detail");
}

/* ── SKİLLS ──────────────────────────────────────────────── */
function renderSkills(){
  $("skills-list").innerHTML = SKILLS.map(s => `
    <div class="skill-row">
      <div class="skill-top">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.pct}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" style="width:${s.pct}%"></div>
      </div>
    </div>
  `).join("");
}

/* ── FORM ────────────────────────────────────────────────── */
async function submitForm(e){
  e.preventDefault();
  const form   = $("contact-form");
  const status = $("form-status");
  const btn    = form.querySelector(".s-btn");
  const data   = new FormData(form);

  btn.disabled = true;
  status.textContent = "Gönderiliyor…";
  status.className   = "form-status";

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });
    if(res.ok){
      status.textContent = "Mesajınız iletildi. En kısa sürede dönüş yapacağım.";
      status.classList.add("ok");
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    status.textContent = "Bir hata oluştu. Lütfen doğrudan e-posta gönderin.";
    status.classList.add("err");
  } finally {
    btn.disabled = false;
  }
}

/* ── SCROLL TO TOP ───────────────────────────────────────── */
window.addEventListener("scroll", () => {
  $("scroll-top").classList.toggle("visible", window.scrollY > 400);
});

/* ── GÖRSEL KORUMA ───────────────────────────────────────── */
document.addEventListener("dragstart", e => {
  if(e.target.tagName === "IMG") e.preventDefault();
});
document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "u")) e.preventDefault();
});

/* ── INIT ────────────────────────────────────────────────── */
renderSkills();
