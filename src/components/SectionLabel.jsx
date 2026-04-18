export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-xs tracking-widest text-botcore-greyLight ${className}`}>
      <span className="h-px w-8 bg-botcore-green" />
      <span className="text-botcore-green">//</span>
      <span className="uppercase">{children}</span>
    </div>
  );
}
