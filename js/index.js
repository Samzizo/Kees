// Global variables
const zoom = document.getElementById("zooming");
var subs = document.getElementById("active");

/* zoom in-out logo*/

zoom.addEventListener("click", removeAnimation);
function removeAnimation(){
    zoom.style.animation = "none";
    console.log("this is work")
    myInterval = setInterval(function() {
        zoom.style.animation = 'rotation 5s linear infinite';
        console.log('that is work too');
        clearInterval(myInterval)
    }, 10);
}
mediumZoom('.logo', {
    background: '#fff'
})

/* Shining subscribe button*/
var colors = ["#07183d", "#ff9900", "#cc9900"];
setInterval (function () {
    var bg = colors[Math.floor(Math.random() * colors.length)]
    subs.style.backgroundColor = bg;
}, 1000)

/*subscribe validation*/
function check(em) {
    var em = document.getElementById("email");
    var pw = document.getElementById("password").value;
    /*validation email*/
    var val  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (em.value.match(val) && pw !== "")
    {
        return alert("تحقق من ايميلك لاكمال التسجيل");
    }
    else{
        alert("من فضلك تحقق من المدخلات");
    }
}

/* collapsible */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    });
}

