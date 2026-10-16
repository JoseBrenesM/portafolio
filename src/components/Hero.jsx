import { usePortfolioLanguage } from '../i18n-context'
import HeroTerminal from './HeroTerminal'

export default function Hero() {
  const { content, language } = usePortfolioLanguage()
  return (
    <section id="top" className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="hero-line label text-muted" style={{ animationDelay: '0ms' }}>
            {content.profile.role.split(' · ')[0]}
          </p>

          <h1 className="display mt-8 text-4xl leading-[0.95] md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="hero-line" style={{ animationDelay: '0.08s' }}>
              {content.profile.name.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="hero-line" style={{ animationDelay: '0.18s' }}>
              {content.profile.name.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p
            className="hero-line mt-8 max-w-[46ch] text-lg font-light leading-[1.4] text-ink md:text-xl"
            style={{ animationDelay: '0.3s' }}
          >
            {content.profile.heroSubtitle}
          </p>

          <div className="hero-line mt-10" style={{ animationDelay: '0.42s' }}>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <a
                href="#proyectos"
                className="link-underline text-base font-medium text-ink"
              >
                {content.ui.heroActionProjects}
              </a>
              <a
                href="#contacto"
                className="link-underline text-base font-medium text-ink"
              >
                {content.ui.heroActionContact}
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-full lg:max-w-[23rem] lg:justify-self-end">
          <HeroTerminal language={language} />
        </div>
      </div>
    </section>
  )
}
