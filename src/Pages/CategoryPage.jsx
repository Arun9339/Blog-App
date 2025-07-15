import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
imp

const CategoryPage = () => {
    const navigation = useNavigation();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div><Header/>
    <div>
        <button onClick={NavigationActivation(-1)}>
            Back
        </button>
        <h2>
            Blogs on <span>{category}</span>
        </h2>
    </div>
    <Blogs/>
    <Pagination/>
    
    </div>
  )
}

export default CategoryPage