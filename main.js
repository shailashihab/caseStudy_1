function validate(){
// form validation   
    var UserName = document.myForm.UserName.value;
    
    var password = document.myForm.password.value;
    if (UserName == "" || password == "") {
        alert("Fields cannot be blank");
        return false;
    }
    else if (UserName != "admin") {
        alert("Cannot find this UserName. Please check.");
        return false;
    }
    else if (password != 12345) {
        alert("Please check Password. Forgot password?");
        return false;
    }
    else if (UserName == "admin" && password == "12345") {
        return true;
    }
// form validation ends here

}
