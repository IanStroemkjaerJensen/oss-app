import React from "react";
import PopularityDisplay from "./PopularityDisplay";
import Label from "./Label";
import VotingCard from "./VotingCard";

const SuggestionCard = ({ suggestion }) => {
  return (
    <VotingCard suggestion={suggestion}>
      <button>
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
          <div className="flex mb-3 ml-auto">
            <PopularityDisplay upvotes={suggestion.upvotes} />
          </div>
          <h4 className="mb-2 h-20 w-25 flex-no-wrap  overflow-hidden text-ellipsis">
            {suggestion.title}
          </h4>
          <hr className="h-px border-0 bg-page mb-2"></hr>
          <p className="flex-grow h-40 w-25 overflow-hidden text-ellipsis mb-2">
            {suggestion.description}
          </p>
          <div className="flex flex-row">
            <Label labels={suggestion.labels} />
          </div>
          <p className="text-xs ml-auto">{suggestion.createdAt}</p>
          <div className="flex-grow" />
        </div>
      </button>
    </VotingCard>
  );
};

export default SuggestionCard;
