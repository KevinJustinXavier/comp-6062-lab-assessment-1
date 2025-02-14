let studentFullName = 'Kevin Justin Xavier';
let studentNumber = 1196273;
const result= `${studentFullName}-${studentNumber}`;
console.log(result);
const headerContent=document.querySelector("h1");
console.log(headerContent.textContent);
headerContent.textContent=result;
headerContent.classList.add("headingPrimary");

