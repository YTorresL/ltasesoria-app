import { Footer } from "@/components/footer"
import Header from "@/components/header"
import { getI18N } from "@/i18n/languages"
import { About } from "@/sections/about"
import { Benefits } from "@/sections/benefits"
import { Experience } from "@/sections/experience"
import { Contact } from "@/sections/contact"
import { Services } from "@/sections/services"
import { Team } from "@/sections/team"
import { Intro } from "@/sections/Intro"

export default function Home({ locale }) {
  const i18n = getI18N(locale || "es")
  return (
    <>
      <Header path locale={i18n}>
        <main className="px-[4%]">
          <Intro locale={i18n} />
        </main>
      </Header>
      <div className="px-[4%]">
        <About locale={i18n} />
        <Services locale={i18n} />
        <Benefits locale={i18n} />
        <Experience locale={i18n} />
        <Team locale={i18n} />
        <Contact locale={i18n} />
      </div>
      <Footer locale={i18n} />
    </>
  )
}
