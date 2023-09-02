import React from 'react';

const List = ({ comments, selectPost }) => {
  return (
    <div className="shadow-black text-gray-800 rounded-lg  p-4">
      <div>
        <ul className=" gap-2 flex flex-col">
          {comments.map((comment) => (
            <li
              key={comment.id}
              onClick={() => selectPost(comment.postId)}
              className="cursor-pointer hover:bg-gray-100 m-2 border-[#404040] rounded-md transition-all ease-in-out duration-300  p-2 shadow-md shadow-[#404040] "
            >
              <div className="mb-2">
                <strong className="text-green-600">Post {comment.id} :</strong> {comment.name}
              </div>
              <div className=" text-sm">
                <strong>Email:</strong> {comment.email}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
