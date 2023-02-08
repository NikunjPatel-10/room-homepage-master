import Desktop1 from './../../images/desktop-image-hero-1.jpg';
import Desktop2 from './../../images/desktop-image-hero-2.jpg';
import Desktop3 from './../../images/desktop-image-hero-3.jpg';
import Mobile1 from './../../images/mobile-image-hero-1.jpg';
import Mobile2 from './../../images/mobile-image-hero-2.jpg';
import Mobile3 from './../../images/mobile-image-hero-3.jpg';


const Data = [
    {
        id: 1,
        img: Desktop1,
        mobileImg: Mobile1,
        title: "Discover innovative ways to decorate",
        content:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of  you and what you love.",
    },
    {
        id: 2,
        img: Desktop2,
        mobileImg: Mobile2,
        title: "We are available all across the globe",
        content:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        id: 3,
        img: Desktop3,
        mobileImg: Mobile3,
        title: "Manufactured with the best materials",
        content:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
];



// let sliderImages = document.querySelectorAll(".slide"),
//     arrowLeft = document.getElementsByClassName(".left-arrow"),
//     arrowRight = document.getElementsByClassName(".right-arrow"),
//     current = 0;

// // Clear all images
// function reset() {
//     for (let i = 0; i < sliderImages.length; i++) {
//         sliderImages[i].style.display = "none";
//     }
// }

// // Initial slide
// function startSlide() {
//     reset();
//     sliderImages[0].style.display = "block";
// }

// // Show previous
// function slideLeft() {
//     reset();
//     sliderImages[current - 1].style.display = "block";
//     current--;
// }

// // Show next
// function slideRight() {
//     reset();
//     sliderImages[current + 1].style.display = "block";
//     current++;
// }

// // Left arrow click
// arrowLeft.addEventListener("click", function () {
//     if (current === 0) {
//         current = sliderImages.length;
//     }
//     slideLeft();
// });

// // Right arrow click
// arrowRight.addEventListener("click", function () {
//     if (current === sliderImages.length - 1) {
//         current = -1;
//     }
//     slideRight();
// });

