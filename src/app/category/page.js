import React from 'react'
import Head from "next/head";
import Image from "next/image";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoTop from "@/app/components/GoTop";
import Search from '@/app/components/Search';
import Pagination from '@/app/components/Pagination';
import Filter from '@/app/components/Filter';
import Card from '@/app/components/Card';
import CookieConsent from '@/app/components/CookieConsent';

export default function page() {
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />
      <CookieConsent />
      <Search />
      <Filter />
      <Card />
      <Pagination />

      <Footer />
    </>
  )
}
