import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> for curious developers
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          JECH Programming Language © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
