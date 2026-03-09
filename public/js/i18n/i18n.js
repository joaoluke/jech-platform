const I18n = (function () {
  const STORAGE_KEY = "jech_language";
  const DEFAULT_LANG = "pt-BR";
  const SUPPORTED_LANGS = ["pt-BR", "en"];

  let currentLang = DEFAULT_LANG;

  function init() {
    currentLang = detectLanguage();

    applyTranslations();

    updateLanguageSelector();

    console.log(`[i18n] Idioma inicializado: ${currentLang}`);
  }

  function detectLanguage() {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    if (savedLang && SUPPORTED_LANGS.includes(savedLang)) {
      return savedLang;
    }

    const browserLang = navigator.language || navigator.userLanguage;

    if (SUPPORTED_LANGS.includes(browserLang)) {
      return browserLang;
    }

    const langCode = browserLang.split("-")[0];
    const matchedLang = SUPPORTED_LANGS.find((lang) =>
      lang.startsWith(langCode)
    );

    return matchedLang || DEFAULT_LANG;
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
      console.error(`[i18n] Idioma não suportado: ${lang}`);
      return;
    }

    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    applyTranslations();

    updateLanguageSelector();

    console.log(`[i18n] Idioma alterado para: ${lang}`);
  }

  function t(path, params = {}) {
    const keys = path.split(".");
    let value = translations[currentLang];

    for (const key of keys) {
      if (value && typeof value === "object") {
        value = value[key];
      } else {
        console.warn(`[i18n] Tradução não encontrada: ${path}`);
        return path;
      }
    }

    if (typeof value === "string") {
      return value.replace(/\{(\w+)\}/g, (match, key) => {
        return params[key] !== undefined ? params[key] : match;
      });
    }

    return value || path;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = t(key);

      if (translation) {
        element.textContent = translation;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      const translation = t(key);

      if (translation) {
        element.placeholder = translation;
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      const translation = t(key);

      if (translation) {
        element.title = translation;
      }
    });
  }

  function updateLanguageSelector() {
    const selector = document.getElementById("languageSelector");
    if (selector) {
      selector.value = currentLang;
    }

    document.querySelectorAll("[data-lang]").forEach((element) => {
      const lang = element.getAttribute("data-lang");
      if (lang === currentLang) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  function getCurrentLanguage() {
    return currentLang;
  }

  function getSupportedLanguages() {
    return SUPPORTED_LANGS;
  }

  return {
    init,
    setLanguage,
    t,
    applyTranslations,
    getCurrentLanguage,
    getSupportedLanguages
  };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => I18n.init());
} else {
  I18n.init();
}
