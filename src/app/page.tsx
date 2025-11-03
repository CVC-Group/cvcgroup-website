export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center text-center px-6 relative overflow-hidden vignette">
      {/* Wordmark */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-[0.15em]">
        CVC GROUP
      </h1>

      {/* Order-flow line */}
      <div className="flow-line my-8"></div>

      {/* Coming Soon + refined sentence */}
      <h2 className="text-3xl font-medium">Coming Soon</h2>
      <p className="mt-5 text-text-muted uppercase tracking-[0.25em] text-sm font-light">
        We’re building something refined for traders.
      </p>

      {/* Footer */}
      <footer className="absolute bottom-8 text-sm text-[#555]">
        © {new Date().getFullYear()} CVC Group. All rights reserved.
      </footer>
    </main>
  );
}
