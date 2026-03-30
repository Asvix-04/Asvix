export default function BrandLogo({ sizeClass = 'w-10 h-10', dark = false }) {
  return (
    <img
      src={dark ? '/asvix-3.png' : '/asvix-logo.png'}
      alt="Asvix logo"
      className={`${sizeClass} rounded-full object-cover border border-emerald-900/15 bg-white/80 dark:bg-space-900 shadow-md`}
    />
  )
}
