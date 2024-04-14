
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

const collab= document.querySelector("#abc");
collab.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab1= document.querySelector("#abc1");
collab1.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab2= document.querySelector("#abc2");
collab2.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab3= document.querySelector("#abc3");
collab3.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab4= document.querySelector("#abc4");
collab4.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab5= document.querySelector("#abc5");
collab5.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab6= document.querySelector("#abc6");
collab6.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab7= document.querySelector("#abc7");
collab7.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab8= document.querySelector("#xyz0");
collab8.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab9= document.querySelector("#xyz1");
collab9.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab10= document.querySelector("#xyz2");
collab10.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab11= document.querySelector("#xyz3");
collab11.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab12= document.querySelector("#xyz4");
collab12.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab13= document.querySelector("#xyz5");
collab13.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab14= document.querySelector("#xyz6");
collab14.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})

const collab15= document.querySelector("#xyz7");
collab15.addEventListener("click", (e)=>{
  alert("You have sucessfully collabed. We will send verification Email shortly!")
  e.preventDefault();
})



// ---------------------------------------------------------------------------------------------




document.querySelectorAll('.fas.fa-share').forEach(heart => {
  heart.addEventListener('click', function() {
    // Get the URL of the current page
    const currentURL = window.location.href;
    // Create a WhatsApp share link with the URL
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentURL)}`;
    // Open the WhatsApp share link in a new tab
    window.open(whatsappLink, '_blank');
  });
});






menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});