import SuggestionCard from "@/app/(components)/SuggestionCard";
import React from "react";

const SuggestionPage = ({ params }) => {
  return (
    <div>
      Suggestions {params.id}
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </div>
  );
};

export default SuggestionPage;
