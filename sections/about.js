import { Button } from "@/components/buttons"
import { Title } from "@/components/titles"

export function About({ locale }) {
  return (
    <section class="lg:gap-16 gap-6 items-center pt-10 pb-10 grid md:grid-cols-2">
      <div class=" text-neutral-600 text-base flex flex-col gap-5 items-start">
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
      <div class="grid mx-auto lg:grid-cols-2 gap-4 mt-8">
        <div className="sm:w-[275px] h-[300px] sm:h-[381px]">
          <img
            class="w-full h-full object-cover object-center
           rounded-lg"
            src={locale.about.images[0]}
            alt={locale.about.title}
          />
        </div>
        <div className="sm:w-[275px] h-[300px] hidden lg:block sm:h-[381px]">
          <img
            class="w-full h-full object-cover object-left rounded-lg"
            src={locale.about.images[1]}
            alt={locale.about.title}
          />
        </div>
      </div>
    </section>
  )
}
