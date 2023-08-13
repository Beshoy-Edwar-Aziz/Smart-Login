let signUpName=document.getElementById('signUpName')
let signUpEmail=document.getElementById('signUpEmail')
let signUpPass=document.getElementById('signUpPass')
let signUpBtn=document.getElementById('signUpBtn')
let signInEmail=document.getElementById('signInEmail')
let signInPass=document.getElementById('signInPass')
let signInBtn=document.getElementById('signInBtn')
let confirmMsg=document.getElementById('confirm')
let namecheck=document.getElementById('namecheck')
let emailCheck=document.getElementById('emailcheck')
let emailCheck2=document.getElementById('emailcheck2')
let namecheck2=document.getElementById('namecheck2')
let passcheck=document.getElementById('passcheck')
let email=document.getElementById('email')
let email2=document.getElementById('email2')
let pass=document.getElementById('pass')
let signUpArr=[]
if(localStorage.getItem('sign')!=null){
    signUpArr=JSON.parse(localStorage.getItem('sign'))
}
try{
signUpBtn.addEventListener('click',function(){
    let signUpObj={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPass.value
    }
    if(checkname(signUpName.value)){
    if(signUpArr.some(typo=>typo.name===signUpName.value)){
        namecheck.classList.add('check')
    }else{
        if(checkemail(signUpEmail.value)){
    if(signUpArr.some(typo=>typo.email===signUpEmail.value)){
        namecheck.classList.remove('check')
        emailCheck.classList.add('check')
    }else{if(checkpass(signUpPass.value)){
    signUpArr.push(signUpObj)
    localStorage.setItem('sign',JSON.stringify(signUpArr))
    confirmMsg.classList.add("appear")
    setTimeout(() => {
        confirmMsg.classList.add("lost")
    }, 3000);
    namecheck.classList.remove('check')
    emailCheck.classList.remove('check')
    emailCheck2.classList.remove('check')
    passcheck.classList.remove('check')
    namecheck2.classList.remove('check')
    clearInput()
    location.href="index.html"
    }else{
        namecheck.classList.remove('check')
    emailCheck.classList.remove('check')
    emailCheck2.classList.remove('check')
        passcheck.classList.add('check')
    }}}else{
        emailCheck2.classList.add('check')
        namecheck2.classList.remove('check')
    }}}else{
        namecheck2.classList.add('check')
    }
})
}catch(error){
    console.log(error)
}
try{
signInBtn.addEventListener('click',function(){
    if(checkemail(signInEmail.value)){
    if(signUpArr.some(typo=>typo.email===signInEmail.value)){
        if(checkpass(signInPass.value)){
        if(signUpArr.some(typo=>typo.password===signInPass.value)){
        let index=signUpArr.findIndex(fun=>fun.email===signInEmail.value)
        console.log(index)
        pass.classList.remove('check')
        email.classList.remove('check')
        email2.classList.remove('check')
        clearInput2()
        let x="Welcome "+signUpArr[index].name
        localStorage.setItem('x',JSON.stringify(x))
        window.location.href="home.html"
        }else{
            pass.classList.add('check')
        }}else{
            pass.classList.add('check')
        }
    }else{
        email.classList.remove('check')
        email2.classList.add('check')
    }}else{
        email.classList.add('check')
    }
})
}catch(error){
    console.log(error)
}
function checkpass(input){
    let regex= /^[a-zA-Z 0-9 !@#$%^&* ](?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])[ a-z A-Z 0-9 @#$%^&*!]{6,}$/
    return regex.test(input)
}
function checkemail(input){
    let regex=/^(www\.)?[A-Z a-z 0-9 \/ \*]{2,}@(hotmail|gmail|outlook|yahoo)?\.com$/
    return regex.test(input)
}
function checkname(input){
    let regex=/^[A-Z a-z 0-9 \/]{2,}$/
    return regex.test(input)
}
function clearInput(){
    signUpName.value=""
    signUpEmail.value=""
    signUpPass.value=""
}
function clearInput2(){
    signInEmail.value=""
    signInPass.value=""
}