import React from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/Context';
import "./Home.css";

export const Home = () => {

    const { articleData } = useDataContext();

    return (
        <main>
            <h1 className='top-trending-news-heading'>Top Trending News</h1>
            {
                articleData.map(item => (
                    <div key={item.id}>
                        <Link to={`article/${item.id}`} className="article-container">
                            <section className="article-title-section">
                                <h1>{item.title.rendered}</h1>
                                <p>By <strong>{item.parsely.meta.author[0].name}</strong></p>
                                <p>{item.date}</p>
                            </section>
                            <section>
                                <p dangerouslySetInnerHTML={{ __html: item.excerpt.rendered.replace("[&hellip;]", "...") }}></p>
                            </section>
                            <section className="child-"><img className='featured-media' src={item.jetpack_featured_media_url} alt="featured media" /></section>
                        </Link>
                    </div>
                ))
            }
        </main>
    )
}
