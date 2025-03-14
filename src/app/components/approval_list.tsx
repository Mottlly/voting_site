import { useState } from "react";
import ApprovalVotingForm from "./approval_form";

export default function ApprovalVoting() {
  const [votes, setVotes] = useState<{ name: string; choices: string[] }[]>([]);

  const addVote = (vote: { name: string; choices: string[] }) => setVotes([...votes, vote]);

  // Calculate approval results
  const results = votes.reduce((acc: Record<string, number>, { choices }) => {
    choices.forEach((choice) => {
      acc[choice] = (acc[choice] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <div className="max-w-md mx-auto space-y-4">
      <ApprovalVotingForm addVote={addVote} />

      <div className="border p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Votes Cast</h2>
        <ul>
          {votes.map((vote, index) => (
            <li key={index} className="border-b py-1">
              {vote.name} approved: <strong>{vote.choices.join(", ")}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="border p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Results</h2>
        <ul>
          {Object.entries(results).map(([choice, count]) => (
            <li key={choice}>
              {choice}: {count} approvals
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
