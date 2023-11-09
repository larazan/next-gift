import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Notice from './components/Notice'
import AdsModal from './components/AdsModal'


export default function Home() {
  return (
    <>
    <Header />
    <AdsModal />
    <Notice />
    <Hero />
    <Footer />
    </>
  )
}
