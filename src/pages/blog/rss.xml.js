import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

const imageNote =
  "*Note: Images in this post are not displayed in the RSS feed. View the blog on the web to see them.*\n\n";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
      content: "http://purl.org/rss/1.0/modules/content/",
      dc: "http://purl.org/dc/elements/1.1/",
    },
    title: "Arvid Sandin",
    description: "Arvid Sandin's personal website",
    site: context.site,
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.data.slug}/`,
      content: parser.render(imageNote + post.body.replace(/<\!--.*?-->/g, "")),
      customData: `<dc:creator>Arvid Sandin</dc:creator>`,
    })),
    customData:
      `<atom:link href="${context.site}blog/rss.xml" rel="self" type="application/rss+xml" />` +
      `<language>en</language>`,
  });
}
