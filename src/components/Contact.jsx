import { usePortfolioLanguage } from '../i18n-context'
import Reveal from './Reveal'

export default function Contact() {
  const { content } = usePortfolioLanguage()
  const { profile, ui } = content
  const links = [
    { label: 'WhatsApp', detail: profile.whatsappLabel, href: profile.whatsapp },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
  ]

  return (
    <section id="contacto" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="display text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-8xl">
            {ui.contactHeading}
          </h2>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
            {ui.contactDescription}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="link-underline display mt-8 inline-block text-xl leading-[1.15] tracking-tight text-ink md:text-3xl"
          >
            {profile.email}
          </a>

          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-baseline gap-2 text-sm font-medium text-ink transition-colors duration-500 hover:text-muted"
                >
                  {link.label}
                  {link.detail && (
                    <span className="label text-muted">{link.detail}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
