const { textChangeRangeIsUnchanged } = require("typescript");

var slides=document.querySelector('.slider-items').children;
 var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

function checkData() {
     var txtCheck = document.formName;
       if(txtCheck.textarea.value == "")  {
         alert("Please enter information in the textarea");
         txtCheck.textarea.focus();
         return false;
       }
   }

fetch('./post')
.then.(res=>res.json()))
.catch(error =>({error:String(error)}))
.then(json =>{

})
