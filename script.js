var acc = document.getElementsByClassName("accordeon");
var activeAcc = document.getElementsByClassName("active")
var showedPanels = document.getElementsByClassName("show");
var rotatedMarks = document.getElementsByClassName("mark rotated");
var i;
let selectedCount;

for (i = 0; i < acc.length; i++) {
    
    selectedCount = i;
        acc[i].onclick = function () {
            
            
        this.classList.toggle("active");
        
            HideAllMarks();
        
        
        this.nextElementSibling.classList.toggle("show");

        this.children[1].classList.toggle("rotated");
        
        // this.children[1].classList.remove("rotated");
        
    }
}

function HideAllMarks() {
        console.log(activeAcc);
        for (let item of rotatedMarks) {
            item.classList.remove("rotated");
        }
        for (let item of activeAcc) {
            item.classList.remove("active");
            
        }
        for (let item of showedPanels) {
            item.classList.remove("show");
            
        }
}
    
    
