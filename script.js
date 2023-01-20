const reviews = [
    {
        id: 1,
        name: "Frank Smith",
        job: "Graphic Designer",
        img: "https://www.dreamstime.com/stock-image-football-soccer-ball-kickoff-game-sunset-image38302251ttps://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/",
        text: "Hello! i am a graphic Designer"
    }, // The img links are not working, so don't use them
    {
        id: 2,
        name: "Diddy",
        job: "Computer Science",
        img: "https://drive.google.com/file/d/1MRK7RBwGVuXb-I0kWDiBYyV1wBzmEUXJ/view?usp=sharingss",
        text:  "Hello! i am a Computer Sciencist"
    },
    {
        id: 3,
        name: "Jerry",
        job: "Product Manager",
        img: "https://drive.google.com/file/d/1MRK7RBwGVuXb-I0kWDiBYyV1wBzmEUXJ/view?usp=sharingss",
        text: "Hello! i am a Product Manager"
    },
    {
        id: 4,
        name: "Matty Wonder",
        job: "Machine language",
        img: "https://drive.google.com/file/d/1MRK7RBwGVuXb-I0kWDiBYyV1wBzmEUXJ/view?usp=sharingss",
        text: "Hello! i am a Machine language developer"
    },
]
const image = document.querySelector(".person1");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const randomBtn = document.querySelector(".random_btn");

let currentItem= 0

window.addEventListener("DOMContentLoaded", function (){
   showPerson()
})

function showPerson() {
    author.textContent =  reviews[currentItem].name;
    job.textContent =  reviews[currentItem].job;
    info.textContent =  reviews[currentItem].text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem= 0
    }
    showPerson()
})

prevBtn.addEventListener('click', function () {
    currentItem--;
     if (currentItem < 0){
        currentItem = reviews.length-1
    }
    
    showPerson()
})

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})

// FOLLOWED WITH TUTORIAL

//setting up item
/* let currentItem = 0; */

//load initial item to appear in the window ASAP
/* window.addEventListener("DOMContentLoaded", function () {
    showPerson()
}) */

// created new function inorder to reuse the function
/* function showPerson() {
    const item = reviews[currentItem]; */
    /* img.src = item.img */
 /*    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
} */

// Next Button 

/* nextBtn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem=0
    }
    showPerson()
}) */

// Prev Button
/* prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
    currentItem = reviews.length - 1
    }
    showPerson()
}) */

//Random Person
/* randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);

    showPerson()
}) */