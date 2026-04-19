import { motion as Motion, useReducedMotion } from 'framer-motion'
import { homePageData } from '../../data/homeData'
import { cardVariants, hoverLift, staggerContainer } from '../../utils/motionPresets'

function CoreIdeasRail() {
  const reduceMotion = useReducedMotion()
  const duplicatedIdeas = [...homePageData.coreIdeas, ...homePageData.coreIdeas]
  const ideasToRender = reduceMotion ? homePageData.coreIdeas : duplicatedIdeas

return (
  <section className="relative overflow-hidden border-b border-slate-200/80 bg-white text-slate-900">
    
    {/* soft gradient like main section */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.06),transparent_35%)]" />

    <div className="relative max-w-full">
      <Motion.div
        className="core-ideas-rail relative overflow-hidden"
        variants={reduceMotion ? undefined : staggerContainer(0.05, 0.04)}
        initial={reduceMotion ? false : 'initial'}
        whileInView={reduceMotion ? undefined : 'animate'}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={`flex w-max gap-2 ${reduceMotion ? '' : 'animate-core-ideas-marquee'}`}>
          {ideasToRender.map((idea, index) => (
            <Motion.article
              key={`${idea.title}-${index}`}
              className="core-idea-card group relative flex-none overflow-hidden rounded-[1.1rem] border border-slate-200 bg-white/90 p-2.5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              variants={reduceMotion ? undefined : cardVariants}
              {...(reduceMotion ? {} : hoverLift)}
            >
              <div className="relative flex h-full flex-col">
                <h3 className="text-sm font-bold leading-snug text-slate-900 lg:text-base">
                  {idea.title}
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-slate-600 lg:text-xs lg:leading-5">
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
