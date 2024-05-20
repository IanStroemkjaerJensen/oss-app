import React from "react";
import DeleteButton from "./DeleteButton";
import PopularityDisplay from "./PopularityDisplay";
import Label from "./Label";
import VotingCard from "./VotingCard";

const SuggestionCard = ({ suggestion }) => {
  return (
    <VotingCard>
      <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2 w-fit">
        <div className="flex mb-3 ml-auto">
          <PopularityDisplay upvotes={suggestion.upvotes} />
        </div>
        <h4 className="mb-2">
          An app to help guide blind people navigating while walking
        </h4>
        <hr className="h-px border-0 bg-page mb-2"></hr>
        <p className="whitespace-pre-wrap mb-2">
          A mobile or smartwatch app to help guide blind people navigating while
          walking, by voice assistant
        </p>
        <div className="flex flex-row">
          <Label />
          <Label />
        </div>
        <div className="flex-grow" />
      </div>
    </VotingCard>
  );
};

export default SuggestionCard;
