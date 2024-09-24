const billValue=document.getElementById("bill");
const tipValue=document.getElementById("tip");
const calculateValue=document.getElementById("calculate");
const totalValue=document.getElementById("total");

function CalcTotal(){
    const bill=billValue.value;
    const tip=tipValue.value;
    const total=bill*(1+tip/100);
    totalValue.innerText=total.toFixed(2);
}
calculateValue.addEventListener('click', CalcTotal);
