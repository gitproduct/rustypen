import React, {Fragment} from 'react';
import Link from 'next/link';

function index({posts}) {

    return (
        posts.map((post, index)=><Fragment key={index}>
                <Link href={'/blog/'+post.slug}>
                    <a>
                        <article className="mt-5 py-1">
                            <h3 className="title is-4 is-capitalized">{post.title}</h3>
                            <p className="subtitle is-6">{post.excerpt}</p>
                        </article>
                    </a>
                </Link>
            </Fragment>)
    )
}

export default index
