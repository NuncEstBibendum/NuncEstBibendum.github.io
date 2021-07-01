window.onload = function() {

    // Array containing "pageviews" and "pricing" values
    const pricing = [["10K",8],["50K",12],["100K",16],["500K",24],["1M",36]];

    // Get the slider
    const sliderValue = document.getElementById('price-slider');
    // Get the pageviews span
    const pageviewsDisplay = document.getElementsByClassName('main-body__title--pageviews')[0];
    // Get the price span
    const priceDisplay = document.getElementsByClassName('main-body__title--price')[0];
    // Get the checkbox value    
    const billingCheckbox = document.querySelector('#billing-checkbox'); 
    // Stores final price
    let finalPrice = 16;


    sliderValue.addEventListener('input', function(sliderChoice) {
        pricingValue = sliderChoice.target.value;
        // Check if the checkbox is checked (a lot of "check")
        if (billingCheckbox.checked) {
            finalPrice =  pricing[pricingValue][1]*0.75;
        } else {
            finalPrice = pricing[pricingValue][1];
        }
        pageviewsDisplay.innerText = pricing[pricingValue][0];
        priceDisplay.innerText = "$" + finalPrice + ".00";
    });

    const setDiscount = () => {
        if (!billingCheckbox.checked) {
            priceDisplay.innerHTML = `$${finalPrice}.00`
        }
        else {
            priceDisplay.innerHTML = `$${finalPrice * 0.75}.00`;
        }
    };

    billingCheckbox.addEventListener('input', setDiscount);
}