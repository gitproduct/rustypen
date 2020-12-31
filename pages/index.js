// import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import Featured from '../components/featured';
import About from '../components/about';
import Blog from '../components/blogs';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="container is-max-desktop py-6 mx-3-desktop">
        <style jsx>{`
          .featured{

          }
        `}</style>
        <div className="columns home-featured">
          <div className="column is-5">
            <About/>
          </div>
          <div className="column is-7">
            <h2 className="title has-text-grey">Featured</h2>
            <Featured/>
          </div>
          
        </div>

        <div className="mt-6">
          <h2 className="title is-3 has-text-grey">More Stories</h2>
          <Blog/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
