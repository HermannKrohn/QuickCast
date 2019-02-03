window.onload = function(){
  const realFileBtn = document.getElementById("real-file");
  const customBtn = document.getElementById("custom-button");
  const customTxt = document.getElementById("custom-text");

  if(customBtn){
    customBtn.addEventListener("click",function(){
      realFileBtn.click();
    });
  }

  if(realFileBtn){
    realFileBtn.addEventListener("change",function(){
      if (realFileBtn.value){
        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
      }else{
        customTxt.innerHTML = "No File Uploaded";
      }
    });
  }
}
