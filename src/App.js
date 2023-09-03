import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import List from './components/List';
import Filter from './components/Filter';
import PostDetails from './components/PostDetails';

function App() {
  const [comments, setComments] = useState([]);
  const [postIdFilter, setPostIdFilter] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedPostComments, setSelectedPostComments] = useState([]);
  

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?_limit=100')
      .then((response) => setComments(response.data));
  }, []);

  const selectPost = (postId) => {
    setSelectedPostId(postId);
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => setSelectedPostComments(response.data));
  };

  const filteredComments = comments.filter((comment) =>
    comment.postId.toString().includes(postIdFilter)
  );

  return (
    <div>
      <div className='shadow-md fixed w-full shadow-[#494949] bg-slate-200 text-center'>
        <h1 className="md:text-4xl text-xl text-center text-violet-500 uppercase  p-4"> 
        AulaCube Comments Assignment
        </h1>
      </div>
      <div className="flex bg-slate-100 pt-14  bg-fixed min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-4 ">
        <div className="rounded-lg p-4 ">
          <Filter postIdFilter={postIdFilter} setPostIdFilter={setPostIdFilter} />
        </div>
        <div className="mt-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-scroll h-[30vh] md:h-[72vh]  bg-fixed m-4 rounded-lg  ">
          <List comments={filteredComments} selectPost={selectPost} />
        </div>
      </div>
      <div className="w-full md:w-2/3 p-4">
        {selectedPostId && (
          <div className="rounded-lg p-4 ">
            <PostDetails postId={selectedPostId} comments={selectedPostComments} />
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
}

export default App;
