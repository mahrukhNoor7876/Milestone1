let Projects_Section = document.querySelector(".project_list") as HTMLElement;
let isShow:boolean = true;
function ToggleButton(){
    if(isShow){
        Projects_Section.style.display = "none";
        isShow = false;
    }
    else{
        Projects_Section.style.display = "block";
        isShow = true;
    }
}