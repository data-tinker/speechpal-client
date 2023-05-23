import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="block text-center">
        <p className="mt-6 text-base text-slate-500">
          Copyright &copy; {new Date().getFullYear()} SpeechPal. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
