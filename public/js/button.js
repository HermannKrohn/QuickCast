const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
console.log('In button js file');

customBtn.addEventListener("click",function(){
  realFileBtn.click();
  console.log('CLICK');
});

realFileBtn.addEventListener("change",function(){
  if (realFileBtn.value){
    customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  }else{
    customTxt.innerHTML = "No File Uploaded";
  }
});
