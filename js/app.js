// console.log("hey");

// $(document).ready(function(){
//     console.log('hey');
// });


// START NAVBAR 
const navbartoggler = document.querySelector('.navbar-toggler');

navbartoggler.addEventListener('click',function(){
    // console.log("hey");
    navbartoggler.classList.toggle("showcrosses");
});
// END NAVBAR 


// START WELCOME SECTION 
const welcomels = document.querySelector('.welcome');
const text = "Hi, Welcomeback!";

let idx = 0;

function increasetext(){
    
    welcomels.innerText = text.slice(0,idx);
    idx++;

    if(idx > text.length){
        idx = 4;
    }



}
increasetext();
setInterval(increasetext,200);


// END WELCOME SECTION 



// START PRICING SECTION 
const dollarcounters = document.querySelectorAll(".dollars");
// console.log(dollarcounters);    

dollarcounters.forEach((dollarcounter)=>{
    // console.log(dollarcounter);

    dollarcounter.innerText = "0";

    function counterupdate(){
        // console.log('hey');

        const counterattribute = +dollarcounter.getAttribute('data-counters');
        const intr = Number(dollarcounter.innerText);

        const increment = counterattribute / 100;

        if(intr < counterattribute){
            dollarcounter.innerText = Math.ceil(intr + increment);
            setTimeout(counterupdate,50);
        }
        
    }

    counterupdate();

});
// ENd PRICING SECTION 


// START CHART SECTION 
const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach((counter)=>{
    // console.log(counter);
    counter.innerText = '0';

    function countercharts(){
        const getattibute = +counter.getAttribute('data-counter');
    
        const addtexts = Number(counter.innerText);
        
        const increase = getattibute / 100;

        if(addtexts < getattibute){
            counter.innerText = Math.ceil(addtexts + increase);
            setTimeout(countercharts,60);
        }
    }

    countercharts();

});
// END CHART SECTION 



// START PROGRESS SECTION
const changetextones = document.querySelector('.changetextones');
const changetexttwos = document.querySelector('.changetexttwos');
const changetextthrees = document.querySelector('.changetextthrees');
const changetextfours = document.querySelector('.changetextfours');
const changetextfives = document.querySelector('.changetextfives');
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let number = 0;

function randomnumber(){
    return months[Math.floor(Math.random() * months.length)];
}

changetextones.innerText = randomnumber();
changetexttwos.innerText = randomnumber();
changetextthrees.innerText = randomnumber();
changetextfours.innerText = randomnumber();
changetextfives.innerText = randomnumber();


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


const progresscount = document.querySelectorAll('.progresscount');

let inputs = progresscount;

inputs.forEach((input)=>{
    // console.log(input);
    input.innerText = 0;

    function progressimprove(){
        const getprogressatt = +input.getAttribute('progresscount');
        const frominput = +input.innerText;
        const targeting = getprogressatt / 100;

        if(frominput < getprogressatt){
            input.innerText = Math.ceil(frominput + targeting);
            setTimeout(progressimprove,50);
        }

    }

    progressimprove();

});
// END PROGRESS SECTION 


// START ACTIVITIES QUICK POST SECTION
const circlecounters = document.getElementById('circlecounters');

circlecounters.innerText = 0;

function circlerincrease(){
    const getcircleatt = +circlecounters.getAttribute('circlecounters');
    const frommainel = Number(circlecounters.innerText);
    const target = getcircleatt / 100;

    if(frommainel < getcircleatt){
        circlecounters.innerText = Math.ceil(frommainel + target);
        setTimeout(circlerincrease,50);
    }
    
}

circlerincrease();


const counts = document.querySelectorAll('.counts');

counts.forEach((count)=>{
    // console.log(count);
    count.innerText = 0;

    function last(){
        const getatt = +count.getAttribute('showcounts');
        const inprove = +count.innerText;
        const target = getatt / 100;

        if(inprove < getatt){
            count.innerText = Math.ceil(inprove + target);
            setTimeout(last,50);
        }
    };

    last();
});

// END ACTIVITIES QUICK POST SECTION


// START FOOTER SECTION 
const time = document.querySelector('.time');
const date = new Date().getFullYear();
time.textContent = date;
// END FOOTER SECTION 

