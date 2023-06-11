import React from "react";

function todo(props) {
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest text-left">{props.text}</p>
      <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white-500 text-green border-green bg-green-500">
        Done
      </button>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red text-white-700 bg-red-500">
        Remove
      </button>
    </div>
  );
}

export default todo;
