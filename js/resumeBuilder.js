/*

This file contains all of the code needed to create four JSONs corresponding
to four distinct sections in index.html: work, education, projects and a
header with biographical information.

In addition, this file also uses code from helper.js to render index.html
correctly.

 */


/* JSON object containing biographical info */
var bio = {
    "name": "Vishal Lama",
    "role": "Web Developer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "contact@vishallama.org",
        "github": "vishallama",
        "twitter": "@vishallama",
        "location": "Cedar City, UT"
    },
    "welcomeMessage": "Welcome!",
    "skills": [
        "Python",
        "JavaScript",
        "SML(NJ)",
        "Scala",
        "HTML/CSS",
        "Bootstrap",
        "Linux"
    ],
    "biopic": "images/vishal.png",
    "display": function() {
        // Name and Role
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        // Contact items
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail= HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        // Bio pic and Welcome Message
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        // Array of contact items that go in the header and footer
        var contactItems = [
            formattedMobile,
            formattedEmail,
            formattedTwitter,
            formattedGithub,
            formattedLocation
        ];

        // Add name and role at the top in the header
        $("#header").prepend(formattedName, formattedRole);

        // Add contact items in the header and footer
        $("#topContacts").prepend(contactItems);
        $("#footerContacts").prepend(contactItems);

        // Add bio pic and welcome message after topContacts in header
        $("#header").append(formattedBioPic, formattedWelcomeMessage);

        // Add skills heading after the welcome message
        $("#header").append(HTMLskillsStart);

        // Loop through skills array and insert each element into skills list
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

/* JSON object containing work info */
var work = {
    // Array of objects containing info on previous jobs
    "jobs": [
        {
            "employer": "Cedar City Yogurt LLC",
            "title": "Co-owner",
            "location": "Cedar City, UT",
            "dates": "2014 - 2015",
            "description": "Ran and managed a family-owned frozen yogurt store."
        },
        {
            "employer": "Arabic and Indian Foods LLC",
            "title": "Co-owner",
            "location": "Cedar City, UT",
            "dates": "2012 - 2015",
            "description": "Ran and managed a grocery store."
        },
        {
            "employer": "Southern Utah University",
            "title": "Tutor, Grader and TA",
            "location": "Cedar City, UT",
            "dates": "2006- 2011",
            "description": "Tutored, graded HW and performed TA-related tasks " +
            "for a variety of math and computer science courses, including " +
            "calculus, probability and statistics, linear algebra, college " +
            "algebra, introductory logic, and introductory java programming."
        }
    ],
    "display": function(){
        // Loop through jobs array and add each item after work heading
        work.jobs.forEach(function(workEntry) {
            // Create formatted items for each job
            var formattedWorkEmployer = HTMLworkEmployer.
                replace("%data%", workEntry.employer);
            var formattedWorkTitle = HTMLworkTitle.
                replace("%data%", workEntry.title);
            var formattedWorkLocation = HTMLworkLocation.
                replace("%data%", workEntry.location);
            var formattedWorkDates = HTMLworkDates.
                replace("%data%", workEntry.dates);
            var formattedWorkDescription = HTMLworkDescription.
                replace("%data%", workEntry.description);

            // Append all the items for each job
            $("#workExperience").
                append(
                HTMLworkStart,
                formattedWorkEmployer,
                formattedWorkTitle,
                formattedWorkLocation,
                formattedWorkDates,
                formattedWorkDescription
            );
        });
    }
};

/* JSON object containing info on projects */
var projects = {
    // Array of objects containing info on projects worked
    "projects": [
        {
            "title": "Udacity Front-End Web Developer Nanodegree - Portfolio Site",
            "dates": "2015",
            "description": "One-page fully-responsive website to display a portfolio of " +
            "projects. Written using HTML, CSS, jQuery, and Bootstrap.",
            "images": [
                "images/udacity-frontend-portfolio-img01-600x300small.png",
                "images/udacity-frontend-portfolio-img02-600x300small.png"
            ]
        },
        {
            "title": "Udacity Front-End Web Developer Nanodegree - Online Resume",
            "dates": "2015",
            "description": "One-page responsive website for displaying an interactive " +
            "online resume. Written using HTML, CSS, JavaScript, and jQuery.",
            "images": [
                "images/",
                "images/"
            ]
        },
        {
            "title": "Udacity Full Stack Web Developer Nanodegree - Movie Trailer Website",
            "dates": "2015",
            "description": "One-page responsive website for displaying movie trailers. " +
            "Written using HTML, CSS, jQuery, and Bootstrap.",
            "images": [
                "images/udacity-fullstack-movie-trailer-img01-600x300small.png",
                "images/udacity-fullstack-movie-trailer-img04-600x300small.png"
            ]
        }
    ],
    "display": function(){
        // Loop through projects and add each item
        projects.projects.forEach(function(project) {
            // Create formatted HTML strings for each project
            var formattedProjectTitle = HTMLprojectTitle.
                replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.
                replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.
                replace("%data%", project.description);

            // Add the formatted strings after projects header
            $("#projects").append(
                HTMLprojectStart,
                formattedProjectTitle,
                formattedProjectDates,
                formattedProjectDescription
            );

            // Now add project image urls
            project.images.forEach(function (imageUrl) {
                var formattedProjectImage = HTMLprojectImage.
                    replace("%data%", imageUrl);
                $("#projects").append(formattedProjectImage);
            });

        });
    }
};

/* JSON object containing education info */
var education = {
    // An array of objects containing info on education degrees
    "schools": [
        {
            "name": "Southern Utah University",
            "location": "Cedar City, UT",
            "degree": "BS",
            "majors": ["Math (Pure)"],
            "dates": 2011,
            "url": ""
        }
    ],
    // Array of objects containing info on online courses
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "Linux Command Line Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/linux-command-line-basics--ud595"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "date": 2015,
            "url":"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"
        },
        {
            "title": "Intro to Relational Databases",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/intro-to-relational-databases--ud197"
        },
        {
            "title": "Intro to DevOps",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/intro-to-devops--ud611"
        },
        {
            "title": "Configuring Linux Web Servers",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/configuring-linux-web-servers--ud299"
        }
    ],
    "display": function () {
    }
};


/*
Execute display() from each object to render index.html correctly
 */

/* Bio */
bio.display();

/* Work */
work.display();

/* Projects */
projects.display();

