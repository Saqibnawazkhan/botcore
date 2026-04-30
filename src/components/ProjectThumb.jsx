export default function ProjectThumb({ hue, cover, logo, name }) {
  if (cover) {
    return (
      <img
        src={cover}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div
      className="relative h-full w-full"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 42% 18%) 0%, #0d0d0d 75%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, rgba(0,255,0,0.22), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {logo && (
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <img
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
            className="max-h-[72%] max-w-[78%] object-contain transition-transform duration-500 group-hover:scale-[1.05]"
            style={{ filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.55))' }}
          />
        </div>
      )}
    </div>
  );
}
