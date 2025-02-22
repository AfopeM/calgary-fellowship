import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://labs.bible.org/api/?passage=random&type=json",
    );
    const data: {
      bookname: string;
      chapter: number;
      verse: number;
      text: string;
    }[] = await res.json();

    if (data?.length > 0) {
      const verse = data[0];

      if (verse.text && verse.text.trim().length >= 100) {
        return NextResponse.json({
          text: verse.text.trim(),
          reference: `${verse.bookname} ${verse.chapter}:${verse.verse}`,
        });
      }
    }
  } catch (error) {
    console.error("Error fetching Bible quote:", error);
  }

  // Fallback quote if fetch fails
  return NextResponse.json({
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
  });
}
