export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            JECH Programming Language
          </h1>
          <p className="mb-4 text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
            Aprenda como linguagens de programação funcionam por dentro
          </p>
          <p className="mb-12 text-lg text-zinc-500 dark:text-zinc-500">
            JECH é uma linguagem construída do zero para ensinar exatamente como Python, JavaScript e PHP funcionam.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/playground"
              className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Experimentar Playground
            </a>
            <a
              href="/docs"
              className="rounded-lg border border-zinc-300 px-8 py-4 text-lg font-semibold transition-colors hover:bg-zinc-100"
            >
              Ver Documentação
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Educacional
              </h3>
              <p className="text-zinc-600">
                Aprenda os conceitos fundamentais de compiladores e interpretadores
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-purple-100 p-4">
                <span className="text-4xl">💻</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Transparente
              </h3>
              <p className="text-zinc-600">
                Veja cada etapa: tokenizer, parser, AST, bytecode e VM
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Prático
              </h3>
              <p className="text-zinc-600">
                Execute código real com variáveis, arrays e condicionais
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
