window.onload = function() {

    // Array containing "pageviews" and "pricing" values
    const pricing = [["10K",8],["50K",12],["100K",16],["500K",24],["1M",36]];

    // Get the slider
    const sliderValue = document.getElementById('price-slider');
    // Get the pageviews span
    const pageviewsDisplay = document.getElementsByClassName('main-body__title--pageviews')[0];
    // Get the price span
    const priceDisplay = document.getElementsByClassName('main-body__title--price')[0];

    sliderValue.addEventListener('input', function(sliderChoice) {
        pricingValue = sliderChoice.target.value;
        let billingCheckbox = document.querySelector('#billing-checkbox:checked'); // Get the checkbox value
        // Check if the checkbox is checked (a lot of "check")
        if (billingCheckbox != null) {
            pageviewsDisplay.innerText = pricing[pricingValue][0];
            priceDisplay.innerText = "$" + pricing[pricingValue][1]*0.75 + ".00"; // Apply the 25% discount
        } else if (billingCheckbox == null) {
            pageviewsDisplay.innerText = pricing[pricingValue][0];
            priceDisplay.innerText = "$" + pricing[pricingValue][1] + ".00";
        }
    });
}