import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'CSUtilities - Computer Science Learning Platform'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          CSUtilities
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Master Data Structures & Algorithms
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 20,
            opacity: 0.9,
            textAlign: 'center',
          }}
        >
          University Rankings • Company Rankings • Jobs • Hackathons
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
