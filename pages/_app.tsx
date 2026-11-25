import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Layout from '../components/Layout/Layout'; // Import Layout component
import theme from '../styles/themes';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

// Short cache key. The server and the browser both use it, so the class
// names in the HTML match hydration. Two characters instead of "css".
const emotionCache = createCache({ key: 'c', prepend: true });
import { Analytics } from '@vercel/analytics/react'; // ✅ Vercel Analytics
import { SpeedInsights } from '@vercel/speed-insights/react'; // ✅ Vercel Speed Insights
import { GA4_MEASUREMENT_ID, googleTagBootstrapSource } from '../lib/ads';
import { installAdsClickListener } from '../lib/adsClicks';
import '../styles/sr-only.css';
import '../styles/icons.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', GA4_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => installAdsClickListener(), []);

  return (
    <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        {/* Reuse GTM's gtag.js. This does not load another copy. */}
        <Script
          id="google-tag-bootstrap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: googleTagBootstrapSource() }}
        />

        {/* ✅ Vercel Analytics */}
        <Analytics />

        {/* ✅ Vercel Speed Insights */}
        <SpeedInsights />

        {/* Render the page content */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
