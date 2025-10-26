import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { getCountryBySlug, getLanguageByCode } from '../../src/data/countries';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country');
    const locale = searchParams.get('locale') || 'en';
    const page = searchParams.get('page') || 'home';
    const subPage = searchParams.get('subPage');

    const countryData = country ? getCountryBySlug(country) : null;
    const languageData = getLanguageByCode(locale);

    // Get page title based on page and language
    const getPageTitle = () => {
      switch (page) {
        case 'about':
          return locale.startsWith('de') ? 'Über LABD' : locale.startsWith('ar') ? 'عن شركة LABD' : 'About LABD';
        case 'services':
          return locale.startsWith('de') ? 'Unsere Dienstleistungen' : locale.startsWith('ar') ? 'خدماتنا' : 'Our Services';
        case 'contact':
          return locale.startsWith('de') ? 'Kontakt' : locale.startsWith('ar') ? 'اتصل بنا' : 'Contact Us';
        case 'blog':
          return locale.startsWith('de') ? 'Blog' : locale.startsWith('ar') ? 'المدونة' : 'Blog';
        default:
          return locale.startsWith('de') ? 'Strategische Geschäftsexzellenz' : locale.startsWith('ar') ? 'التميز الاستراتيجي في الأعمال' : 'Strategic Business Excellence';
      }
    };

    const getSubtitle = () => {
      return locale.startsWith('de') ? 'Erstklassige Unternehmensberatung' : locale.startsWith('ar') ? 'استشارات إدارية متميزة' : 'Premier Management Consulting';
    };

    const getCountryName = () => {
      if (!countryData) return '';
      return locale.startsWith('de') ? 'Dubai, VAE' : locale.startsWith('ar') ? 'دبي، الإمارات' : `${countryData.name}`;
    };

    const isRTL = languageData?.isRTL || false;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d1f13 50%, #4a3a1f 75%, #574327 100%)',
            position: 'relative',
            direction: isRTL ? 'rtl' : 'ltr',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1,
              background: 'radial-gradient(circle at 20% 50%, #e3af66 0%, transparent 50%), radial-gradient(circle at 80% 20%, #a37e49 0%, transparent 50%), radial-gradient(circle at 40% 80%, #967444 0%, transparent 50%)',
            }}
          />
          
          {/* Logo Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #e3af66, #a37e49)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: isRTL ? '0' : '20px',
                marginLeft: isRTL ? '20px' : '0',
              }}
            >
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#000',
                }}
              >
                L
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #e3af66, #a37e49)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: 1,
                }}
              >
                LABD L.L.C
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '900px',
              padding: '0 40px',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #e3af66, #a37e49, #967444)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.1,
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              {getPageTitle()}
            </h1>
            
            <p
              style={{
                fontSize: '28px',
                color: '#d1d5db',
                lineHeight: 1.3,
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              {getSubtitle()}
            </p>

            {countryData && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'rgba(163, 126, 73, 0.1)',
                  borderRadius: '24px',
                  border: '1px solid rgba(163, 126, 73, 0.3)',
                }}
              >
                <span style={{ fontSize: '24px' }}>{countryData.flag}</span>
                <span
                  style={{
                    fontSize: '20px',
                    color: '#a37e49',
                    fontWeight: '600',
                  }}
                >
                  {getCountryName()}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 16px',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '20px',
              border: '1px solid rgba(163, 126, 73, 0.3)',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                color: '#9ca3af',
              }}
            >
              {locale.startsWith('de') ? 'Management Consulting' : locale.startsWith('ar') ? 'الاستشارات الإدارية' : 'Management Consulting'}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
