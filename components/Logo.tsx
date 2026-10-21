// Logo artwork: design/logo/logo-light.png (light lettering for dark backgrounds), copied to public/images/.
export default function Logo({ className = '' }: { className?: string }) {
  return <img src="/images/logo-light.png" alt="Jome" className={`logo ${className}`} />;
}
