import { Container } from '@/components/Container'
import { Button } from "@/components/Button";

export function AdditionalInformation() {
  return (
    <section id="schedule" aria-label="Schedule" className="pt-20 sm:pt-32">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto lg:mx-0">
          <div className="max-w-2xl lg:max-w-4xl">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              No more English speaking training or teachers. Train anywhere, anytime with AI assistance.
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
              Say goodbye to traditional English speaking training and the limitations of fixed schedules. With AI assistance, you have the freedom to train your English speaking skills whenever and wherever you choose.
            </p>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:mr-20">
            <Button href="https://t.me/SpeechPalBot" className="whitespace-nowrap">Try for free</Button>
          </div>
        </div>

      </Container>
    </section>
  )
}
