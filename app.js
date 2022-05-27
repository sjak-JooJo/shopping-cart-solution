function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let porductNumber = productInput.value;
    if(isIncreasing){ // if(isIncreasing == true)
        porductNumber = parseInt(porductNumber) + 1;
    }
    else if(porductNumber > 0){
        porductNumber = parseInt(porductNumber) - 1;
    }
    productInput.value = porductNumber;
    // update porduct total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = porductNumber * price;

    // calculate total function call
    calculateTotal();
    
}
function getInputValue(porduct){
    const productInput = document.getElementById(porduct + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate total
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the html

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//phone increase decrease events

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)
});

// case plus for increase and decrease value
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59,true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59,false);
    
});

