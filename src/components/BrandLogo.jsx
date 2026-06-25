export default function BrandLogo({ sizeClass = 'w-10 h-10', dark = false }) {
  return (
    <img
      src={dark ? '/asvix-3.png' : '/asvix-logo.png'}
      alt="Asvix logo"
      className={`${sizeClass} rounded-full object-cover shadow-md ${dark ? 'bg-space-900 shadow-black/20' : 'border border-emerald-900/[0.15] bg-white shadow-black/10'}`}
    />
  )
}
