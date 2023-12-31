const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".Check-word");
timeText = document.querySelector(".time b");

let correctWord, timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(()=>{
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert (`Time\'s up! ${correctWord.toUpperCase()} was the correct word`);
        initGame();     // calling initGame function, so the game restarts
    }, 1000);
}

const initGame = () => {
    initTimer(30);  // calling initTimer with passing 30 as maxtime
    let randomObj = words[Math.floor(Math.random() * words.length)];       // getting random object from words
    let wordArray = randomObj.word.split("");   // splitting each letter of random word
    for(let i = wordArray.length - 1; i>0; i-- )
    {
        let j = Math.floor(Math.random() * (i+1));  // getting random numbers
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]] // shuffling and swiping wordArray letters randomly
        /* for (let i = wordArray.length - 1; i>0; i--){
            let j = Math.floor(Math.random()* (i + 1));
            let temp = wordArray[i];
            wordArray[i] = wordArray[j];
            wordArray[j] = temp;
        }*/

    }
    wordText.innerHTML = wordArray.join("");    // passing shuffled word as word text
    hintText.innerHTML = randomObj.hint;   // passsing random object hint as hint text 
    correctWord = randomObj.word.toLocaleLowerCase();   // passing random word to correctWord
    inputField.value="";
    inputField.setAttribute("maxlength", correctWord.length);   // setting input maxlength value to max length
    console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();     // getting user value
    if(!userWord) return alert (`Please Enter a valid word`);
    if(userWord !== correctWord) return alert (`Oops! ${userWord} is not the Correct Word`);
    alert (`Congrats! ${userWord} is the correct word`)
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);