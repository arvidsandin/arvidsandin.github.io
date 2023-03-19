import React from "react"
import { title, card, excerp, date, link } from './blogentrycard.module.css'


const BlogEntryCard = ({ data }) => {

    return(
        <div className = {card}>
            <a className={link} href={`/blog${data.frontmatter.slug}`}>
                <h2 className={title}>{data.frontmatter.title}</h2>
                <p className={excerp}>{data.excerpt}</p>
                <p className={date}>{data.frontmatter.date}</p>
            </a>
        </div>
    )
}

export default BlogEntryCard