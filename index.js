setInterval(() => {
   d = new Date();
   hrTime = d.getHours();
   minTime = d.getMinutes();
   secTime = d.getSeconds();
   hrRotation = 30*hrTime + minTime/2;
   minRotation = 6*minTime;
   secRotation = 6*secTime;

   hour.style.transform = `rotate(${hrRotation}deg)`
   minute.style.transform = `rotate(${minRotation}deg)`
   second.style.transform = `rotate(${secRotation}deg)`
}, 1000);