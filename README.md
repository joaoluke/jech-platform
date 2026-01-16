# JECH Platform

Site oficial da linguagem de programação JECH com playground interativo, documentação completa e tutoriais.

## 🌍 Multilíngue

O site suporta três idiomas:
- 🇧🇷 Português (PT)
- 🇺🇸 English (EN)
- 🇪🇸 Español (ES)

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Type safety
- **TailwindCSS 4** - Styling moderno
- **next-intl** - Internacionalização (i18n)
- **Monaco Editor** - Editor de código (VS Code)
- **Lucide Icons** - Ícones modernos

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

O site irá redirecionar automaticamente para `/pt` (português) como idioma padrão.

## 📁 Estrutura do Projeto

```
jech-platform/
├── app/
│   └── [locale]/           # Rotas com i18n
│       ├── page.tsx        # Homepage
│       ├── playground/     # Playground interativo
│       ├── docs/           # Documentação
│       └── learn/          # Tutoriais
├── components/
│   ├── Header.tsx          # Navegação principal
│   ├── Footer.tsx          # Rodapé
│   └── playground/         # Componentes do playground
├── messages/               # Traduções (pt/en/es)
├── lib/                    # Utilitários
└── public/                 # Assets estáticos
```

## ✨ Funcionalidades

### ✅ Implementado

- [x] Homepage multilíngue (PT/EN/ES)
- [x] Navegação com seletor de idioma
- [x] Playground interativo com Monaco Editor
- [x] Layout responsivo
- [x] Tema dark/light automático

### 🚧 Em Desenvolvimento

- [ ] Integração com interpretador WASM
- [ ] Documentação completa
- [ ] Tutoriais interativos
- [ ] Exemplos de código
- [ ] Sistema de compartilhamento de código

## 🎮 Playground

O playground permite:
- Editar código Jech com syntax highlighting
- Executar código (WASM em breve)
- Ver output em tempo real
- Carregar exemplos prontos
- Interface limpa e moderna

## 🌐 Rotas

- `/pt` - Homepage em português
- `/pt/playground` - Playground em português
- `/pt/docs` - Documentação em português
- `/pt/learn` - Tutoriais em português

(Mesmo padrão para `/en` e `/es`)

## 🚀 Deploy

O projeto está pronto para deploy na Vercel:

```bash
npm run build
```

## 📖 Sobre o JECH

JECH é uma linguagem de programação educacional construída do zero para ensinar como linguagens como Python, JavaScript e PHP funcionam internamente.

Visite o [repositório principal](https://github.com/joaoluke/jech) para mais informações.
