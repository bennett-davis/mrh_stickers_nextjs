import Image from 'next/image'
import React from "react"
import Layout from "../../components/layout"
import styles from "../../styles/sticker_design.module.css"

 
import { Container, Row, Col } from "reactstrap";

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  console.log( postData);
  return (
    <Layout>
     
      <Container styles={styles.container}>
      <Row className='w-100 h-100 text-center'>
        <div className='w-50 '>
          <Image
            src={postData.image}
            alt="Mandolorian"
            layout = "responsive"
            width={500}
            height={500}
          />
        </div>
       <div className='w-50 '>
       

        <Container className={styles.stickerDescription}>
       <div className='bg-dark'>{postData.alt}</div>
       <div class={styles.title}>Bing Bong</div>
          <div class={styles.description}>descrioptions bhal bhaal aexampeld eoasdfnkdnfieaf sdf</div>
        </Container>
        
      
       </div>
        
      </Row>
      </Container>
    
      
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}