import { useTranslations } from 'next-intl';

export default function LearnPage() {
  const t = useTranslations('nav');

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="mb-6 text-4xl font-bold">{t('learn')}</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Tutoriais em breve...
      </p>
    </div>
  );
}
