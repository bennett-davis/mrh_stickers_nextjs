import { Nav } from "reactstrap"
import Navbar from "../components/Navbar"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import OtherPost from '../components/OtherPost'

import { Container, Row, Col } from "reactstrap";


export default function Home({posts}) {

    return( 
        <div>
            <div>Other</div>
            <Row className='row' style={{padding:"0px 100px", cursor: "pointer"}}>
            <div className='row'>
                
            {posts.map((post, index) => (
                    <OtherPost post={post}/>
                    ))}
            </div>
            
            </Row>
        </div>
        )

}

export async function getStaticProps(){

    // gets files from posts directory
    let files = fs.readdirSync(path.join('posts/other'));
  
    // get slug and frontmatter from posts
    const posts = files.map(filename => {
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
        posts,
      }
    }
  }
  