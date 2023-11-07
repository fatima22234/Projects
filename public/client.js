function strikeThroughText(checkbox) {
    var index = checkbox.getAttribute('data-task-id');
    
    var taskText= document.getElementById(index)

  
    if (checkbox.checked == true) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }



$(".but").click(function(){
  $("body").toggleClass("main");
});
