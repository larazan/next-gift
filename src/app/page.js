import Image from 'next/image'
import Head from "next/head";

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Notice from './components/Notice'
import AdsModal from './components/AdsModal'
import GoTop from './components/GoTop';
import GiftHome from './components/GiftHome';
import SubscribeForm from './components/SubscribeForm';
import NewsFeed from './components/NewsFeed';
import TrendingHome from './components/TrendingHome';


export default function Home() {
  return (
    <>
     <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

    <Header />
    <GoTop />
    <AdsModal />
    <NewsFeed />
    <Hero />
    <TrendingHome />
    <GiftHome />
    <SubscribeForm />
    <Footer />
    </>
  )
}
