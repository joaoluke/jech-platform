# Sistema de Internacionalização (i18n) - Jech Platform

## Idiomas Suportados

- 🇧🇷 Português (pt-BR)
- 🇺🇸 English (en)

## Como Usar

### 1. Adicionar os scripts nas páginas HTML

```html
<!-- No <head>, adicione os estilos -->
<link rel="stylesheet" href="styles/language-selector.css" />

<!-- Antes do </body>, adicione os scripts -->
<script src="js/i18n/translations.js"></script>
<script src="js/i18n/i18n.js"></script>
```

### 2. Adicionar o seletor de idioma na navbar

```html
<nav class="navbar">
  <div class="container">
    <a href="/" class="logo">JECH</a>
    <div class="nav-links">
      <a href="/" data-i18n="nav.home">Início</a>
      <a href="/playground" data-i18n="nav.playground">Playground</a>
      <a href="/docs" data-i18n="nav.docs">Documentação</a>
      <a href="/internals" data-i18n="nav.internals">Como Funciona</a>
      <a href="https://github.com/joaoluke/jech" target="_blank" data-i18n="nav.github">GitHub</a>
      
      <!-- Seletor de idioma -->
      <div class="language-selector">
        <span class="language-icon">🌐</span>
        <select id="languageSelector" onchange="I18n.setLanguage(this.value)">
          <option value="pt-BR">🇧🇷 Português</option>
          <option value="en">🇺🇸 English</option>
        </select>
      </div>
    </div>
  </div>
</nav>
```

### 3. Marcar elementos para tradução

Use o atributo `data-i18n` com a chave da tradução:

```html
<!-- Tradução de texto -->
<h1 data-i18n="home.hero.title">Aprenda Como Linguagens de Programação Funcionam</h1>

<!-- Tradução de placeholder -->
<input type="text" data-i18n-placeholder="playground.editorPlaceholder" />

<!-- Tradução de title/tooltip -->
<button data-i18n-title="playground.run">▶</button>
```

### 4. Usar traduções em JavaScript

```javascript
// Obter tradução simples
const title = I18n.t('playground.title');

// Obter tradução com parâmetros
const status = I18n.t('playground.status.ready', { version: '1.0.0' });

// Trocar idioma programaticamente
I18n.setLanguage('en');

// Obter idioma atual
const currentLang = I18n.getCurrentLanguage();
```

## Estrutura das Traduções

As traduções estão organizadas em `js/i18n/translations.js`:

```javascript
const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      playground: 'Playground',
      // ...
    },
    playground: {
      title: 'Jech Playground',
      run: 'Executar',
      // ...
    }
  },
  'en': {
    nav: {
      home: 'Home',
      playground: 'Playground',
      // ...
    },
    playground: {
      title: 'Jech Playground',
      run: 'Run',
      // ...
    }
  }
};
```

## Adicionar Novo Idioma

1. Adicione o código do idioma em `SUPPORTED_LANGS` no arquivo `i18n.js`
2. Adicione as traduções no objeto `translations` em `translations.js`
3. Adicione a opção no seletor de idioma

## Detecção Automática

O sistema detecta automaticamente o idioma do usuário na seguinte ordem:

1. Idioma salvo no localStorage
2. Idioma do navegador
3. Idioma padrão (pt-BR)

## Persistência

O idioma escolhido é salvo no localStorage e será mantido entre sessões.
