import { Button } from "@/components/buttons"
import { Title } from "@/components/titles"

export function About({ locale }) {
  return (
    <section className="grid items-center gap-6 pt-10 pb-10 lg:gap-16 md:grid-cols-2">
      <div className="flex flex-col items-start gap-5 text-base text-neutral-600">
        <div>
          <Title header={true} text={locale.about.header} size="text-base" />
          <Title title={true} text={locale.about.title} size="text-3xl" />
        </div>
        {locale.about.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <Button
          link={true}
          content={locale.about.button.label}
          styles="bg-company-orange px-4 py-2 text-white"
          url={locale.about.button.url}
        />
      </div>
      <div className="grid gap-4 mx-auto mt-8 lg:grid-cols-2">
        <div className="sm:w-[275px] w-full hidden lg:block h-[300px] sm:h-[381px]">
          <img
            className="object-cover object-center w-full h-full rounded-lg"
            src={locale.about.images[0]}
            alt={locale.about.title}
          />
        </div>
        <div className="md:w-[275px] h-[300px] w-full sm:h-[381px]">
          <img
            className="object-cover object-left w-full h-full rounded-lg"
            src={locale.about.images[1]}
            alt={locale.about.title}
          />
        </div>
      </div>
    </section>
  )
}
