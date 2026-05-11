export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap"
      style={{ borderTop: '1px solid var(--border2)' }}
    >
      <div className="font-display font-bold" style={{ color: 'var(--accent)' }}>
        Harold Jirro I. Madrona
      </div>
      <div className="text-xs" style={{ color: 'var(--text3)' }}>
        © {new Date().getFullYear()} · Nueva Ecija, Philippines · Built with care
      </div>
    </footer>
  )
}
