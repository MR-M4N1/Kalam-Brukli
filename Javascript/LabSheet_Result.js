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

var Submit = document.getElementById("Submit");

Submit.addEventListener("click", function () {

    var form_container = document.getElementById("Request_Container");
    form_container.style.display = "none";
    var result_container = document.getElementById("Result_Container");
    result_container.style.display = "flex";

    var cbc_top = document.getElementById("CBC_Top").value;
    var Top_Result = document.getElementById("Top_Result");
    if (cbc_top < 12.5) {
        Top_Result.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else {
        Top_Result.style.backgroundColor = "#ff2a2a";
    }
    Top_Result.innerHTML = cbc_top;


    var cbc_middle = document.getElementById("CBC_Middle").value;
    var middle_Result = document.getElementById("Middle_Result");
    if (cbc_middle < 14500 && cbc_middle > 11000) {
        middle_Result.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else {
        middle_Result.style.backgroundColor = "#ff2a2a";
    }
    middle_Result.innerHTML = cbc_middle;

    var cbc_bottom = document.getElementById("CBC_Bottom").value;
    var bottom_Result = document.getElementById("Bottom_Result");
    if (cbc_bottom < 450000 && cbc_bottom > 150000) {
        bottom_Result.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else {
        bottom_Result.style.backgroundColor = "#ff2a2a";
    }
    bottom_Result.innerHTML = cbc_bottom;
    
    var CRP = document.getElementById("CRP").value;
    var CPR_Result = document.getElementById("CPR_Middle_Result");
    if (CRP < 1) {
        CPR_Result.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else {
        CPR_Result.style.backgroundColor = "#ff2a2a";
    }
    CPR_Result.innerHTML = CRP;

    var SelectBar = document.getElementById("SelectBar1");
    if(SelectBar.value === "0"){
        var BC = document.getElementById("BC");
        BC.innerHTML = "Positive"
        BC.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else if(SelectBar.value === "1"){
        var BC = document.getElementById("BC");
        BC.innerHTML = "Negetive"
        BC.style.backgroundColor = "#ff2a2a";
    }

    var SelectBar2 = document.getElementById("SelectBar2");
    if(SelectBar2.value === "0"){
        var US = document.getElementById("US");
        US.innerHTML = "Positive"
        US.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else if(SelectBar2.value === "1"){
        var US = document.getElementById("US");
        US.innerHTML = "Negetive"
        US.style.backgroundColor = "#ff2a2a";
    }

    var SelectBar3 = document.getElementById("SelectBar3");
    if(SelectBar3.value === "0"){
        var SC = document.getElementById("SC");
        SC.innerHTML = "Positive";
        SC.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else if(SelectBar3.value === "1"){
        var SC = document.getElementById("SC");
        SC.innerHTML = "Negetive";
        SC.style.backgroundColor = "#ff2a2a";
    }

    var SelectBar4 = document.getElementById("SelectBar4");
    if(SelectBar4.value === "0"){
        var TC = document.getElementById("TC");
        TC.innerHTML = "Positive"
        TC.style.backgroundColor = "rgb(47, 214, 47)";
    }
    else if(SelectBar4.value === "1"){
        var TC = document.getElementById("TC");
        TC.innerHTML = "Negetive"
        TC.style.backgroundColor = "#ff2a2a";
    }

    var Right_Advice = document.querySelector(".Right_Advice");
    var Secend_Right_Advice = document.querySelector(".Secend_Right_Advice");
    var Advice3 = document.getElementById("Advice3");
    var Advice5 = document.getElementById("Advice5");
    Advice5.innerHTML = 'رنگ سبز نرمال و رنگ قرمز غیرنرمال است';
    var Advice4 = document.getElementById("Advice4");
    Advice4.innerHTML = 'رنگ سبز نرمال و رنگ قرمز غیرنرمال است';
    var Advice6 = document.getElementById("Advice6");
    Advice6.innerHTML = 'رنگ سبز نرمال و رنگ قرمز غیرنرمال است';
    Advice3.innerHTML = "رنگ سبز نرمال و رنگ قرمز غیرنرمال است";
    Secend_Right_Advice.innerHTML = "رنگ سبز نرمال و رنگ قرمز غیرنرمال است";
    Right_Advice.innerHTML = "رنگ سبز نرمال و رنگ قرمز غیرنرمال است";
});

var Recover = document.getElementById("Recover");

Recover.addEventListener("click", function () {

    var form_container = document.getElementById("Result_Container");
    form_container.style.display = "none";
    var result_container = document.getElementById("Request_Container");
    result_container.style.display = "flex";

});