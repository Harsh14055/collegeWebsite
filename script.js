function showhide() {
  let x = document.getElementById("chennai")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function amritapurishow() {
  let x = document.getElementById("amritapuri")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function coimshow() {
  let x = document.getElementById("coimbatore")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function blrshow() {
  let x = document.getElementById("blru")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function amrshow() {
  let x = document.getElementById("amravati")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function farshow() {
  let x = document.getElementById("farid")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function kochishow() {
  let x = document.getElementById("kochi")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myshow() {
  let x = document.getElementById("mysuru")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
  document.querySelector('.sidebar').classList.toggle('sidebargo');
  if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
  }
  else {

    setTimeout(() => {
      document.querySelector('.cross').style.display = 'inline'
    }, 300)
    document.querySelector('.ham').style.display = 'none'
  }
})
function scrollWin() {
  window.scroll(0, 642);
}
function lightdark() {
  let bu = document.getElementById("ldark");
  bu.classList.toggle("dlight");
  let el = document.getElementById("nb");
  el.classList.toggle("darkk");
  let el2 = document.getElementById("nb2");
  el2.classList.toggle("navbar2dark");
  let el3 = document.getElementById("c1");
  el3.classList.toggle("c1dark")
  let abt = document.getElementById("det");
  abt.classList.toggle("dark2");
  let abt2 = document.getElementById("mdets");
  abt2.classList.toggle("dark2");
  let cmps = document.getElementById("ourcamp");
  cmps.classList.toggle("dark2");
  let cous = document.getElementById("ourcou");
  cous.classList.toggle("dark2");
  let rank = document.getElementById("rankings");
  rank.classList.toggle("dark3");
  let amp = document.getElementById("amp");
  let coim = document.getElementById("coim");
  let blr = document.getElementById("blr");
  let ch = document.getElementById("ch");
  let amr = document.getElementById("amr");
  let fr = document.getElementById("fr");
  let kch = document.getElementById("kch");
  let mys = document.getElementById("mys");
  amp.classList.toggle("dark2");
  coim.classList.toggle("dark2");
  blr.classList.toggle("dark2");
  ch.classList.toggle("dark2");
  amr.classList.toggle("dark2");
  fr.classList.toggle("dark2");
  kch.classList.toggle("dark2");
  mys.classList.toggle("dark2");
  let ru = document.getElementById("admiss");
  ru.classList.toggle("bgdark");
  let reach = document.getElementById("reachus");
  reach.classList.toggle("bgdark");
  let e1 = document.getElementById("e1");
  e1.classList.toggle("bgdark");
  let e2 = document.getElementById("e2");
  e2.classList.toggle("bgdark");
  let e3 = document.getElementById("e3");
  e3.classList.toggle("bgdark");
  let lp1 = document.getElementById("lp1");
  lp1.classList.toggle("lpdark");
  let lp2 = document.getElementById("lp2");
  lp2.classList.toggle("lpdark");
  let lp3 = document.getElementById("lp3");
  lp3.classList.toggle("lpdark");
}
document.addEventListener("keydown",
  function (event) {
    if (event.key === "d") {
      event.preventDefault();
      lightdark();
    }
  });
function validateForm() {
  let nm = document.myForm.fname.value;
  var phno = document.myForm.phone.value;
  var lname = document.myForm.lname.value;
  var dob = document.myForm.dob.value;
  var e = document.myForm.email.value;
  var atposition = e.indexOf("@");
  var dotposition = e.lastIndexOf(".");
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= e.length) {
    alert("Please enter a valid e-mail address");
    return false;
  }
  if (nm == "" || nm == null) {
    alert("Fill all the details properly.");
    return false;
  }
  if (lname == "" || lname == null) {
    alert("Fill all the details properly.");
    return false;
  }
  if (dob == "" || dob == null) {
    alert("Fill all the details properly.");
    return false;
  }

  if (phno.length != 10) {
    alert("Phone number must be 10 characters long.");
    return false;
  }
  var phnum = document.myForm.phone.value;
  if (isNaN(phnum)) {
    alert("Enter valid phone number.")
    return false;
  }
  if (isNaN(nm) == false) {
    alert("enter alphabets in name");
    return false;
  }

}
function load() {
  alert("Welcome to Amrita")
}
function toUC() {
  let x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
  let y = document.getElementById("lname");
  y.value = y.value.toUpperCase();
}
let mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
