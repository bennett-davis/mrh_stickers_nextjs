import Image from 'next/image'
import React from "react"
import Layout from "../../../components/layout"
import styles from "../../../styles/sticker_design.module.css"
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import PostPage from '../../../components/PostPage'

 
import { Container, Row, Col } from "reactstrap";

 
export default function DisneyPost({ 
  frontmatter: { title, image, link , price, description},
  slug,
  content,
}) {
  
  return (
    
    <Layout>
     
     <Layout>
      <PostPage props = {{title, image, link , price, description}}/>
    </Layout>
    
    
      
    </Layout>
    
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(`posts/disney`))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts/disney', slug + '.md'),
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