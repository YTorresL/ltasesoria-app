import { Button } from "@/components/buttons"
import { Title } from "@/components/titles"

export function Benefits({ locale }) {
  return (
    <section className="grid items-center gap-6 pt-5 pb-12 lg:gap-16 sm:grid-cols-2">
      <div className="grid gap-4 mx-auto mt-8 lg:grid-cols-2">
        <div className="sm:w-[275px] h-[300px] w-full sm:h-[381px]">
          <img
            className="object-cover object-left w-full h-full rounded-lg"
            src={locale.benefits.images[0]}
            alt={locale.benefits.title}
          />
        </div>
        <div className="sm:w-[275px] h-[300px] hidden lg:block sm:h-[381px]">
          <img
            className="object-cover object-center w-full h-full rounded-lg"
            src={locale.benefits.images[1]}
            alt={locale.benefits.title}
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 text-base font-light text-neutral-600">
        <div>
          <Title header={true} text={locale.benefits.header} size="text-base" />
          <Title title={true} text={locale.benefits.title} size="text-3xl" />
        </div>
        <ul className="list-inside w-[93%]">
          {locale.benefits.list.map((item, index) => (
            <li className="flex items-start my-1" key={index}>
              <svg
                className="w-3.5 h-3.5 me-2 mt-1 text-green-500 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <Button
          link={true}
          content={locale.benefits.button.label}
          styles="bg-company-orange px-4 py-2 text-white text-base"
          url={locale.benefits.button.url}
        />
      </div>
    </section>
  )
}
