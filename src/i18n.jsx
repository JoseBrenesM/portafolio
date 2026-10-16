import { useEffect, useMemo, useState } from 'react'
import * as spanish from './data/contenido'
import * as english from './data/contenido.en'
import { LanguageContext } from './i18n-context'

const spanishUi = {
  skipProjects: 'Saltar al contenido principal',
  navLabel: 'Secciones',
  nav: ['Bitácora', 'Proyectos', 'Experiencia', 'Formación'],
  menu: 'Menú',
  mastheadRole: 'Desarrollador full stack',
  heroActionProjects: 'Ver proyectos',
  heroActionContact: 'Escríbeme',
  noteCaption: 'Una nota corta',
  capabilitiesHeading: 'Lo que sé hacer',
  technologiesHeading: 'Tecnologías que uso',
  visitSite: 'Visitar sitio',
  projectAuthorship: 'Autoría completa del proceso',
  projectsDescription: 'Aplicaciones web y mi sitio de trabajos independientes.',
  experienceDescription:
    'He trabajado en equipos y por mi cuenta, casi siempre de punta a punta.',
  current: 'Actual',
  also: 'Además',
  toolsHeading: 'Herramientas que uso',
  educationHeading: 'Formación',
  formalEducation: 'Educación formal',
  courses: 'Cursos y certificaciones',
  viewCredential: 'Ver título',
  close: 'Cerrar',
  contactHeading: 'Contacto',
  contactDescription: 'Puedes contactarme aquí.',
  backToTop: 'Volver arriba',
  title: 'Portafolio | José Brenes',
  description:
    'Portafolio de José Andrés Brenes, desarrollador full stack e Ingeniero en Sistemas de Computación.',
  languageLabel: 'Idioma',
}

const locales = {
  es: { ...spanish, ui: spanishUi },
  en: english,
}

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'es'
  const saved = window.localStorage.getItem('portfolio-language')
  if (saved === 'es' || saved === 'en') return saved
  return 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)
  const value = useMemo(
    () => ({ language, setLanguage, content: locales[language] }),
    [language],
  )

  useEffect(() => {
    document.documentElement.lang = language
    document.title = value.content.ui.title
    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.append(description)
    }
    description.content = value.content.ui.description
    window.localStorage.setItem('portfolio-language', language)
  }, [language, value.content.ui])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
