import React from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/Context';
import "./Article.css";

export const Article = () => {

    const { articleId } = useParams();
    const { articleData } = useDataContext();

    return (
        <main>
            {
                articleData.map(item => {
                    if (item.id === parseInt(articleId)) {
                        return (
                            <div className='single-article-container' key={item.id}>
                                <section className='article-title'>
                                    <h1>{item.title.rendered}</h1>
                                </section>
                                <section className='article-author'>
                                    <span>{item.parsely.meta.author[0].name}</span>
                                    <span>{item.date}</span>
                                </section>
                                <section className='article-img'>
                                    <img src={item.jetpack_featured_media_url} alt="article img" />
                                </section>
                                <section className='article-content'>
                                    <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                                </section>
                            </div>
                        )
                    }
                })
            }
        </main>
    )
}
