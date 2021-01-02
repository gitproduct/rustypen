import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function index() {
    return (
        <div className="box has-background-warning is-fullheight has-text-centered">
            <style>{`
                .about-image{
                    margin: 0 auto;
                    text-align: center;
                }
            `}</style>
            <Image
                src="/minion.png"
                height="100"
                width="100"
                objectFit="contain"
                alt="hello from rustypen"
            />
            <p className="subtitle is-5 mt-5">A Frontend web developer</p>
            <div>
                <Link href="https://www.linkedin.com/in/sonu-nigam/">
                    <a className="icon has-text-info is-large">
                        <i className="fab fa-2x fa-linkedin"></i>
                    </a>
                </Link>
                <Link href="https://github.com/rustypen">
                    <a className="icon has-text-dark is-large">
                        <i className="fab fa-2x fa-github"></i>
                    </a>
                </Link>
                
                <Link href="mailto:drop@outlook.in">
                    <a className="icon has-text-success is-large">
                        <i className="fab fa-2x far fa-envelope"></i>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default index
