export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="aurora" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(250,204,21,0.32), transparent 60%), radial-gradient(40% 30% at 90% 100%, rgba(245,158,11,0.22), transparent 60%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-700/25 to-transparent" />
    </div>
  );
}
