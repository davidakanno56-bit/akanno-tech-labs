interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showText?: boolean;
}

export default function Logo({
  className = 'h-8 w-auto',
  variant = 'auto',
  showText = true,
}: LogoProps) {
  const invertClass =
    variant === 'dark'
      ? 'brightness-0 invert'
      : variant === 'light'
      ? ''
      : 'dark:brightness-0 dark:invert';

  return (
    <div className="flex items-center gap-2.5 select-none">
      <img
        src="/assets/atl_logo_transparent.png"
        alt="Akanno Tech Labs"
        className={`${className} ${invertClass} transition-all duration-300`}
      />
      {showText && (
        <span className="font-display font-semibold tracking-tight text-base sm:text-lg">
          Akanno Tech Labs
        </span>
      )}
    </div>
  );
}

