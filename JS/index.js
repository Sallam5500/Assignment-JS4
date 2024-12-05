
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var username = document.getElementById('username')


var login    =  document.getElementById("hambozo");
var signUp =document.getElementById("hamada")


var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}


var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}





function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}
signUp?.addEventListener('click',function(){
    if(validationName(signupName)&&validationEmail(signupEmail)&&validationPassword(signupPassword))
        {  if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
   
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        clearForm()
        signupName.classList.remove("is-valid")
        signupEmail.classList.remove("is-valid")
        signupPassword.classList.remove("is-valid")

    }
     window.location.href = 'index.html'
}
})


function required() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}
// var username = localStorage.getItem('User')
// if (username) {
//     document.getElementById('username').textContent=username
// }


login?.addEventListener('click',function(){
  
    if (required() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
        
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('User', signUpArray[i].name)
            
            if (baseURL == '/') {
                window.location.href = 'login.HTML'
                
               
            } else {
                location.replace(baseURL + '/login.HTML')
             


            }
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
       
    }
    
})


if (document.getElementById('username')) {
    var username = localStorage.getItem('User');
    document.getElementById('username').innerHTML = "Welcome" +' '+ username ;
}
   

    


function clearForm(){
    signupName.value=null;
    signupPassword.value=null;
    signupEmail.value=null;
}

function validationName(){
    var regexName=/^[a-zA-Z][A-Za-z0-9]{3,10}$/;
  var text = signupName.value;
  
  if( regexName.test(text) ){
    signupName.classList.add("is-valid")
    signupName.classList.remove("is-invalid")
    return true
  }
  else{
    //  console.log("nomatch");
     signupName.classList.add("is-invalid")
     signupName.classList.remove("is-valid")
     return false
  }
  }




function validationEmail(){
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var test = signupEmail.value;
   
   if( emailRegex.test(test) ){
    signupEmail.classList.add("is-valid")
    signupEmail.classList.remove("is-invalid")
    return true

    
   }
   else{
   
    signupEmail.classList.add("is-invalid")
    signupEmail.classList.remove("is-valid")
    return false
     
   }
   }
function validationPassword(){
    var passwordRegex =/^[A-Za-z0-9]{6,12}$/;
;
    var password = signupPassword.value;
   
   if( passwordRegex.test(password) ){
    signupPassword.classList.add("is-valid")
    signupPassword.classList.remove("is-invalid")
    return true

    
   }
   else{
   
    signupPassword.classList.add("is-invalid")
    signupPassword.classList.remove("is-valid")
    return false
     
   }
   }

