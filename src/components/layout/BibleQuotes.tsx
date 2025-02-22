"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

type BibleQuoteType = {
  text: string;
  reference: string;
};

export default function BibleQuote() {
  const [quote, setQuote] = useState<BibleQuoteType | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("/api/bible-quote"); // Fetch from your API route
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        console.error("Error fetching Bible quote:", error);
      }
    }

    fetchQuote();
  }, []);

  if (!quote) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <figure className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
      <FaQuoteLeft
        aria-hidden="true"
        className="brand-text-color text-4xl lg:-mt-2"
      />
      <blockquote>
        <p className="mb-4 max-w-xl text-xl text-gray-500 lg:text-2xl">
          {quote.text}
        </p>
        <figcaption className="text-gray-600 uppercase italic lg:text-lg">
          — {quote.reference}
        </figcaption>
      </blockquote>
    </figure>
  );
}
