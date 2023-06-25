import { Container } from '@/components/Container'

export function AdditionalInformation() {
  return (
    <section id="schedule" aria-label="Schedule" className="pt-20 sm:pt-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            No more English speaking training or teachers. Train anywhere, anytime with AI assistance.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Say goodbye to traditional English speaking training and the limitations of fixed schedules. With AI assistance, you have the freedom to train your English speaking skills whenever and wherever you choose.
          </p>
        </div>
      </Container>
    </section>
  )
}
