import React from "react";

const QueryInput = ({ qus, setQus, handleSubmit, loading }) => {
  return (
    <div className="shadow-lg w-[90vw] sm:w-[70vw] absolute bottom-0  bg-white mb-4  rounded-lg">
      <div className="flex p-6 gap-5">
        <input className="w-[85vw] resize-none  p-4 border-b border-cyan-800 max-h-[60px]" placeholder="Ask your legal question here..." value={qus}       onChange={(e) => setQus(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={loading} className=" rounded  h-[40px]  hover:bg-cyan-600 w-[90px] bg-cyan-500 text-black mt-3 px-5 disabled:opacity-50"
        >
          {loading ? "Loading...." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default QueryInput;
