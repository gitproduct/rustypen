import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

function index(props) {
    return (
        <>
        <Header/>
            <main className="container is-max-desktop py-6 mx-3-desktop">
                <div className="mt-6">
                    {/* <div dangerouslySetInnerHTML={{ __html: props.post }} />           */}

                </div>
            </main>
        <Footer/>
    </>
    )
}


export async function getStaticProps(){
    // const res = await fetch(`${process.env.DOMAIN}/api/hello`);
    // const post = await res.text()

    return {
        props :{
            // post
        }
    }
}

export async function getStaticPaths() {
    const posts = ["hello"]
  
    return {
        paths: posts.map((post) => {
            return {
                params:{
                    slug: post,
                }
            }
        }),
        fallback: false,
    }
}


export default index;
