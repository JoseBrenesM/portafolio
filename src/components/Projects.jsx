import { useState } from 'react'
import { usePortfolioLanguage } from '../i18n-context'
import Reveal from './Reveal'

function VisitLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity duration-500 hover:opacity-80"
    >
      {label}
      <svg
        width="15"
        height="15"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 10 10 4M5 4h5v5" />
      </svg>
    </a>
  )
}

function ImageVisitHint() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-ink text-paper shadow-md transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10 10 4M5 4h5v5" />
      </svg>
    </span>
  )
}

function Details({ project, ui }) {
  return (
    <div>
      <div className="space-y-3 text-sm font-light leading-relaxed text-muted md:text-base">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-sm border border-line px-3 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <VisitLink href={project.url} label={ui.visitSite} />
        {project.course && (
          <span className="label text-muted">{ui.projectAuthorship}</span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(0)
  const { content } = usePortfolioLanguage()
  const { projects } = content
  const { ui } = content
  const current = projects[active]

  return (
    <section id="proyectos" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="display text-2xl leading-[1.02] tracking-tight md:text-4xl">
            {ui.nav[1]}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted md:text-base">
            {ui.projectsDescription}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <ul className="lg:border-b lg:border-line">
            {projects.map((project, index) => {
              const isActive = index === active
              return (
                <li key={project.id} className="border-t border-line">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-expanded={isActive}
                    className="group flex w-full cursor-pointer items-baseline justify-between gap-4 rounded-sm py-6 text-left font-medium transition-colors duration-500"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-sm transition-colors duration-500 ${
                          isActive ? 'bg-ink' : 'bg-line-2 group-hover:bg-ink'
                        }`}
                      />
                      <span>
                        <span
                          className={`display block text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.02] transition-colors duration-500 ${
                            isActive ? 'text-ink' : 'text-subtle group-hover:text-ink'
                          }`}
                        >
                          {project.title}
                        </span>
                        <span className="label mt-1.5 block text-muted">
                          {project.kind}
                        </span>
                      </span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 lg:hidden ${
                      isActive
                        ? 'grid-rows-[1fr] pb-8 opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className={isActive ? 'min-h-0 overflow-visible' : 'min-h-0 overflow-hidden'}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${ui.visitSite}: ${project.title}`}
                        className="project-image-link group relative block overflow-hidden rounded-sm border border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        <img
                          src={project.image}
                          srcSet={
                            project.imageSmall
                              ? `${project.imageSmall} ${project.imageSmallWidth}w, ${project.image} ${project.imageWidth}w`
                              : undefined
                          }
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          alt={project.alt}
                          width={project.imageWidth}
                          height={project.imageHeight}
                          loading="lazy"
                          className="aspect-[16/9] w-full object-cover object-top"
                        />
                        <ImageVisitHint />
                      </a>
                      <div className="pt-5">
                        <Details project={project} ui={ui} />
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-10">
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ui.visitSite}: ${current.title}`}
                className="project-image-link group relative block overflow-hidden rounded-sm border border-line bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <figure className="relative aspect-[16/9]">
                  {projects.map((project, index) => (
                    <img
                      key={project.id}
                      src={project.image}
                      srcSet={
                        project.imageSmall
                          ? `${project.imageSmall} ${project.imageSmallWidth}w, ${project.image} ${project.imageWidth}w`
                          : undefined
                      }
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      alt={project.alt}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
                        index === active ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </figure>
                <ImageVisitHint />
              </a>

              <p className="label mt-5 text-muted">{current.context}</p>
              <div className="mt-4">
                <Details project={current} ui={ui} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
