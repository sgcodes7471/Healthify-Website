const genderArr=[document.getElementById("male"), document.getElementById("female") ];
const goalArr=[document.getElementById("loss"), document.getElementById("maintain"), document.getElementById("gain")];
const actionArr=[document.getElementById("sedentary"), document.getElementById("fairly"), document.getElementById("active")];
const gender=(e)=>{
    e.classList.add("click-btn");
    genderArr.forEach((el1)=>{
        if(el1!=e)
        el1.classList.remove("click-btn");
    })
}
const goal=(e)=>{
    e.classList.add("click-btn");
    goalArr.forEach((el2)=>{
        if(el2!=e)
        el2.classList.remove("click-btn");
    })
}
const action=(e)=>{
    e.classList.add("click-btn");
    actionArr.forEach((el3)=>{
        if(el3!=e)
            el3.classList.remove("click-btn");
    })
}

const fillText=(txt, target)=>{
    let temp="";
    // console.log(typeof parseFloat(txt.value));
    for(let i=0;i<txt.value.length;i++){
        if(!(txt.value[i]>=0 && txt.value[i]<=9))
        {
            alert("Enter only Numeric Value");
            target.innerHTML=txt.value=temp="";
            break;
        }
        else{
            temp+=txt.value[i];
        }
}
if(temp!=""){
    target.innerHTML=temp;
}
else{
    target.innerHTML="...";
}
}


