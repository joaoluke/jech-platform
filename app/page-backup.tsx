import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Code2, BookOpen, Zap } from 'lucide-react';

export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            {t('title')}
          </h1>
          <p className="mb-4 text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
            {t('subtitle')}
          </p>
          <p className="mb-12 text-lg text-zinc-500 dark:text-zinc-500">
            {t('description')}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/playground"
              className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {t('cta.playground')}
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-zinc-300 px-8 py-4 text-lg font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              {t('cta.docs')}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-950">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {t('features.educational.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t('features.educational.description')}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-purple-100 p-4 dark:bg-purple-950">
                <Code2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {t('features.transparent.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t('features.transparent.description')}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-4 dark:bg-green-950">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {t('features.practical.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t('features.practical.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
