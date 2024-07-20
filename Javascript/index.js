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

console.log(document.styleSheets[0].cssRules[87]);

const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el) => observer.observe(el));

window.addEventListener("load", function () {
  var HeroPaddTransition = document.getElementById("Hero_Section");
  HeroPaddTransition.style.padding = "0 10%";
  HeroPaddTransition.style.transition = "padding 1s";
  var BtnTranisition = document.getElementById("Body_BTN");
  BtnTranisition.style.margin = " 0 0 0 30px";
  BtnTranisition.style.transition = "margin-left 1s";

})

document.addEventListener("DOMContentLoaded", function () {
  var IconImg1 = document.getElementById("First_Icon");
  if (IconImg1) {
    IconImg1.addEventListener("click", ShowOff1);
  }
});

let num1 = 0;

function ShowOff1() {
  num1++;
  if (num1 % 2 == 0) {
    var Answer = document.getElementById("First_Answer");
    Answer.style.display = "none";
    var FirstImg_Src = document.getElementById("First_Icon");
    FirstImg_Src.src = "../src/image/plus.svg";
  } else {
    var Answer = document.getElementById("First_Answer");
    Answer.style.display = "block";
    var FirstImg_Src = document.getElementById("First_Icon");
    FirstImg_Src.src = "../src/image/minus.svg";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var IconImg2 = document.getElementById("Secend_Icon");
  if (IconImg2) {
    IconImg2.addEventListener("click", ShowOff2);
  }
});

let num2 = 0;

function ShowOff2() {
  num2++;
  if (num2 % 2 == 0) {
    var Answer = document.getElementById("Secend_Answer");
    Answer.style.display = "none";
    var FirstImg_Src = document.getElementById("Secend_Icon");
    FirstImg_Src.src = "../src/image/plus.svg";
  } else {
    var Answer = document.getElementById("Secend_Answer");
    Answer.style.display = "block";
    var FirstImg_Src = document.getElementById("Secend_Icon");
    FirstImg_Src.src = "../src/image/minus.svg";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var IconImg3 = document.getElementById("Thirth_Icon");
  if (IconImg3) {
    IconImg3.addEventListener("click", ShowOff3);
  }
});

let num3 = 0;

function ShowOff3() {
  num3++;
  if (num3 % 2 == 0) {
    var Answer = document.getElementById("Thirth_answer");
    Answer.style.display = "none";
    var FirstImg_Src = document.getElementById("Thirth_Icon");
    FirstImg_Src.src = "../src/image/plus.svg";
  } else {
    var Answer = document.getElementById("Thirth_answer");
    Answer.style.display = "block";
    var FirstImg_Src = document.getElementById("Thirth_Icon");
    FirstImg_Src.src = "../src/image/minus.svg";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var IconImg4 = document.getElementById("Forth_Icon");
  if (IconImg4) {
    IconImg4.addEventListener("click", ShowOff4);
  }
});

let num4 = 0;

function ShowOff4() {
  num4++;
  if (num4 % 2 == 0) {
    var Answer = document.getElementById("Forth_Answer");
    Answer.style.display = "none";
    var FirstImg_Src = document.getElementById("Forth_Icon");
    FirstImg_Src.src = "../src/image/plus.svg";
  } else {
    var Answer = document.getElementById("Forth_Answer");
    Answer.style.display = "block";
    var FirstImg_Src = document.getElementById("Forth_Icon");
    FirstImg_Src.src = "../src/image/minus.svg";
  }
}



document.getElementById("First_More").addEventListener("mouseenter", function () {
  document.getElementById("First_Moreinfo").style.bottom = "-110px";
  document.getElementById("First_Moreinfo").style.display = "flex";
  let st = document.styleSheets[0].cssRules[87];
  st.style.display = "inline";
});

document.getElementById("First_More").addEventListener("mouseleave", function () {
  document.getElementById("First_Moreinfo").style.bottom = "-80px";
  document.getElementById("First_Moreinfo").style.display = "none";
  let st = document.styleSheets[0].cssRules[87];
  st.style.display = "none";
});

document.getElementById("Secend_More").addEventListener("mouseenter", function () {
  document.getElementById("Secend_MoreInfo").style.bottom = "-110px";
  document.getElementById("Secend_MoreInfo").style.display = "flex";
  let st = document.styleSheets[0].cssRules[89];
  st.style.display = "inline";
});

document.getElementById("Secend_More").addEventListener("mouseleave", function () {
  document.getElementById("Secend_MoreInfo").style.bottom = "-1400px";
  document.getElementById("Secend_MoreInfo").style.display = "none";
  let st = document.styleSheets[0].cssRules[89];
  st.style.display = "none";
});

document.getElementById("Thirth_More").addEventListener("mouseenter", function () {
  document.getElementById("Thirth_MorInfo").style.bottom = "-110px";
  document.getElementById("Thirth_MorInfo").style.display = "flex";
  let st2 = document.styleSheets[0].cssRules[91];
  st2.style.display = "inline";
});

document.getElementById("Thirth_More").addEventListener("mouseleave", function () {
  document.getElementById("Thirth_MorInfo").style.bottom = "-1400px";
  document.getElementById("Thirth_MorInfo").style.display = "none";
  let st2 = document.styleSheets[0].cssRules[91];
  st2.style.display = "none";
});

document.getElementById("Forth_More").addEventListener("mouseenter", function () {
  document.getElementById("Forth_MorInfo").style.bottom = "-110px";
  document.getElementById("Forth_MorInfo").style.display = "flex";
  let st2 = document.styleSheets[0].cssRules[93];
  st2.style.display = "inline";
});

document.getElementById("Forth_More").addEventListener("mouseleave", function () {
  document.getElementById("Forth_MorInfo").style.bottom = "0px";
  document.getElementById("Forth_MorInfo").style.display = "none";
  let st2 = document.styleSheets[0].cssRules[93];
  st2.style.display = "none";
});

