
const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "ar";

languageBtn.addEventListener("click", function () {

    const elements = document.querySelectorAll("[data-ar][data-en]");

    if (currentLanguage === "ar") {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        document.body.classList.add("english");

        elements.forEach(function (element) {
            element.textContent = element.getAttribute("data-en");
        });

        languageBtn.textContent = "العربية";

    } else {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        document.body.classList.remove("english");

        elements.forEach(function (element) {
            element.textContent = element.getAttribute("data-ar");
        });

        languageBtn.textContent = "English";
    }

});
