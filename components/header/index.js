import React from 'react'

function index() {
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
                    <a className="navbar-item" href="https://bulma.io">
                        <span className="title is-3">Rusty Pen</span>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">Blog</a>
                        <a className="navbar-item">Portfolio</a>
                        <a className="navbar-item">About</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default index
