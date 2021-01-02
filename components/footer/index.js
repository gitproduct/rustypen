import React from 'react';
import Link from 'next/link';

function index() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
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
                <p>Made for selfish reason only</p>
            </div>
        </footer>
    )
}

export default index
