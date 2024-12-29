const form=document.getElementById("form")
const name=document.getElementById("name")
const email=document.getElementById("email")
const pass=document.getElementById("pass")
form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    //trim to remove whitespace
    const namevalue=name.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=pass.value.trim();
    let nameflag;
    let emailflag
    let passwordflag;
    if(namevalue===''){
        setErrorFor(name,"Please enter your name")
    }else{
        setSuccessFor(name);
        nameflag=true;
    }
    if(emailvalue==='')
    {
        setErrorFor(email,"Please enter your mail ID");
    }else if(!isEmail(emailvalue)){
        setErrorFor(email,"Invalid email");
    }else{
        setSuccessFor(email); // Before email value passed, email Element should pass
        emailflag=true;
    }
    if(passwordvalue==='')
    {
        setErrorFor(pass,"Please enter your password");
    }else if(!isPassword(passwordvalue))
    {
        setErrorFor(pass,"Atleast one number, one uppercase, lowercase letter, and atleast 8 character");
    }else{
        setSuccessFor(pass);  // Before password value passed, password Element should pass
        passwordflag=true;
    }
    if(nameflag==true&&emailflag==true&&passwordflag==true){
        document.getElementById('button').disabled==false;
    }

    function setErrorFor(input,message)
    {
       const formControl=input.parentElement;
       const small=formControl.querySelector('small')
       formControl.className='form-control error'   // Syntax error, before it was "ClassName"
       small.innerText=message;
	   small.style.visibility = "visible" ; //Error message was hidden, so i add visible
	   
	   if(message.length > 34){ // If message was more long, message move top of the input so move to bottom
		   small.style.bottom = "-15px"
	   }
	   else{
		   small.style.bottom = "0"
	   }
    }
    function setSuccessFor(input)
    {
        const formControl=input.parentElement;
        formControl.className='form-control success'   // Syntax error, before it was "ClassName"
		const small=formControl.querySelector('small')
		small.innerText="";
		small.style.visibility = "hidden" ; //Hide error message, after input valid
    }
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    
    function isPassword(password){  
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    }    
}