import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/sticker_design.module.css'
import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";


const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (

    
    <div className={styles.container}>

        {/* METADATA*/ }
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <header className={styles.container}>
        <Navbar />
      </header>

      <main className={styles.cont}>{children}</main>

     
       
      <footer className='py-5'>
        <div className='d-flex justify-content-between bg-light py-5'>
          <div className={styles.footerText}>
            <a href="/" className='text'>MRH STICKER SHOP</a>
            </div>
          
            <div className="d-flex  pe-5 ">
              <a href="https://instagram.com/mrhstickershop?igshid=YmMyMTA2M2Y=">
                <Image
                  src="/images/insta.png"
                  layout='fixed'
                  height={30}
                  width={30}
                />
              </a>
            </div>
        </div>
      </footer>
    </div>
   
  )
}
