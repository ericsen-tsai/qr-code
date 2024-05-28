'use client'

import { useQRCode } from 'next-qrcode'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const { Image: QRCodeImage } = useQRCode()
  const searchParams = useSearchParams()

  const n = searchParams.get('n') || '202202'

  return (
    <QRCodeImage
      text={n}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 200,
      }}
    />
  )
}
