/* ==========================================
   FOR KALAYLAY ❤️
   Version 2.0
   Part 1 / 2
========================================== */

// ----------------------------
// Start Journey
// ----------------------------

const startBtn = document.getElementById("start");

if(startBtn){

startBtn.addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});

}

// ----------------------------
// Scroll Progress Bar
// ----------------------------

const progressBar=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop=

document.documentElement.scrollTop;

const scrollHeight=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=

(scrollTop/scrollHeight)*100;

progressBar.style.width=

progress+"%";

});

// ----------------------------
// Reveal Animation
// ----------------------------

const reveals=

document.querySelectorAll(".reveal");

function revealSections(){

const trigger=

window.innerHeight*0.85;

reveals.forEach(item=>{

const top=

item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("active");

}

});

}

window.addEventListener(

"scroll",

revealSections

);

revealSections();

// ----------------------------
// Floating Hearts
// ----------------------------

function createHeart(){

const heart=

document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=

Math.random()*100+"vw";

heart.style.fontSize=

(14+Math.random()*20)+"px";

heart.style.animationDuration=

(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,500);

// ----------------------------
// Hero Fade
// ----------------------------

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
/* ==========================================
   FOR KALAYLAY ❤️
   Version 2.0
   Part 2 / 2
========================================== */

// ----------------------------
// Music Button
// ----------------------------

const musicBtn = document.getElementById("musicButton");

let musicPlaying = false;

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        musicPlaying = !musicPlaying;

        if (musicPlaying) {

            musicBtn.innerHTML = "🎶";
            musicBtn.style.transform = "scale(1.15) rotate(15deg)";

            // Future:
            // backgroundMusic.play();

        } else {

            musicBtn.innerHTML = "🎵";
            musicBtn.style.transform = "scale(1) rotate(0deg)";

            // backgroundMusic.pause();

        }

    });

}

// ----------------------------
// Image Lightbox
// ----------------------------

const images = document.querySelectorAll(".card img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.92);
display:none;
justify-content:center;
align-items:center;
z-index:99999;
cursor:pointer;
padding:20px;
`;

const lightImg = document.createElement("img");

lightImg.style.cssText = `
max-width:95%;
max-height:95%;
border-radius:18px;
box-shadow:0 20px 50px rgba(0,0,0,.5);
`;

lightbox.appendChild(lightImg);

document.body.appendChild(lightbox);

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// ----------------------------
// Love Button
// ----------------------------

const loveBtn = document.getElementById("loveButton");

if (loveBtn) {

    loveBtn.addEventListener("click", () => {

        launchConfetti();

        loveBtn.innerHTML = "Forever ❤️";

        loveBtn.style.transform = "scale(1.08)";

        setTimeout(() => {

            alert(
`Happy National Girlfriend Day ❤️

Thank you for being part of my life.

I love you,
Kalaylay 🤍`
            );

        }, 500);

    });

}

// ----------------------------
// Confetti
// ----------------------------

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        const dot = document.createElement("div");

        dot.style.position = "fixed";
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.borderRadius = "50%";
        dot.style.left = Math.random() * 100 + "vw";
        dot.style.top = "-10px";
        dot.style.pointerEvents = "none";
        dot.style.zIndex = "999999";

        const colors = [

            "#ff4f93",
            "#ff7ab5",
            "#ffd6e8",
            "#ffffff",
            "#ffd700"

        ];

        dot.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(dot);

        const x =
            (Math.random() - .5) * 300;

        const y =
            window.innerHeight + 200;

        dot.animate([

            {
                transform:
                    "translate(0,0) rotate(0deg)",
                opacity:1
            },

            {
                transform:
                    `translate(${x}px,${y}px) rotate(720deg)`,
                opacity:0
            }

        ],{

            duration:
                3500 + Math.random()*1500,

            easing:"ease-out"

        });

        setTimeout(()=>{

            dot.remove();

        },5000);

    }

}

// ----------------------------
// Keyboard Shortcut
// ----------------------------

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

// ----------------------------
// Console
// ----------------------------

console.log("❤️ Made for Kalaylay ❤️");