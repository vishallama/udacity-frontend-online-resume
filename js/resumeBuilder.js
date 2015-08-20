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

