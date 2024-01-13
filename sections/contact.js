"use client"
import { Button } from "@/components/buttons"
import { Title } from "@/components/titles"
import { sendContactForm } from "@/nodemailer/send-form"
import { useState } from "react"

const initValues = {
  email: "",
  subject: "",
  message: "",
}

export function Contact({ locale }) {
  const [contactValues, setContactValues] = useState(initValues)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState(false)

  const ValueContactChange = (event) => {
    const { name, value } = event.target
    setContactValues((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const errors = {}

    if (!contactValues.email) {
      errors.email = locale.error.contact.email.required
    } else if (!/\S+@\S+\.\S+/.test(contactValues.email)) {
      errors.email = locale.error.contact.email.format
    }
    if (!contactValues.subject) {
      errors.subject = locale.error.contact.subject.required
    }
    if (!contactValues.message) {
      errors.message = locale.error.contact.message.required
    }
    setErrors(errors)
    setSuccess(false)

    if (Object.keys(errors).length === 0) {
      sendContactForm(contactValues)
      setSuccess(true)
      setContactValues(initValues)
    }
  }

  return (
    <section class="py-10" id="contact">
      <div class="grid sm:grid-cols-2 items-center gap-10">
        <div class="flex flex-col gap-5 text-neutral-600 px-3">
          <div>
            <Title
              header={true}
              text={locale.contact.header}
              size="text-base pb-2 sm:pb-0"
            />
            <Title title={true} text={locale.contact.title} size="text-3xl" />
          </div>
          <p>{locale.contact.description}</p>
          <div className="flex flex-col gap-2">
            <span>{locale.contact.information.address}</span>
            <span>{locale.contact.information.email}</span>
            <span>{locale.contact.information.phone}</span>
          </div>
        </div>

        <form action="#" class="sm:mx-10 flex flex-col justify-center gap-5">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-company-blue"
            >
              {locale.contact.form.email.name}
              <span className="ml-1 text-base text-company-orange">*</span>
            </label>
            <input
              type="email"
              name="email"
              class="shadow-sm  border border-neutral-200 text-gray-900 text-sm rounded-lg  focus:border-company-orange outline-none block w-full p-2.5 hover:border-company-blue/20 transition duration-150 ease-out"
              placeholder={locale.contact.form.email.description}
              value={contactValues.email}
              onChange={ValueContactChange}
              required
            />
            <p className={`my-2 ${errors.email && "text-red-500"}`}>
              {errors.email}
            </p>
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-company-blue"
            >
              {locale.contact.form.subject.name}
              <span className="ml-1 text-base text-company-orange">*</span>
            </label>
            <input
              type="text"
              name="subject"
              class="block p-3 w-full text-sm text-gray-900  rounded-lg border border-neutral-200 shadow-sm focus:border-company-orange outline-none hover:border-company-blue/20 transition duration-150 ease-out"
              placeholder={locale.contact.form.subject.description}
              value={contactValues.subject}
              onChange={ValueContactChange}
              required
            />
            <p className={`my-2 ${errors.subject && "text-red-500"}`}>
              {errors.subject}
            </p>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-company-blue "
            >
              {locale.contact.form.message.name}
              <span className="ml-1 text-base text-company-orange">*</span>
            </label>
            <textarea
              name="message"
              rows="3"
              class="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border outline-none border-neutral-200  focus:border-company-orange hover:border-company-blue/20 transition duration-150 ease-out"
              placeholder={locale.contact.form.message.description}
              value={contactValues.message}
              onChange={ValueContactChange}
            ></textarea>
            <p className={`my-2 ${errors.message && "text-red-500"}`}>
              {errors.message}
            </p>
          </div>
          <Button
            button={true}
            content={locale.contact.form.submit}
            type="submit"
            styles="bg-company-orange px-4 py-2 text-white"
            onClick={onSubmit}
          />
          <p className={`my-2 ${success && "text-green-500"}`}>
            {success && locale.success.contact.submit}
          </p>
        </form>
      </div>
    </section>
  )
}
