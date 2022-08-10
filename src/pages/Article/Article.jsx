import React from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/Context';
import "./Article.css";

export const Article = () => {

    const { articleId } = useParams();
    const { articleData } = useDataContext();

    const data = articleData.find(item => item.id === parseInt(articleId))

    return (
        <main>
            <div className='single-article-container' key={data?.id}>
                <section className='article-title'>
                    <h1>{data?.title.rendered}</h1>
                </section>
                <section className='article-author'>
                    <span>{data?.parsely.meta.author[0].name}</span>
                    <span>{data?.date}</span>
                </section>
                <section className='article-img'>
                    <img src={data?.jetpack_featured_media_url} alt="article img" />
                </section>
                <section className='article-content'>
                    <p dangerouslySetInnerHTML={{ __html: data?.content.rendered }}></p>
                </section>
            </div>
        </main>
    )
}
