/* --------------------------------
   CLUB DATA
----------------------------------*/

const clubData = {

    "Coding Club": {
        description:
            "The Coding Club helps students improve their programming skills and explore software development.",

        activities: [
            "Competitive Programming",
            "Web Development Workshops",
            "Hackathons",
            "Coding Competitions"
        ]
    },

    "Photography Club": {
        description:
            "The Photography Club provides students with a platform to explore photography and visual storytelling.",

        activities: [
            "Photography Workshops",
            "Photo Walks",
            "Photography Competitions",
            "Photo Exhibitions"
        ]
    },

    "Sports Club": {
        description:
            "The Sports Club promotes fitness, teamwork, and sportsmanship among students.",

        activities: [
            "Football",
            "Cricket",
            "Basketball",
            "Athletics",
            "Inter-College Competitions"
        ]
    },

    "Literary Club": {
        description:
            "The Literary Club encourages creativity, reading, writing, public speaking, and critical thinking.",

        activities: [
            "Debates",
            "Essay Writing",
            "Poetry",
            "Story Writing",
            "Book Discussions"
        ]
    },

    "Music Club": {
        description:
            "The Music Club provides opportunities for students interested in singing, instruments, and musical performances.",

        activities: [
            "Singing",
            "Instrumental Performances",
            "Music Workshops",
            "College Cultural Programs"
        ]
    },

    "Social Service Club": {
        description:
            "The Social Service Club encourages students to participate in activities that benefit the community.",

        activities: [
            "Community Service",
            "Blood Donation Camps",
            "Awareness Campaigns",
            "Donation Drives",
            "Environmental Activities"
        ]
    }

};


/* --------------------------------
   SEARCH AND FILTER
----------------------------------*/

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const clubCards =
    document.querySelectorAll(".club-card");

const noResults =
    document.getElementById("noResults");


function filterClubs() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedCategory =
        categoryFilter.value;

    let visibleClubs = 0;


    clubCards.forEach(function(card) {

        const clubName =
            card.dataset.name.toLowerCase();

        const clubCategory =
            card.dataset.category;


        const matchesSearch =
            clubName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            clubCategory === selectedCategory;


        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

            visibleClubs++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleClubs === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* Listen for search input */

searchInput.addEventListener(
    "input",
    filterClubs
);


/* Listen for category selection */

categoryFilter.addEventListener(
    "change",
    filterClubs
);


/* --------------------------------
   CLUB DETAILS MODAL
----------------------------------*/

const modal =
    document.getElementById("clubModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalActivities =
    document.getElementById("modalActivities");


function showClubDetails(clubName) {

    const club =
        clubData[clubName];


    if (!club) {
        return;
    }


    modalTitle.textContent =
        clubName;


    modalDescription.textContent =
        club.description;


    modalActivities.innerHTML = "";


    club.activities.forEach(function(activity) {

        const listItem =
            document.createElement("li");

        listItem.textContent =
            activity;

        modalActivities.appendChild(
            listItem
        );

    });


    modal.style.display = "flex";

}


function closeModal() {

    modal.style.display = "none";

}


/* Close modal when clicking outside */

window.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* --------------------------------
   REGISTRATION FORM
----------------------------------*/

const registrationForm =
    document.getElementById("registrationForm");

const successMessage =
    document.getElementById("successMessage");


registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const studentName =
            document.getElementById(
                "studentName"
            ).value;

        const clubName =
            document.getElementById(
                "clubSelect"
            ).value;


        successMessage.textContent =
            "Thank you, " +
            studentName +
            "! You have successfully registered for the " +
            clubName +
            ".";


        registrationForm.reset();


        setTimeout(function() {

            successMessage.textContent = "";

        }, 5000);

    }
);


/* --------------------------------
   NAVIGATION ACTIVE EFFECT
----------------------------------*/

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            navLinks.forEach(function(item) {

                item.classList.remove("active");

            });


            link.classList.add("active");

        }
    );

});