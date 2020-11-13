// Store the quotes:

const QUOTEBANK = [
  {
    quote:
      "I'm sorry that people are so jealous of me. But I can't help it that I'm popular.",
    author: "Gretchen Wieners"
  },
  
  {
    quote:
      "It's October 3rd.",
    author: "Cady Heron"
  },
  
   {
    quote:
      "You wanna do something fun? You wanna go to Taco Bell?",
    author: "Karen Smith"
  },
  
  {
    quote:
      "You can't sit with us!",
    author: "Gretchen Wieners"
  },
  
  {
    quote:
      "You go, Glen Coco!",
    author: "Damian"
  },
  
   {
    quote:
      "Is butter a carb?",
    author: "Regina George"
  },
  
    {
    quote:
      "That is the ugliest effing skirt I've ever seen.",
    author: "Regina George"
  },
  
    {
    quote:
      "So you agree? You think you're really pretty?",
    author: "Regina George"
  },
  
    {
    quote:
      "Don't have sex, because you will get pregnant. And die. ",
    author: "Coach Carr"
  },
  
    {
    quote:
      "Made out with a hot dog? Oh my God that was one time!",
    author: "Amber D'Alessio"
  },
  
    {
    quote:
      "Oh my God, Danny DeVito, I love your work!",
    author: "Damian"
  },
  
    {
    quote:
      "I can't go out tonight. I'm sick.",
    author: "Karen Smith"
  },
  
    {
    quote:
      "Damn, Africa - what happened?",
    author: "Kevin Gnapoor"
  },
  
    {
    quote:
      "The limit does not exist.",
    author: "Cady Heron"
  },
  
    {
    quote:
      "Grool.",
    author: "Cady Heron"
  },
  
    {
    quote:
      "That's why her hair's so big. It's full of secrets.",
    author: "Damian"
  },
  
    {
    quote:
      "Get in loser, we're going shopping.",
    author: "Regina George"
  },
  
    {
    quote:
      "I'm not like a regular mom, I'm a cool mom!",
    author: "Mrs George"
  },
  
    {
    quote:
      "I'm a mouse. Duh!",
    author: "Karen Smith"
  },
  
  

  {
    quote:
      "That is so fetch.",
    author: "Gretchen Wieners"
  }
];

// When the window is loaded, a new quote is generated:
window.onload = init;
function init() {
  generateQuote();
}

// Generates a new quote at random when the 'new quote' button is clicked:

function generateQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];

  let twitterLink = "https://twitter.com/intent/tweet?hashtags=MeanGirls&&text=";

  let quoteInApiFormat = randomQuoteData.quote.replace(/  /g, "%20");
  twitterLink += quoteInApiFormat;

  let authorInApiFormat = randomQuoteData.author.replace(/  /g, "%20");
  twitterLink += " - " + authorInApiFormat;

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}

