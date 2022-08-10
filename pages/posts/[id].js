import Image from 'next/image'
import React from "react"
import Layout from "../../components/layout"
import styles from "../../styles/sticker_design.module.css"

 
import { Container, Row, Col } from "reactstrap";

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {

  return (
    
    <Layout>
     
      <Container styles={styles.container}>
      <Row className='w-100 text-center h-50'>
        <Col md="6">
          <div className={styles.imageShadow}>
          <Image className={styles.imageRadius}
            src={postData.image}
            alt="Mandolorian"
            layout = "responsive"
            width={700}
            height={700}
          />
          </div>
          
        </Col>
        <Col md="6" >
          <div className='text-dark h-100'>{postData.alt}
            <div class= {styles.descriptionContainer}>
              <Col>
                
                <div class={styles.title}>{postData.title}</div>
                <div class={styles.description}>{postData.description}</div>
                <div>{postData.price}</div>
                <a class="btn btn-primary" href={postData.link} role="button">BUY NOW</a>
              
                
              </Col>
            </div>
          </div>
        </Col>
        
      </Row>
      </Container>
    
    
      
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