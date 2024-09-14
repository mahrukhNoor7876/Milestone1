var Projects_Section = document.querySelector(".project_list");
var isShow = true;
function ToggleButton() {
    if (isShow) {
        Projects_Section.style.display = "none";
        isShow = false;
    }
    else {
        Projects_Section.style.display = "block";
        isShow = true;
    }
}
