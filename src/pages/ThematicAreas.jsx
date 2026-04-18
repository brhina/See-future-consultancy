import { motion as Motion, useReducedMotion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { thematicAreasPageData } from '../data/thematicAreasData'
import { cardVariants, hoverLift, sectionVariants, staggerContainer } from '../utils/motionPresets'

function ThematicAreas() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Cross-Sector Focus"
        title={thematicAreasPageData.hero.title}
        description={thematicAreasPageData.hero.description}
        tags={thematicAreasPageData.hero.tags}
        gradient="from-blue-50 via-white to-slate-50"
      />

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-7xl"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Priority Themes"
            title="Interconnected topics that shape program performance"
            description="SEEF works across themes that often overlap in practice, helping partners respond to complexity without losing implementation focus."
            centered
          />

          <Motion.div
            className="grid gap-5 lg:grid-cols-2"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            {thematicAreasPageData.groups.map((group) => (
              <Motion.article
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                <div className="flex items-start justify-between gap-4">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500">
                    <group.icon className="h-5 w-5 text-white" />
                  </div> */}
                  <div className="flex flex-wrap justify-end gap-2">
                    {group.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-slate-900">{group.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{group.summary}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {group.areas.map((item) => (
                    <Motion.div
                      key={item}
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                      {...(reduceMotion ? {} : { whileHover: { scale: 1.01 }, whileTap: { scale: 0.99 } })}
                    >
                      {item}
                    </Motion.div>
                  ))}
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        </Motion.div>
      </section>

      <section className="page-section page-section-mist">
        <Motion.div
          className="page-frame max-w-7xl"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Themes in Practice"
            title="How thematic work connects to real-world sectors and decisions"
            description="SEEF uses these themes as a practical framework for navigating cross-cutting development challenges."
            centered
          />

          <Motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            {thematicAreasPageData.sectorApplications.map((item) => (
              <Motion.article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
                  <item.icon className="h-5 w-5 text-sky-700" />
                </div> */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </Motion.div>
      </section>

      <section className="page-section page-section-white">
        <Motion.div
          className="page-frame max-w-7xl"
          variants={reduceMotion ? undefined : sectionVariants}
          initial={reduceMotion ? false : 'initial'}
          whileInView={reduceMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Where Themes Meet"
            title="Cross-cutting lenses that keep work coherent"
            description="These shared lenses help connect thematic workstreams and reduce fragmentation during implementation."
            centered
          />

          <Motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            {thematicAreasPageData.intersections.map((item) => (
              <Motion.div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                variants={reduceMotion ? undefined : cardVariants}
                {...(reduceMotion ? {} : hoverLift)}
              >
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <item.icon className="h-5 w-5 text-sky-700" />
                </div> */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </Motion.div>
            ))}
          </Motion.div>

          <Motion.div
            className="mt-8 rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl"
            variants={reduceMotion ? undefined : cardVariants}
            initial={reduceMotion ? false : 'initial'}
            whileInView={reduceMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="text-2xl font-bold">What this thematic model supports</h3>
            <Motion.div
              className="mt-6 grid gap-4 md:grid-cols-3"
              variants={reduceMotion ? undefined : staggerContainer(0.06, 0.05)}
              initial={reduceMotion ? false : 'initial'}
              whileInView={reduceMotion ? undefined : 'animate'}
              viewport={{ once: true, amount: 0.25 }}
            >
              {thematicAreasPageData.outcomes.map((item) => (
                <Motion.div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200"
                  variants={reduceMotion ? undefined : cardVariants}
                  {...(reduceMotion ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.99 } })}
                >
                  {item}
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  )
}

export default ThematicAreas
