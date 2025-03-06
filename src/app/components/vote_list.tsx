"use client";
import { useState } from "react";
import VotingForm from "./vote_form";

export default function WeightedVoting() {
  const [votes, setVotes] = useState([]);

  const addVote = (vote) => setVotes([...votes, vote]);

  // Calculate weighted results
  const results = votes.reduce((acc, { choice, weight }) => {
    acc[choice] = (acc[choice] || 0) + weight;
    return acc;
  }, {});

  return (
    <div className="max-w-md mx-auto space-y-4">
      <VotingForm addVote={addVote} />
      
      <div className="border p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Votes Cast</h2>
        <ul>
          {votes.map((vote, index) => (
            <li key={index} className="border-b py-1">
              {vote.name} voted for <strong>{vote.choice}</strong> (Weight: {vote.weight})
            </li>
          ))}
        </ul>
      </div>

      <div className="border p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Results</h2>
        <ul>
          {Object.entries(results).map(([choice, weight]) => (
            <li key={choice}>
              {choice}: {weight} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
