import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Layout from '../components/Layout/Layout'; // Import Layout component
import theme from '../styles/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react'; // ✅ Vercel Analytics
import { SpeedInsights } from '@vercel/speed-insights/react'; // ✅ Vercel Speed Insights

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

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

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const { city, region_code } = data;
        const orlandoAreas = [
          'Orlando',
          'Kissimmee',
          'Winter Park',
          'Oviedo',
          'Altamonte Springs',
          'Winter Garden',
          'Apopka'
        ];

        if (
          router.pathname === '/' &&
          region_code === 'FL' &&
          city &&
          orlandoAreas.some((c) => city.toLowerCase().includes(c.toLowerCase()))
        ) {
          router.replace('/orlando');
        }
      } catch (err) {
        console.error('Geolocation lookup failed', err);
      }
    };

    checkLocation();
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
