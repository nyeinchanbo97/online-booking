import './style.css'


const nav = document.getElementsByClassName("nav")[0];

const scrollFunction = ()=>{
 if(document.body.offsetWidth > 1024){
    if(document.documentElement.scrollTop > 500){
        nav.style.top = "0px";
    }else{
        nav.style.top = "-70px"
    }
 }
}
    window.onscroll = function(){scrollFunction()};






const home3Box = document.getElementsByClassName('home3-box')[0];
const home3Child = document.getElementsByClassName('home3-child');


// const home3ChildObj = {
//     a: `<div class="w-[32%] flex-shrink-0 border rounded-xl flex">
//     <div class="basis-1/2">
//       <img class="rounded-l-xl" src="https://booking.webestica.com/assets/images/offer/03.jpg" alt="">
//     </div>
//     <div class="basis-1/2 flex flex-col justify-center items-start gap-2 pl-3">
//       <h1 class="text-base font-semibold">Book & Enjoy</h1>
//       <p>20% Off on the best available room rate</p>
//     </div>
//   </div>`,

//     b: `        <div class="w-[32%] flex-shrink-0 border rounded-xl flex transition-all duration-500 home3-child">
//     <div class="basis-1/2">
//         <img class="rounded-l-xl" src="https://booking.webestica.com/assets/images/offer/02.jpg" alt="">
//     </div>
//     <div class="basis-1/2 flex flex-col justify-center items-start gap-2 pl-3">
//         <h1 class="font-bold">Hot Summer Nights</h1>
//         <p>Up to 3 night free!</p>
//     </div>
//     </div>`,

//     c: `        <div class="w-[32%] flex-shrink-0 border rounded-xl flex transition-all duration-500 home3-child">
//     <div class="basis-1/2">
//       <img class="rounded-l-xl" src="https://booking.webestica.com/assets/images/offer/01.jpg" alt="">
//     </div>
//     <div class="basis-1/2 flex flex-col justify-center items-start gap-2 pl-3">
//       <h1 class="font-bold">Daily 50 Lucky Winners get a Free Stay</h1>
//       <p>Valid till: 29 Dec</p>
//     </div>
//     </div>`,

//     d: `<div class="w-[32%] flex-shrink-0 border rounded-xl flex transition-all duration-500 home3-child">
//     <div class="basis-1/2">
//       <img class="rounded-l-xl" src="https://booking.webestica.com/assets/images/offer/04.jpg" alt="">
//     </div>
//     <div class="basis-1/2 flex flex-col justify-center items-start gap-2 pl-3">
//       <h1 class="font-bold">Up to 60% OFF</h1>
//       <p>On Hotel Bookings Online</p>
//     </div>
//   </div>`
// }

const moveLeft = ()=> {

    if(document.body.offsetWidth < 1280 && document.body.offsetWidth > 1023){
        for(let i=0; i<4; i++){
            home3Child[i].style.transform = "translateX(-103%)"}
    } else if(document.body.offsetWidth < 1024){
        for(let i=0; i<4; i++){
            home3Child[i].style.transform = "translateX(-103.5%)"}
    }
    else{
        for(let i=0; i<4; i++){
            home3Child[i].style.transform = "translateX(-106%)"
        }
    }
  
}

const moveRight = ()=> {
    for(let i=0; i<4; i++){
        home3Child[i].style.transform = "translateX(0)"
    }
}

const moveBoth = ()=> {
    setTimeout(() => {
        moveLeft();
    }, 2000);
    setTimeout(() => {
        moveRight();
    }, 4000);
    setTimeout(() => {
        moveBoth();
    }, 6000);
}

moveBoth();



