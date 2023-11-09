import Hero from './components/Hero'
import Container from './components/Container'

export default function Home() {
  return (
    <main className="flex items-center justify-between">
      <Container>
      <Hero />
      </Container>
    </main>
  )
}
