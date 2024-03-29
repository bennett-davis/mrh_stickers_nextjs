import Image from 'next/image'
import React from "react"
import Layout from "../../../components/layout"
import styles from "../../../styles/sticker_design.module.css"
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import PostPage from '../../../components/PostPage'

 
import { Container, Row, Col } from "reactstrap";

 
export default function Home({ 
  frontmatter: { title, image, link , price, description},
  slug,
  content,
}) {
  
  return (
    
     <Layout>
      <Head>
            <title>MRH Sticker Shop</title>
            <meta name="description" content="MRH Sticker Shop Sticker Page" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
      <PostPage props = {{title, image, link , price, description}}/>
    </Layout>
    
    
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(`posts/other`))

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
    path.join('posts/other', slug + '.md'),
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