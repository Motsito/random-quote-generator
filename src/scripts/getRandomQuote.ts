import quotesList from "../jsons/quotesList.json";

export default function getRandomQuote(): { quote: string; author: string } {
  let QuotesLength: number = Object.keys(quotesList.quotes).length;

  let randomQuoteIndex: number = Math.floor(Math.random() * QuotesLength);

  let randomQuote = quotesList.quotes[randomQuoteIndex];

  return randomQuote;
}
