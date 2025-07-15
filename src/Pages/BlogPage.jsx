import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {

    const [blog,setBlog] = useState(null);
    const [relatedblogs, setrelatedBlogs] = useState([]);
    const location = useLocation();
    const navogation = useNavigation();


    const blogId = location.pathname.split("/").at(-1);
    const {setLoading,loading} = useContext(AppContext);

    async function fetchRelatedBlogs() {
      setLoading(true);
      let url = `${baseUrl}?blogId=${blogId}`;
      try {
        const res  = await fetch(url);
        const data = await res.json();
        setrelatedBlogs(data.relatedblogs);
      }
      catch (error){
         console.log("Error got");
         setBlog(null);
         setrelatedBlogs([]);
      }

      setLoading(fals);
      
    }


    useEffect(() => {
      if(blogId){
        fetchRelatedBlogs();
      }
    })
  return (
    <div>
      <Header/>

<div>
  <button
  onClick={() => NavigationActivation(-1)}>
    Back
    
    </button>
    </div>      
    {
      loading ? (<div>
        <p>Loading</p>
        </div>) : 
        blog ?
        (
          <div>
            <BlogDetails post={blog} />
            <h2>Related Blogs</h2> 
            {
              relatedblogs.map((post) =>(

                <div key = {post.id}>
                  <BlogDetails post={post}/> </div>
              ))
            }
            </div>) :

            (<div>
              <p>No Blog Found</p>
            </div>)
        
       
    }  
    </div>
  )
}

export default BlogPage