import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Layout from '../components/Layout/Layout'; // Import Layout component
import theme from '../styles/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react'; // ✅ Vercel Analytics
import { SpeedInsights } from '@vercel/speed-insights/react'; // ✅ Vercel Speed Insights
import {
  GA4_MEASUREMENT_ID,
  GTAG_JS_SRC,
  googleTagBootstrapSource,
} from '../lib/ads';
import { installAdsClickListener } from '../lib/adsClicks';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        {/* Stub first so config is queued before gtag.js, and so an existing GTM gtag is reused. */}
        <Script
          id="google-tag-bootstrap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: googleTagBootstrapSource() }}
        />
        <Script src={GTAG_JS_SRC} strategy="afterInteractive" />

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
