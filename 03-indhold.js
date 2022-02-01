const overskrift = document.querySelector("h1");
const art1 = document.querySelector("article:nth-child(1) h3");
const art2 = document.querySelector("article:nth-child(2) h3");
const billede1 = document.querySelector("article:nth-child(1) img");
const billede2 = document.querySelector("article:nth-child(2) img");
const footer = document.querySelector("footer");

overskrift.textContent = "hej med dig";
console.log(overskrift.textContent);

art1.textContent = "fisk";
console.log(art1.textContent);

art2.innerHTML = "<h3> kat </h3>";
console.log(art2.innerHTML);

console.log(billede1);
billede1.src = "https://placeimg.com/640/480/arch";
billede1.alt = "fisk";

console.log(billede2);
billede2.src = "https://placeimg.com/640/480/tech";
billede2.alt = "hej";

footer.textContent;
console.log(footer.textContent);
