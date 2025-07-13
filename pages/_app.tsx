import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout/Layout';
import theme from '../styles/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const generateTitle = (pathname: string) => {
    if (pathname === '/') return 'Fluffy Pet Wash | Mobile Dog Grooming Services';
    if (pathname.startsWith('/blog/')) return 'Fluffy Pet Wash Blog | Grooming Tips & News';
    const segments = pathname.replace(/^\//, '').split('/');
    const last = segments[segments.length - 1];
    if (!last) return 'Fluffy Pet Wash';
    const words = last.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1));
    return `${words.join(' ')} | Fluffy Pet Wash`;
  };

  const dynamicTitle = generateTitle(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-YTSZ6NZWP3', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>{dynamicTitle}</title>
      </Head>
      <Layout>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YTSZ6NZWP3"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YTSZ6NZWP3');
            `,
          }}
        />

        {/* ✅ Google Ads Conversion Tracking */}
        <Script
          id="google-ads-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', 'AW-XXXXXXX'); // Replace with your Google Ads Conversion ID
            `,
          }}
        />

        {/* ✅ Vercel Analytics */}
        <Analytics />

        {/* ✅ Vercel Speed Insights */}
        <SpeedInsights />

        {/* Render the page content */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
