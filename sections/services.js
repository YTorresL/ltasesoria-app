"use client"
import { Title } from "@/components/titles"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export function Services({ locale }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
  return (
    <section class="py-12">
      <div className="flex gap-2 -mb-8">
        <Title header={true} text={locale.services.title} size="text-base" />
        <div className="w-2 h-2 rounded-full bg-company-orange"></div>
      </div>
      <Slider {...settings}>
        {locale.services.list.map((item, index) => (
          <Card
            title={item.title}
            header={item.header}
            description={item.description}
            key={index}
          />
        ))}
      </Slider>
    </section>
  )
}
const Card = ({ title, description, header }) => {
  return (
    <div className="mx-4 my-10">
      <div class="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover: transition ease-out duration-150 border border-white">
        <div class="p-6 flex flex-col gap-5 items-start">
          <div>
            <Title header={true} text={header} size="text-sm" />
            <Title title={true} text={title} size="text-xl" />
          </div>
          <p class="text-base text-neutral-600 -mt-2">{description}</p>
        </div>
      </div>
    </div>
  )
}
