import { usePortfolioLanguage } from '../i18n-context'

export default function Masthead() {
  const { language, setLanguage, content } = usePortfolioLanguage()
  const links = [
    { href: '#bitacora', label: content.ui.nav[0] },
    { href: '#proyectos', label: content.ui.nav[1] },
    { href: '#experiencia', label: content.ui.nav[2] },
    { href: '#formacion', label: content.ui.nav[3] },
  ]

  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-3 px-4 py-5 sm:px-6 md:gap-8 md:px-8 md:py-6">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 transition-opacity duration-500 hover:opacity-80"
        >
          <span
            aria-hidden="true"
            className="block h-10 w-10 shrink-0 overflow-hidden rounded-lg"
          >
            <img
              src="/jb-monogram.png"
              alt=""
              className="h-full w-full object-cover"
              width="40"
              height="40"
            />
          </span>
          <span className="min-w-0">
            <span className="display block text-base leading-none sm:text-lg">
              {content.profile.name}
            </span>
            <span className="label mt-1.5 hidden text-xs text-muted sm:block">
              {content.ui.mastheadRole}
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <nav aria-label={content.ui.navLabel} className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="label link-underline text-muted transition-colors duration-500 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <details className="group relative lg:hidden">
            <summary className="label flex cursor-pointer list-none items-center gap-2 rounded-sm border border-line px-3 py-2 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
              {content.ui.menu}
              <span
                aria-hidden="true"
                className="text-muted transition-transform group-open:rotate-180"
              >
                ⌄
              </span>
            </summary>
            <nav
              aria-label={content.ui.navLabel}
              className="absolute right-0 top-full z-20 mt-2 min-w-44 border border-line bg-paper p-2 shadow-lg"
            >
              <ul className="grid gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.currentTarget.closest('details').open = false
                      }}
                      className="label block px-3 py-2 text-muted transition-colors hover:bg-soft hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>

          <div
            role="group"
            aria-label={content.ui.languageLabel}
            className="flex items-center gap-1 border-l border-line pl-3 sm:pl-4"
          >
            {['es', 'en'].map((option) => (
              <button
                key={option}
                type="button"
                lang={option}
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
                className={`label cursor-pointer rounded-sm px-1 py-1 transition-colors duration-300 ${
                  language === option
                    ? 'font-bold text-ink underline decoration-ink underline-offset-4'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
