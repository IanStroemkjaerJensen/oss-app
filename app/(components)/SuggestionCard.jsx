import React from "react";
import PopularityDisplay from "./PopularityDisplay";
import Label from "./Label";
import VotingCard from "./VotingCard";

const SuggestionCard = ({ suggestion }) => {
  return (
    <VotingCard suggestion={suggestion}>
      <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2 w-fit">
        <div className="flex mb-3 ml-auto">
          <PopularityDisplay upvotes={suggestion.upvotes} />
        </div>
        <h4 className="mb-2">{suggestion.title}</h4>
        <hr className="h-px border-0 bg-page mb-2"></hr>
        <p className="whitespace-pre-wrap mb-2">{suggestion.description}</p>
        <div className="flex flex-row">
          <Label labels={suggestion.labels} />
        </div>
        <div className="flex-grow" />
      </div>
    </VotingCard>
  );
};

export default SuggestionCard;
