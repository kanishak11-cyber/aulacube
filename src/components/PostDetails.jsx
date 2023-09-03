import React from 'react';

const PostDetails = ({ postId, comments }) => {
  return (
    <div className="bg-slate-100 rounded-lg  p-4">
      <h2 className="md:text-xl text-md text-violet-600 font-semibold mb-4">Comments for Post #{postId}</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="mb-2 shadow-md rounded-md shadow-violet-950 px-3 py-1" >
            <strong className="text-violet-500">Comment {comment.id} :</strong> {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
