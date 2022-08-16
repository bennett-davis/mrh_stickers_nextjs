import { Nav } from "reactstrap"
import Navbar from "../components/Navbar"
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import DisneyPost from "../components/DisneyPost"

import { Container, Row, Col } from "reactstrap";


export default function Home({posts}) {

    return( 
        <div>
          <Head>
            <title>MRH Sticker Shop</title>
            <meta name="description" content="MRH Sticker Shop Star Wars Page" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
            {/* {<div>Disney</div>} */}
            <Row className='row' style={{padding:"0px 100px", cursor: "pointer"}}>
            <div className='row'>
                
            {posts.map((post, index) => (
             
                    <DisneyPost  post={post}/>
                    
                    ))}

            </div>
            
            </Row>
        </div>
        )

}

export async function getStaticProps(){

    // gets files from posts directory
    let files = fs.readdirSync(path.join('posts/disney'));
  
    // get slug and frontmatter from posts
    const posts = files.map(filename => {
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
    
  
    // return the posts from the file map to the home page
    return {
      props: {
        posts,
      }
    }
  }
  