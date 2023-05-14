import React from 'react'
// import { Appcontext } from "./context";
// import { useContext } from 'react';
import { useGlobalContext } from './context';
// import "./Todo.css";
import Search from './Serach';

const Todo=()=> {
  

  const {hits, isLoading, removePost } = useGlobalContext();

  if(isLoading){
    return (
        <>
        <h1>loadiinnggg.......</h1>
        <h1>Loadiinnggg.......</h1>
       
       
        </>
    );
  }
  return (
   <>
   <div className='stories-div conatiner mt-3'>
   <h1 className='mt-6'>WElcome to todo page</h1>
   <Search />
   {hits.map((curPost)=>{
    const { title, author, objectID, url, num_comments } = curPost;
     return (
      <>
     <div className='card cardss'>
        <h2 className='ah2'>{title}</h2>
        <p className='pp'>
            by <span className='spann'>{author}</span> | <span className='spann'>{num_comments}</span> comments
        </p>
        <div className='card-button card-buttonss'>
            <a href={url} target="_blank">
                read more
            </a>
            <a href="#" onClick={() => removePost(objectID)}>
                remove
            </a>
        </div>
     </div>


     </>
     );
   })}
   </div>
   </>
  );
};

export default Todo;
