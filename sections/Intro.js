import Image from "next/image"
import { BACKGROUND_PATTERNS } from "@/components/icons"
import { Button } from "@/components/buttons"
import { Title } from "@/components/titles"

export function Intro({ locale }) {
  return (
    <section className="h-[455px] grid sm:grid-cols-2">
      <div className="absolute sm:right-[5.6rem] right-0 sm:top-24 top-14">
        <BACKGROUND_PATTERNS className="h-[436px] z-10" />
      </div>
      <div className="z-10 flex flex-col items-start justify-center gap-5 -mt-12 text-white sm:mr-10">
        <div className="flex gap-2 -mb-4">
          <Title
            header={true}
            text={locale.intro.header}
            size="text-base"
            color={"text-white"}
          />
          <div className="w-2 h-2 rounded-full bg-company-blue"></div>
        </div>
        <h1 className="font-bold sm:text-[2.7rem] text-2xl my-1 leading-7 sm:leading-[2.7rem]">
          {locale.intro.title}
        </h1>
        <p className="leading-5 ">{locale.intro.description}</p>
        <Button
          link={true}
          content={locale.intro.button.label}
          styles="bg-company-blue px-4 py-2"
          url={locale.intro.button.url}
        />
      </div>
      <div className="h-[414px] mx-auto z-10 hidden sm:block">
        <Image
          src={locale.intro.image}
          height={500}
          width={500}
          className="object-contain w-auto h-full pb-5"
          alt={locale.intro.title}
        />
      </div>
    </section>
  )
}
