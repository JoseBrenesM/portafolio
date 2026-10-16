import { usePortfolioLanguage } from '../i18n-context'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const { content } = usePortfolioLanguage()
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 md:px-8">
        <span className="label text-muted">
          © {YEAR} {content.profile.name}
        </span>
        <a
          href="#top"
          className="label link-underline text-muted transition-colors duration-500 hover:text-ink"
        >
          {content.ui.backToTop}
        </a>
      </div>
    </footer>
  )
}
