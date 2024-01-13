import { Button } from "@/components/buttons"
import { FACEBOOK, INSTAGRAM } from "@/components/icons"
import { Title } from "@/components/titles"

export function Team({ locale }) {
  return (
    <section className="sm:py-10">
      <div className="flex flex-col gap-5 border-b text-neutral-600 border-neutral-200">
        <div>
          <Title header={true} text={locale.team.header} size="text-base" />
          <Title title={true} text={locale.team.title} size="text-3xl" />
        </div>
        <p className="sm:w-[60%]">{locale.team.description}</p>
        <div className="flex flex-col gap-8 pt-6 pb-12 md:flex-row">
          <div>
            <div className="w-56 h-64">
              <img
                className="object-cover object-center w-full h-full rounded-lg"
                src={locale.team.profile.image}
                alt={locale.team.title}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-5 text-neutral-600 sm:w-[55%]">
            <div>
              <Title
                title={true}
                text={locale.team.profile.name}
                size="text-xl"
              />
            </div>
            <span className="-mt-4">{locale.team.profile.job}</span>
            <p>{locale.team.profile.description}</p>
            <div className="flex gap-2">
              <Button
                link={true}
                content={<FACEBOOK />}
                styles="h-7 w-7 text-company-orange"
                url={locale.navigation.socialMedia[0].url}
                target="_blank"
                label={locale.navigation.socialMedia[0].label}
              />
              <Button
                link={true}
                content={<INSTAGRAM />}
                styles="h-7 w-7 text-company-orange"
                url={locale.navigation.socialMedia[1].url}
                target="_blank"
                label={locale.navigation.socialMedia[1].label}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
