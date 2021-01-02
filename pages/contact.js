import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import Head from '../components/head';


function contact() {
  return (<>
    <Head
      title="Rustypen | A blog about anything"
      desc="Rustypen is a personal blog owned and managed by sonu nigam, A tech enthusiast."
    />
    <Header/>
    <main className="container is-max-desktop py-6 mx-3-desktop">
      {/* <p className="is-size-3">Let me build the website you need.</p> */}
      <h3 className="title is-5 has-text-grey">Let me build the website you need.</h3>
      <h2 className="title has-text-grey">Contact</h2>
      <ul>
        {/* <li className="pt-3">
          <Link href="/">
            <a className="is-size-4">
              Twitter
            </a>
          </Link>
        </li> */}
        <li className="pt-3">
          <Link href="https://www.linkedin.com/in/sonu-nigam/">
            <a className="is-size-4">
              Linkedin
            </a>
          </Link>
        </li>
        <li className="pt-3">
          <Link href="https://github.com/gitproduct">
            <a className="is-size-4">
              Github
            </a>
          </Link>
        </li>
        <li className="pt-3">
          <Link href="mailto:drop@outlook.in">
            <a className="is-size-4">
              Email
            </a>
          </Link>
        </li>
      </ul>
    </main>
    <Footer/>
  </>)
}

export default contact
