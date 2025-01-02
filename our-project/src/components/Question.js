import React, { useState } from "react";

function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-blue-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium">{question}</h3>
        <span className="text-lg font-bold">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <p className="p-4 text-gray-700">{answer}</p>}
    </div>
  );
}

export default Question;