import { Button } from "@/components/buttons"
import { Title } from "@/components/titles"

export function Benefits({ locale }) {
  return (
    <section class="lg:gap-16 gap-6 items-center pt-5 pb-12 grid sm:grid-cols-2">
      <div class="grid mx-auto lg:grid-cols-2 gap-4 mt-8">
        <div className="sm:w-[275px] h-[300px] w-full sm:h-[381px]">
          <img
            class="w-full h-full object-cover object-left rounded-lg"
            src={locale.benefits.images[0]}
            alt={locale.benefits.title}
          />
        </div>
        <div className="sm:w-[275px] h-[300px] hidden lg:block sm:h-[381px]">
          <img
            class="w-full h-full object-cover object-center rounded-lg"
            src={locale.benefits.images[1]}
            alt={locale.benefits.title}
          />
        </div>
      </div>
      <div class="font-light text-neutral-600  flex flex-col gap-5 items-start text-base">
        <div>
          <Title header={true} text={locale.benefits.header} size="text-base" />
          <Title title={true} text={locale.benefits.title} size="text-3xl" />
        </div>
        <ul class="list-inside w-[93%]">
          {locale.benefits.list.map((item, index) => (
            <li class="flex items-start my-1" key={index}>
              <svg
                class="w-3.5 h-3.5 me-2 mt-1 text-green-500 flex-shrink-0"
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
