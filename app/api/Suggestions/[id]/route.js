import Suggestion from "@/app/(models)/Suggestion";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundSuggestion = await Suggestion.findOne({ _id: id });

    return NextResponse.json({ foundSuggestion }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const suggestionData = body.formData;

    const updateSuggestionData = await Suggestion.findByIdAndUpdate(id, {
      ...suggestionData,
    });

    return NextResponse.json(
      { message: "Suggestion Updated" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Suggestion.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Suggestion deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
