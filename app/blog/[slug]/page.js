// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
    const res = await fetch(
        `https://dev.to/api/articles/${personalData.devUsername}/${slug}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function generateStaticParams() {
    const res = await fetch(
        `https://dev.to/api/articles?username=${personalData.devUsername}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const articles = await res.json();

    return articles.map((article) => ({
        slug: article.slug,
    }));
}

async function BlogDetails({ params }) {
    const slug = params.slug;
    const blog = await getBlog(slug);

    return ( <
        div >
        <
        h1 > { blog.title } < /h1> <p> {blog.description} </p > { " " } <
        div dangerouslySetInnerHTML = {
            { __html: blog.body_html } }
        />{" "} <
        /div>
    );
}

export default BlogDetails;