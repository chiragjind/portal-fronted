

import React, { useContext, useReducer, useState } from "react";
import reducer from "./Reducer";
import { useEffect } from "react";


let API ="https://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading: true,
    query: "Html",
    nbpages: 0,
    page: 0,
    hits: [],

};

const AppContext=React.createContext();

const AppProvider=({children})=>{

// const [state, setstate]= useState(initialState);

const [state, dispatch]= useReducer(reducer, initialState);


   
// let isLoading = true;
   const fetchApiData= async (url) => {
          dispatch({type:"SET_loading"});
    try{
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);
        dispatch({type:"GET_STORIES",payload:{
            hits: data.hits,
            nbpages: data.nbpages,

        },
    });
    } catch(error){
        console.log(error);
    }

   };

   const removePost = (post_ID) => {
    dispatch({type: "REMOVE_POST", payload: post_ID });
   }
   
   const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

   useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
   },[state.query])



    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost}}>{children}</AppContext.Provider>
    )
};


const useGlobalContext=()=>{
    return useContext(AppContext);
}
export{AppContext,AppProvider,useGlobalContext};