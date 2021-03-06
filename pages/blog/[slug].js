import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import data from '../../data';
import Image from 'next/image';
import Head from '../../components/head';


function index({meta , content, header}) {
    const [timeToRead, setTimeToRead] = useState(1);
    const contentRef = React.useRef();

    function humanizeTime(time){
        if(time < 1.5){
            return "1 min read"
        }
        else{
            return `${Math.ceil(time)} minutes read`
        }
    }

    useEffect(()=>{
        const text = contentRef.current.innerText;
        const numberOfWords = text.split(" ");
        const WORDS_PER_MIN = 275;
        setTimeToRead(()=>{
            return humanizeTime(numberOfWords.length/WORDS_PER_MIN);
        })
    },[])

    return (
        <>
        <Head
            title={meta.title+` | Rustypen | A blog about anything`}
            desc={meta.description+` | Rustypen | A blog about anything`}
        />
        <Header/>
            <main className="container is-max-desktop py-6 mx-3-desktop">
                <div className="mt-6">
                    <h2 className="title is-1 is-capitalized">{header.title}</h2>
                    <p className="subtitle is-6 has-text-grey">
                        <time>{new Date(header.published_date).toDateString()}</time> • {timeToRead}
                    </p>
                    <img
                        src={header.feature_image}
                        alt={header.title}
                        className="auto-image mb-5"
                    />
                    <div dangerouslySetInnerHTML={{ __html: content }} ref={contentRef} className="content"/>
                </div>
            </main>
        <Footer/>
    </>
    )
}


export async function getStaticProps({params}){
    const header = await data.getPostHeader(params.slug)
    const meta = await data.getPostMeta(params.slug)
    const content = await data.getPostContent(params.slug)

    return {
        props :{
            meta,
            header,
            content
        }
    }
}

export async function getStaticPaths() {
    const posts = await data.slugs();
  
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
