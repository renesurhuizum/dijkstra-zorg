import { ContentProvider, useContentMeta } from './lib/content-context'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/StatsStrip'
import { About } from './components/About'
import { Services } from './components/Services'
import { Region } from './components/Region'
import { PracticeInfo } from './components/PracticeInfo'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function ErrorBanner() {
  const { error } = useContentMeta()
  if (!error) return null
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-red-600 text-white text-xs text-center py-1.5 px-4">
      {error} Contactgegevens zijn nog steeds bereikbaar.
    </div>
  )
}

function App() {
  return (
    <ContentProvider>
      <ErrorBanner />
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
