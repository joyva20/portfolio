import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
    const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}

export async function generateStaticParams() {
    const blogs = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
    const blogData = await blogs.json();

    return blogData.map((blog) => ({
        slug: blog.slug,
    }));
}

function BlogDetails({ params }) {
    const { slug } = params;
    const blog = getBlog(slug);

    return ( <
        div >
        <
        h1 > { blog.title } < /h1> <
        p > { blog.description } < /p> {/ * Render data blog lainnya * /} < /
        div >
    );
}

export default BlogDetails;