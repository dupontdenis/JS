import retrieveContent from "./query.js";

console.log("here they are");
async function showContent() {
  try {
    const content = await retrieveContent();
    let ul = document.createElement("ul");
    content.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element;
      ul.appendChild(li);
    });

    document.getElementsByTagName("body")[0].appendChild(ul);
  } catch (e) {
    console.log("Error", e);
  }
}

showContent();
