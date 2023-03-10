import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData, cardsData }) {
  console.log(exploreData)
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/airbnb_icon.webp" />
      </Head>
      <Header/>

      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, location, distance}) => (
              <SmallCard key={img} img={img} location={location} distance={distance}/>
            ))}
          </div>

        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll'>
            {cardsData?.map(({img,title}) => (
              <MediumCard key={img} img={img} title={title}/>
            ))}

          </div>
        </section>
      </main>

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
                                  .then((res) => res.json());
  
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json())
                                  
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
