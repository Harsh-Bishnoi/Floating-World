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

$('.img-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 3.5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2.5
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
