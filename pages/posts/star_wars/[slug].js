import Image from 'next/image'
import React from "react"
import Layout from "../../../components/layout"
import styles from "../../../styles/sticker_design.module.css"
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

 
import { Container, Row, Col } from "reactstrap";

 
export default function StarWarsPost({ 
  frontmatter: { title, image, link , price, description},
  slug,
  content,
}) {
  
  return (
    
    <Layout>
     
      <Container styles={styles.container}>
      <Row className='w-100 text-center h-50'>
        <Col md="6">
          <div className={styles.imageShadow}>
          <Image className={styles.imageRadius}
            src={image}
            alt="Mandolorian"
            layout = "responsive"
            width={700}
            height={700}
          />
          </div>
          
        </Col>
        <Col md="6" >
          <div className='text-dark h-100'>
            <div class= {styles.descriptionContainer}>
              <Col>
                
                <div class={styles.title}>{title}</div>
                <div class={styles.description}>{description}</div>
                <div>{price}</div>
                <a class="btn btn-primary" href={link} role="button">BUY NOW</a>
              
                
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
  const files = fs.readdirSync(path.join(`posts/star_wars`))
console.log("files " + files)
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  console.log("pahts " + paths.map)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts/star_wars', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}