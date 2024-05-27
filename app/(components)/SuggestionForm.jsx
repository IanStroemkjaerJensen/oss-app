"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Error from "next/error";

const SuggestionForm = ({ suggestion }) => {
  const EDITMODE = suggestion._id === "new" ? false : true;
  const router = useRouter();

  const predefinedLabels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Next level",
    "AI/ML",
    "APIs/Backend",
    "AR/VR",
    "Blockchain",
    "Bots",
    "Developer tooling",
    "Design/UX",
    "Extension/Plugin/Add-on",
    "Futuristic tech/Unique idea",
    "Frontend/UI",
    "IoT",
    "Mobile app",
    "Security",
    "Voice assistant",
    "Webapp",
    "Takes little work",
    "Medium work",
    "Much work",
  ];

  const startingSuggestionData = {
    title: "",
    description: "",
    labels: [],
    votecount: 0,
    upvotes: 0,
    downvotes: 0,
  };

  if (EDITMODE) {
    startingSuggestionData["title"] = suggestion.title;
    startingSuggestionData["description"] = suggestion.description;
    startingSuggestionData["labels"] = suggestion.labels;
  }

  const [formData, setFormData] = useState(startingSuggestionData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLabelChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        labels: [...prevState.labels, value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        labels: prevState.labels.filter((label) => label !== value),
      }));
    }
  };

  const removeLabel = (index) => {
    const newLabels = formData.labels.filter((_, i) => i !== index);
    setFormData((prevState) => ({
      ...prevState,
      labels: newLabels,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const response = await fetch(`/api/Suggestions/${suggestion._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!response.ok) {
        throw new Error("Failed to Update Suggestion.");
      }
    } else {
      const response = await fetch("/api/Suggestions", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!response.ok) {
        throw new Error("Failed to create new Suggestion.");
      }
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h3>
          {EDITMODE ? "Update your Suggestion" : "Create your Suggestion"}
        </h3>
        <label>Title </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        ></input>
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        ></textarea>
        <label>Labels</label>
        <div className="label-options">
          {predefinedLabels.map((label) => (
            <div key={label}>
              <input
                type="checkbox"
                id={label}
                value={label}
                onChange={handleLabelChange}
                checked={formData.labels.includes(label)}
              />
              <label htmlFor={label}>{label}</label>
            </div>
          ))}
        </div>

        <button className="btn-forms mt-5" type="submit">
          {EDITMODE ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default SuggestionForm;
