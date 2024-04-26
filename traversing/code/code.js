const initial = () => {
    // By ID
    document.getElementById("idExample").innerText = "By ID";
    document.getElementById("idExampleInner").innerHTML = "<a>By Id</>";

    // By TAG
    console.log(document.getElementsByTagName("li"));
    console.log(document.getElementsByTagName("li")[0].textContent);

    // By Class Name
    document.getElementsByClassName("highlight")[0].style.color = "red";

    // Append
    const data = document.getElementById("idExampleInner");
    const newItem = document.createElement("strong");
    newItem.textContent = "New item";
    newItem.addEventListener("click", () => { alert("Hello") });
    data.appendChild(newItem);
};

window.addEventListener("load", initial);