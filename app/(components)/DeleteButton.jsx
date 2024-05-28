import { faDeleteLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const deleteSuggestion = async () => {
    const response = await fetch(
      `http://localhost:3000/api/Suggestions/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      router.refresh();
    }
  };
  return (
    <FontAwesomeIcon
      onClick={deleteSuggestion}
      icon={faDeleteLeft}
      id={id}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteButton;
