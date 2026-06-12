/* ============================================================
   ESCOLINHA VIDA NOVA — scripts do site
   (não é preciso editar este arquivo para gerenciar fotos:
    use o js/galeria.js)
   ============================================================ */
(function(){
"use strict";

/* ---------- menu mobile ---------- */
const nav = document.querySelector(".nav");
const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");
if (btnMenu){
  btnMenu.addEventListener("click", () => {
    const aberto = navLinks.classList.toggle("aberto");
    nav.classList.toggle("menu-aberto", aberto);
    btnMenu.setAttribute("aria-expanded", String(aberto));
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("aberto");
    nav.classList.remove("menu-aberto");
    btnMenu.setAttribute("aria-expanded","false");
  }));
}

/* ---------- revelação no scroll ---------- */
const obsReveal = new IntersectionObserver((entradas) => {
  entradas.forEach(e => { if (e.isIntersecting){ e.target.classList.add("visivel"); obsReveal.unobserve(e.target); } });
},{ threshold:.12, rootMargin:"0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => obsReveal.observe(el));

/* ---------- contadores do impacto ---------- */
function animarContador(el){
  const alvo = parseInt(el.dataset.contar,10);
  const prefixo = el.dataset.prefixo || "";
  if (alvo === 0){ el.textContent = prefixo + "0"; return; }
  const dur = 1600, ini = performance.now();
  function passo(t){
    const p = Math.min((t - ini)/dur, 1);
    const suave = 1 - Math.pow(1 - p, 3);
    el.textContent = prefixo + Math.round(alvo * suave);
    if (p < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}
const obsContador = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting){ animarContador(e.target); obsContador.unobserve(e.target); } });
},{ threshold:.6 });
document.querySelectorAll("[data-contar]").forEach(el => obsContador.observe(el));

/* ---------- progresso da linha do tempo ---------- */
const linha = document.getElementById("linhaTempo");
const progresso = document.getElementById("linhaProgresso");
if (linha && progresso){
  function atualizarLinha(){
    const r = linha.getBoundingClientRect();
    const vh = window.innerHeight;
    const percorrido = Math.min(Math.max((vh*0.7 - r.top) / r.height, 0), 1);
    progresso.style.height = (percorrido*100).toFixed(1) + "%";
  }
  window.addEventListener("scroll", atualizarLinha, { passive:true });
  window.addEventListener("resize", atualizarLinha);
  atualizarLinha();
}

/* ---------- players de vídeo (clique para tocar) ---------- */
document.querySelectorAll(".player").forEach(p => {
  const botao = p.querySelector(".player__botao");
  if (!botao) return;
  botao.addEventListener("click", (ev) => {
    ev.stopPropagation();
    const src = p.dataset.video;
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    p.innerHTML = "";
    p.appendChild(video);
    p.style.cursor = "default";
  });
});

/* ---------- galeria inteligente ---------- */
const grade = document.getElementById("galeriaGrade");
let itensVisiveis = [];

function renderGaleria(){
  if (!grade || typeof GALERIA === "undefined") return;
  const frag = document.createDocumentFragment();
  GALERIA.forEach((item, i) => {
    const ar = (item.w / item.h).toFixed(4);
    const ehVideo = item.tipo === "video";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gal-item" + (ehVideo ? " gal-item--video" : "") + (item.historico ? " gal-item--historico" : "");
    btn.style.setProperty("--ar", ar);
    btn.dataset.indice = i;
    btn.dataset.categoria = item.categoria + (ehVideo ? " videos" : "");
    btn.setAttribute("aria-label", (ehVideo ? "Assistir vídeo: " : "Ampliar foto: ") + item.legenda);
    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.src = ehVideo ? item.poster : item.src;
    img.alt = item.legenda;
    const veu = document.createElement("span");
    veu.className = "gal-item__veu";
    veu.textContent = item.legenda;
    btn.append(img, veu);
    btn.addEventListener("click", () => abrirLightbox(i));
    frag.appendChild(btn);
  });
  grade.appendChild(frag);
  itensVisiveis = GALERIA.map((_, i) => i);
}
renderGaleria();

/* filtros */
const filtros = document.querySelectorAll(".filtro");
function aplicarFiltro(nome){
  filtros.forEach(b => b.classList.toggle("ativo", b.dataset.filtro === nome));
  itensVisiveis = [];
  grade.querySelectorAll(".gal-item").forEach(el => {
    const bate = nome === "todas" || el.dataset.categoria.split(" ").includes(nome);
    el.classList.toggle("oculto", !bate);
    if (bate) itensVisiveis.push(parseInt(el.dataset.indice,10));
  });
}
filtros.forEach(b => b.addEventListener("click", () => aplicarFiltro(b.dataset.filtro)));

/* ---------- lightbox ---------- */
const lb = document.getElementById("lightbox");
const lbPalco = document.getElementById("lbPalco");
const lbLegenda = document.getElementById("lbLegenda");
let lbIndice = 0;

function abrirLightbox(i){
  lbIndice = i;
  mostrarLightbox();
  lb.classList.add("aberto");
  lb.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  document.getElementById("lbFechar").focus();
}
function mostrarLightbox(){
  const item = GALERIA[lbIndice];
  lbPalco.innerHTML = "";
  if (item.tipo === "video"){
    const v = document.createElement("video");
    v.src = item.src; v.controls = true; v.autoplay = true; v.playsInline = true;
    v.poster = item.poster || "";
    lbPalco.appendChild(v);
  } else {
    const im = document.createElement("img");
    im.src = item.src; im.alt = item.legenda;
    lbPalco.appendChild(im);
  }
  lbLegenda.textContent = item.legenda;
}
function fecharLightbox(){
  lb.classList.remove("aberto");
  lb.setAttribute("aria-hidden","true");
  lbPalco.innerHTML = "";
  document.body.style.overflow = "";
}
function navegarLightbox(dir){
  if (!itensVisiveis.length) return;
  const pos = itensVisiveis.indexOf(lbIndice);
  const novo = (pos + dir + itensVisiveis.length) % itensVisiveis.length;
  lbIndice = itensVisiveis[novo >= 0 ? novo : 0];
  mostrarLightbox();
}
document.getElementById("lbFechar").addEventListener("click", fecharLightbox);
document.getElementById("lbAnt").addEventListener("click", () => navegarLightbox(-1));
document.getElementById("lbProx").addEventListener("click", () => navegarLightbox(1));
lb.addEventListener("click", (e) => { if (e.target === lb) fecharLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("aberto")) return;
  if (e.key === "Escape") fecharLightbox();
  if (e.key === "ArrowLeft") navegarLightbox(-1);
  if (e.key === "ArrowRight") navegarLightbox(1);
});

})();
