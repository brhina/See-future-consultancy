import { motion as Motion, useReducedMotion } from 'framer-motion'
import { homePageData } from '../../data/homeData'
import { cardVariants, hoverLift, staggerContainer } from '../../utils/motionPresets'

function CoreIdeasRail() {
  const reduceMotion = useReducedMotion()
  const duplicatedIdeas = [...homePageData.coreIdeas, ...homePageData.coreIdeas]
  const ideasToRender = reduceMotion ? homePageData.coreIdeas : duplicatedIdeas

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 py-2 text-white lg:py-3">
      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="core-ideas-rail relative overflow-hidden"
          variants={reduceMotion ? undefined : staggerContainer(0.05, 0.04)}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={`flex w-max gap-3 ${reduceMotion ? '' : 'animate-core-ideas-marquee'}`}>
            {ideasToRender.map((idea, index) => (
              <Motion.article
                key={`${idea.title}-${index}`}
                className="core-idea-card group relative flex-none overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 p-3 shadow-none backdrop-blur-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                <div className="relative flex h-full flex-col">
                  <h3 className="text-base font-bold leading-snug text-white lg:text-lg">
                    {idea.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-200 lg:text-sm lg:leading-6">
                    {idea.description}
                  </p>
                </div>
              </Motion.article>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default CoreIdeasRail
