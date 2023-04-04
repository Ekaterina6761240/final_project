const input = document.querySelector(".textForWrite");
const btn = document.querySelector(".Btn");
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");

function AddNewWords() {
    const newElement = document.createElement("div");
    const newNumber = document.createElement("p");
    const newText = document.createElement("p");
    const newcolumn = document.createElement("div");
    newcolumn.className = "newcolumn";
    newNumber.className = "number";
    newText.className = "newText";
    newElement.className = "RussianText";
    const index = document.querySelectorAll(".number");
    const TatleColymn1 = document.createElement("div");
    const newTextTatle = document.createElement("p");
    TatleColymn1.className = "TatleColymn1";
    newTextTatle.className = "newTextTatle";

    function shortText(str) {
        let resultText = "";
        if (str.length > 7) {
            resultText = str.slice(0, 7) + "...";
        } else {
            resultText = str;
        }
        return resultText;
    }
    newText.innerText = shortText(input.value);
    if (input.value.length >= 7) {
        newTextTatle.innerText = input.value;
    }



    newNumber.innerText = index.length + 1;

    TatleColymn1.appendChild(newTextTatle);
    newcolumn.appendChild(newElement);
    newElement.appendChild(newNumber);
    newElement.appendChild(newText);
    column1.appendChild(newcolumn);
    newcolumn.appendChild(TatleColymn1);
    const cross1 = document.createElement("div");
    const buttonCross1 = document.createElement("button");
    cross1.className = "cross1";
    buttonCross1.className = "buttonCross1";
    newElement.appendChild(cross1);

    buttonCross1.addEventListener("click", () => {
        newElement2.remove();
        newElement.remove();
        newNumber.remove();
        const rowNew = document.querySelectorAll(".TranslitText");
        const newIndex = document.querySelectorAll(".number");
        const newIndex2 = document.querySelectorAll(".number1");
        for (let j = 0; j < rowNew.length; j++) {
            newIndex[j].innerText = j + 1;
            newIndex2[j].innerText = j + 1;
        }
    });

    cross1.appendChild(buttonCross1);
    newText.addEventListener("mouseenter", () => {
        if (newTextTatle.innerText.length > 7) {
            TatleColymn1.style.display = "block";
        }
    });
    newText.addEventListener("mouseleave", () => {
        TatleColymn1.style.display = "none";
    });

    const newElement2 = document.createElement("div");
    const newNumber1 = document.createElement("p");
    const newTextTrans = document.createElement("p");
    newNumber1.className = "number1";
    const TatleColymn2 = document.createElement("div");
    const newTextTatle2 = document.createElement("p");
    TatleColymn2.className = "TatleColymn2";
    newTextTatle2.className = "newTextTatle2";

    const cross = document.createElement("div");
    const buttonCross = document.createElement("button");
    const newcolumn2 = document.createElement("div");
    newcolumn2.className = "newcolumn2";
    newNumber1.innerText = index.length + 1;

    cross.className = "cross";
    newElement2.className = "TranslitText";
    newTextTrans.innerText = shortText(translate(input.value));
    if (translate(input.value).length >= 7) {
        newTextTatle2.innerText = translate(input.value);
    }

    if (column1) input.value = "";

    newcolumn2.appendChild(newElement2);
    column2.appendChild(newcolumn2);
    newElement2.appendChild(newNumber1);
    newElement2.appendChild(newTextTrans);
    newcolumn2.appendChild(TatleColymn2);
    TatleColymn2.appendChild(newTextTatle2);
    newElement2.appendChild(cross);
    newTextTrans.addEventListener("mouseenter", () => {
        if (newTextTatle2.innerText.length > 7) {
            TatleColymn2.style.display = "block";
        }
    });
    newTextTrans.addEventListener("mouseleave", () => {
        TatleColymn2.style.display = "none";
    });
    buttonCross.className = "crossButton";

    buttonCross.addEventListener("click", () => {
        newElement2.remove();
        newElement.remove();
        newNumber.remove();
        const rowNew = document.querySelectorAll(".TranslitText");
        const newIndex = document.querySelectorAll(".number");
        const newIndex2 = document.querySelectorAll(".number1");
        for (let j = 0; j < rowNew.length; j++) {
            newIndex[j].innerText = j + 1;
            newIndex2[j].innerText = j + 1;
        }
    });

    cross.appendChild(buttonCross);

    function translate(str) {
        console.log(str, "str");

        let resultTrans = "";
        let arrayLits = {
            а: "a",
            б: "b",
            в: "v",
            г: "g",
            д: "d",
            е: "e",
            ё: "e",
            ж: "zh",
            з: "z",
            и: "i",
            й: "y",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "h",
            ц: "c",
            ч: "ch",
            ш: "sh",
            щ: "sch",
            ь: "'",
            ы: "y",
            ъ: "'",
            э: "e",
            ю: "yu",
            я: "ya",

            А: "A",
            Б: "B",
            В: "V",
            Г: "G",
            Д: "D",
            Е: "E",
            Ё: "E",
            Ж: "Zh",
            З: "Z",
            И: "I",
            Й: "Y",
            К: "K",
            Л: "L",
            М: "M",
            Н: "N",
            О: "O",
            П: "P",
            Р: "R",
            С: "S",
            Т: "T",
            У: "U",
            Ф: "F",
            Х: "H",
            Ц: "C",
            Ч: "Ch",
            Ш: "Sh",
            Щ: "Sch",
            Ь: "'",
            Ы: "Y",
            Ъ: "'",
            Э: "E",
            Ю: "Yu",
            Я: "Ya",
        };
        for (let i = 0; i < str.length; i++) {
            if (arrayLits[str[i]] == undefined) {
                resultTrans += str[i];
            } else {
                resultTrans += arrayLits[str[i]];
            }
        }
        return resultTrans;
    }
}

btn.addEventListener("click", AddNewWords);
input.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        AddNewWords();
    }
});

let AllDelite = document.querySelector(".crossButton");
AllDelite.addEventListener("click", () => {
    let DeliteColomn2 = document.querySelectorAll(".newcolumn2");
    let DeliteColomn1 = document.querySelectorAll(".newcolumn");
    for (let i = 0; i < DeliteColomn2.length; i++) {
        DeliteColomn1[i].remove();
        DeliteColomn2[i].remove();
    }
});
