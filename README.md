# Jech Programming Language

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/joaoluke/jech?style=social)](https://github.com/joaoluke/jech/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/joaoluke/jech)](https://github.com/joaoluke/jech/issues)

Jech is a modern, expressive programming language designed to be both beginner-friendly and powerful for experienced developers. With its clean syntax and WebAssembly-based execution, Jech makes it easy to write, test, and deploy code right in your browser.

## ✨ Features

- **Clean, readable syntax** - Focus on your code, not on complex syntax
- **WebAssembly-powered** - Blazing fast execution in the browser
- **Interactive playground** - Test code snippets instantly
- **Modern web interface** - Beautiful dark theme with syntax highlighting
- **Zero-dependency** - Runs entirely in the browser with no server required
- **Responsive design** - Works on desktop and mobile devices

## 🚀 Quick Start

Try Jech directly in your browser with our [interactive playground](https://joaoluke.github.io/jech-platform/playground.html). No installation needed!

```jech
// Hello, World!
say("👋 Hello from Jech!");

// Variables and types
keep name = "Jech";
keep version = 1.0;
keep isAwesome = true;

// Conditional statements
when (version > 0.5) {
    say(name + " is stable!");
} else {
    say(name + " is still in development!");
}

// Functions
do greet(name) {
    return "Hello, " + name + "!";
}

// Function calls
say(greet("Developer"));

// Loops
for (keep i = 1; i <= 3; i = i + 1) {
    say("Count: " + i);
}
```

## 📚 Documentation

Explore the complete [documentation](https://joaoluke.github.io/jech-platform/docs.html) to learn about Jech's syntax, features, and standard library.

## 🛠️ Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Node.js 20+
- npm

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/joaoluke/jech.git
   cd jech/jech-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Astro development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:4321`

### Project Structure

```
jech-platform/
├── src/
│   ├── pages/          # Astro routes (/, /docs, /internals, /playground)
│   ├── layouts/        # Base layout with SEO defaults
│   └── input.css       # Tailwind v4 styles
├── public/
│   ├── js/             # Browser scripts
│   ├── images/         # Static images
│   ├── icons/          # Favicons/icons
│   └── wasm/           # Jech WebAssembly runtime
├── astro.config.mjs
└── vercel.json
```

## 🌐 Deployment

This project can be deployed to any web hosting service. **Important:** The playground requires proper CORS headers and WASM support, so a simple static file host may not work correctly.

### Recommended: Vercel Deployment (Configured)

The project includes `vercel.json` with proper configuration for WASM files and CORS headers:

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Deploy from the project directory:
   ```bash
   vercel
   ```

3. Or connect your GitHub repository to Vercel:
   - Go to [vercel.com](https://vercel.com/)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Deploy!

The `vercel.json` configuration ensures:
- ✅ Proper WASM MIME types (`application/wasm`)
- ✅ CORS headers for SharedArrayBuffer support
- ✅ Correct routing for all pages

### Alternative Hosting Options

- **[Netlify](https://www.netlify.com/)** - Add `_headers` file for WASM support
- **[GitHub Pages](https://pages.github.com/)** - May have CORS limitations
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Good WASM support
- **Custom server** - Use the included `package.json` scripts

### GitHub Pages Deployment

1. Push the `public` directory to the `gh-pages` branch
2. Enable GitHub Pages in your repository settings
3. Your site will be available at `https://<username>.github.io/jech-platform/`

**Note:** GitHub Pages may have limitations with WASM and CORS headers.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- The Jech community for their support and feedback
- All contributors who helped improve the language
- The WebAssembly and Emscripten teams for making this possible

---

Made with ❤️ by the Jech Team
