import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { AdditionalInformation } from '@/components/AdditionalInformation'
import { HowItWorks } from '@/components/HowItWorks'

export default function Home() {
  return (
    <>
      <Head>
        <title>SpeechPal</title>
        <meta
          name="description"
          content="Speak English Perfectly with AI Assistance."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <AdditionalInformation />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
