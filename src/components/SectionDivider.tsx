interface SectionDividerProps {
  className?: string;
  accent?: boolean;
}

export default function SectionDivider({
  className = '',
  accent = true,
}: SectionDividerProps) {
  return (
    <div className={`relative flex items-center justify-center py-2 ${className}`}>
      {/* Gradient line */}
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Optional diamond accent */}
      {accent && (
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="h-2 w-2 rotate-45 bg-gradient-to-br from-primary to-cyan-accent border border-primary/20" />
        </div>
      )}
    </div>
  );
}
