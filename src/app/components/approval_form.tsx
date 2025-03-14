"use client";
import { useState } from "react";

export default function ApprovalVotingForm({ addVote }: { addVote: (vote: { name: string; choices: string[] }) => void }) {
  const [name, setName] = useState<string>("");
  const [choices, setChoices] = useState<string[]>([]);
  const [newChoice, setNewChoice] = useState<string>("");

  const handleAddChoice = () => {
    if (newChoice && !choices.includes(newChoice)) {
      setChoices([...choices, newChoice]);
      setNewChoice("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || choices.length === 0) return;
    addVote({ name, choices });
    setName("");
    setChoices([]);
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
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter a choice"
          value={newChoice}
          onChange={(e) => setNewChoice(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="button"
          onClick={handleAddChoice}
          className="bg-gray-500 text-white p-2 rounded w-full"
        >
          Add Choice
        </button>
      </div>
      <div className="border p-2 rounded">
        <h3 className="font-bold">Selected Choices:</h3>
        <ul>
          {choices.map((choice, index) => (
            <li key={index} className="border-b py-1">{choice}</li>
          ))}
        </ul>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Submit Vote
      </button>
    </form>
  );
}
