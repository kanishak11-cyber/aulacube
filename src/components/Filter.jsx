const Filter = ({ postIdFilter, setPostIdFilter }) => {
  
  return (
    <div className="p-4 rounded-lg shadow-md shadow-[#494949] items-center text-center ">
      <h2 className="text-xl text-violet-600 font-semibold mb-2">Filter by postId:</h2>
      <div className="flex items-center flex-row justify-between gap-3">
        <label htmlFor="postIdInput" className=" text-violet-600 font-semibold">
          Post ID:
        </label>
        <input
          type="text"
          id="postIdInput"
          className="flex-grow shadow-sm  shadow-[#494949] border rounded-lg py-1  px-4"
          placeholder="Search Post ID (e.g., 1)"
          value={postIdFilter}
          onChange={(e) => setPostIdFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
