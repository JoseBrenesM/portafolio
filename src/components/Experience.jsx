import { usePortfolioLanguage } from '../i18n-context'
import Reveal from './Reveal'

export default function Experience() {
  const { content } = usePortfolioLanguage()
  const { experience, extraExperience, tools, ui } = content
  return (
    <section id="experiencia" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <h2 className="display text-2xl leading-[1.05] tracking-tight md:text-4xl">
            {ui.nav[2]}
          </h2>
          <p className="mt-4 max-w-[30ch] text-sm font-light leading-relaxed text-muted md:text-base">
            {ui.experienceDescription}
          </p>
        </div>

        <div>
          <ol className="divide-y divide-line border-t border-line">
            {experience.map((entry, index) => (
              <Reveal as="li" key={entry.company} delay={index * 60}>
                <div className="py-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="flex items-center gap-2.5 text-lg font-bold tracking-tight md:text-xl">
                      {entry.company}
                      {entry.current && (
                        <>
                          <span aria-hidden="true" className="h-2 w-2 rounded-sm bg-ink" />
                          <span className="sr-only">{ui.current}</span>
                        </>
                      )}
                    </h3>
                    <span className="label text-muted">{entry.date}</span>
                  </div>
                  <p className="label mt-1.5 text-muted">{entry.role}</p>
                  <p className="mt-3 max-w-[62ch] text-sm font-light leading-relaxed text-muted md:text-base">
                    {entry.text}
                  </p>
                  {entry.note && (
                    <p className="mt-2 text-sm font-light text-subtle">
                      {entry.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-8 rounded-sm border border-line bg-paper-2 p-6">
            <p className="label text-muted">{ui.also}</p>
            <p className="mt-2 max-w-[70ch] text-sm font-light leading-relaxed text-muted md:text-base">
              <span className="font-medium text-ink">
                {extraExperience.company}
              </span>
              {' — '}
              {extraExperience.role} ({extraExperience.date}).{' '}
              {extraExperience.text}
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <h3 className="text-lg font-bold tracking-tight md:text-xl">
              {ui.toolsHeading}
            </h3>
            <dl className="mt-6 grid gap-8 md:grid-cols-3">
              {tools.map((tool) => (
                <div key={tool.group}>
                  <dt className="label text-muted">{tool.group}</dt>
                  <dd className="mt-2 text-sm font-light leading-relaxed text-muted md:text-base">
                    {tool.items}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
