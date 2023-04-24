
let count = 0
let myCount = document.getElementById("count-el")

function increment(){
    ///console.log(" clicked")
    count= count + 1
    myCount.innerText= count
   // console.log(count)
}

increment()

function decrement(){
    //console.log("clicked")
    count= count -1
    myCount.innerText = count 
    //console.log(count)
}

decrement()

let saveEl = document.getElementById("save-el")


function save(){
    ///console.log(count)
    let count2 = count + " - " 
    saveEl.textContent += count2
    //count = 0
    myCount.innerText = 0
    //window.alert("Do you want to save")
}

save()