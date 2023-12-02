const hourSpan = document.querySelector(".hour")
const minSpan = document.querySelector(".min")
const secSpan = document.querySelector(".sec")

const amSpan = document.querySelector(".am")
const pmSpan = document.querySelector(".pm")

setInterval(()=>{
    const time = new Date();
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    console.log(hours, mins, secs)

    if(hours > 11) {
        pmSpan.className = "pm active";
        amSpan.className = "am";
        if(hours >12){
            hourSpan.innerText = (hours - 12).toString().padStart(2,0);
        }
        else {
            hourSpan.innerText = hours;
        }
        }else{
            amSpan.className = "am active";
            pmSpan.className = "pm"
            if(hours==0){
                hourSpan.innerText = 12;
            }
            else{
                hourSpan.innerText = hours.toString().padStart(2,0);
            }
        }
        minSpan.innerText = mins.toString().padStart(2,0);
        secSpan.innerText = secs.toString().padStart(2,0);
}, 1000);