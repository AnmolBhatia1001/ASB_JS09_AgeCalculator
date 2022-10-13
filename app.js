const userAge = document.getElementById("dob")
const checkBtn = document.getElementById("checkBtn")
const desc = document.querySelector(".desc");
const years = document.getElementById("years")
const months = document.getElementById("months")
const days = document.getElementById("days")

const now = new Date()
const monthList = [31 ,28 ,31 ,30 ,31 ,30 ,31 ,31 ,30 ,31 ,30 ,31];

checkBtn.addEventListener("click", ()=>{
    // user Selected Date
    let d1 = ((userAge.value).split("-"))[2] ;
    let m1 = ((userAge.value).split("-"))[1] ;
    let y1 = ((userAge.value).split("-"))[0] ;

    // Current Date
    let d2 = now.getDate();
    let m2 = 1 + now.getMonth();
    let y2 = now.getFullYear();
    console.log(m2);

    // condition check
    if(d1 > d2){
        d2 = d2 + monthList[m2-1];
        m2 = m2 -1;
    }

    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    // Calculation
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    desc.innerText = `Your Age is : ${y}`
    years.innerText = y
    months.innerText = m
    days.innerText = d
    // console.log(`Years : ${y}, Months : ${m}, Days : ${d}`);
})
