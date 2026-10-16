import { useEffect, useRef, useState } from 'react'
import { usePortfolioLanguage } from '../i18n-context'
import Reveal from './Reveal'

function Column({ title, items, onOpen, viewCredential }) {
  return (
    <div>
      <h3 className="display text-lg leading-[1.1] tracking-tight md:text-xl">
        {title}
      </h3>
      <ul className="mt-6 divide-y divide-line border-t border-line">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-wrap items-start justify-between gap-4 py-5"
          >
            <div>
              <p className="font-medium">{item.title}</p>
              {item.detail && (
                <p className="mt-0.5 text-sm font-light text-muted">
                  {item.detail}
                </p>
              )}
              <p className="label mt-1.5 text-muted">
                {item.school} · {item.period}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpen(item)}
              className="label shrink-0 cursor-pointer rounded-sm border border-line px-3.5 py-1.5 font-medium text-muted transition-colors duration-500 hover:border-ink hover:text-ink"
            >
              {viewCredential}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Education() {
  const { content } = usePortfolioLanguage()
  const { certifications, education, ui } = content
  const dialogRef = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active && !dialog.open) dialog.showModal()
    if (!active && dialog.open) dialog.close()
  }, [active])

  return (
    <section id="formacion" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="display text-2xl leading-[1.02] tracking-tight md:text-4xl">
            {ui.educationHeading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Column
              title={ui.formalEducation}
              items={education}
              onOpen={setActive}
              viewCredential={ui.viewCredential}
            />
          </Reveal>
          <Reveal delay={90}>
            <Column
              title={ui.courses}
              items={certifications}
              onOpen={setActive}
              viewCredential={ui.viewCredential}
            />
          </Reveal>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null)
        }}
        className="m-auto w-[min(90vw,44rem)] rounded-sm border border-line bg-paper p-3"
      >
        {active && (
          <figure>
            <div className="flex items-center justify-between gap-4 px-1 pb-3">
              <figcaption className="text-sm font-medium">
                {active.title}
              </figcaption>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label={ui.close}
                className="label cursor-pointer rounded-sm border border-line px-3 py-1.5 font-medium text-muted transition-colors duration-500 hover:border-ink hover:text-ink"
              >
                {ui.close}
              </button>
            </div>
            <img
              src={active.cert}
              alt={active.certAlt}
              className="max-h-[75vh] w-full rounded-sm object-contain"
            />
          </figure>
        )}
      </dialog>
    </section>
  )
}
