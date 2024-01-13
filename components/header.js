"use client"
import { PHONE, LOGO, FACEBOOK, INSTAGRAM, MENU, CLOSE } from "./icons"
import { Button } from "./buttons"
import { useState } from "react"

export default function Header({
  locale,
  color = "text-white",
  children,
  path,
}) {
  const [menuState, setMenuState] = useState(false)

  const showMenu = () => {
    setMenuState(true)
  }
  const hiddenMenu = () => {
    setMenuState(false)
  }

  return (
    <>
      <div className={`pb-2 ${path && "path"} bg-company-blue`}>
        <div className={`relative ${path && "path"} bg-company-orange`}>
          <header className={`text-sm ${color}`}>
            <div className="sm:flex px-[4%] justify-end gap-8 items-center h-10 hidden">
              <nav className="flex gap-2">
                {locale.navigation.informationLink.map((item, index) => (
                  <Button
                    key={index}
                    link={true}
                    content={item.label}
                    styles="font-medium tracking-wide"
                    url={item.url}
                  />
                ))}
              </nav>
              <span className="flex items-center gap-3">
                {locale.navigation.directContact.text}
                <Button
                  link={true}
                  content={
                    <div className="flex gap-1">
                      <PHONE className="w-5 h-5" />
                      {locale.navigation.directContact.phone}
                    </div>
                  }
                  url={locale.navigation.directContact.url}
                  target="_blank"
                  label={locale.navigation.directContact.text}
                />
              </span>
              <div className="flex gap-2">
                <Button
                  link={true}
                  content={<FACEBOOK />}
                  styles="h-7 w-7"
                  url={locale.navigation.socialMedia[0].url}
                  target="_blank"
                  label={locale.navigation.socialMedia[0].label}
                />
                <Button
                  link={true}
                  content={<INSTAGRAM />}
                  styles="h-7 w-7"
                  url={locale.navigation.socialMedia[1].url}
                  target="_blank"
                  label={locale.navigation.socialMedia[1].label}
                />
              </div>
            </div>
            <nav className="h-24 flex justify-between py-3 sm:py-0 px-[4%] items-center">
              <LOGO className="z-10 h-20 sm:h-24" />
              <Button
                button={true}
                content={<MENU className="w-10 h-10" />}
                styles="bg-company-orange px-4 py-2 text-white sm:hidden"
                onClick={menuState ? hiddenMenu : showMenu}
              />
              <div className="hidden gap-4 sm:flex">
                {locale.navigation.menuItems.map((item, index) => (
                  <Button
                    key={index}
                    link={true}
                    content={item.label}
                    styles="z-10 font-bold tracking-wide uppercase"
                    url={item.url}
                  />
                ))}
              </div>
            </nav>
          </header>
          {children}
        </div>
      </div>
      <div
        className={`fixed top-0 z-50 bottom-0 text-center text-white right-0 transition-all duration-200 ease-linear ${
          menuState ? "w-full" : "w-0"
        } bg-black/80`}
      >
        <div className="grid gap-5">
          <Button
            button={true}
            content={<CLOSE className="w-10 h-10" />}
            styles="px-4 py-2 text-white sm:hidden mr-0 ml-auto"
            onClick={menuState ? hiddenMenu : showMenu}
          />
          <nav>
            <div className="grid justify-center">
              {locale.navigation.menuItems.map((item, index) => (
                <Button
                  key={index}
                  link={true}
                  content={item.label}
                  styles="z-10 font-bold tracking-wide uppercase py-3"
                  url={item.url}
                />
              ))}
            </div>
            <div className="grid justify-center">
              {locale.navigation.informationLink.map((item, index) => (
                <Button
                  key={index}
                  link={true}
                  content={item.label}
                  styles="font-medium tracking-wide py-3 uppercase"
                  url={item.url}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
