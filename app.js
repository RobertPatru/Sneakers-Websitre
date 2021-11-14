const mainImg = document.querySelector('.selected-image'); // Main Image
const imagesDivParent = document.querySelector('.small-images'); // the div witch contains the small images
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

const addToCartBtn = document.querySelector('.add-to-cart-btn'); // add to cart button
const quantityInput = document.querySelector('.quantity-input'); // the qunatity input
const minus = document.querySelector('.minus'); // minus button
const plus = document.querySelector('.plus') // plus button
const quantityDisplayedInCart = document.querySelector('.quantity-from-cart'); // the number of the items in the cart
const totalToPay = document.querySelector('.total');
const deleteButton = document.querySelector('.fa-trash');
let firstUsed = 1;  // if the cart is empty firstUsed is true else false
let numar;  // the number of snekers in the cart

// CHANGE THE MAIN IMAGE BASED ON THE IMAGE CLICKED

document.querySelector('.img1').addEventListener('click', function(){
    mainImg.src = '/images/image-product-1.jpg';
    deleteCurrentImgClass();
    img1.classList.add('current-img'); 
});
document.querySelector('.img2').addEventListener('click', function(){
    mainImg.src = '/images/image-product-2.jpg';
    deleteCurrentImgClass();
    img2.classList.add('current-img'); 
});
document.querySelector('.img3').addEventListener('click', function(){
    mainImg.src = '/images/image-product-3.jpg';
    deleteCurrentImgClass();
    img3.classList.add('current-img'); 
});
document.querySelector('.img4').addEventListener('click', function(){
    mainImg.src = '/images/image-product-4.jpg';
    deleteCurrentImgClass();
    img4.classList.add('current-img'); 
});


// delete 'current-img' class
function deleteCurrentImgClass() {
   const smallImgByTagName = imagesDivParent.getElementsByTagName('img');  // select the small images by tagname, using their parent
   for (let i = 0; i < smallImgByTagName.length; i++) {
       if (smallImgByTagName[i].classList.contains('current-img')) {
           smallImgByTagName[i].classList.remove('current-img');
       }
   }
}


// CHAGE CART DETAILS
addToCartBtn.addEventListener('click', function (){     // when add to cart button is pressed
    if (quantityInput.value != 0) {
        document.querySelector('.cart-items').style.display = 'block';  // display cart details

        changeTotalToPay ();
    } 
});

deleteButton.addEventListener('click', function(){   // when detele button is clicked
    document.querySelector('.cart-items').style.display = 'none';  // hide the cart details
    numar = 0;
});

minus.addEventListener('click', function(){     // when minus button is clicked another item is removed from the cart
    quantityInput.value = (quantityInput.value) - 1;

    if (quantityInput.value < 0) {
        quantityInput.value = 0;
    }
});

plus.addEventListener('click', function(){      // when plus button is clicked another item is added to the cart
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

function changeTotalToPay () {  // display the total price of items
    if (firstUsed == 1) {
        numar = parseInt(quantityInput.value);  // baga in 'numar' valoarea din input
        quantityDisplayedInCart.innerHTML = numar;
        firstUsed = 0;  // firstUsed devine fals
    } else {
        numar = numar + parseInt(quantityInput.value);  // la valoarea actuala adauga ce e in input
        quantityDisplayedInCart.innerHTML = numar;
    }
    
    
    totalToPay.textContent = `$${quantityInput.value * 125.00}.00`;
}