
var email= prompt("enter the email address","email");
ValidateEmail(email);
function ValidateEmail(email) 
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (email.match(mailformat))
  {
      console.log("email pattern matched");
    return (true);
  }
  else
    alert("You have entered an invalid email address!");
    return (false);
}