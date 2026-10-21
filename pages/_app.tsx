import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { LazyMotion, domAnimation } from 'framer-motion';
import Layout from '../components/Layout/Layout'; // Import Layout component
import theme from '../styles/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react'; // ✅ Vercel Analytics
import { SpeedInsights } from '@vercel/speed-insights/react'; // ✅ Vercel Speed Insights
import { GA4_MEASUREMENT_ID, GTM_ID, googleTagBootstrapSource } from '../lib/ads';
import { installAdsClickListener } from '../lib/adsClicks';
import '../styles/sr-only.css';
import '../styles/home-hero.css';
import '../styles/testimonials-slider.css';

const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

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
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          {/*
            FLAGGED and kept: G-YTSZ6NZWP3, AW-17319676855, AW-10869086002
            (bootstrap) and G-G17GCFVQT2 (loaded by GTM-PG7XP5HS).
            Both run on idle so they stay off the LCP / TBT path.
            Clicks before either script are queued by ensureGtag().
          */}
          <Script
            id="google-tag-bootstrap"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{ __html: googleTagBootstrapSource() }}
          />
          <Script
            id="gtm-script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{ __html: GTM_SNIPPET }}
          />

          {/* ✅ Vercel Analytics */}
          <Analytics />

          {/* ✅ Vercel Speed Insights */}
          <SpeedInsights />

          {/* Render the page content */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LazyMotion>
  );
};

export default App;
