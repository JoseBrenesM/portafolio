import { usePortfolioLanguage } from '../i18n-context'

function Prompt({ children, path }) {
  return (
    <span className="font-mono text-paper/85">
      <span className="text-paper/60">jose@brenes:~/</span>
      <span className="text-paper/80">{path}</span>
      <span className="text-paper/50"> $ </span>
      {children}
    </span>
  )
}

export default function HeroCommand() {
  const { content, language } = usePortfolioLanguage()
  const path = language === 'en' ? 'portfolio' : 'portafolio'

  return (
    <section id="top" className="border-b border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-8">
        <div className="overflow-hidden rounded-lg border border-[#303030] bg-[#151515] shadow-[0_0_0_1px_rgba(17,17,17,0.08),0_0_32px_rgba(17,17,17,0.24),0_18px_40px_-8px_rgba(17,17,17,0.28),0_42px_80px_-20px_rgba(17,17,17,0.52)] ring-1 ring-black/5">
          <div className="flex min-h-12 items-center gap-2 border-b border-white/10 px-4 sm:px-5">
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-white/30" />
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-white/20" />
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-white/10" />
            <span className="ml-3 font-mono text-xs text-paper/50">
              jose@brenes:~/{path}
            </span>
            <span className="ml-auto font-mono text-[0.65rem] text-paper/35">
              {language === 'en' ? 'PORTFOLIO' : 'PORTAFOLIO'}
            </span>
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-10 md:px-12 md:py-8">
            <p className="font-mono text-xs leading-6 sm:text-sm">
              <Prompt path={path}>whoami</Prompt>
            </p>

            <h1 className="display mt-3 text-5xl leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              <span className="block">{content.profile.name.split(' ').slice(0, 2).join(' ')}</span>
              <span className="block">{content.profile.name.split(' ').slice(2).join(' ')}</span>
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-paper/60 sm:text-sm">
              <span>{content.profile.role.split(' · ')[0]}</span>
            </div>

            <div className="mt-8 border-l border-white/15 pl-4 sm:mt-10 sm:pl-5">
              <p className="font-mono text-xs leading-6 sm:text-sm">
                <Prompt path={path}>
                  {language === 'en' ? 'cat about.txt' : 'cat perfil.txt'}
                </Prompt>
              </p>
              <p className="mt-3 max-w-[66ch] text-base font-light leading-relaxed text-paper/80 sm:text-lg">
                {content.profile.heroSubtitle}
              </p>
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-5 font-mono text-sm sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <a
                href="#proyectos"
                className="rounded-sm py-2 text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:text-paper/70 focus-visible:outline-paper"
              >
                <span className="text-paper/40">$ </span>
                {language === 'en' ? 'open projects/' : 'abrir proyectos/'}
              </a>
              <a
                href="#contacto"
                className="rounded-sm py-2 text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:text-paper/70 focus-visible:outline-paper"
              >
                <span className="text-paper/40">$ </span>
                {language === 'en' ? 'contact --open' : 'contacto --abrir'}
              </a>
              <span className="hidden items-center gap-2 py-2 text-paper/45 sm:flex">
                <span aria-hidden="true" className="tw-caret" />
                {language === 'en' ? 'ready' : 'listo'}
              </span>
            </div>
          </div>
        </div>

        <a
          href="#bitacora"
          className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-sm py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink underline decoration-transparent underline-offset-4 transition-[text-decoration-color] hover:decoration-ink focus-visible:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <span className="h-0.5 w-8 bg-ink/50" aria-hidden="true" />
          {language === 'en' ? 'More about me' : 'Más sobre mí'}
          <span aria-hidden="true">↓</span>
          <span className="h-0.5 w-8 bg-ink/50" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
