# Site Oficial — Escolinha Vida Nova ⚽

Site 100% estático, feito para ser hospedado **gratuitamente no GitHub Pages**, sem banco de dados, sem backend e sem serviços pagos.

---

## 📁 Como o projeto está organizado

```
site/
├── index.html          ← a página (textos das seções estão aqui)
├── css/style.css       ← o visual (cores, fontes, espaçamentos)
├── js/
│   ├── galeria.js      ← ★ AQUI você gerencia fotos e vídeos da galeria
│   └── main.js         ← funcionamento do site (não precisa mexer)
└── assets/
    ├── fotos/
    │   ├── historia/     fotos antigas e marcos do passado
    │   ├── bandeiras/    fé, diga não às drogas, uniforme
    │   ├── conquistas/   troféus, medalhas, títulos
    │   ├── times/        fotos de equipes e amistosos
    │   ├── comunidade/   doações, treinos abertos, visitas
    │   └── familias/     famílias, festas, visitas às casas
    ├── videos/           vídeos .mp4
    └── posters/          imagem de capa de cada vídeo
```

---

## ➕ Adicionar uma foto na galeria

1. Salve a foto (formato `.jpg`, de preferência com no máximo 1600px de largura) dentro da pasta certa em `assets/fotos/`.
2. Abra o arquivo `js/galeria.js` em qualquer editor de texto.
3. Copie um bloco existente, por exemplo:

```js
{ src:"assets/fotos/times/sub7-campo.jpg", w:1080, h:810,
  legenda:"Sub-7 no campo de grama", categoria:"times" },
```

4. Cole onde quiser (a ordem dos blocos é a ordem na galeria) e ajuste:
   - `src` → caminho do novo arquivo
   - `w` e `h` → largura e altura da foto em pixels (botão direito na foto → Propriedades/Detalhes)
   - `legenda` → o texto que aparece na foto
   - `categoria` → `"historia"`, `"times"`, `"conquistas"`, `"comunidade"` ou `"familias"`
5. Para fotos antigas/de baixa qualidade, adicione `historico:true` — o site coloca um selo elegante de **"arquivo histórico"** em vez de escondê-las.

## ➖ Remover ou substituir uma foto

- **Remover:** apague o bloco `{ ... },` correspondente no `js/galeria.js` (e, se quiser, o arquivo da pasta).
- **Substituir:** salve a nova foto com o **mesmo nome** por cima da antiga — pronto, nada mais precisa mudar.

## 🎬 Adicionar um vídeo

1. Coloque o `.mp4` em `assets/videos/` (ideal: menos de 30 MB; o GitHub não aceita arquivos acima de 100 MB).
2. Crie uma imagem de capa (um print do vídeo) e salve em `assets/posters/` com o mesmo nome.
3. No `js/galeria.js`, adicione um bloco com `tipo:"video"`:

```js
{ tipo:"video", src:"assets/videos/meu-video.mp4", poster:"assets/posters/meu-video.jpg",
  w:720, h:1280, legenda:"Descrição do vídeo", categoria:"conquistas" },
```

`w` e `h` são a resolução do vídeo (vertical de celular costuma ser 720×1280; horizontal, 1280×720).

## ✏️ Atualizar textos

Todos os textos das seções (história, conquistas, horários de treino etc.) estão no `index.html`, escritos em português e organizados com comentários `<!-- ====== NOME DA SEÇÃO ====== -->`. Basta procurar a seção e editar o texto entre as tags.

Para **adicionar um novo título** na seção Conquistas, copie um bloco `<article class="trofeu">...</article>` e ajuste ano, nome e descrição. Para **um novo marco na linha do tempo**, copie um bloco `<article class="marco">...</article>`.

### Histórias de transformação
A seção já está pronta para receber depoimentos de ex-alunos: no `index.html`, dentro de `<div class="historias__grade">`, copie um bloco `<article class="historia">...</article>` e troque o texto e o autor.

---

## 🚀 Publicar no GitHub Pages (passo a passo)

1. Crie uma conta gratuita em [github.com](https://github.com).
2. Crie um repositório novo chamado, por exemplo, `escolinha-vida-nova` (público).
3. Clique em **"uploading an existing file"** e arraste **todo o conteúdo desta pasta** (incluindo as pastas `assets`, `css`, `js`).
   - Como os vídeos somam ~50 MB, se o envio pelo navegador falhar, envie em partes (primeiro as pastas de fotos, depois os vídeos) ou use o aplicativo [GitHub Desktop](https://desktop.github.com).
4. No repositório, vá em **Settings → Pages**.
5. Em **Source**, escolha `Deploy from a branch`; em **Branch**, escolha `main` e pasta `/ (root)`. Salve.
6. Em 1–2 minutos o site estará no ar em:
   `https://SEU-USUARIO.github.io/escolinha-vida-nova/`

### Atualizações futuras
Sempre que trocar uma foto ou editar um texto, basta enviar o arquivo alterado pelo próprio site do GitHub (botão **Add file → Upload files**, marcando "substituir"). O site se atualiza sozinho em instantes.

---

## ✅ Checklist de qualidade já aplicado

- Layout que **se adapta a cada foto e vídeo** (horizontal, vertical, quadrado) — nenhuma imagem é cortada ou esticada;
- Materiais antigos preservados com selo de **arquivo histórico**;
- Site responsivo: celular, tablet, notebook e desktop;
- Carregamento otimizado: fotos comprimidas (~8 MB no total), `loading="lazy"`, vídeos só carregam ao clicar;
- O vídeo longo da visita às famílias foi comprimido de 80 MB para 32 MB sem perda perceptível;
- Acessibilidade: contraste adequado, textos alternativos em todas as imagens, navegação por teclado no lightbox, respeito à preferência de movimento reduzido.

Feito com ❤️ para os 17 anos da Escolinha Vida Nova — Caçador/SC.
