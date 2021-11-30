import ContactForm from '@components/contact/ContactForm'
import type { NextPage } from 'next'
import Head from 'next/head'

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages' />
      </Head>
      <ContactForm />
    </>
  )
}
export default ContactPage
