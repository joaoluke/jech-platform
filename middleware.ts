import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'pt',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(pt|en|es)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
