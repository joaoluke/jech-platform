'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Editor } from '@monaco-editor/react';
import { Play, Trash2 } from 'lucide-react';

const defaultCode = `keep x = 10;
keep name = "JECH";
say(x);
say(name);

keep numbers = [1, 2, 3];
say(numbers[0]);`;

export function PlaygroundClient() {
  const t = useTranslations('playground');
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput(['> Executando código...']);
    
    setTimeout(() => {
      setOutput([
        '> Código executado com sucesso!',
        '',
        'NOTA: O interpretador WASM ainda não está integrado.',
        'Em breve você poderá executar código Jech diretamente no navegador!',
        '',
        'Por enquanto, você pode:',
        '- Editar o código',
        '- Ver exemplos',
        '- Explorar a sintaxe',
      ]);
      setIsRunning(false);
    }, 500);
  };

  const clearOutput = () => {
    setOutput([]);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  return (
    <div className="container mx-auto flex h-[calc(100vh-4rem)] flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <div className="flex gap-2">
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700 disabled:opacity-50"
          >
            <Play className="h-4 w-4" />
            {t('run')}
          </button>
          <button
            onClick={clearOutput}
            className="flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <Trash2 className="h-4 w-4" />
            {t('clear')}
          </button>
        </div>
      </div>

      <div className="grid flex-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium dark:border-zinc-800 dark:bg-zinc-950">
            {t('editor')}
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={code}
              onChange={handleEditorChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium dark:border-zinc-800 dark:bg-zinc-950">
            {t('output')}
          </div>
          <div className="flex-1 overflow-auto bg-black p-4 font-mono text-sm text-green-400">
            {output.length === 0 ? (
              <div className="text-zinc-500">
                {t('run')} para ver a saída...
              </div>
            ) : (
              output.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">
                  {line}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-2 text-sm font-semibold">{t('examples')}</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCode(defaultCode)}
            className="rounded-md bg-white px-3 py-1 text-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            Hello World
          </button>
          <button
            onClick={() => setCode('keep age = 20;\n\nwhen (age > 18) {\n    say("Adult");\n}\nelse {\n    say("Minor");\n}')}
            className="rounded-md bg-white px-3 py-1 text-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            Conditionals
          </button>
          <button
            onClick={() => setCode('keep numbers = [1, 2, 3, 4, 5];\nkeep names = ["Alice", "Bob", "Charlie"];\n\nsay(numbers[0]);\nsay(names[1]);')}
            className="rounded-md bg-white px-3 py-1 text-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            Arrays
          </button>
        </div>
      </div>
    </div>
  );
}
