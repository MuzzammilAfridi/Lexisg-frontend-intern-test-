import React from "react";

const AnswerCard = ({ answer, citation }) => {
  const handleCitationClick = () => {
    window.open(citation.link, "_blank");
  };

  return (
    <div className="w-[90vw] sm:w-[70vw] mb-3 bg-white shadow-lg rounded p-5 ">
      <p className="text-black mb-7">{answer}</p>
      <div className="text-black text-[18px]  border-t pt-3">
        <div className="font-semibold">Citation:</div>
        <button onClick={handleCitationClick} className="text-cyan-600 text-justify"
        >
          {citation.text} ({citation.source})
        </button>
      </div>
    </div>
  );
};

export default AnswerCard;
