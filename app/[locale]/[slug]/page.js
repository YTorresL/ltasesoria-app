"use client"
import { useParams } from "next/navigation"

import { getI18N } from "@/i18n/languages"

import { Footer } from "@/components/footer"
import Header from "@/components/header"
import { Title } from "@/components/titles"
import { Team } from "@/sections/team"
import { Contact } from "@/sections/contact"

const JSON_ENGLISH = {
  about: "about",
  services: "services",
  benefits: "benefits",
  experience: "experience",
  team: "team",
  contact: "contact",
  term: "term",
}

const JSON_SPANISH = {
  nosotros: "nosotros",
  servicios: "servicios",
  beneficios: "beneficios",
  experiencia: "experiencia",
  equipo: "equipo",
  contacto: "contacto",
  politicas: "politicas",
}

export default function Page() {
  const params = useParams()
  const { locale, slug } = params
  const i18n = getI18N(locale)

  return (
    <>
      <Header locale={i18n}>
        <div className="pt-3 pb-8 text-center">
          <Title
            header={true}
            text={slug}
            size="sm:text-4xl text-3xl"
            color={"text-white"}
          />
        </div>
      </Header>
      <Information locale={i18n} slug={slug} />
      <Footer locale={i18n} />
    </>
  )
}

function Information({ locale, slug }) {
  const slugConverter = slugTranslate(slug)
  const searchLocale = locale[slugConverter]

  return (
    <section className="py-20">
      {slugConverter === JSON_ENGLISH.about ||
      slugConverter === JSON_ENGLISH.benefits ||
      slugConverter === JSON_ENGLISH.experience ||
      slugConverter === JSON_ENGLISH.services ||
      slugConverter === JSON_ENGLISH.term ? (
        searchLocale && (
          <div className="md:w-[70%] w-[85%] mx-auto flex flex-col gap-5">
            {searchLocale.fullInformation.title && (
              <div className="flex gap-2 -mb-3">
                <Title
                  header={true}
                  text={searchLocale.fullInformation.title}
                  size="text-base"
                />
                <div className="w-2 h-2 rounded-full bg-company-orange"></div>
              </div>
            )}
            {searchLocale.fullInformation.list?.map((item, index) => (
              <>
                <div className="flex items-center gap-5">
                  {slugConverter === JSON_ENGLISH.services && (
                    <div>
                      <div className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-company-orange">
                        {index + 1}
                      </div>
                    </div>
                  )}
                  {slugConverter === JSON_ENGLISH.experience && (
                    <div>
                      <div className="w-3 h-3 rounded-full bg-company-orange"></div>
                    </div>
                  )}
                  <Title
                    title={true}
                    text={item.title}
                    size="text-lg md:text-xl leading-5"
                  />
                </div>

                {item.description?.map((item, index) => (
                  <div className="flex gap-5" key={index}>
                    {slugConverter === JSON_ENGLISH.benefits && (
                      <div className="mt-1">
                        <div className="w-3 h-3 rounded-full bg-company-orange"></div>
                      </div>
                    )}
                    <p className="text-neutral-600">{item}</p>
                  </div>
                ))}
              </>
            ))}
          </div>
        )
      ) : (
        <div className="px-[4%]">
          {(slugConverter === JSON_ENGLISH.team && <Team locale={locale} />) ||
            (slugConverter === JSON_ENGLISH.contact && (
              <Contact locale={locale} />
            )) || (
              <p className="text-center text-neutral-600">
                {locale.error.slug}{" "}
                <span className="font-bold capitalize">{slug}.</span>
              </p>
            )}
        </div>
      )}
    </section>
  )
}

function slugTranslate(slug) {
  const slugMap = {
    [JSON_SPANISH.nosotros]: JSON_ENGLISH.about,
    [JSON_SPANISH.servicios]: JSON_ENGLISH.services,
    [JSON_SPANISH.beneficios]: JSON_ENGLISH.benefits,
    [JSON_SPANISH.experiencia]: JSON_ENGLISH.experience,
    [JSON_SPANISH.equipo]: JSON_ENGLISH.team,
    [JSON_SPANISH.contacto]: JSON_ENGLISH.contact,
    [JSON_SPANISH.politicas]: JSON_ENGLISH.term,
  }

  return slugMap[slug] || slug
}
