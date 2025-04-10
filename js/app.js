// faq
function toggleAccordion(button) {
    const paragraph = button.nextElementSibling;
    const icon = button.querySelector(".rotate-icon");

    const allParagraphs = document.querySelectorAll(".accordin-data");
    const allIcons = document.querySelectorAll(".rotate-icon");


    allParagraphs.forEach(p => {
        if (p !== paragraph) {
            p.style.maxHeight = null;
        }
    });

    allIcons.forEach(i => {
        if (i !== icon) {
            i.classList.remove("rotate-180");
        }
    });

    if (paragraph.style.maxHeight) {
        paragraph.style.maxHeight = null;
        icon.classList.remove("rotate-180");
    } else {
        paragraph.style.maxHeight = paragraph.scrollHeight + "px";
        icon.classList.add("rotate-180");
    }
}


$('.slider').slick({
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 4000,
    slidesToScroll: 4,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 685,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1.8,
            }
        }
    ]
});


$('.img-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});