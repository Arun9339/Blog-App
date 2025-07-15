import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner'; // Make sure Spinner is defined
import BlogDetails from './BlogDetails';
const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
         <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
};

export default Blogs;
