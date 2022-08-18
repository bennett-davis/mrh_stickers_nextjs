import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import StarWarsPost from '../components/StarWarsPost'
import DisneyPost from '../components/DisneyPost'
import OtherPost from '../components/OtherPost'
import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react';

 
import { Container, Row, Col } from "reactstrap";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Header = () => {
  const isBreakpoint = useMediaQuery(768)
   
  return (
      isBreakpoint ? (
       <div className={styles.banner}> 
          <Image
          src="/images/header_mobile.jpg"
          alt='Header Image'
          layout = "responsive"
          width={825}
          height={825}
          
          />
       </div>
     ) 
     : 
     (
      <div className={styles.banner}>
        <Image
        src="/images/header2.jpg"
        alt='Header Image'
        layout = "responsive"
        width={3360}
        height={840}
        priority={true}
        />
      </div>
    )
)}




export default function Home({ disneyPosts, starWarsPosts, otherPosts}) {

  return (
    <div >
      <Head>
        <title>MRH Sticker Shop</title>
        <meta name="description" content="MRH Sticker Shop" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      
      <main>
        <header >
          <Header />
        </header>

        <div className={styles.padding}>
        
          <div className={styles.container}> 
            <Container className={styles.title1} >
              <h1>SHOP BY FANDOM</h1>
            </Container>
            <Row className={styles.headerRow}>
              <Link href='/star_wars'>
                <Col className={styles.headerImage} xs="12" lg="4">
                  <div className={styles.imageShadow}>
                    <Image className={styles.image}
                        src="/images/star_wars/Mando3inHolo.jpg"
                        alt='Header Image'
                        layout = "responsive"
                        width={500}
                        height={500}
                      />
                  </div>
                  STAR WARS
                </Col>
              </Link>
              <Link href="/disney">
                <Col className={styles.headerImage} xs="12" lg="4">
                  <div className={styles.imageShadow}>
                    <Image className={styles.image}
                        src="/images/disney/Ariel3in.jpg"
                        alt='Header Image'
                        layout = "responsive"
                        width={500}
                        height={500}
                      />
                  </div>
                  DISNEY
                </Col>
              </Link>
              <Link href="/other">
                <Col className={styles.headerImage} xs="12" lg="4">
                  <div className={styles.imageShadow}>
                    <Image className={styles.image}
                        src="/images/other/BlackPanther.jpg"
                        alt='Header Image'
                        layout = "responsive"
                        width={500}
                        height={500}
                    />
                  </div>
                  
                  OTHER
                </Col>  
              </Link>
            
            </Row>
          </div>

        </div>
        
        

        <Container className={styles.title} id="SHOP ALL">
          <h1 className={styles.h1}>SHOP ALL STICKERS</h1>
        </Container>
    
          <h2 className={styles.h2}>STAR WARS</h2>

          <Row className={styles.post}>
            <div className='row'>
              {starWarsPosts.map((post, index) => (
                    <StarWarsPost post={post} key={index}/>
                ))}
            </div>
          </Row>

          <h2 className={styles.h2}>DISNEY</h2>

          <Row className={styles.post}>
            <div className='row'>
              {disneyPosts.map((post, index) => (
                    <DisneyPost post={post} key={index}/>
                ))}
            </div>
          </Row>

          <h2 className={styles.h2}>OTHER</h2>

          <Row className={styles.post}>
            <div className='row'>
              {otherPosts.map((post, index) => (
                    <OtherPost post={post} key={index}/>
                ))}
            </div>
          </Row>
       
         
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export async function getStaticProps(){

  // gets files from posts directory
  let disneyFile = fs.readdirSync(path.join('posts/disney'));
  let starWarsFile = fs.readdirSync(path.join('posts/star_wars'));
  let otherFile = fs.readdirSync(path.join('posts/other'));
  

  // get slug and frontmatter from posts
  const disneyPosts = disneyFile.map(filename => {
    //create slug 
    const slug = filename.replace('.md', '')
    
    //get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts/disney', filename), 'utf-8')
    // using the matter function, rename data to frontmatter and populate it with the 
    // data from the markdown file
    const {data:frontmatter} = matter(markdownWithMeta)
    
    return {
      slug,
      frontmatter
    }
  })

  const starWarsPosts = starWarsFile.map(filename => {
    //create slug 
    const slug = filename.replace('.md', '')

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts/star_wars', filename), 'utf-8')
    // using the matter function, rename data to frontmatter and populate it with the 
    // data from the markdown file
    const {data:frontmatter} = matter(markdownWithMeta)
    
    return {
      slug,
      frontmatter
    }
  })

  const otherPosts = otherFile.map(filename => {
    //create slug 
    const slug = filename.replace('.md', '')

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts/other', filename), 'utf-8')
    // using the matter function, rename data to frontmatter and populate it with the 
    // data from the markdown file
    const {data:frontmatter} = matter(markdownWithMeta)
    
    return {
      slug,
      frontmatter
    }
  })


  
  // return the posts from the file map to the home page
  return {
    props: {
      disneyPosts,
      starWarsPosts,
      otherPosts,
    }
  }
}
