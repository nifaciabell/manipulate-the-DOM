let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const title = document.querySelector("h1");
  title.textContent = "Welcome to DOM Toretto's page ";
  console.log(title);

  // Part 2
  document.body.style.backgroundColor = "green";

  // Part 3
  const favoriteThings = document.getElementById("favorite-things");
  favoriteThings.lastElementChild.remove();
  console.log(favoriteThings);
  // Part 4
  const specialTitles = document.querySelectorAll(".special-title");
  //  console.log(specialTitles)
  specialTitles.forEach((title) => {
    title.style.fontSize = "2rem";
  });

  // Part 5

  const pastRaces = document.getElementById("past-races");
  // console.log(pastRaces.children)

  pastRaces.childNodes.forEach((city) => {
    if (city.textContent === "Chicago") {
      city.remove();
    }
  });
  console.log(pastRaces);

  // Part 6

  const newRace = document.createElement("li");
  newRace.textContent = "New York";

  const ul = document.getElementById("past-races");
  ul.appendChild(newRace);
  console.log(newRace);

  // Part 7
  const body = document.querySelector("body");
  const newBlogPostDiv = document.createElement("div");
  newBlogPostDiv.className = "blog-post";

  const newBlogPostH2 = document.createElement("h2");
  newBlogPostH2.textContent = newRace.textContent;
  newBlogPostDiv.appendChild(newBlogPostH2);

  const newBlogPostP = document.createElement("p");
  newBlogPostP.textContent = "I won the championship!!!";

  newBlogPostH2.appendChild(newBlogPostP);
  body.appendChild(newBlogPostDiv);

  newBlogPostDiv.classList.add("blog-post");

  console.log(newBlogPostDiv);

  // Part 8

  const newQuote = document.getElementById("quote-title");
  newQuote.addEventListener("click", randomQuote);

  // Part 9
  // Select all .blog-post class elements.
  // Iterate through the list of .blog-post class elements and apply two event handlers to each node.
  // The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red 

blog.forEach((post) => {
  post.addEventListener('mouseout', () => {
    post.classList.toggle('purple');
  });
  
  post.addEventListener('mouseenter', () => {
    post.classList.toggle('red');
  });
});

});