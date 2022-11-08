const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent ="This is the glorious text-conent";

container.appendChild(content);

const para = document.createElement("p");
const node = document.createTextNode("Hi I'm read");
para.appendChild(node);
para.style.color ="red";

container.appendChild(para);

const newH3 = document.createElement("h3");
const newh3Text = document.createTextNode("I'm blue h3!");
newH3.appendChild(newh3Text);
newH3.style.color = "blue";

container.appendChild(newH3);

const div2 = document.createElement("div");
div2.classList.add("div2");
div2.style.cssText = "border: 5px solid black; background-color: pink;";

const div2H1 = document.createElement("h1");
const div2h1Text = document.createTextNode("I'm in a div");
div2H1.appendChild(div2h1Text);

const div2p = document.createElement("p");
const div2pText = document.createTextNode("ME TOO!");
div2p.appendChild(div2pText);


div2.appendChild(div2H1);
div2.appendChild(div2p);

container.appendChild(div2);


