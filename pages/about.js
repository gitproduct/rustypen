import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from '../components/head';

function portfolio() {
  return (<>
    <Head
      title="Rustypen | A blog about anything"
      desc="Rustypen is a personal blog owned and managed by sonu nigam, A tech enthusiast."
    />
    <Header/>
    <main className="container is-max-desktop py-6 mx-3-desktop">
      <h2 className="title has-text-grey">About me</h2>
      <p>My name is Sonu Nigam and I am a Delhi, India based Frontend Web Developer. I build softwares and help others too to fulfill my creative desires and increase my bank balance. Plus I love literature which makes me encourage to write blogs and stories.</p>

      <h3 className="title has-text-grey mt-6">Skills</h3>
      <div className="columns">
        <div className="column">
          <div className="box is-fullheight">
            <p className="is-size-4 mb-4">Frontend languages</p>
            <div className="tags are-medium">
              <span className="tag is-danger">HTML</span>  
              <span className="tag is-info">CSS</span>  
              <span className="tag is-warning">Javascript</span>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="box is-fullheight">
            <p className="is-size-4 mb-4">CSS Techs</p>
            <div className="tags are-medium">
              <span className="tag is-danger">Sass</span>
              <span className="tag is-primary">Bulma</span>
              <span className="tag is-success">Bootstrap</span>
              <span className="tag has-background-info-dark	has-text-white">TailwindCSS</span>
              <span className="tag is-info">Material UI</span>
            </div>
          </div>

        </div>
        
        <div className="column">
          <div className="box is-fullheight">
            <p className="is-size-4 mb-4">Javascript Techs</p>
            <div className="tags are-medium">
              <span className="tag is-link">Typescript</span>
              <span className="tag is-info">Reactjs</span>
              <span className="tag has-background-info-dark	has-text-white">Redux</span>
              <span className="tag is-dark">Nextjs</span>
              <span className="tag is-danger">Apollo</span>
            </div>
          </div>
        </div>

      </div>
      

      
      
    </main>
    <Footer/>
  </>)
}

export default portfolio
