function onClicked() {
    var text = document.getElementsByClassName("searchText")[0].value;
    if(text===""){
      alert("Search Text is Empty");
    }
   else{ window.location.href = '/search/'+text;}
  }
  const input = document.querySelector(".searchText");
  input.addEventListener("keyup", (event) => {
      var text = document.getElementsByClassName("searchText")[0].value;
      if (event.key === "Enter") {
          if(text===""){
              alert("Search Text is Empty");
            }
            else{ window.location.href = '/search/'+text;} 
      }
    });