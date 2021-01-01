import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function portfolio() {
  return (<>
    <Header/>
    <main className="container is-max-desktop py-6 mx-3-desktop">
      {/* <h2>About me</h2>
      <p>Bla Bla</p> */}
      <h3 className="title has-text-grey">Skills</h3>
      <div className="columns">
        <div className="column">
          <div className="box is-fullheight">
            <p class="is-size-4 mb-4">Frontend languages</p>
            <div class="tags are-medium">
              <span className="tag is-danger">HTML</span>  
              <span className="tag is-info">CSS</span>  
              <span className="tag is-warning">Javascript</span>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="box is-fullheight">
            <p class="is-size-4 mb-4">CSS Techs</p>
            <div class="tags are-medium">
              <span class="tag is-danger">Sass</span>
              <span class="tag is-primary">Bulma</span>
              <span class="tag is-success">Bootstrap</span>
              <span class="tag has-background-info-dark	has-text-white">TailwindCSS</span>
              <span class="tag is-info">Material UI</span>
            </div>
          </div>

        </div>
        
        <div className="column">
          <div className="box is-fullheight">
            <p class="is-size-4 mb-4">Javascript Techs</p>
            <div class="tags are-medium">
              <span class="tag is-link">Typescript</span>
              <span class="tag is-info">Reactjs</span>
              <span class="tag has-background-info-dark	has-text-white">Redux</span>
              <span class="tag is-dark">Nextjs</span>
              <span class="tag is-danger">Apollo</span>
            </div>
          </div>
        </div>

      </div>
      

      
      
    </main>
    <Footer/>
  </>)
}

export default portfolio
