import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') || 'Global';
  const locale = searchParams.get('locale') || 'en';

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
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(135deg, #1f2937 0%, #000000 100%)',
        }}
      >
        {/* LABD Logo/Text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #f59e0b, #d97706, #92400e)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '4px',
            }}
          >
            LABD L.L.C
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            maxWidth: '900px',
            marginBottom: '30px',
            lineHeight: '1.2',
          }}
        >
          Excellence in Management Consulting
        </div>

        {/* Country specific subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#f59e0b',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Premier Business Solutions in {country}
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            fontSize: '24px',
            color: '#9ca3af',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Strategic Solutions • Operational Excellence • Digital Transformation
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '50px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            opacity: '0.2',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #92400e, #f59e0b)',
            opacity: '0.3',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
