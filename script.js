/* Start get startd button */
function hoverButton () {
     document.getElementById("btn1").style.backgroundColor = "#080";
};
function hover () {
    document.getElementById("btn1").style.backgroundColor = "#00BC8A";
}
/* End get startd button */
/* Start learn more button */
function showLearnMore () {
    var show = document.getElementById("btn2");
   var learnMore = document.getElementById("click");
   if (learnMore.style.visibility === "visible") {
    learnMore.style.visibility = "hidden";
   } else {
    learnMore.style.visibility = "visible";
   }
}
/* End learn more button */


