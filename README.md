# Jech Platform - Site Estático

Site oficial da linguagem de programação Jech, construído com HTML/CSS/JS puro.

## 🚀 Como Usar

### Opção 1: Servidor HTTP Simples (Python)

```bash
cd public
python3 -m http.server 8000
```

Acesse: http://localhost:8000

### Opção 2: Servidor HTTP Simples (Node.js)

```bash
cd public
npx http-server -p 8000
```

Acesse: http://localhost:8000

### Opção 3: Live Server (VS Code)

1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### Opção 4: Usar o Next.js (já configurado)

```bash
npm run dev
```

Acesse: http://localhost:3000

## 📁 Estrutura de Arquivos

```
public/
├── index.html          # Página inicial
├── playground.html     # Playground interativo
├── docs.html          # Documentação
├── styles.css         # Estilos globais
├── wasm/              # Arquivos WebAssembly
│   ├── jech.js        # Módulo Emscripten
│   └── jech.wasm      # Binário WASM
└── README.md          # Este arquivo
```

## 🎯 Páginas

- **index.html** - Página inicial com apresentação da linguagem
- **playground.html** - Editor interativo para testar código Jech
- **docs.html** - Documentação completa da linguagem

## 🔧 Atualizar WASM

Para recompilar o interpretador WASM:

```bash
cd ../jech
./build_wasm.sh
```

Os arquivos serão automaticamente copiados para `public/wasm/`.

## 🌐 Deploy

Este site é 100% estático e pode ser hospedado em:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**
- Qualquer servidor HTTP estático

### Deploy no GitHub Pages

1. Faça push do diretório `public/` para o branch `gh-pages`
2. Configure GitHub Pages para usar o branch `gh-pages`
3. Seu site estará disponível em: `https://username.github.io/jech-platform/`

### Deploy no Netlify

1. Arraste a pasta `public/` para o Netlify Drop
2. Ou conecte o repositório Git e configure:
   - Build command: (vazio)
   - Publish directory: `public`

## 📝 Desenvolvimento

Não há build process! Apenas edite os arquivos HTML/CSS/JS e recarregue o navegador.

## ✨ Funcionalidades

- ✅ Site 100% estático (sem Node.js necessário em produção)
- ✅ Playground com WebAssembly
- ✅ Documentação completa
- ✅ Design responsivo
- ✅ Tema dark moderno
- ✅ Syntax highlighting
- ✅ Exemplos interativos

## 🎨 Personalização

Edite `styles.css` para mudar cores e estilos. As variáveis CSS estão no topo do arquivo:

```css
:root {
    --primary: #16a34a;
    --primary-dark: #15803d;
    --secondary: #3b82f6;
    /* ... */
}
```

## 📦 Sem Dependências

Este site não requer:
- ❌ Node.js (em produção)
- ❌ npm/yarn
- ❌ Build tools
- ❌ Frameworks JavaScript

Apenas HTML, CSS e JavaScript puro! 🎉
