import React, { useState } from "react";

const NameInput = ({ onNext }: { onNext: (name: string) => void }) => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Enter Your Name</h1>
      <input
        className="px-4 py-2 text-black rounded-lg focus:outline-none"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        onClick={() => name && onNext(name)}
      >
        Continue
      </button>
    </div>
  );
};

export default NameInput;