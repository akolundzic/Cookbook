

let drink1 = document.getElementById('drink1');
let drink2 = document.getElementById('drink2');
let rice1 = document.getElementById('rice1');

let galactic_cocktails_iframe = document.getElementById("galactic-cocktails");
let last_world_cocktail_iframe = document.getElementById("last-world-cocktail");
let rice_fried_rice_iframe = document.getElementById("rice-fried-rice");

drink1.addEventListener("click", () => { 
    galactic_cocktails_iframe.style.display = 'block';
    last_world_cocktail_iframe.style.display = 'none';
    rice_fried_rice_iframe.style.display = 'none';
});

drink2.addEventListener("click", () => { 
    galactic_cocktails_iframe.style.display = 'none';
    rice_fried_rice_iframe.style.display = 'none';
    last_world_cocktail_iframe.style.display = 'block';
});

rice1.addEventListener("click", () => { 
    galactic_cocktails_iframe.style.display = 'none';
    rice_fried_rice_iframe.style.display = 'block';
    last_world_cocktail_iframe.style.display = 'none';
});