let count1=document.getElementById("count")
let saveel=document.getElementById("save-el")
console.log(count1)
let count=0
function increment(){
    count=count+1
    count1.innerText=count
    console.log(count)
}
function save(){
     let countstr = count + " - "
     saveel.innerText +=countstr
     count1.innerText=0
     count=0
}

