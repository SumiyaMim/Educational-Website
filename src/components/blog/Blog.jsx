import React from 'react';
import Back_blog from "../common/back/Back_blog";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <Back_blog title='Blog Posts'/>
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard/>
        </div>
      </section>
    </>
  )
}

export default Blog
