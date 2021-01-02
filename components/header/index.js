import React, { useState } from 'react';
import Link from 'next/link';

function index() {
    const [menuState, setMenuState] = useState(false);

    const menuToggle = e=>{
        e.preventDefault();
        setMenuState(state=>!state)
    }


    return (
        <header className="navbar is-spaced is-sticky has-background-blur" role="navigation" aria-label="main navigation">
            <style jsx>{`
                .is-sticky{
                    position: sticky;
                    top: 0px;
                    left: 0px;
                }
                .has-background-blur{
                    backdrop-filter: blur(50px);
                    background: transparent !important;
                }
            `}</style>
            <nav className="container is-max-desktop">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <span className="title is-4 has-text-black">RustyPen</span>
                        </a>
                    </Link>

                    <a role="button" className={`navbar-burger ${menuState && 'is-active'}`} aria-label="menu" aria-expanded={menuState} onClick={menuToggle}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${menuState && 'is-active'}`}>
                    <div className="navbar-end">
                        <Link href="/">
                            <a className="navbar-item">
                                Home
                            </a>
                        </Link>
                        <Link href="/blog">
                            <a className="navbar-item">
                                Blog
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="navbar-item">
                                About
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="navbar-item">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default index
