import React from "react";

const Label = ({ labels }) => {
  const getColor = (labels) => {
    //Todo - handle / symbols in labels

    let color = "bg-slate-700";
    if (Array.isArray(labels)) {
      labels.forEach((label) => {
        switch (label) {
          case "Beginner":
            color = "bg-green-300";
            break;
          case "Intermediate":
            color = "bg-yellow-300";
            break;
          case "Advanced":
            color = "bg-orange-300";
            break;
          case "Next level":
            color = "bg-red-300";
            break;
          case "AI/ML":
            color = "bg-coral-300";
            break;
          case "AR/VR":
            color = "bg-blue-300";
            break;
          case "Blockchain":
            color = "bg-green-300";
            break;
          case "Bots":
            color = "bg-indigo-300";
            break;
          case "Design/UX":
            color = "bg-purple-300";
            break;
          case "Developer tooling":
            color = "bg-amber-300";
            break;
          case "Extension/Plugin/Add-on":
            color = "bg-lime-300";
            break;
          case "Futuristic tech/Unique idea":
            color = "bg-emerald-300";
            break;
          case "IoT":
            color = "bg-teal-300";
            break;
          case "Mobile app":
            color = "bg-cyan-300";
            break;
          case "Security":
            color = "bg-rose-300";
            break;
          case "Voice assistant":
            color = "bg-violet-300";
            break;
          case "Webapp":
            color = "bg-purple-300";
            break;
          case "APIs/backend":
            color = "bg-fuchsia-300";
            break;
          case "Frontend/UI":
            color = "bg-rose-300";
            break;
          case "Takes little work":
            color = "bg-pink-300";
            break;
          case "Medium work":
            color = "bg-sky-300";
            break;
          case "Much work":
            color = "bg-stone-300";
            break;
        }
      });
    } else {
      switch (labels) {
        case "Beginner":
          color = "bg-green-300";
          break;
        case "Intermediate":
          color = "bg-yellow-300";
          break;
        case "Advanced":
          color = "bg-orange-300";
          break;
        case "Next level":
          color = "bg-red-300";
          break;
        case "AI/ML":
          color = "bg-orange-300";
          break;
        case "AR/VR":
          color = "bg-blue-300";
          break;
        case "Blockchain":
          color = "bg-green-300";
          break;
        case "Bots":
          color = "bg-indigo-300";
          break;
        case "Design/UX":
          color = "bg-purple-300";
          break;
        case "Developer tooling":
          color = "bg-amber-300";
          break;
        case "Extension/Plugin/Add-on":
          color = "bg-lime-300";
          break;
        case "Futuristic tech/Unique idea":
          color = "bg-emerald-300";
          break;
        case "IoT":
          color = "bg-teal-300";
          break;
        case "Mobile app":
          color = "bg-cyan-300";
          break;
        case "Security":
          color = "bg-rose-300";
          break;
        case "Voice assistant":
          color = "bg-violet-300";
          break;
        case "Webapp":
          color = "bg-purple-300";
          break;
        case "APIs/backend":
          color = "bg-fuchsia-300";
          break;
        case "Frontend/UI":
          color = "bg-rose-300";
          break;
        case "Takes little work":
          color = "bg-pink-300";
          break;
        case "Medium work":
          color = "bg-sky-300";
          break;
        case "Much work":
          color = "bg-stone-300";
          break;
      }
    }

    return color;
  };

  return (
    <span
      className={`labels display: inline-block rounded-2xl w-15 h-7 text-sm p-1 m-1 text-black ${getColor(
        labels
      )}`}
    >
      {labels}
    </span>
  );
};

export default Label;
