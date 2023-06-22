const countdown= () => {
    const countDate = new Date('August 19, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate- now;
       
 // how time works
 const sec= 1000;
 const min = sec*60;
 const hour = min*60;
 const day = hour*24;

 //calculation
 const theday = Math.floor(gap/day);
 const thehours = Math.floor((gap%day)/hour);
 const themin = Math.floor((gap%hour)/min);
 const thesec = Math.floor((gap%min)/sec);

 document.querySelector(".day").innerText= theday;
 document.querySelector(".hour").innerText= thehours;
 document.querySelector(".min").innerText= themin;
 document.querySelector(".sec").innerText= thesec;
};

setInterval(countdown,1000); // we want this func to run every sec bcz its a countdown
