import Link from "next/link"
import { Button } from "./buttons"

export function Footer({ locale }) {
  return (
    <footer className="w-full p-4 mt-auto mb-0 border-t shadow border-neutral-200 md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-neutral-600 sm:text-center ">
        © {locale.footer.date}
        <Link href={locale.footer.link.url} className="mx-1">
          {locale.footer.link.title}.
        </Link>
      </span>
      <div className="flex flex-wrap justify-center gap-1 mt-2 gap-x-4 sm:mt-0 sm:gap-4">
        {locale.footer.footerItems.map((item, index) => (
          <Button
            key={index}
            link={true}
            content={item.label}
            styles="tracking-wide text-neutral-600 text-sm"
            url={item.url}
          />
        ))}
      </div>
    </footer>
  )
}
