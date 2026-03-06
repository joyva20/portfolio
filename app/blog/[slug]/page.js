// @flow strict
import { personalData } from "@/utils/data/personal-data";

export const dynamicParams = false;

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function getAllBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return (blogs || [])
    .map((blog) => blog?.slug)
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div>
    </div>
  );
};

export default BlogDetails;