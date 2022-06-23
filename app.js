const sub=document.querySelector('.counter .sub')
const incr=document.querySelector('.counter .incr')
const qty=document.querySelector('#counterBox')
const noti=document.querySelector('div.main-cart')
const notiPseudo=document.querySelector('div.pseudo-class')
const cartItemsDiv=document.querySelector('.cart-items-div')
const emptyCart=document.querySelector('.empty-cart')
const select=document.querySelector('.cart-view')
const addToCart=document.querySelector('div.cart')
const qtyDiv=document.querySelector('.quantity-number')
const totalPrice=document.querySelector('.total-price')
const removeItemButton=document.querySelector('.remove-items')
const productBox=document.querySelector('.productBox img')
const product=document.querySelector('#product')
const bodyShadow=document.querySelector('.body')
// const ThumbA=document.querySelectorAll('.thumb a')


$(document).ready(function () {
    $('.product-left .thumb a').click(function(e){
        e.preventDefault();
        $('.productBox img').attr('src',$(this).attr('href'));
    })
});


incr.addEventListener('click',()=>{
    console.log(qty.value);
    qty.value=parseInt(qty.value)+1;
})
sub.addEventListener('click',()=>{
    if (qty.value>0) {
    qty.value=parseInt(qty.value)-1;
        
    }
});

addToCart.addEventListener('click',(e)=>{
    if (qty.value>0) {
        cartItemsDiv.classList.add('display')
        select.classList.add('display')
        emptyCart.classList.remove('display')
        product.onclick = function(){
            cartItemsDiv.classList.remove('display')
            select.classList.remove('display')
            emptyCart.classList.remove('display')
        }
        var add=Number(notiPseudo.getAttribute('data-count')||0)
        notiPseudo.setAttribute('data-count',parseInt(qty.value))
        notiPseudo.classList.add('zero')
        qtyDiv.innerText=parseInt(qty.value);
        var sum=125.00*parseInt(qty.value);
        totalPrice.innerText=parseFloat(sum);
        // copy and paste items
        notiPseudo.onclick=()=>{
            select.classList.toggle('display')
            cartItemsDiv.classList.toggle('display')
        }
        removeItemButton.onclick=()=>{
            notiPseudo.classList.remove('zero')
            cartItemsDiv.classList.remove('display')
            select.classList.add('display')
            emptyCart.classList.add('display')
            notiPseudo.setAttribute('data-count',0)
            qty.value=parseInt(0)
        }
        
    }if(qty.value==0){
        notiPseudo.classList.remove('zero')
        var add=Number(notiPseudo.getAttribute('data-count')||0)
        notiPseudo.setAttribute('data-count',parseInt(qty.value))
        notiPseudo.classList.add('zero')
        // noti.onclick=()=>{
            console.log('heyy');
            select.classList.toggle('display')
            emptyCart.classList.toggle('display')
        // }
    }

    // console.log('heyy i am working fine')
})
notiPseudo.onclick=()=>{
    select.classList.toggle('display')
    emptyCart.classList.toggle('display')
    notiPseudo.setAttribute('data-count',0)
}
removeItemButton.onclick=()=>{
    cartItemsDiv.classList.remove('display')
    select.classList.add('display')
    emptyCart.classList.add('display')
    notiPseudo.setAttribute('data-count',0)
}

//lightbox
// const productBoxImg=document.querySelectorAll('.thumb li img')
const  previewBox=document.querySelector('.preview-box')
const gallery=previewBox.querySelectorAll('.thumb li')
const galleryImg=previewBox.querySelectorAll('.thumb li a')
const previewImg=previewBox.querySelector('.img-box img')
const closeIcon=previewBox.querySelector('.icon svg')
const shadow=document.querySelector('.shadow')
const prevBtn=document.querySelector('.preview-box .prev')
const nextBtn=document.querySelector('.preview-box .next')
window.onload=()=>{
    var returnedIndex;
    for (let i = 0; i < gallery.length; i++) {
        //    console.log(gallery.length);
        // console.log(gallery.length);
        let newIndex=i //passing i value to newIndex variable
        var clickImgIndex;
        productBox.onclick=()=>{ 
            function previewDefault(){
                function findIndex() {
                    let l = 0;
                    loopInner:
                    while (l < gallery.length) {
                         
                        if(galleryImg[l].href==productBox.src){
                            return l;
                            
                        }else{
                            l++
                            continue loopInner;
                        };
                    }
                } 
                // console.log(findIndex());
                // clickImgIndex=newIndex
                returnedIndex=findIndex()
                newIndex=returnedIndex
                // console.log(newIndex);
                let selectedImgUrl=galleryImg[newIndex].href  //getting user clicked image url
                previewImg.src=selectedImgUrl  //passing user clicked img url to lightbox
                gallery[newIndex].classList.add('hoverclick')
                // console.log('Next iteration');
                for (let i = 0; i <gallery.length ; i++) {
                    if (newIndex!=i) {
                        gallery[i].classList.remove('hoverclick') 
                        // console.log('removed from:',gallery[i]);
                    }
                }
                // console.log(newIndex);
                if (newIndex==0) {
                    // console.log(newIndex);
                    prevBtn.style.display="none"
                }
                if (newIndex==gallery.length-1) {
                    nextBtn.style.display="none"
                }
                
            }
            function preview(){
                let selectedImgUrl=galleryImg[newIndex].href //getting user clicked image url
                previewImg.src=selectedImgUrl  //passing user clicked img url to lightbox
                gallery[newIndex].classList.add('hoverclick')
                // console.log('Next iteration');
                for (let i = 0; i <gallery.length ; i++) {
                    if (newIndex!=i) {
                        gallery[i].classList.remove('hoverclick') 
                        // console.log('removed from:',gallery[i]);
                    }
                }
                if (newIndex==0) {
                    // console.log(newIndex);
                    prevBtn.style.display="none"
                }
                if (newIndex==gallery.length-1) {
                    nextBtn.style.display="none"
                }
            }
            //previous and next button
            
            // console.log(galleryImg[newIndex].href);
            
            prevBtn.onclick=()=>{
                // console.log(newIndex);
                newIndex--;
                // console.log('prev',newIndex);
                if (newIndex<0) {
                    prevBtn.style.display="none"
                }else{
                    preview()
                    nextBtn.style.display="block"
                }
            }
            nextBtn.onclick=()=>{
                newIndex++;
                // console.log('next:',newIndex);
                if (newIndex==gallery.length) {
                    nextBtn.style.display="none"
                }else{
                    preview()
                    prevBtn.style.display="block"
                }
            }
            previewDefault();
            previewBox.querySelector('.thumb').classList.add("show");
            previewBox.classList.add("show");
            // shadow.style.display='block'
            if (window.innerWidth>=786){
                bodyShadow.classList.add('shadow')
                hamburger.style.zIndex='2'
            }
            // document.querySelector('body').style.overflow='hidden'
            closeIcon.onclick=()=>{
            newIndex=clickImgIndex
            previewBox.classList.remove("show")
            hamburger.style.zIndex='7'
            prevBtn.style.display="block"
            nextBtn.style.display="block"
            // shadow.style.display='none'
            bodyShadow.classList.remove('shadow')
            // document.querySelector('body').style.overflow='auto'
        }
        }
        
    }
}
$(document).ready(function () {
    $('.preview-box .thumb a').click(function(e){
        e.preventDefault();
        $('.preview-box .img-box img').attr('src',$(this).attr('href'));
    })
});

//thumb hover for  preview-box
for (let j = 0; j < gallery.length; j++) {
    gallery[j].onclick=()=>{
        // console.log('Next iteration');
        for (let i = 0; i <gallery.length ; i++) {
            if (j!=i) {
                gallery[i].classList.remove('hoverclick') 
                // console.log('removed from:',gallery[i]);
            }else{
                // console.log('clicked:',gallery[j],'so added');
                gallery[j].classList.add('hoverclick')
                // console.log(i,j);
                // console.log('added');
            }
        }
    }
}
//thumb hover for  productBox
const thumbnail=document.querySelectorAll('.product-left .thumb li')

for (let j = 0; j < thumbnail.length; j++) {
    thumbnail[j].onclick=()=>{
        // console.log('Next iteration');
        for (let i = 0; i <thumbnail.length ; i++) {
            if (j!=i) {
                thumbnail[i].classList.remove('hoverclick') 
                // console.log('removed from:',thumbnail[i]);
            }else{
                // console.log('clicked:',thumbnail[j],'so added');
                thumbnail[j].classList.add('hoverclick')
                // console.log(i,j);
                // console.log('added');
            }
        }

    }
}

// //thumb copying for lightbox
// const ThumbGallery=document.querySelectorAll('.thumb li')

// for (let j = 0; j < ThumbGallery.length; j++) {
//     var clone=ThumbGallery[j].cloneNode(true)
//     // console.log(clone);
//     document.querySelector('.preview-box .thumb').appendChild(clone);
//     $(document).ready(function () {
//         $('.preview-box .thumb li a').click(function(e){
//             // console.log(e);
//             e.preventDefault();
//             $('.img-box img').attr('src',$(this).attr('href'));
//         })
//     });
//     // console.log('done');
// }
// const previewBoxSection=document.getElementById('previewBoxSection')
//     if(previewBoxSection.classList.contains('preview-bshow')){
//         console.log('hi');
//         for (let j = 0; j < gallery.length; j++) {

//             gallery[i].onclick=(e)=>{
//                 e.preventDefault();
//                 previewImg.src=ThumbA.href
//                 console.log(previewImg.src);
//             }
//         }
//     }

const hamburger = document.querySelector('.header .nav-bar .nav-first-block .nav-list .hamburger');
const hamburgerBar = document.querySelector('.header .nav-bar .nav-first-block .nav-list .hamburger .bar');
const mobile_menu = document.querySelector('.header .nav-bar .nav-first-block .nav-list .hamburger-ul');
const header = document.querySelector('.header');


hamburger.addEventListener('click',()=>{
    // hamburger.classList.toggle('active');
    hamburgerBar.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    // shadow.style.display='block'
    bodyShadow.classList.toggle('shadow')
    if (select.classList.contains('display')) {
        select.classList.remove('display')
        cartItemsDiv.classList.remove('display')
    }
    
});

// product-left sliding for mobile
const prevBtnOfProductLeft=document.querySelector('.prev')
const nextBtnOfProductLeft=document.querySelector('.next')
let i=0
    // console.log(gallery.length);
    let newIndex=i //passing i value to newIndex variable
    // console.log(newIndex);
    function mobile_product_left_slideDefault(){
        productBox.src=galleryImg[0].href
        if (newIndex<0) {
            prevBtnOfProductLeft.style.display="none"
        }
        if (newIndex==gallery.length) {
            nextBtnOfProductLeft.style.display="none"
        }
        
    }
    function mobile_product_left_slide(){
        let selectedImgUrl=galleryImg[newIndex].href  //getting user clicked image url
        console.log(selectedImgUrl);
        productBox.src=selectedImgUrl  //passing user clicked img url to lightbox
        console.log(productBox.src);
        if (newIndex<0) {
            prevBtnOfProductLeft.style.display="none"
        }
        if (newIndex==gallery.length) {
            nextBtnOfProductLeft.style.display="none"
        }
    }
    //previous and next button
    prevBtnOfProductLeft.onclick=()=>{
        newIndex--;
        if (newIndex<0) {
            prevBtnOfProductLeft.style.display="none"
        }else{
            mobile_product_left_slide()
            nextBtnOfProductLeft.style.display="block"
        }
    }
    nextBtnOfProductLeft.onclick=()=>{
        newIndex++;
        if (newIndex==gallery.length) {
            nextBtnOfProductLeft.style.display="none"
        }else{
            mobile_product_left_slide()
            prevBtnOfProductLeft.style.display="block"
        }
    }
    mobile_product_left_slideDefault();