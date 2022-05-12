let actionButton = document.getElementById("action");
let itemList = document.querySelector(".item-list");

let showPlayList = () => {
  const isHidden = itemList.style.display === "none";

  if (isHidden) {
    // Display hidden elemenst
    itemList.style.display = "block";
    actionButton.innerHTML = "Hide List";
  } else {
    // Hide element
    itemList.style.display = "none";
    actionButton.innerHTML = "Show List";
  }
};

// Adding click event listener
actionButton.addEventListener("click", showPlayList);
