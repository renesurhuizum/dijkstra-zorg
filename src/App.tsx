import { ContentProvider } from './lib/content-context'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/StatsStrip'
import { About } from './components/About'
import { Services } from './components/Services'
import { Region } from './components/Region'
import { PracticeInfo } from './components/PracticeInfo'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ContentProvider>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Services />
        <Region />
        <PracticeInfo />
        <Contact />
      </main>
      <Footer />
    </ContentProvider>
  )
}

export default App
