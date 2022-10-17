// ============================================ edit for Header ===============================================
// Set layout dynmaic height

let header = document.querySelector("header");
let section = document.querySelector("section.landing");
let layout = document.querySelector(".layout");

function setHeight()
{
    layout.style.height = section.clientHeight - header.clientHeight + "px";
}
setHeight();

window.addEventListener("resize", setHeight);

// ====================================== Create Function To Set Daynmaic Year ==================================

function daynmaicYear()
{
    const year = document.querySelector(".year");
    year.innerHTML = new Date().getFullYear();
};

daynmaicYear();

// arr of images

const arr = [
    "images/stad.png",
    "images/swiper-one.png",
    "images/swiper-two.png",
    "images/swiper-three.png",
    "images/swiper-four.png",
    "images/swiper-five.png",
    "images/swiper-six.png",
    "images/swiper-seven.png",
    "images/bg-se.png"
];
let smallImage = [
    "images/Ellipse 11.png",
    "images/Elipse 12.png",
    "images/Elipse 13.png",
    "images/Elipse 14.png",
    "images/Ellipse 10.png",
    "images/Elipse 14.png",
    "images/outer.png",
    "images/red gaming.png",
    "images/outer.png",
];


// ========================================= Set Clones items ===============================================

function setElements(element, clone, count)
{

    // loop to set 10 clone from div

    for (let i = 0; i < count; i++)
    {

        let div = clone.cloneNode();

        div.innerHTML = clone.innerHTML;

        // append div to container 
        element.appendChild(div);
    }
}


// ========================================= Function To Set Random Img ===============================================

function randomImgs(element, status)
{

    // select all parent div to set background img
    let images = document.querySelectorAll(element);

    // loop for images to set baclground and img src

    for (let i = 0; i < images.length; i++)
    {
        let img = images[i];

        // loop for arr to get a random img 

        for (let a = 0; a < arr.length; a++)
        {

            img.style.backgroundImage = `url(${arr[Math.trunc(Math.random() * arr.length)]})`;

            if (status == true)
            {

                let brandImg = document.querySelectorAll(".card-chann img")[i];
                brandImg.src = `${smallImage[Math.trunc(Math.random() * arr.length)]}`;
            }
        }
    }
}

// ========================================= check for page to call functions ===============================================

if (document.title == "E-Sports-categories")
{
    // select elements 
    let container = document.querySelector(".categories-wrapper");
    let row = document.querySelector(".categories-wrapper div").cloneNode(true);
    let catoImages = ".card-img"

    setElements(container, row, 18);

    randomImgs(catoImages);
}

if (document.title == "E-Sports-channels")
{
    // select elements 
    let Channelcontainer = document.querySelector(".wrapper-loop");
    let ChannelRow = document.querySelector(".wrapper-loop div").cloneNode(true);
    let ChannelImages = ".random-bg";

    setElements(Channelcontainer, ChannelRow, 10);
    randomImgs(ChannelImages, true)
}


function navBar()
{
    const nav = document.querySelector("nav");
    const icone = document.querySelector("div");
    
    // Set Click Event to icone to toggle nav bar
    
    icone.addEventListener("click", () =>
    {
        nav.classList.toggle("active");
        icone.classList.toggle("active-icone");
    })
};

navBar();

// ========================================= Active Search ======================================================

function activeSearch()
{
    const form = document.querySelector("form");
    const input = document.querySelector(".inp input");
    const matchWords = ["Match", "match", "Matches", "Mat", "MATCH", "MATCHES"];
    const blogWords = ["BLOG", "blog", "BLOGS", "Blog", "BLOGES", "BL"];
    const categWords = ["categories", "category", "CATEGORIES", "Cat", "cat", "categ", "Categories"];
    const channWords = ["channels", "Channels", "channel", "Channel", "Chann", "chann"];
    const homeWrods = ["Home", "home", "HOME", "ho", "HO"];
    const joinWords = ["Join", "join", "JOIN", "JO", "jo"];
    const ranksWords = ["Ranks" , "Rank" , "RANKS" , "RANK" , "RA" , "ra" , "rank" , "ranks"];
    

    form.addEventListener("submit", (e) =>
    {
        if (matchWords.includes(input.value.trim()))
        {
            window.open("../match.html" , "_self");
        } else if (blogWords.includes(input.value.trim()))
        {
            window.open("../blog.html"  , "_self");
        } else if (categWords.includes(input.value.trim()))
        {
            window.open("../categories.html"  , "_self");
        } else if (channWords.includes(input.value.trim()))
        {
            window.open("../channels.html"  , "_self");
        } else if (homeWrods.includes(input.value.trim()))
        {
            window.open("../index.html"  , "_self");
        } else if (joinWords.includes(input.value.trim()))
        {
            window.open("../join.html"  , "_self");
        } else if (ranksWords.includes(input.value.trim()))
        {
            window.open("../ranks.html"  , "_self");
        }
        e.preventDefault();
    })

};

activeSearch();