

// document.addEventListener('DOMContentLoaded', () => {

//   const closeIcon = document.getElementById('myCloseIcon');
//   closeIcon.addEventListener('mouseover', () => {
//     closeIcon.style.cursor = 'pointer';
//   });

//   closeIcon.addEventListener('click', () => {
//     myDiv.style.display = "none";
//   })

//   const div = document.getElementById('myDiv');

//   const myDiv = document.getElementById("myDiv");

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//       myDiv.classList.remove("hidden");
//       myDiv.classList.add("block");
//     } else {
//       myDiv.classList.add("hidden");
//       myDiv.classList.remove("block");
//     }
//   });
// });

// const modal = document.getElementById("modal");
// const openModal = document.getElementById("openModal");
// const closeModal = document.getElementById("closeModal");
// const closeModalButton = document.getElementById("closeModalButton");
// openModal.addEventListener("click", () => {
//   modal.classList.remove("hidden");
// });
// closeModal.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });
// closeModalButton.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.classList.add("hidden");
//   }
// });

const header = document.getElementById('header');
const languageDropdown = document.getElementById('languageDropdown');
const languageMenuIcon = document.getElementById('languageDropdownIcon');
const logo = document.getElementById('logo').getElementsByTagName('img')[0];

languageDropdown.classList.add('text-white');
logo.src = './assets/kotak-life-white-logo.svg';

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('bg-white');
        header.classList.remove('bg-transparent');
        header.classList.add('shadow-md');
        languageMenuIcon.style.filter = 'invert(1)';

        languageDropdown.classList.remove('text-white');
        languageDropdown.classList.add('text-gray-800');
        logo.src = './assets/kotak-logo.svg';
    } else {
        header.classList.remove('bg-white');
        header.classList.add('bg-transparent');
        header.classList.remove('shadow-md');
        languageMenuIcon.style.filter = 'invert(0)';

        languageDropdown.classList.add('text-white');
        languageDropdown.classList.remove('text-gray-800');
        logo.src = './assets/kotak-life-white-logo.svg';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModalButton1 = document.getElementById("openModalButton1");
    const openModalButton2 = document.getElementById("openModalButton2");
    const openModalButton3 = document.getElementById("openModalButton3");
    const openModalButton4 = document.getElementById("openModalButton4");
    const closeModalButton = document.getElementById("closeModalButton");
    const submitFormButton = document.getElementById("submitFormButton");
    const quoteForm = document.getElementById("quoteForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const formHeading = document.querySelector(".form-heading");
    const formDescription = document.querySelector(".form-description");

    function openModal() {
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
    }

    openModalButton1.addEventListener("click", openModal);
    openModalButton2.addEventListener("click", openModal);
    openModalButton3.addEventListener("click", openModal);
    openModalButton4.addEventListener("click", openModal);

    closeModalButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    submitFormButton.addEventListener("click", () => {
        quoteForm.classList.add("hidden");
        thankYouMessage.classList.remove("hidden");
        formHeading.classList.add("hidden");
        formDescription.classList.add("hidden");

        setTimeout(() => {
            closeModal();
        }, 50000000);
    });

});

const playPauseButton = document.getElementById('playPauseButton');
const video = document.getElementById('video');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

function changeImage(element, newSrc) {
    const img = element.querySelector('img');
    img.src = newSrc;
}

video.play();
pauseIcon.classList.remove('hidden');
playIcon.classList.add('hidden');

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        video.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

const muteUnmuteButton = document.getElementById('muteUnmuteButton');
const muteIcon = document.getElementById('muteIcon');
const unmuteIcon = document.getElementById('unmuteIcon');

muteUnmuteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteIcon.classList.add('hidden');
        unmuteIcon.classList.remove('hidden');
    } else {
        video.muted = true;
        muteIcon.classList.remove('hidden');
        unmuteIcon.classList.add('hidden');
    }
});

// let startX;
// const slider = document.querySelector('.overflow-x-auto');

// slider.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
// });

// slider.addEventListener('touchmove', (e) => {
//     if (!startX) return;
//     const moveX = e.touches[0].clientX - startX;
//     slider.scrollLeft -= moveX;
//     startX = e.touches[0].clientX;
// });

let startX;
let scrollLeft;
const slider = document.querySelector('.overflow-x-auto');
const cards = document.querySelectorAll('.overflow-x-auto .bg-white');  // Grabbing all cards
const cardWidth = cards[0].offsetWidth;  // Get the width of one card

// Start swipe action
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;  // Get the starting X position of touch
    scrollLeft = slider.scrollLeft;  // Get the current scroll position
});

// Move swipe action
slider.addEventListener('touchmove', (e) => {
    if (!startX) return;

    const moveX = e.touches[0].clientX - startX;  // Calculate the move distance
    slider.scrollLeft = scrollLeft - moveX;  // Adjust scroll position
});

// End swipe action
slider.addEventListener('touchend', () => {
    // Determine which card the scroll should land on
    const scrollDistance = slider.scrollLeft;  // The current scroll position
    const cardIndex = Math.round(scrollDistance / cardWidth);  // Calculate the index of the card

    // Scroll to the closest card
    slider.scrollLeft = cardIndex * cardWidth;
});


function switchTab(tabId) {
    const allTabButtons = document.querySelectorAll('.tab-button');
    allTabButtons.forEach(button => {
        button.classList.add('bg-[#FF0000]');
        button.classList.remove('active-tab')
        button.classList.remove('bg-transparent');
        button.classList.remove('text-[#2C2C2C]');
        button.classList.add('text-white');
        button.classList.add('border-[#FF0000]');
        button.classList.remove('shadow-[0_-5px_15px_#FF0000]');
    });

    const activeTabButton = document.getElementById(tabId);
    activeTabButton.classList.add('bg-transparent');
    activeTabButton.classList.add('active-tab')
    activeTabButton.classList.remove('bg-[#FF0000]');
    activeTabButton.classList.add('text-[#2C2C2C]');
    activeTabButton.classList.remove('text-white');
    activeTabButton.classList.add('border-[#FF0000]');
    activeTabButton.classList.add('shadow-[0_-5px_15px_#FF0000]');

    const allTabPanes = document.querySelectorAll('.tab-pane');
    allTabPanes.forEach(pane => {
        pane.classList.add('hidden');
    });

    const selectedTabContent = document.getElementById('content-' + tabId);
    selectedTabContent.classList.remove('hidden');

    const gen2genParagraph = document.getElementById('gen2gen-paragraph');
    const kotakEtermParagraph = document.getElementById('kotak-eterm-paragraph');
    gen2genParagraph.classList.add('hidden');
    kotakEtermParagraph.classList.add('hidden');

    if (tabId === 'tab-1') {
        gen2genParagraph.classList.remove('hidden');
    } else if (tabId === 'tab-2') {
        kotakEtermParagraph.classList.remove('hidden');
    }
}

window.onload = function () {
    const defaultTabId = 'tab-1';
    switchTab(defaultTabId);
};

document.addEventListener('DOMContentLoaded', () => {
    const hiddenSection = document.getElementById('hiddenSection');
    let isFirstScrollDown = false;
    let isSecondScrollDown = false;
    let lastScrollTop = 0;

    const handleScroll = () => {
        const currentScroll = window.scrollY || window.pageYOffset;

        if (currentScroll > lastScrollTop && isMobile()) {
            if (!isFirstScrollDown) {
                hiddenSection.style.transform = 'translateY(0)';
                hiddenSection.style.display = 'flex';
                muteUnmuteButton.style.display = 'none';
                playPauseButton.style.display = 'none';
                isFirstScrollDown = true;
            } else if (!isSecondScrollDown) {
                isSecondScrollDown = true;
            }
        } else if (currentScroll <= lastScrollTop && isSecondScrollDown && isMobile()) {
            if (currentScroll === 0) {
                hiddenSection.style.transform = 'translateY(100%)';
                hiddenSection.style.display = 'none';
                muteUnmuteButton.style.display = 'block';
                playPauseButton.style.display = 'block';
                isFirstScrollDown = false;
                isSecondScrollDown = false;
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    const handleResize = () => {
        if (!isMobile()) {
            hiddenSection.style.transform = 'translateY(100%)';
            hiddenSection.style.display = 'none';
            isFirstScrollDown = false;
            isSecondScrollDown = false;
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    function isMobile() {
        const mediaQuery = window.matchMedia('(max-width: 820px)');
        return mediaQuery.matches;
    }
});

document.getElementById('languageDropdown').addEventListener('click', function (event) {
    const menu = document.getElementById('languageMenu');
    menu.classList.toggle('hidden');
    event.stopPropagation();
});

window.addEventListener('click', function (event) {
    const menu = document.getElementById('languageMenu');
    const dropdownButton = document.getElementById('languageDropdown');
    if (!dropdownButton.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add('hidden');
    }
});

// document.getElementById('load-more').addEventListener('click', function () {
//   const hiddenItems = document.querySelectorAll('.faq-item-hidden');
//   const allItems = document.querySelectorAll('.faq-item-hidden, .faq-item-visible');

//   if (this.innerText === 'Load more faq') {
//     hiddenItems.forEach(item => {
//       item.classList.remove('faq-item-hidden');
//       item.classList.add('faq-item-visible');
//     });
//     this.innerText = 'Load less faq';
//   } else {
//     allItems.forEach(item => {
//       item.classList.remove('faq-item-visible');
//       item.classList.add('faq-item-hidden');
//     });
//     this.innerText = 'Load more faq';
//   }
// });

function openVideo(videoUrl) {
    const videoPopup = document.getElementById("videoPopup");
    const videoFrame = document.getElementById("videoFrame");
    videoFrame.src = videoUrl;
    videoPopup.classList.remove("hidden");
}
document.getElementById("closePopup").addEventListener("click", function () {
    const videoPopup = document.getElementById("videoPopup");
    const videoFrame = document.getElementById("videoFrame");
    videoFrame.src = '';
    videoPopup.classList.add("hidden");
});
const videoCards = document.querySelectorAll(".video-card");
videoCards.forEach(card => {
    card.addEventListener("click", function () {
        const videoUrl = card.getAttribute("data-video-url");
        openVideo(videoUrl);
    });
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
        var description = this.closest('.text-section').querySelector('p'); // Get the description inside the closest .text-section

        // Toggle the 'line-clamp-none' class on the description
        description.classList.toggle('line-clamp-none');
        
        // Update the button text based on the class
        this.textContent = description.classList.contains('line-clamp-none') ? 'Read Less' : 'Read More';
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    if (video) {
        video.play().catch((error) => {
            console.log("Video autoplay failed:", error);
        });
    }
});
