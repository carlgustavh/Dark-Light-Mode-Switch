dynamicElements = [
    document.getElementById("switch-circle"),
    document.getElementById("switch-circle-light"),
    document.getElementById("switch-circle-dark"),
    document.getElementById("switch-body-light"),
    document.getElementById("switch-body-dark"),
    document.getElementById("switch-body-cloudtainer-clouds-group1"),
    document.getElementById("switch-body-cloudtainer-clouds-group2"),
    document.getElementById("body")
]
function switchClicked(){
    for (i=0; i < dynamicElements.length; i++){
        if (dynamicElements[i].classList.contains("light-on")){
            dynamicElements[i].classList.remove("light-on");
            dynamicElements[i].classList.add("dark-on");
        }
        else if (dynamicElements[i].classList.contains("dark-on")){
            dynamicElements[i].classList.remove("dark-on");
            dynamicElements[i].classList.add("light-on");
        }
    }
}