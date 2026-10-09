const sliders = document.querySelectorAll(".poster-container");

sliders.forEach(container => {
    const slider = container.querySelector(".poster-slider");
    const posters = container.querySelectorAll(".poster-slider > *");
    let index = 0;

    const show = i => {
        index = (i + posters.length) % posters.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    };
    container.querySelector(".poster-next").onclick = () => show(index + 1);
    container.querySelector(".poster-prev").onclick = () => show(index - 1);

    container.querySelectorAll(".poster-video").forEach(box => {
        const video = box.querySelector("video");
        box.onmouseenter = () => { video.currentTime = 0; video.play(); };
        box.onmouseleave = () => { video.pause(); video.currentTime = 0; };
    });
});