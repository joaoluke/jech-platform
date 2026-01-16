'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Github, Globe } from 'lucide-react';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const locales = [
    { code: 'pt', name: 'PT' },
    { code: 'en', name: 'EN' },
    { code: 'es', name: 'ES' }
  ];

  const getLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${locale}`} className="text-xl font-bold">
          JECH
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            {t('home')}
          </Link>
          <Link
            href={`/${locale}/playground`}
            className="text-sm font-medium transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            {t('playground')}
          </Link>
          <Link
            href={`/${locale}/docs`}
            className="text-sm font-medium transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            {t('docs')}
          </Link>
          <Link
            href={`/${locale}/learn`}
            className="text-sm font-medium transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            {t('learn')}
          </Link>

          <div className="flex items-center gap-2 border-l border-zinc-200 pl-6 dark:border-zinc-800">
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={getLocalizedPath(loc.code)}
                  className={`px-2 py-1 text-xs font-medium transition-colors ${
                    locale === loc.code
                      ? 'text-black dark:text-white'
                      : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300'
                  }`}
                >
                  {loc.name}
                </Link>
              ))}
            </div>

            <a
              href="https://github.com/joaoluke/jech"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
              aria-label={t('github')}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
