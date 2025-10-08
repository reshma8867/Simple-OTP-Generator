let generateOTP=()=>{
    let otpDisplay = document.getElementById('otpDisplay')
    let randomNum=Math.random()*10000
    let otp=Math.floor(randomNum)

    if (otp >= 1000) {
        otpDisplay.innerText = otp
    } else {
        generateOTP()
    }
}