let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/猫老大20221101.jpg') {
      myImage.setAttribute('src', 'images/猫老大20221102.jpg');
    } else {
      myImage.setAttribute('src', '猫老大20221101.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I Love You，' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'I Love You，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}