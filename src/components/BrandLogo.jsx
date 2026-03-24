import { useState } from 'react'

export default function BrandLogo({ sizeClass = 'w-10 h-10' }) {
  const [src, setSrc] = useState('/asvix-logo.png')

  return (
    <img
      src={src}
      alt="Asvix logo"
      className={`${sizeClass} rounded-full object-cover border border-emerald-900/15 bg-white/80 shadow-md`}
      onError={() => {
        if (src !== '/asvix-logo.svg') {
          setSrc('/asvix-logo.svg')
        }
      }}
    />
  )
}
