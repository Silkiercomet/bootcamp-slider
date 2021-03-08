const users = [
    {
        id:1,
        name:'Tanya Sinclair',
        text: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ',
        job: "UX Engineer",
        imagen: "images/image-tanya.jpg"
    },
    {
        id:2,
        name:'John Tarkpor',
        text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        job: "Junior Front-end Developer",
        imagen: "images/image-john.jpg"
    }
]
let text = document.querySelector(".testimony");
let author = document.querySelector("#name");
let job = document.querySelector("#job");
let img = document.querySelector("#person-img")

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    person(currentItem);
})

const person = (p) => {
    const item = users[p];
    img.src = item.imagen;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}
nextBtn.addEventListener("click", function() {
    (currentItem > users.length-2)?currentItem=0:currentItem++;
    
   person(currentItem)
})
prevBtn.addEventListener("click", function() {
    (currentItem <= 0)?currentItem=users.length-1:currentItem--;
    
   person(currentItem)
})