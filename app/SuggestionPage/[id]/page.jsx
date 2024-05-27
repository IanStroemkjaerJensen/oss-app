import SuggestionForm from "@/app/(components)/SuggestionForm";

const getSuggestionById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/Suggestions/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to read idea from database.");
  }

  return response.json();
};

const SuggestionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateSuggestionData = {};

  if (EDITMODE) {
    updateSuggestionData = await getSuggestionById(params.id);
    updateSuggestionData = updateSuggestionData.foundSuggestion;
  } else {
    updateSuggestionData = {
      _id: "new",
    };
  }
  return <SuggestionForm suggestion={updateSuggestionData} />;
};

export default SuggestionPage;
