"use client";
import { useState } from "react";

export default function VotingForm({ addVote }) {
  const [name, setName] = useState("");
  const [choice, setChoice] = useState("");
  const [weight, setWeight] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !choice || weight <= 0) return;
    addVote({ name, choice, weight: parseFloat(weight) });
    setName("");
    setChoice("");
    setWeight(1);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md space-y-2">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Your Vote"
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Submit Vote
      </button>
    </form>
  );
}
