import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Results from "../components/Results"
import request from "../utils/request"
export default function Home({results}) {
  //console.log(results);
  return (
    <div>
      <Head>
        <title>LeRois Hulu</title>
        <meta name="description" content="a clone of hulu by LeRoi" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* Header Component*/}
      <Header />
      {/* Navbar Component */}
      <Navbar />
      {/* Results Component */}
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const requests = await fetch(
      `https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url
    }`
  ).then(res => res.json())

  return {
    props: {
      results: requests.results
    }
  }
}
