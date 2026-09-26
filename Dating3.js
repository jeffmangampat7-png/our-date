
// ==========================================
// PAGE NAVIGATION
// ==========================================

function nextPage(pageNumber) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(
            "page" + pageNumber
        );


    selectedPage.classList.add("active");

}



// ==========================================
// YES BUTTON
// ==========================================

const yesBtn =
    document.getElementById("yesBtn");


yesBtn.addEventListener(
    "click",
    function() {

        nextPage(3);

    }
);



// ==========================================
// NO BUTTON
// ==========================================

const noBtn =
    document.getElementById("noBtn");


noBtn.addEventListener(
    "mouseover",
    function() {

        moveNoButton();

    }
);


noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);



// ==========================================
// MOVE NO BUTTON
// ==========================================

function moveNoButton() {

    const maxX =
        window.innerWidth -
        noBtn.offsetWidth -
        20;


    const maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        20;


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

}



// ==========================================
// PLACE SELECTION
// ==========================================

const placeButtons =
    document.querySelectorAll(
        ".placeChoice"
    );


let selectedPlace = "";



placeButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {


                // Remove previous selection

                placeButtons.forEach(
                    function(item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                // Select this button

                button.classList.add(
                    "selected"
                );


                // Save value

                selectedPlace =
                    button.dataset.value;


                // Display selection

                document.getElementById(
                    "selectedPlace"
                ).innerText =
                    selectedPlace;

            }
        );

    }
);



// ==========================================
// PLAN SELECTION
// ==========================================

const planButtons =
    document.querySelectorAll(
        ".planChoice"
    );


let selectedPlan = "";



planButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {


                // Remove previous selection

                planButtons.forEach(
                    function(item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                // Select this button

                button.classList.add(
                    "selected"
                );


                // Save value

                selectedPlan =
                    button.dataset.value;


                // Display selection

                document.getElementById(
                    "selectedPlan"
                ).innerText =
                    selectedPlan;

            }
        );

    }
);



// ==========================================
// CONFIRM DATE
// ==========================================

function confirmDate() {

    const dateInput =
        document.getElementById(
            "dateInput"
        );


    const date =
        dateInput.value;


    const error =
        document.getElementById(
            "errorMessage"
        );


    // Check date

    if (date === "") {

        error.innerText =
            "Please choose a date first. 📅";

        return;

    }


    // Check place

    if (selectedPlace === "") {

        error.innerText =
            "Please choose a place. 📍";

        return;

    }


    // Check plan

    if (selectedPlan === "") {

        error.innerText =
            "Please choose our plan. 🍽️";

        return;

    }


    // Format date

    const selectedDate =
        new Date(
            date + "T00:00:00"
        );


    const options = {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    };


    const formattedDate =
        selectedDate.toLocaleDateString(
            "en-US",
            options
        );


    // Put information on Page 5

    document.getElementById(
        "finalDate"
    ).innerText =
        formattedDate;


    document.getElementById(
        "finalPlace"
    ).innerText =
        selectedPlace;


    document.getElementById(
        "finalPlan"
    ).innerText =
        selectedPlan;


    // Go to Page 5

    nextPage(5);

}

