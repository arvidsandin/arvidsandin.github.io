import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Metadata = ({ title, description, pathname, type, image, children }) => {
    const { title: defaultTitle, description: defaultDescription, image: defaultImage, siteUrl } = useSiteMetadata()

    const metadata = {
        title: title || defaultTitle,
        extendedTitle: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        image: image ? `${siteUrl}${image}`: `${siteUrl}${defaultImage}`,
        url: `${siteUrl}${pathname || ``}`,
        type: type || `website`,
    }

    return (
        <>
            <title>{metadata.extendedTitle}</title>
            <meta name="description" content={metadata.description} />
            <meta name="image" content={metadata.image} />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:url" content={metadata.url}/>
            <meta property="og:type" content={metadata.type} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:description" content={metadata.description} />
            {children}
        </>
    )
}