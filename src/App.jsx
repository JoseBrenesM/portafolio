import ScrollProgress from './components/ScrollProgress'
import Masthead from './components/Masthead'
import Hero from './components/Hero'
import HeroCommand from './components/HeroCommand'
import Nota from './components/Nota'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './i18n'
import { usePortfolioLanguage } from './i18n-context'

function Portfolio() {
  const { content } = usePortfolioLanguage()
  const showCommandHero =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('hero') !== 'classic'

  return (
    <div className="min-h-screen bg-paper text-ink">
      <ScrollProgress />

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
      >
        {content.ui.skipProjects}
      </a>

      <Masthead />
      <main id="contenido">
        {showCommandHero ? <HeroCommand /> : <Hero />}
        <Nota />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}
