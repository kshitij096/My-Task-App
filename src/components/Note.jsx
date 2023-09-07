import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Note = ({ title, content, onDelete, id }) => {
  function handleClick() {
    onDelete(id);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 my-6 max-w-xs md:max-w-md mx-auto">
      <div className="text-gray-800 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-sm md:text-base">{content}</p>
        </div>

        <button
          className="bg-red-500 sm:0 text-white py-1 px-2 rounded-md mt-3 md:mt-0 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          onClick={handleClick}
        >
          <DeleteOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Note;
