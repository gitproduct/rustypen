import Head from '../components/head'
import Header from '../components/header';
import Footer from '../components/footer';
import Featured from '../components/featured';
import About from '../components/about';
import Blog from '../components/blogs';
import data from '../data';


export default function Home({featured, posts}) {
  
  return (
    <>
      <Head
        title="Rustypen | A blog about anything"
        desc="Rustypen is a personal blog owned and managed by sonu nigam, A tech enthusiast."
      />
      <Header/>
      <main className="container is-max-desktop py-6 mx-3-desktop">
        <div className="columns home-featured">
          <div className="column is-5">
            <About/>
          </div>
          <div className="column is-7">
            <h2 className="title has-text-grey">Featured</h2>
            <Featured posts={featured}/>
          </div>
          
        </div>

        <div className="mt-6">
          <h2 className="title has-text-grey">More Stories</h2>
          <Blog posts={posts}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export async function getStaticProps(){
  const headers = await data.getAllPostHeader();
  const featured = headers.filter((post, index)=>index<=1);
  const posts = headers.filter((post, index)=>(index>=1 && index<=5));

  return {
    props :{
      featured,
      posts
    }
  }
}

