import { useEffect, useRef, useState } from 'react'
import { technologies } from '../data/contenido'
import { usePortfolioLanguage } from '../i18n-context'
import Reveal from './Reveal'

const ICONS = {
  interface: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <line x1="3" y1="8.5" x2="21" y2="8.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 16V4" />
      <path d="M7 9l5-5 5 5" />
      <path d="M5 20h14" />
    </>
  ),
  ai: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 6h8M7.2 7.6l3.6 8.8M16.8 7.6l-3.6 8.8" />
    </>
  ),
}

function CapabilityIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] ?? ICONS.interface}
    </svg>
  )
}

export default function Nota() {
  const { content } = usePortfolioLanguage()
  const { capabilities, profile } = content
  const marqueeRef = useRef(null)
  const [marqueeActive, setMarqueeActive] = useState(false)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const observer = new IntersectionObserver(
      ([entry]) => setMarqueeActive(entry.isIntersecting && !document.hidden),
      { threshold: 0.1 },
    )
    const handleVisibilityChange = () => {
      const bounds = marquee.getBoundingClientRect()
      const inView = bounds.bottom > 0 && bounds.top < window.innerHeight
      setMarqueeActive(!document.hidden && inView)
    }

    observer.observe(marquee)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <section id="bitacora" className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <figure>
            <figcaption className="label mb-4 text-muted">{content.ui.noteCaption}</figcaption>
            <div className="nota-paper rounded-sm border border-line pt-2 pr-8 pb-8 pl-16 md:pl-20">
              <blockquote className="font-mono text-sm leading-8 text-ink md:text-base">
                {profile.nota}
              </blockquote>
            </div>
          </figure>
        </Reveal>

        <div>
          <Reveal as="h2" className="display text-2xl leading-[1.05] tracking-tight md:text-4xl">
            {content.ui.capabilitiesHeading}
          </Reveal>
          <ul className="mt-8 divide-y divide-line border-t border-line">
            {capabilities.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 70}>
                <div className="flex gap-5 py-5">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-line text-ink">
                    <CapabilityIcon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 max-w-[52ch] text-sm font-light leading-relaxed text-muted md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <div className="tech-heading mb-5">
          <span className="tech-heading-rule" aria-hidden="true" />
          <h3 className="label text-muted">{content.ui.technologiesHeading}</h3>
          <span className="tech-heading-rule" aria-hidden="true" />
        </div>
        <div
          ref={marqueeRef}
          className="tech-marquee border-b border-line py-6"
          data-playing={marqueeActive}
          aria-label={content.ui.technologiesHeading}
        >
          <div className="tech-track">
            {[false, true].map((isDuplicate) => (
              <ul
                key={String(isDuplicate)}
                className="tech-list"
                aria-hidden={isDuplicate || undefined}
              >
                {technologies.map((tech) => (
                  <li key={tech.alt} className="tech-item">
                    <img
                      src={tech.src}
                      alt=""
                      loading="lazy"
                      width={tech.wide ? '46' : '24'}
                      height="24"
                      className={`tech-icon${tech.wide ? ' tech-icon-wide' : ''}`}
                    />
                    <span className="label whitespace-nowrap text-muted">
                      {tech.alt}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
