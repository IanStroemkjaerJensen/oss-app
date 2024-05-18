import React from "react";
import SuggestionCard from "./(components)/SuggestionCard";
import VotingCard from "./(components)/VotingCard";

const DashBoard = () => {
  return (
    <div className="p-5 flex justify-center items-center">
      <div className="lg:grid gap-4">
        <VotingCard>
          <SuggestionCard />
        </VotingCard>

        <VotingCard>
          <SuggestionCard />
        </VotingCard>

        <VotingCard>
          <SuggestionCard />
        </VotingCard>

        <VotingCard>
          <SuggestionCard />
        </VotingCard>
      </div>
    </div>
  );
};

export default DashBoard;
