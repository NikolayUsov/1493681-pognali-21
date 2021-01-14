let navigation = document.querySelector(".main-nav");
let mainNavButton = document.querySelector(".main-nav__toggler--js");

navigation.classList.remove("main-nav--no-js");
mainNavButton.onclick = function (){
  navigation.classList.toggle("main-nav--open")
}
