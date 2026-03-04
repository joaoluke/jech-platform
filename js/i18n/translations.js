// eslint-disable-next-line no-unused-vars
const translations = {
  "pt-BR": {
    nav: {
      home: "Início",
      playground: "Playground",
      docs: "Documentação",
      internals: "Como Funciona",
      github: "GitHub"
    },

    home: {
      hero: {
        title: "Aprenda a Criar Linguagens de Programação",
        subtitle:
          "Jech é uma linguagem educacional que demonstra como interpretadores e compiladores funcionam na prática.",
        ctaPlayground: "Experimentar no Playground",
        ctaDocs: "Ver Documentação"
      },
      features: {
        title: "Por que Jech?",
        simple: {
          title: "Sintaxe Simples",
          description:
            "Aprenda os conceitos fundamentais sem complexidade desnecessária"
        },
        interactive: {
          title: "Playground Interativo",
          description: "Execute código diretamente no navegador via WebAssembly"
        },
        educational: {
          title: "Propósito Educacional",
          description:
            "Entenda como interpretadores processam código passo a passo"
        }
      },
      quickStart: {
        title: "Comece Agora",
        description: "Seu primeiro programa em Jech",
        tryIt: "Experimente no Playground"
      },
      footer: {
        description:
          "Linguagem de programação educacional para aprender sobre interpretadores e compiladores.",
        links: "Links",
        technologies: "Tecnologias",
        copyright:
          "© 2026 Jech Programming Language. Open Source sob MIT License."
      }
    },

    playground: {
      title: "Jech Playground",
      run: "Executar",
      clear: "Limpar",
      sourceCode: "Código Fonte",
      output: "Saída",
      outputPlaceholder: "A saída do seu código aparecerá aqui...",
      editorPlaceholder: "Digite seu código Jech aqui...",
      examples: "Exemplos:",
      exampleHello: "👋 Olá Mundo",
      exampleVariables: "🔢 Variáveis",
      exampleConditionals: "🔀 Condicionais",
      status: {
        initializing: "Inicializando o interpretador Jech...",
        ready: "Jech v{version} pronto!",
        running: "Executando...",
        success: "Executado com sucesso ({time}s)",
        error: "Erro durante a execução",
        errorInit: "Falha ao inicializar: {error}",
        noCode: "Nenhum código para executar",
        notReady:
          "O interpretador ainda não está pronto. Por favor, aguarde...",
        exampleLoaded: 'Exemplo "{name}" carregado',
        exampleNotFound: "Exemplo não encontrado",
        executing: "Executando código..."
      }
    },

    docs: {
      title: "Documentação Completa Jech",
      sidebar: {
        intro: "Introdução",
        installation: "Instalação",
        gettingStarted: "Primeiros Passos",
        say: "Comando say",
        variables: "Variáveis (keep)",
        types: "Tipos de Dados",
        operators: "Operadores",
        concatenation: "Concatenação",
        conditionals: "Condicionais (when/else)",
        arrays: "Arrays",
        functions: "Funções (do)",
        examples: "Exemplos Práticos"
      }
    },

    internals: {
      title: "Por Trás dos Panos",
      subtitle: "Entenda como seu código Jech é processado e executado",
      whatYouWillLearn: "O que você vai aprender",
      interactiveDemo: "Demonstração Interativa",
      demoPrompt:
        "Digite um código Jech e veja como ele é processado em cada etapa:",
      sourceCodeLabel: "Código Fonte:",
      analyzeBtn: "🔬 Analisar Código",
      pipeline: {
        lexer: {
          title: "Análise Léxica (Lexer)",
          description:
            "O código fonte é dividido em tokens (unidades mínimas de significado).",
          detail:
            "Cada caractere é lido e agrupado em categorias: palavras-chave, identificadores, operadores, literais, etc."
        },
        parser: {
          title: "Análise Sintática (Parser)",
          description:
            "Os tokens são organizados em uma Árvore Sintática Abstrata (AST).",
          detail:
            "O parser verifica se a sequência de tokens segue as regras gramaticais da linguagem."
        },
        semantic: {
          title: "Análise Semântica",
          description: "Verifica se o código faz sentido lógico.",
          detail:
            "Checa tipos de dados, escopo de variáveis, e se funções/variáveis foram declaradas antes de serem usadas."
        },
        codegen: {
          title: "Geração de Código Intermediário",
          description:
            "A AST é convertida em bytecode ou código intermediário.",
          detail:
            "Este formato é mais fácil de executar e otimizar que a AST original."
        },
        runtime: {
          title: "Execução (Runtime)",
          description:
            "O código intermediário é executado pela máquina virtual.",
          detail:
            "A VM interpreta cada instrução e executa as operações correspondentes."
        }
      },
      architecture: "Arquitetura do Jech",
      techStack: "Stack Tecnológica",
      resources: "Recursos Adicionais"
    },

    error404: {
      code: "404",
      title: "Página não encontrada",
      message: "A página que você está procurando não existe ou foi movida.",
      backHome: "Voltar ao Início",
      goPlayground: "Ir para o Playground"
    }
  },

  en: {
    nav: {
      home: "Home",
      playground: "Playground",
      docs: "Documentation",
      internals: "How It Works",
      github: "GitHub"
    },

    home: {
      hero: {
        title: "Learn to Build Programming Languages",
        subtitle:
          "Jech is an educational language that demonstrates how interpreters and compilers work in practice.",
        ctaPlayground: "Try the Playground",
        ctaDocs: "View Documentation"
      },
      features: {
        title: "Why Jech?",
        simple: {
          title: "Simple Syntax",
          description:
            "Learn fundamental concepts without unnecessary complexity"
        },
        interactive: {
          title: "Interactive Playground",
          description: "Run code directly in the browser via WebAssembly"
        },
        educational: {
          title: "Educational Purpose",
          description: "Understand how interpreters process code step by step"
        }
      },
      quickStart: {
        title: "Get Started",
        description: "Your first Jech program",
        tryIt: "Try it in the Playground"
      },
      footer: {
        description:
          "Educational programming language for learning about interpreters and compilers.",
        links: "Links",
        technologies: "Technologies",
        copyright:
          "© 2026 Jech Programming Language. Open Source under MIT License."
      }
    },

    playground: {
      title: "Jech Playground",
      run: "Run",
      clear: "Clear",
      sourceCode: "Source Code",
      output: "Output",
      outputPlaceholder: "Your code output will appear here...",
      editorPlaceholder: "Type your Jech code here...",
      examples: "Examples:",
      exampleHello: "👋 Hello World",
      exampleVariables: "🔢 Variables",
      exampleConditionals: "🔀 Conditionals",
      status: {
        initializing: "Initializing Jech interpreter...",
        ready: "Jech v{version} ready!",
        running: "Running...",
        success: "Executed successfully ({time}s)",
        error: "Error during execution",
        errorInit: "Failed to initialize: {error}",
        noCode: "No code to execute",
        notReady: "The interpreter is not ready yet. Please wait...",
        exampleLoaded: 'Example "{name}" loaded',
        exampleNotFound: "Example not found",
        executing: "Executing code..."
      }
    },

    docs: {
      title: "Complete Jech Documentation",
      sidebar: {
        intro: "Introduction",
        installation: "Installation",
        gettingStarted: "Getting Started",
        say: "say Command",
        variables: "Variables (keep)",
        types: "Data Types",
        operators: "Operators",
        concatenation: "Concatenation",
        conditionals: "Conditionals (when/else)",
        arrays: "Arrays",
        functions: "Functions (do)",
        examples: "Practical Examples"
      }
    },

    internals: {
      title: "Behind the Scenes",
      subtitle: "Understand how your Jech code is processed and executed",
      whatYouWillLearn: "What you will learn",
      interactiveDemo: "Interactive Demo",
      demoPrompt: "Type Jech code and see how it is processed at each stage:",
      sourceCodeLabel: "Source Code:",
      analyzeBtn: "🔬 Analyze Code",
      pipeline: {
        lexer: {
          title: "Lexical Analysis (Lexer)",
          description:
            "The source code is divided into tokens (minimal units of meaning).",
          detail:
            "Each character is read and grouped into categories: keywords, identifiers, operators, literals, etc."
        },
        parser: {
          title: "Syntax Analysis (Parser)",
          description:
            "Tokens are organized into an Abstract Syntax Tree (AST).",
          detail:
            "The parser checks if the token sequence follows the language grammar rules."
        },
        semantic: {
          title: "Semantic Analysis",
          description: "Checks if the code makes logical sense.",
          detail:
            "Checks data types, variable scope, and if functions/variables were declared before being used."
        },
        codegen: {
          title: "Intermediate Code Generation",
          description:
            "The AST is converted into bytecode or intermediate code.",
          detail:
            "This format is easier to execute and optimize than the original AST."
        },
        runtime: {
          title: "Execution (Runtime)",
          description:
            "The intermediate code is executed by the virtual machine.",
          detail:
            "The VM interprets each instruction and executes the corresponding operations."
        }
      },
      architecture: "Jech Architecture",
      techStack: "Tech Stack",
      resources: "Additional Resources"
    },

    error404: {
      code: "404",
      title: "Page not found",
      message: "The page you are looking for does not exist or has been moved.",
      backHome: "Back to Home",
      goPlayground: "Go to Playground"
    }
  }
};
