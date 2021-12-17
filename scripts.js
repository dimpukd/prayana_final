function validate(){
    var name = document.getElementById("name").value;
    var Number = document.getElementById("Number").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name==null||name=="",Number==null||Number=="",email==null||email=="",message==null||message==""){
      text="Please Fill the required field";
      error_message.innerHTML=text;
      return false;
    }
   
    if(isNaN(Number) || Number.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
        alert("Form Submitted Successfully!");
    return true;
  }