import "./globals.css"
import "normalize.css/normalize.css"

export const metadata = {
  title: "LT Asesoría y Consulting",
  description:
    "Con más de dos décadas de experiencia, LT Asesoría y Consulting se destaca en servicios excepcionales de lavandería hotelera. Buscamos ser la referencia nacional, garantizando un servicio impecable a nivel regional.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="w-[1300px] max-[1440px]:w-[100%] mx-auto min-h-screen grid grid-cols-1 items-start">
        {children}
      </body>
    </html>
  )
}
