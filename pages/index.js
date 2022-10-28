import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>LeRoi's Hulu</title>
        <meta name="description" content="a clone of hulu by LeRoi" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* Header Component*/}
      <Header />
      {/* Navbar Component */}
      <Navbar />
      {/* Results Component */}
    </div>
  )
}
