const overskrift = document.querySelector("h1");
const art1 = document.querySelector("article:nth-child(1) h3");
const art2 = document.querySelector("article:nth-child(2) h3");
// const billde1 = document.querySelector("img:nth-child(1)");
// const billde2 = document.querySelector("img:nth-child(2)");
const footer = document.querySelector("footer");

overskrift.textContent = "hej med dig";
console.log(overskrift.textContent);

art1.textContent = "fisk";
console.log(art1.textContent);

art2.innerHTML = "<h3> kat </h3>";
console.log(art2.innerHTML);

// billde1.
// console.log(billede1);

// billde2.
// console.log(billede2);

footer.textContent;
console.log(footer.textContent);
