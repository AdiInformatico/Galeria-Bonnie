const BONICZKA = document.querySelectorAll(".boniczka img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector (".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const ShowNextImg = () => {
    if (currentImgIndex === BONICZKA.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUP_IMG.src = BONICZKA[currentImgIndex].src;
}

const ShowPreviousImg = () =>{
    if (currentImgIndex === 0) {
        currentImgIndex = BONICZKA.length - 1;
    } else {
        currentImgIndex--;
    }
    POPUP_IMG.src = BONICZKA[currentImgIndex].src;
}

const closepopup = () => {
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
    }, 300);
};

const showpopup = () => {           
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
    BONICZKA.forEach((Element) => {
        Element.setAttribute("tabindex", -1);
    });
};

BONICZKA.forEach((boniczka, index) => {
    boniczka.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
});
});

POPUP_CLOSE.addEventListener("click", closepopup);

ARROW_RIGHT.addEventListener("click", ShowNextImg);

ARROW_LEFT.addEventListener("click", ShowPreviousImg);

document.addEventListener("keydown", (e) => {

  if(!POPUP.classList.contains("hidden"))

    if (e.key === "ArrowRight") {
        ShowNextImg();
    }

    if (e.key === "ArrowLeft") {
        ShowPreviousImg();
    }
    if (e.key === "Enter") {
        showpopup();
    }

    if (e.code === "Escape") {
        closepopup();
    }
})

POPUP.addEventListener("click", (e) => {
   if (e.target === POPUP) {
    closepopup();
   }
})