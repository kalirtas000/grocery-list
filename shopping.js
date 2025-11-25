console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");

// Grab the add button element
const addBtn = document.querySelector("#add-btn");


//add button event listener
addBtn.addEventListener("click", () => {
    // get the info from the user
    const itemInput = document.querySelector("#item");
    const emojiSelect = document.querySelector("#department");

    const item = itemInput.value.trim();
    const emoji = emojiSelect.value;

    console.log(item, emoji);
}); //end of add button listener

function buildItem(emoji, item){
    const itemDiv = document.createElement("div");
    const emojiDiv = document.createElement("span");
    const itemSpan = document.createElement("span");
    const bagIcon = document.createElement("i");
    const trashIcon = document.createElement("i");

    //Add te text and the class info
    itemDiv.className = "item";
    emojiSpan.className = "emoji";
    emojiSpan.innerText = emoji;
    itemSpan.className = "item-description";
    itemSpan.innerText = item;
    bagIcon.className = "bi bi-bag add-icon";
    trashIcon.className = "bi bi-trash delete-icon";
};

itemDiv.append(emojiSpan, itemSpan, bagIcon, trashIcon);
return itemDiv;