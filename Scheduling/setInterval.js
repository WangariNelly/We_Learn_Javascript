//@summary function to show time intervals
function currentTime() {
    let date = new Date();
    console.log(date.toLocaleTimeString());
  }
  //shows time after evry one second.
  let timerId = setInterval(currentTime, 1000); 
  

 