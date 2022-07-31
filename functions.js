function ErrorAlert() {
    alert('Error! Sorry  we can not send it :(')
}

function TryConfirm() {
    confirm('Do you want to try again?')
}

let element = document.getElementById('text');

element.onclick = function() { alert('You clicked'); };

element = document.getElementById('forTextContent');
element.addEventListener("click", ErrorAlert);
element.addEventListener("click", TryConfirm);

element.addEventListener('click', 
{
    handleEvent(event) { alert(event.type + " on " + event.currentTarget);}
});


// document.onclick = function(event) {
//     alert(event.type + " on " + event.currentTarget);
// };

var list = document.querySelectorAll('i')

list.forEach(item => item.onclick = function(event) 
{
    event.target.style.backgroundColor = "#e9967a"
})

//element.removeEventListener("click", TryConfirm);
