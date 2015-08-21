/*

This file contains all of the code needed to create four JSONs corresponding
to four distinct sections in index.html: work, education, projects and a
header with biographical information.

In addition, this file also uses code from helper.js to render index.html
correctly.

 */


/* JSON object containing biographical info */
var bio = {
    name: "Vishal Lama",
    role: "Web Developer",
    contacts: {
        mobile: "123-456-7890",
        email: "contact@vishallama.org",
        github: "vishallama",
        twitter: "@vishallama",
        location: "Cedar City, UT"
    },
    welcomeMessage: "Welcome!",
    skills: ["Python", "JavaScript", "HTML/CSS", "Bootstrap", "Linux"],
    biopic: "images/vishal.png",
    display: function() {
    }
};

/* JSON object containing education info */
var education = {
    // An array of objects containing info on education degrees
    schools: [
        {
            name: "Southern Utah University",
            location: "Cedar City, UT",
            degree: "BS",
            majors: ["Math (Pure)"],
            dates: 2011,
            url: ""
        }
    ],
    // Array of objects containing info on online courses
    onlineCourses: [
        {
            title: "Intro to HTML and CSS",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            title: "Responsive Web Design Fundamentals",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            title: "Responsive Images",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            title: "JavaScript Basics",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            title: "Linux Command Line Basics",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/linux-command-line-basics--ud595"
        },
        {
            title: "How to Use Git and GitHub",
            school: "Udacity",
            date: 2015,
            url:"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            title: "Programming Foundations with Python",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/programming-foundations-with-python--ud036"
        },
        {
            title: "Intro to Relational Databases",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/intro-to-relational-databases--ud197"
        },
        {
            title: "Intro to DevOps",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/intro-to-devops--ud611"
        },
        {
            title: "Configuring Linux Web Servers",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com/course/configuring-linux-web-servers--ud299"
        }
    ],
    display: function () {
    }
};

/* JSON object containing work info */
var work = {
    // Array of objects containing previous jobs info
    jobs: [
        {
            employer: "Arabic and Indian Foods LLC",
            title: "Co-owner",
            location: "Cedar City, UT",
            dates: "2012 - 2015",
            description: "Ran and managed a grocery store."
        },
        {
            employer: "Cedar City Yogurt LLC",
            title: "Co-owner",
            location: "Cedar City, UT",
            dates: "2014 - 2015",
            description: "Ran and managed a family-owned frozen yogurt store."
        }
    ],
    display: function(){
    }
};

/* JSON object containing info on projects */
var projects = {
    // Array of objects containing info on projects worked
    projects: [
        {
            title: "Udacity Front-End Web Developer Nanodegree - Portfolio Site",
            dates: "2015",
            description: "One-page fully-responsive website to display a portfolio of " +
            "projects. Written using HTML, CSS, jQuery, and Bootstrap.",
            images: ["images/udacity-frontend-portfolio-img01-600x300small.png",
                     "udacity-frontend-portfolio-img02-600x300small.png"]
        },
        {
            title: "Udacity Front-End Web Developer Nanodegree - Online Resume",
            dates: "2015",
            description: "One-page responsive website for displaying an interactive " +
            "online resume. Written using HTML, CSS, JavaScript, and jQuery.",
            images: []
        },
        {
            title: "Udacity Full Stack Web Developer Nanodegree - Movie Trailer Website",
            dates: "2015",
            description: "One-page responsive website for displaying movie trailers. " +
            "Written using HTML, CSS, jQuery, and Bootstrap.",
            images: ["udacity-fullstack-movie-trailer-img01-600x300small.png",
                     "udacity-fullstack-movie-trailer-img04-600x300small.png"]
        }
    ],
    display: function(){
    }
};
