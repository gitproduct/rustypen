// import Head from 'next/head'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Blog from '../../components/blogs';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="container is-max-desktop py-6 mx-3-desktop">
        <div className="mt-6">
          <h2 className="title is-3 has-text-grey">Blog</h2>
          <Blog/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
