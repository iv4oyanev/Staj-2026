

function displayText(){

    var inputField = document.getElementById("userInput");//Взмаме целия таг
    var input = inputField.value;//input ще е равно на съдържанието в userInput
    
    
    if (input.trim() === "") return;//Сравнява стойност и тип на данните заради това не е само == а е ===

    var list = document.getElementById("unList");
    var item = document.createElement("li");
    
    var textSpan = document.createElement("span");
    textSpan.innerText = input;//Съдържанието на input става съдържание и на textSpan
    item.appendChild(textSpan);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.style.marginLeft = "10px"; //Отстояноие border
    deleteBtn.onclick = function() 
    {
        list.removeChild(item);
    };
    item.appendChild(deleteBtn);

    var editBtn = document.createElement("button");
    editBtn.innerText = "edit";
    editBtn.style.marginLeft = "5px";//Отстояние от другия бутон
    editBtn.onclick = function() 
    { 
        var newText = prompt("Редактирай елемента:", textSpan.innerText);
        if (newText !== null && newText.trim() !== "") 
            { //Проверка дали newText е правен и дали се е изпълнил prompt()
            textSpan.innerText = newText;
            }
    };
    item.appendChild(editBtn); //слагаме бутона да е част от елемента
    list.appendChild(item);//слагаме елемент в листа
    inputField.value = "";

}


