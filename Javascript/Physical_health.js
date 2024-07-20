const observer = new IntersectionObserver((entries) => {
    entries.forEach((entery) => {
        console.log(entery);
        if (entery.isIntersecting) {
            entery.target.classList.add('show');
        }
        else {
            entery.target.classList.remove('show');
        }
    });
});

const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el) => observer.observe(el));

document.getElementById("BMI_Submit").addEventListener("click", function () {
    var weight = document.getElementById("Bmi_weight").value;
    var hieght = document.getElementById("Bmi_hieght").value;
    var BMI = weight / ((hieght / 100) * (hieght / 100));

    if (BMI <= 18.5) {
        document.getElementById("BMI_ResultContainer").style.display = "flex";
        document.getElementById("BMI_RC").style.display = "none";
        var bmi_Image = document.getElementById("BMI_Pictur");
        bmi_Image.src = "./src/image/sad.svg";
        var bmi_result = document.getElementById("BMI_Result");
        bmi_result.innerHTML = "خیلی لاغر";
        var bmi_advice = document.getElementById("BMI_Advice");
        bmi_advice.innerHTML = "خواهشمندیم به پزشک متخصص مراجعه کنید و مقداری مصرف غذایتان را بیشتر کنید";
    }
    else if (BMI <= 25 && BMI > 18.5) {
        document.getElementById("BMI_ResultContainer").style.display = "flex";
        document.getElementById("BMI_RC").style.display = "none";
        var bmi_Image = document.getElementById("BMI_Pictur");
        bmi_Image.src = "./src/image/happy.svg";
        var bmi_result = document.getElementById("BMI_Result");
        bmi_result.innerHTML = "نرمال";
        var bmi_advice = document.getElementById("BMI_Advice");
        bmi_advice.innerHTML = "همه چیز در بین محدوده نرمال و عادی است";
    }
    else if (BMI <= 30 && BMI > 25) {
        document.getElementById("BMI_ResultContainer").style.display = "flex";
        document.getElementById("BMI_RC").style.display = "none";
        var bmi_Image = document.getElementById("BMI_Pictur");
        bmi_Image.src = "./src/image/poker-face.svg";
        var bmi_result = document.getElementById("BMI_Result");
        bmi_result.innerHTML = "اضافه وزن";
        var bmi_advice = document.getElementById("BMI_Advice");
        bmi_advice.innerHTML = "اضافه وزن شما با اینکه در حد نرمال و طبیعی است با این حال پیشنهاد می شود ورزش را فراموش نکنید";
    }
    else if (BMI <= 50 && BMI > 30) {
        document.getElementById("BMI_ResultContainer").style.display = "flex";
        document.getElementById("BMI_RC").style.display = "none";
        var bmi_Image = document.getElementById("BMI_Pictur");
        bmi_Image.src = "./src/image/sad.svg";
        var bmi_result = document.getElementById("BMI_Result");
        bmi_result.innerHTML = "اضافه وزن شدید";
        var bmi_advice = document.getElementById("BMI_Advice");
        bmi_advice.innerHTML = "خواهشمندیم هر چه زودتر پیش پزشک متخخ تغذیه بروید و وررش و رژیم را شروع کنید";
    }
    else {
        document.getElementById("BMI_ResultContainer").style.display = "flex";
        document.getElementById("BMI_RC").style.display = "none";
        var bmi_Image = document.getElementById("BMI_Pictur");
        bmi_Image.src = "./src/image/poker-face.svg";
        bmi_result.innerHTML = "اعداد منطقی وارد کن دوست عزیز";
        var bmi_advice = document.getElementById("BMI_Advice");
        bmi_advice.innerHTML = "چی بنویسم آخه :<";
    }
});

document.getElementById("BMIResult_RB").addEventListener("click", function () {

    document.getElementById("BMI_ResultContainer").style.display = "none";
    document.getElementById("BMI_RC").style.display = "flex";
    var bmi_Image = document.getElementById("BMI_Pictur");
    bmi_Image.src = "";
    var bmi_result = document.getElementById("BMI_Result");
    bmi_result.innerHTML = "";
    var bmi_advice = document.getElementById("BMI_Advice");
    bmi_advice.innerHTML = "";

});

document.getElementById("BMR_Submit").addEventListener("click", function () {

    document.getElementById("BMR_ResultContainer").style.display = "flex";
    document.getElementById("BMR_RC").style.display = "none";
    var Age = document.getElementById("BMR_Age").value;
    var weight = document.getElementById("BMR_weight").value;
    var hieght = document.getElementById("BMR_hieght").value;
    var BMR = (Age * 5.75) - (hieght * 3.4) + (weight * 11.65) + 360.5;
    var activityRate = document.getElementById("ActivityRate").value;
    var bmr_Pictur = document.getElementById("BMR_Pictur");
    var bmr_Result = document.getElementById("BMR_Result");
    var BMR_Advice = document.getElementById("BMR_Advice");
    if (activityRate === "0") {
        var finalBMR = BMR * 1.2;
        bmr_Result.innerHTML = `${Number(finalBMR.toFixed(2))}`;
        BMR_Advice.innerHTML = "می توانید میزان کالری مورد نیازتان را در قسمت بالا مشاهده کنید";
        bmr_Pictur.src = "./src/image/happy.svg";
    }
    else if (activityRate === "1") {
        var finalBMR = BMR * 1.375;
        bmr_Result.innerHTML = `${Number(finalBMR.toFixed(2))}`;
        BMR_Advice.innerHTML = "می توانید میزان کالری مورد نیازتان را در قسمت بالا مشاهده کنید";
        bmr_Pictur.src = "./src/image/happy.svg";

    }
    else if (activityRate === "2") {
        var finalBMR = BMR * 1.55;
        bmr_Result.innerHTML = `${Number(finalBMR.toFixed(2))}`;
        BMR_Advice.innerHTML = "می توانید میزان کالری مورد نیازتان را در قسمت بالا مشاهده کنید";
        bmr_Pictur.src = "./src/image/happy.svg";

    }
    else if (activityRate === "3") {
        var finalBMR = BMR * 1.725;
        bmr_Result.innerHTML = `${Number(finalBMR.toFixed(2))}`;
        BMR_Advice.innerHTML = "می توانید میزان کالری مورد نیازتان را در قسمت بالا مشاهده کنید";
        bmr_Pictur.src = "./src/image/happy.svg";

    }
    else if (activityRate === "4") {
        var finalBMR = BMR * 1.9;
        bmr_Result.innerHTML = `${Number(finalBMR.toFixed(2))}`;
        BMR_Advice.innerHTML = "می توانید میزان کالری مورد نیازتان را در قسمت بالا مشاهده کنید";
        bmr_Pictur.src = "./src/image/happy.svg";

    }
});

document.getElementById("BMRResult_RB").addEventListener("click" , function(){

    document.getElementById("BMR_ResultContainer").style.display = "none";
    document.getElementById("BMR_RC").style.display = "flex";
    var bmi_Image = document.getElementById("BMR_Pictur");
    bmi_Image.src = "";
    var bmi_result = document.getElementById("BMR_Result");
    bmi_result.innerHTML = "";
    var bmi_advice = document.getElementById("BMR_Advice");
    bmi_advice.innerHTML = "";

});

document.getElementById("RFM_Submit").addEventListener("click", function () {

    document.getElementById("RFM_ResultContainer").style.display = "flex";
    document.getElementById("RFM_RC").style.display = "none";
    var rfm_Pictur = document.getElementById("RFM_Pictur");
    var rfm_Result = document.getElementById("RFM_Result");
    var rfm_Advice = document.getElementById("RFM_Advice");
    var menRadio = document.getElementById("Male_Radio");
    var womenRadio = document.getElementById("Female_Radio");
    if(menRadio.checked === true){
       var bmr_atw = document.getElementById("BMR_ATW").value;

       var rfm_hieght = document.getElementById("RFM_hieght").value;

       var RFM = (((bmr_atw / 100) / rfm_hieght) * 20) - 76;

       rfm_Result.innerHTML = `${Number(RFM.toFixed(2))}`;
       rfm_Advice.innerHTML = "مقداری که در بالا مشاهده می کنید درصد چربی شماست";
        rfm_Pictur.src = "./src/image/happy.svg";
    }
    else if(womenRadio.checked === true){
        var bmr_atw = document.getElementById("BMR_ATW").value;

        var rfm_hieght = document.getElementById("RFM_hieght").value;
 
        var RFM = (((bmr_atw / 100) / rfm_hieght) * 20) - 64;
 
        rfm_Result.innerHTML = `${Number(RFM.toFixed(2))}`;
        rfm_Advice.innerHTML = "مقداری که در بالا مشاهده می کنید درصد چربی شماست";
         rfm_Pictur.src = "./src/image/happy.svg";
    }
    else{
        alert("لطفا به جنسیت مقدار دهید")
    }
});

document.getElementById("RFMResult_RB").addEventListener("click" , function(){

    document.getElementById("RFM_ResultContainer").style.display = "none";
    document.getElementById("RFM_RC").style.display = "flex";
    var bmi_Image = document.getElementById("RFM_Pictur");
    bmi_Image.src = "";
    var bmi_result = document.getElementById("RFM_Result");
    bmi_result.innerHTML = "";
    var bmi_advice = document.getElementById("RFM_Advice");
    bmi_advice.innerHTML = "";

});