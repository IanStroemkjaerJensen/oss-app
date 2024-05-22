"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Error from "next/error";

const SuggestionForm = () => {
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
    labels: [""],
    votecount: 0,
    upvotes: 0,
    downvotes: 0,
  };

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
    const value = e.target.value;
    setFormData((prevState) => {
      // Prevents duplicate labels
      if (prevState.labels.includes(value)) {
        return prevState;
      }
      return {
        ...prevState,
        labels: [...prevState.labels, value],
      };
    });
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
    const response = await fetch("/api/Suggestions", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!response.ok) {
      throw new Error("Failed to create new Suggestion.");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h3>Create A New Suggestion!</h3>
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
        <select
          className="h-40"
          multiple
          onChange={handleLabelChange}
          value={formData.labels}
        >
          <option value="" disabled>
            Select label
          </option>
          {predefinedLabels.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
        <div className="selected-labels">
          {formData.labels.map((label, index) => (
            <div key={index} className="label-item ">
              <span className="labels">{label}</span>
              <button
                className="btn-forms "
                type="button"
                onClick={() => removeLabel(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button className="btn-forms mt-5" type="submit">
          Create Suggestion
        </button>
      </form>
    </div>
  );
};

export default SuggestionForm;
