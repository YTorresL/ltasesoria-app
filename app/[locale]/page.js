"use client"
import { useParams } from "next/navigation"
import Home from "../page"

export default function Page() {
  const params = useParams()
  const { locale } = params
  return <Home locale={locale} />
}
