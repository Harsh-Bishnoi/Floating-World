// faq
function toggleAccordion(button) {
    const allAccordions = document.querySelectorAll(".accordin-data");
    const allIcons = document.querySelectorAll(
        ".accordin-button span:last-child"
    );

    const paragraph = button.nextElementSibling;
    const icon = button.querySelector("span:last-child");

    allAccordions.forEach((otherParagraph) => {
        if (otherParagraph !== paragraph) {
            otherParagraph.style.maxHeight = null;
        }
    });

    allIcons.forEach((otherIcon) => {
        if (otherIcon !== icon) {
            otherIcon.classList.add("after:rotate-90");
        }
    });

    if (paragraph.style.maxHeight) {
        paragraph.style.maxHeight = null;
        icon.classList.add("after:rotate-90");
    } else {
        paragraph.style.maxHeight = paragraph.scrollHeight + "px";
        icon.classList.remove("after:rotate-90");
    }
}