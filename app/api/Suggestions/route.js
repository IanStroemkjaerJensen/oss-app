import Suggestion from "../../(models)/Suggestion";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const suggestionData = body.formData;
    await Suggestion.create(suggestionData);

    return NextResponse.json(
      { message: "Suggestion created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error:", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const suggestions = await Suggestion.find();
    return NextResponse.json({ suggestions }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
