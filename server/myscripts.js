/*=========register=====*/

let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick  = () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
};
ScrollReveal({
  // reset: true,
   distance:'80px',
   duration:1000,
   deplay:200 
});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.services-container, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h3, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
ScrollReveal().reveal('.services-fla h3', { origin:'right' });
ScrollReveal().reveal('.about-pg,.about-heading', { origin:'right' });
/*=========scroll section active link=====*/

let sections = document.querySelectorAll('selection');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let  id=sec.getAttribute('id');
     
    });
    /*=========stick navbar=====*/
    
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
 /*=========remove toggle item and nevbar icon when click navbar=====*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};
/*=========typed js=====*/
const typed = new Typed('.multiple-text',{
strings:['EVB','ELECTRONIC VB','E VOTING B','EV BLOCKCHAIN'],
typedspeed: 100,
backspeed:100,
backDelay:1000,
loop:true
});

const wrapper=document.querySelector('.wrapper');
const wrappere=document.querySelector('.wrappere');
const loginLink=document.querySelector('.login-link');
const btnLoginPopup=document.querySelector('.btnLogin-popup');
const btnRegisterPopun=document.querySelector('.btnRegister-popup');
const iconClose=document.querySelector('.icon-close');


/*
registerLink.onclick = () =>{
    wrapper.classList.add('active');
};
loginLink.onclick = () =>{
    wrapper.classList.remove('active');
};*/

/*
btnLoginPopup.onclick = () =>{
    wrappere.classList.add('active-popupe');
};

btnRegisterPopun.onclick = () =>{
    wrappere.classList.add('active-popup');
   
   
};*/

/*


*/
iconClose.onclick = () =>{
  wrappere.classList.add('active-popup');
   // wrappere.classList.remove('active');
};




 

    
   
  ////chk---------------------------------------------------------chk--------------------//
    //var firstName = document.getElementById("fullname");
   
/////------------------------------------------------------------------chk-----------------------------//

/*=========toggle icon navbar=====*/



/*=========scroll section active link=====*

let sections = document.querySelectorAll('selection');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let  id=sec.getAttribute('id');
     
    });
    /*=========stick navbar=====*/
  /*  
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
 /*=========remove toggle item and nevbar icon when click navbar=====*/
 /*
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};
/*=========sscroll=====*
ScrollReveal({
    // reset: true,
     distance:'80px',
     duration:1000,
     deplay:200 
});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.services-container, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h3, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
ScrollReveal().reveal('.services-fla h3', { origin:'right' });
ScrollReveal().reveal('.about-pg,.about-heading', { origin:'right' });
/*=========typed js=====*/
/*
const typed = new Typed('.multiple-text',{
 strings:['EVB','ELECTRONIC VB','E VOTING B','EV BLOCKCHAIN'],
 typedspeed: 100,
 backspeed:100,
 backDelay:1000,
 loop:true
});*/

/*
gsap.set(".text",{
    position:"fixed",
    top:"70%",
    left:"50%",
    transform:"translate(-50%,-50%)",
  
  });
  var t1= gsap.timeline();
  /*
  t1.to(".load",2,{
    rotate:360,
    ease:Linear.easeNone,
    repeat:-1,
  
  });
  t1.to(".load",2,{
    delay:2,
    scale:1,
    top:"20%",
    left:"10%",
  },"start")*/
  /*
  t1.to(".text",2,{
    delay:0.6,
    top:"41%",
    left:"90%",
    ease:Linear.easeNone,
    rotation:90,
    fontSize:"3em",
  },
  "start");
  t1.from(".wrapp",2,{
    y:innerHeight * 1,
  });
  t1.from(".elmt",2,{
   
    delay:0.2,
    y:300,
    opacity:0,
    stragger:{
      amount:3,  },
  },);*/

/////////////////////////////////        verification on email       /////////////////////////////////////////////////////
  /*
var btn = document.getElementById('createAccountButton');
btn.addEventListener('click', function(e){
    e.preventDefault()
  
    var email = document.getElementById('email').value;
    var tokenNumber = Math.floor(Math.random() * 500000000);
var body ='<br> email: '+email+'<br>your token number is <b>:'+tokenNumber+'<br> <b> verify <a href= http://localhost:500/index.html>verify</a>   </b>' +'please verify';
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "haiqaarsheen2@gmail.com",
        Password : "99C0D9601765DC52101BFE5E3C96FB5105C0",
        To : 'haiqaarsheen2@gmail.com',
        From : email,
        Subject : "chk from home" ,
        Body : body
    }).then(
      message => alert(message)
    );
});*/

/////////////////////////////////////////   end      ////////////////////////////
document.getElementById("open-popup-btn").addEventListener("click", function(){document . getElementsByClassName("popup")[0].classList.add("active");

});
document.getElementById("try").addEventListener("click", function(){document . getElementsByClassName("popup")[0].classList.remove("active");

});
/*--------------------------------------------------about-----------------------*/
