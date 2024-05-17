import { useCallback, useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
  positionX: "left" | "right";
  positionY: "top" | "bottom";
  fontSize?: number;
}

function getRandomPosition(): Position {
  return {
    x: Math.random() * 50 + Math.random() * 10,
    y: Math.random() * 50 + Math.random() * 10,
    positionX: Math.random() > 0.5 ? "left" : "right",
    positionY: Math.random() > 0.5 ? "top" : "bottom",
    fontSize: Math.random() * 10 + 20,
  };
}

export const QuotesCloud = ({
  quotes,
}: {
  quotes: { idx: number; quote: string }[];
}) => {
  const [quotesLocation, setQuotesLocation] = useState<Position[]>([]);

  const [visibleQuotes, setVisibleQuotes] = useState<boolean[]>([]);

  const [firstLoad, setFirstLoad] = useState(true);

  const getRandomVisibility = useCallback(() => {
    const visibility = Array(quotes.length).fill(false);
    const minVisible = Math.ceil(0.15 * quotes.length);
    const maxVisible = Math.floor(0.3 * quotes.length);
    const count =
      Math.floor(Math.random() * (maxVisible - minVisible + 1)) + minVisible;

    for (let i = 0; i < count; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * quotes.length);
      } while (visibility[randomIndex]);
      visibility[randomIndex] = true;
    }

    return visibility;
  }, [quotes.length]);

  function getPosition(idx: number, position: string, axis: string) {
    const quoteLocation = quotesLocation[idx];
    if (!quoteLocation) return undefined;

    const isMatch =
      axis === "x"
        ? quoteLocation.positionX === position
        : quoteLocation.positionY === position;
    return isMatch ? `${quoteLocation[axis as "x" | "y"]}%` : undefined;
  }

  const effectLoad = useCallback(() => {
    const newPositions = quotes.map(() => getRandomPosition());
    const newVisibility = getRandomVisibility();

    setVisibleQuotes((prevVisibleQuotes) =>
      prevVisibleQuotes.map((visible) => (visible ? false : visible)),
    );

    setTimeout(() => {
      setQuotesLocation(newPositions);
      setVisibleQuotes(newVisibility);
    }, 1000);
  }, [getRandomVisibility, quotes]);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);

      const newPositions = quotes.map(() => getRandomPosition());
      setQuotesLocation(newPositions);
      setVisibleQuotes(getRandomVisibility());

      return;
    }

    const interval = setInterval(() => {
      effectLoad();
    }, 3000);

    return () => clearInterval(interval);
  }, [effectLoad, firstLoad, getRandomVisibility, quotes]);

  return (
    <div className="hidden md:block">
      {quotes.map((quote) => (
        <div
          key={quote.idx}
          className={`${
            visibleQuotes.length == 0 ? "hidden" : ""
          } ${visibleQuotes[quote.idx] ? "fade-in" : "fade-out"} absolute w-full text-xl`}
          style={{
            left: getPosition(quote.idx, "left", "x"),
            right: getPosition(quote.idx, "right", "x"),
            top: getPosition(quote.idx, "top", "y"),
            bottom: getPosition(quote.idx, "bottom", "y"),
            textAlign: getPosition(quote.idx, "left", "x") ? "left" : "right",
            maxWidth: "calc(100% - 30px)",
            maxHeight: "calc(100% - 30px)",
            fontSize: quotesLocation[quote.idx]?.fontSize,
          }}
        >
          {quote.quote}
        </div>
      ))}
    </div>
  );
};
