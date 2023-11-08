import Hero from './components/Hero'
import Container from './components/Container'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
      <Hero />
      </Container>
    </main>
  )
}
