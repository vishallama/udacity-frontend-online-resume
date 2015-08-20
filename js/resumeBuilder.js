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
}

