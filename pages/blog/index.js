// import Head from 'next/head'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Blog from '../../components/blogs';
import data from '../../data';

export default function Home({header}) {
  
  return (
    <>
      <Header/>
      <main className="container is-max-desktop py-6 mx-3-desktop">
        <div className="mt-6">
          <h2 className="title is-3 has-text-grey">Blog</h2>
          <Blog posts={header}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export async function getStaticProps(){
  const header = await data.getAllPostHeader();

  return {
    props :{
      header
    }
  }
}
