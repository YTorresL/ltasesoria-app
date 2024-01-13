import { Title } from "@/components/titles"

export function Experience({ locale }) {
  return (
    <section className="py-12">
      <div className="flex gap-2 mb-2">
        <Title header={true} text={locale.experience.title} size="text-base" />
        <div className="w-2 h-2 rounded-full bg-company-orange"></div>
      </div>
      <div class="grid gap-5 lg:grid-cols-3 sm:grid-cols-2">
        {locale.experience.list.map((item, index) => (
          <Card
            title={item.title}
            profilePicture={item.image.profilePicture}
            header={item.header}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

const Card = ({ title, profilePicture, header }) => {
  return (
    <div className="flex flex-col gap-1 text-base">
      <div className="w-full py-1 bg-company-orange"></div>
      <div class="text-center overflow-hidden relative h-64">
        <img
          class="w-full h-full object-cover object-center"
          src={profilePicture}
          alt={header}
        />
        <div className="absolute top-0 w-full h-full p-5 bg-black/30">
          <div className="flex flex-col items-center justify-center w-full h-full gap-5 ">
            <Title
              title={true}
              text={title}
              size="text-lg"
              color={"text-white"}
            />
          </div>
        </div>
      </div>
      <div className="w-full py-1 bg-company-blue"></div>
    </div>
  )
}