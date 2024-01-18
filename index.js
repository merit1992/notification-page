const markRead = document.getElementById("mark_read")
const toggleContainer = document.getElementById("toggle_cont")
const macNotification = document.getElementById("mark_notification")
const angeNotification = document.getElementById("ange_notification")
const jacNotification = document.getElementById("jac_notification")
const message = document.querySelector(".message")

const arr = [macNotification, angeNotification, jacNotification, message]
// console.log (arr)


markRead.addEventListener("click", function(){
    toggleContainer.innerText = 0
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.style.backgroundColor = "#fff"
    }
})