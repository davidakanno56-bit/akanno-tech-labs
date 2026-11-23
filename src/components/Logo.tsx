interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showText?: boolean;
}

export default function Logo({
  className = 'h-8 w-auto',
  showText = true,
}: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img
        src="/assets/atl_emblem_transparent.png"
        alt="Akanno Tech Labs"
        className={`${className} object-contain transition-all duration-300`}
      />
      {showText && (
        <span className="font-display font-semibold tracking-tight text-base sm:text-lg">
          Akanno Tech Labs
        </span>
      )}
    </div>
  );
}

