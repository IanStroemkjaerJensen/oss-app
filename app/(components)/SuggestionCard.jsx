import React from "react";
import PopularityDisplay from "./PopularityDisplay";
import Label from "./Label";
import VotingCard from "./VotingCard";
import Link from "next/link";

const SuggestionCard = ({ suggestion }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hours: "2-digit",
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("da-DK", options);

    return formattedDate;
  };

  return (
    <VotingCard suggestion={suggestion}>

      <div className="flex flex-col  bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-1 h-full w-full">
        <div className="flex justify-end mb-3">
          <PopularityDisplay upvotes={suggestion.upvotes} />
        </div>
        <Link
          href={`/SuggestionPage/${suggestion._id}`}
          style={{ display: "contents" }}
        >
          <h4 className="flex-grow h-20 w-full overflow-hidden text-ellipsis mb-2">
            {suggestion.title}
          </h4>
          <hr className="h-px border-0 bg-page mb-2" />
          <p className="flex-grow h-40 w-full overflow-hidden text-ellipsis mb-2">
            {suggestion.description}
          </p>
          <div className="h-20 w-full overflow-hidden">
            {suggestion.labels.map((label, index) => (
              <Label key={index} labels={label} />
            ))}
          </div>
          <p className="text-xs ml-auto">
            {formatTimestamp(suggestion.createdAt)}
          </p>
          <div className="flex-grow" />
        </Link>
      </div>
    </VotingCard>
  );
};

export default SuggestionCard;
