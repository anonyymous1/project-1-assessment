document.addEventListener("DOMContentLoaded", () => {

    const plusButton = document.querySelector('#plus');
    const minusButton = document.querySelector('#minus');
    let num = document.querySelector('#value');
    let currentValue = document.querySelector('#input').value;
    
    document.getElementById("plus").addEventListener("click", function() {
        let value = parseInt(document.querySelector('#value').textContent);
        let inputValue = parseInt(document.querySelector('#input').value);
        let updatedValue = value + inputValue;
        num.textContent = updatedValue;
        if (updatedValue >= 0) {
            num.style.color ="black";
        }
    })
    
    document.getElementById("minus").addEventListener("click", function() {
        let value = parseInt(document.querySelector('#value').textContent);
        let inputValue = parseInt(document.querySelector('#input').value);
        let updatedValue = value - inputValue;
        num.textContent = updatedValue;
        if (updatedValue < 0) {
            num.style.color ="red";
        }
    })
    // console.log('Locked & Loaded');
})