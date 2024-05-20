import React from "react";
import SuggestionCard from "./(components)/SuggestionCard";
import VotingCard from "./(components)/VotingCard";

const getSuggestions = async () => {
  try {
    const response = await fetch("  http://localhost:3000/api/Suggestions", {
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.log("Failed to retrieve suggestions from database", error);
  }
};

const Dashboard = async () => {
  const { suggestions } = await getSuggestions();
  return (
    <div className="flex relative">
      <h3 className="m-5">
        Ideas for OpenSource projects and regular software projects
      </h3>

      <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-5 p-5">
        {suggestions.map((suggestion) => (
          <SuggestionCard
            id={suggestion.title}
            key={suggestion.title}
            suggestion={suggestion}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
