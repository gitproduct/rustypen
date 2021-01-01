import React, {Fragment} from 'react'
import Link from 'next/link';

function index({posts}) {
    return (
        <div className="columns is-multiline  is-variable is-4">
            {
                posts.map((post, index)=><Fragment key={index}>
                    <div className="column is-half">
                        <Link href={'/blog/'+post.slug}>
                            <a className="card is-block">
                                <div className="card-content">
                                    <h3 className="title is-4 is-capitalized">
                                        {post.title}
                                    </h3>
                                    <p className="is-6">For the better part of the last year, I've been investing heavily in front-end development and design. When I started my new role at Hy-Vee, I identified a need for a component library and created it. </p>
                                    <div className="has-text-right mt-4">
                                        <time>{new Date(post.published_date).toDateString()}</time>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </Fragment>)
            }
        </div>
    )
}

export default index;