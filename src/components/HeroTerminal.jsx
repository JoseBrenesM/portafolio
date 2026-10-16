import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(useGSAP, TextPlugin)

const SCRIPT = [
  { cmd: 'whoami', out: 'full stack developer' },
  { cmd: 'ls stack/', out: 'react  node  sql' },
  { cmd: 'npm run build', out: 'compilado sin errores' },
]

function Prompt() {
  return (
    <span className="tw-prompt">
      <span className="tw-user">jose@brenes</span>
      <span className="tw-sep">:</span>
      <span className="tw-path">~</span>
      <span className="tw-sign">$</span>
    </span>
  )
}

export default function HeroTerminal({ language }) {
  const scope = useRef(null)
  const script = language === 'en'
    ? [
        { cmd: 'whoami', out: 'full-stack developer' },
        { cmd: 'ls stack/', out: 'react  node  sql' },
        { cmd: 'npm run build', out: 'build completed successfully' },
      ]
    : SCRIPT

  useGSAP(
    () => {
      const cmds = gsap.utils.toArray('.tw-cmd')
      const outs = gsap.utils.toArray('.tw-out')

      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        cmds.forEach((el, index) => {
          el.textContent = script[index].cmd
        })
        gsap.set(outs, { opacity: 1 })
        return
      }

      gsap.set(outs, { opacity: 0, y: 4 })

      const timeline = gsap.timeline({ delay: 0.6 })
      cmds.forEach((el, index) => {
        timeline
          .to(el, {
            text: script[index].cmd,
            duration: Math.max(0.5, script[index].cmd.length * 0.06),
            ease: 'none',
          })
          .to(outs[index], { opacity: 1, y: 0, duration: 0.3 }, '+=0.2')
      })
    },
    { scope, dependencies: [language], revertOnUpdate: true },
  )

  return (
    <div
      ref={scope}
      className="w-full overflow-hidden rounded-sm bg-ink font-mono text-[13px] leading-6 text-paper ring-1 ring-white/10 ring-inset shadow-[0_24px_50px_-30px_rgba(17,17,17,0.65),0_2px_6px_-3px_rgba(17,17,17,0.35)]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-[1px] bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-[1px] bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-[1px] bg-white/10" />
        <span className="label ml-2 text-paper/40">jose@brenes — zsh</span>
      </div>

      <div className="space-y-1 px-5 py-4">
        {script.map((line) => (
          <div key={line.cmd}>
            <div className="tw-row">
              <Prompt />
              <span className="tw-cmd" />
            </div>
            <div className="tw-out pl-4 text-paper/55">{line.out}</div>
          </div>
        ))}

        <div className="tw-row">
          <Prompt />
          <span className="tw-caret" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
