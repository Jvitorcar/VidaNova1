/* ============================================================
   GALERIA — ESCOLINHA VIDA NOVA
   ============================================================
   COMO GERENCIAR (sem saber programar):

   ▸ ADICIONAR FOTO:
     1. Coloque o arquivo .jpg numa pasta dentro de assets/fotos/
     2. Copie um bloco { ... }, abaixo, cole no lugar desejado e
        ajuste: src (caminho), w e h (largura/altura em pixels),
        legenda e categoria.
     A ordem dos blocos = ordem na galeria.

   ▸ REMOVER FOTO: apague o bloco { ... } correspondente
     (do "{" até o "}," incluindo a vírgula).

   ▸ ADICIONAR VÍDEO: igual à foto, mas com tipo:"video",
     src apontando para assets/videos/ e poster para
     assets/posters/ (uma imagem de capa do vídeo).

   ▸ CATEGORIAS válidas (filtros do site):
     "historia" | "times" | "conquistas" | "comunidade" | "familias"
     Vídeos aparecem também no filtro "Vídeos" automaticamente.

   ▸ historico:true → adiciona o selo "arquivo histórico"
     (use em materiais antigos/baixa resolução).

   Dica: para descobrir a largura/altura de uma foto, clique nela
   com o botão direito → Propriedades (Windows) ou Informações (Mac).
   Se errar, o site não quebra — só pode sobrar espaço na grade.
   ============================================================ */

const GALERIA = [

  /* ---------- CONQUISTAS ---------- */
  { src:"assets/fotos/conquistas/gilmar-trofeu-copa-cacador.jpg", w:1200, h:1600,
    legenda:"Gilmar Alves com o troféu da Copa Caçador Sub-16 (2026)", categoria:"conquistas" },

  { src:"assets/fotos/conquistas/sub16-campeao-2026.jpg", w:1440, h:960,
    legenda:"Sub-16 campeão: a geração da Copa Caçador 2026", categoria:"conquistas" },

  { tipo:"video", src:"assets/videos/festa-titulo-sub16.mp4", poster:"assets/posters/festa-titulo-sub16.jpg", w:464, h:832,
    legenda:"A festa do título sub-16 no gramado", categoria:"conquistas" },

  { src:"assets/fotos/conquistas/trofeus-copa-cacador.jpg", w:1200, h:1600,
    legenda:"Os troféus da Copa Caçador Sub-16", categoria:"conquistas" },

  { src:"assets/fotos/conquistas/medalhas-sub9.jpg", w:1080, h:810,
    legenda:"Medalha no peito: premiação das categorias de base", categoria:"conquistas" },

  { tipo:"video", src:"assets/videos/premiacao-medalhas.mp4", poster:"assets/posters/premiacao-medalhas.jpg", w:638, h:360,
    legenda:"Entrega de medalhas no ginásio", categoria:"conquistas" },

  { tipo:"video", src:"assets/videos/entrada-em-campo.mp4", poster:"assets/posters/entrada-em-campo.jpg", w:640, h:320,
    legenda:"Entrada em campo no estádio", categoria:"conquistas" },

  /* ---------- HISTÓRIA ---------- */
  { src:"assets/fotos/historia/time-fundacao-logo.jpg", w:546, h:319, historico:true,
    legenda:"O escudo conta: início em 29/04/2009", categoria:"historia" },

  { src:"assets/fotos/historia/primeiras-geracoes.jpg", w:552, h:311, historico:true,
    legenda:"Uma das primeiras turmas da Vida Nova", categoria:"historia" },

  { src:"assets/fotos/historia/sub7-magnus-antigo.jpg", w:1080, h:810, historico:true,
    legenda:"Os pequenos das primeiras gerações", categoria:"historia" },

  { src:"assets/fotos/historia/geracao-vermelha-antiga.jpg", w:1080, h:828, historico:true,
    legenda:"Registro resgatado das redes: geração de vermelho", categoria:"historia" },

  { src:"assets/fotos/historia/sub13-reunidas.jpg", w:960, h:720, historico:true,
    legenda:"Sub-13 de azul e branco: outra época, mesmo espírito", categoria:"historia" },

  { src:"assets/fotos/historia/jasc-2018.jpg", w:1440, h:1158,
    legenda:"2018: amistoso no ano dos JASC em Caçador", categoria:"historia" },

  { src:"assets/fotos/historia/treinos-pandemia-2021.jpg", w:1220, h:913,
    legenda:"2021: de máscara, mas sem parar — treinos na pandemia", categoria:"historia" },

  /* ---------- TIMES ---------- */
  { src:"assets/fotos/times/sub16-2026-campo.jpg", w:1600, h:1200,
    legenda:"Sub-16 de 2026 no campo, debaixo do céu de Caçador", categoria:"times" },

  { src:"assets/fotos/times/sub16-rds-gramado.jpg", w:1440, h:1080,
    legenda:"Sub-16 perfilado no gramado", categoria:"times" },

  { src:"assets/fotos/times/sub16-verde-prefeitura.jpg", w:1280, h:960,
    legenda:"Sub-16 com o uniforme verde", categoria:"times" },

  { src:"assets/fotos/times/sub13-viabrasil.jpg", w:885, h:775,
    legenda:"Sub-13 com o tradicional listrado verde e branco", categoria:"times" },

  { src:"assets/fotos/times/sub13-quadra-diga-nao.jpg", w:1200, h:1500,
    legenda:"Sub-13 na quadra, com o banner das nossas bandeiras", categoria:"times" },

  { src:"assets/fotos/times/sub13-vermelho.jpg", w:960, h:959,
    legenda:"Sub-13 de vermelho em dia de competição", categoria:"times" },

  { src:"assets/fotos/times/sub11-sao-pedro.jpg", w:1080, h:608,
    legenda:"Geração sub-11 em quadra azul", categoria:"times" },

  { src:"assets/fotos/times/sub9-verde-agua.jpg", w:1200, h:1600,
    legenda:"Os pequenos do sub-9 em noite de jogo", categoria:"times" },

  { src:"assets/fotos/times/sub7-azul.jpg", w:1440, h:1080,
    legenda:"Sub-7: onde tudo começa", categoria:"times" },

  { src:"assets/fotos/times/sub7-campo.jpg", w:1080, h:810,
    legenda:"Sub-7 no campo de grama", categoria:"times" },

  { src:"assets/fotos/times/time-feminino.jpg", w:733, h:733,
    legenda:"Time feminino: as vagas são para todos, sempre", categoria:"times" },

  { src:"assets/fotos/times/time-amarelo.jpg", w:1040, h:780,
    legenda:"De amarelo neon, prontos pra bola rolar", categoria:"times" },

  { src:"assets/fotos/times/amistoso-jasc.jpg", w:1450, h:900,
    legenda:"Amistoso: Vida Nova e adversários lado a lado", categoria:"times" },

  { src:"assets/fotos/times/amistoso-society.jpg", w:996, h:747,
    legenda:"Encontro de gerações no society", categoria:"times" },

  { src:"assets/fotos/times/amistoso-quadra-vermelha.jpg", w:1026, h:780,
    legenda:"Dia de amistoso na quadra vermelha", categoria:"times" },

  { src:"assets/fotos/times/encontro-coloridos.jpg", w:1200, h:674,
    legenda:"Festival de cores: encontro de equipes", categoria:"times" },

  { src:"assets/fotos/times/treino-noturno.jpg", w:1600, h:1203,
    legenda:"Treino noturno no ginásio", categoria:"times" },

  /* ---------- COMUNIDADE ---------- */
  { src:"assets/fotos/comunidade/treino-comunidade.jpg", w:1600, h:1200,
    legenda:"Treino aberto: a comunidade inteira na beira da quadra", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/treino-comunidade-2.jpg", w:1280, h:960,
    legenda:"Coletes coloridos e quadra cheia", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/treino-areia.jpg", w:898, h:768,
    legenda:"Treino na areia: futebol em qualquer chão", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/doacao-zardo.jpg", w:768, h:1024,
    legenda:"Empresários locais doando os uniformes", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/doacao-dkpop.jpg", w:768, h:960,
    legenda:"Mais um jogo de uniformes garantido pela comunidade", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/doacao-avai.jpg", w:1280, h:1600,
    legenda:"Equipamentos doados que viram sonho de criança", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/doacao-chuteiras.jpg", w:1440, h:810,
    legenda:"Chuteiras doadas, sorrisos garantidos", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/doacao-medicamentos.jpg", w:901, h:1600,
    legenda:"Kit de primeiros socorros doado para os jogos", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/premiacao-omo.jpg", w:1200, h:1600,
    legenda:"Premiação com produtos doados pelo comércio", categoria:"comunidade" },

  { src:"assets/fotos/comunidade/visita-convidado.jpg", w:1600, h:1200,
    legenda:"Visitas que inspiram a garotada", categoria:"comunidade" },

  { tipo:"video", src:"assets/videos/visita-junior-cigano.mp4", poster:"assets/posters/visita-junior-cigano.jpg", w:720, h:1280,
    legenda:"Júnior Cigano, campeão do mundo do UFC, visita a Vida Nova (2025)", categoria:"comunidade" },

  /* ---------- FAMÍLIAS ---------- */
  { src:"assets/fotos/familias/festa-vida-nova.jpg", w:1200, h:1200,
    legenda:"Parabéns, Vida Nova! Festa de aniversário do projeto", categoria:"familias" },

  { src:"assets/fotos/familias/familia-em-casa.jpg", w:965, h:777,
    legenda:"A camisa da escolinha dentro de casa: família Vida Nova", categoria:"familias" },

  { src:"assets/fotos/familias/pai-filho-gilmar.jpg", w:901, h:1600,
    legenda:"Pai, filho e professor: três gerações de bola", categoria:"familias" },

  { src:"assets/fotos/familias/gilmar-atletas.jpg", w:1600, h:901,
    legenda:"Gilmar e seus atletas", categoria:"familias" },

  { src:"assets/fotos/familias/visita-familia.jpg", w:992, h:767,
    legenda:"Visita à casa de um atleta do projeto", categoria:"familias" },

  { tipo:"video", src:"assets/videos/roda-de-uniao.mp4", poster:"assets/posters/roda-de-uniao.jpg", w:640, h:356,
    legenda:"A roda de união antes da bola rolar", categoria:"familias" },

  { tipo:"video", src:"assets/videos/celebracao-familias.mp4", poster:"assets/posters/celebracao-familias.jpg", w:368, h:656,
    legenda:"Famílias e atletas celebrando juntos no campo", categoria:"familias" },

  { tipo:"video", src:"assets/videos/aniversario-17-anos.mp4", poster:"assets/posters/aniversario-17-anos.jpg", w:464, h:832,
    legenda:"O bolo dos 17 anos da Escolinha Vida Nova", categoria:"familias" },

  { tipo:"video", src:"assets/videos/visita-as-familias.mp4", poster:"assets/posters/visita-as-familias.jpg", w:854, h:480,
    legenda:"Ao lado das famílias: presença que vai além do treino", categoria:"familias" },

];
