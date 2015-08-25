/*
This file contains all of the code needed to create four JSONs corresponding
to four distinct sections in index.html: work, education, projects and a
header with biographical information.

In addition, this file also uses code from helper.js to render index.html
correctly.
 */


/* JSON object containing biographical info */
var bio = {
  'name': 'Vishal Lama',
  'role': 'Web Developer',
  'contacts': {
    'mobile': '123-456-7890',
    'email': 'contact@vishallama.org',
    'github': 'vishallama',
    'twitter': '@vishallama',
    'location': 'Cedar City, UT'
  },
  'welcomeMessage': 'Welcome!',
  'skills': [
    'Python',
    'JavaScript',
    'SML(NJ)',
    'Scala',
    'HTML/CSS',
    'Bootstrap',
    'Linux'
  ],
  'biopic': 'images/vishal.png'
};

bio.display = function() {
  var formattedName = HTMLheaderName.
    replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.
    replace('%data%', bio.role);

  var formattedMobile = HTMLmobile.
    replace('%data%', bio.contacts.mobile);
  var formattedEmail= HTMLemail.
    replace('%data%', bio.contacts.email);
  var formattedTwitter= HTMLtwitter.
    replace('%data%', bio.contacts.twitter);
  var formattedGithub = HTMLgithub.
    replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.
    replace('%data%', bio.contacts.location);

  var formattedBioPic = HTMLbioPic.
    replace('%data%', bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.
    replace('%data%', bio.welcomeMessage);

  var contactItems = [
    formattedMobile,
    formattedEmail,
    formattedTwitter,
    formattedGithub,
    formattedLocation
  ];

  $('#header').
    prepend(formattedName + formattedRole).
    append(formattedBioPic + formattedWelcomeMessage).
    append(HTMLskillsStart);

  $('#topContacts').prepend(contactItems);
  $('#footerContacts').prepend(contactItems);

  bio.skills.forEach(function (skill) {
    var formattedSkill = HTMLskills.replace('%data%', skill);
    $('#skills').append(formattedSkill);
  });
};


/* JSON object containing work info */
var work = {
  'jobs': [
    {
      'employer': 'Arabic and Indian Foods LLC',
      'title': 'Co-owner',
      'location': 'Phoenix, AZ',
      'dates': '2014 - 2015',
      'description': 'Ran and managed a spice store.'
    },
    {
      'employer': 'New York Delicious Frozen Yogurt',
      'title': 'Co-owner',
      'location': 'New York City, NY',
      'dates': '2013 - 2014',
      'description': 'Ran and managed a family-owned frozen yogurt store.'
    },
    {
      'employer': 'Some Cool University',
      'title': 'TA',
      'location': 'San Francisco',
      'dates': '2011 - 2013',
      'description': 'Teaching assistant in undergrad math and computer ' +
      'science courses, including graph theory, type theory, functional ' +
      'programming, and logic.'
    },
    {
      'employer': 'Southern Utah University',
      'title': 'Tutor, Grader and TA',
      'location': 'Cedar City, UT',
      'dates': '2006 - 2011',
      'description': 'Tutored, graded HW and performed TA-related tasks' +
      ' for a variety of math and computer science courses, including ' +
      'calculus, probability and statistics, linear algebra, college ' +
      'algebra, introductory logic, and introductory java programming.'
    }
  ]
};

work.display =  function(){
  work.jobs.forEach(function(workEntry) {
    var formattedWorkEmployer = HTMLworkEmployer.
      replace('%data%', workEntry.employer);
    var formattedWorkTitle = HTMLworkTitle.
      replace('%data%', workEntry.title);
    var formattedWorkLocation = HTMLworkLocation.
      replace('%data%', workEntry.location);
    var formattedWorkDates = HTMLworkDates.
      replace('%data%', workEntry.dates);
    var formattedWorkDescription = HTMLworkDescription.
      replace('%data%', workEntry.description);

    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').
      append(
      formattedWorkEmployer +
      formattedWorkTitle +
      formattedWorkLocation +
      formattedWorkDates +
      formattedWorkDescription
    );
  });
};


/* JSON object containing info on projects */
var projects = {
  'projects': [
    {
      'title': 'Udacity Front-End Web Developer Nanodegree - Portfolio Site',
      'dates': '2015',
      'description': 'One-page fully-responsive website to display a ' +
      'portfolio of projects. Written using HTML, CSS, jQuery, and Bootstrap.',
      'images': [
        'images/udacity-frontend-portfolio-img01-300x150xs.png',
        'images/udacity-frontend-portfolio-img02-300x150xs.png'
      ]
    },
    {
      'title': 'Udacity Front-End Web Developer Nanodegree - Online Resume',
      'dates': '2015',
      'description': 'One-page responsive website for displaying an ' +
      'interactive online resume. Written using HTML, CSS, JavaScript, and ' +
      'jQuery.',
      'images': [
        'images/udacity-fullstack-movie-trailer-img02-300x150xs.png',
        'images/udacity-fullstack-movie-trailer-img03-300x150xs.png'
      ]
    },
    {
      'title': 'Udacity Full Stack Web Developer Nanodegree - Movie Trailer ' +
      'Website',
      'dates': '2015',
      'description': 'One-page responsive website for displaying movie ' +
      'trailers. Written using HTML, CSS, jQuery, and Bootstrap.',
      'images': [
        'images/udacity-fullstack-movie-trailer-img01-300x150xs.png',
        'images/udacity-fullstack-movie-trailer-img04-300x150xs.png'
      ]
    }
  ]
};

projects.display = function(){
  projects.projects.forEach(function(project) {
    var formattedProjectTitle = HTMLprojectTitle.
      replace('%data%', project.title);
    var formattedProjectDates = HTMLprojectDates.
      replace('%data%', project.dates);
    var formattedProjectDescription = HTMLprojectDescription.
      replace('%data%', project.description);

    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(
      formattedProjectTitle +
      formattedProjectDates +
      formattedProjectDescription
    );

    project.images.forEach(function (imageUrl) {
      var formattedProjectImage = HTMLprojectImage.
        replace('%data%', imageUrl);
      $('.project-entry:last').append(formattedProjectImage);
    });
  });
};


/* JSON object containing education info */
var education = {
  'schools': [
    { 'name': 'Some Cool University',
      'location': 'San Francisco, CA',
      'degree': 'MS',
      'majors': ['Computer Science'],
      'dates': '2011-2013',
      'url': 'http://www.stanford.edu'
    },
    {
      'name': 'Southern Utah University',
      'location': 'Cedar City, UT',
      'degree': 'BS',
      'majors': ['Math (Pure)'],
      'dates': 2011,
      'url': 'http://www.suu.edu'
      }
  ],
  'onlineCourses': [
    {
      'title': 'Intro to HTML and CSS',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
    },
    {
      'title': 'Responsive Web Design Fundamentals',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
    },
    {
      'title': 'Responsive Images',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/responsive-images--ud882'
    },
    {
      'title': 'JavaScript Basics',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/javascript-basics--ud804'
    },
    {
      'title': 'Linux Command Line Basics',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/linux-command-line-basics--ud595'
    },
    {
      'title': 'How to Use Git and GitHub',
      'school': 'Udacity',
      'date': 2015,
      'url':'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
    },
    {
      'title': 'Programming Foundations with Python',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/programming-foundations-with-python--ud036'
    },
    {
      'title': 'Intro to Relational Databases',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/intro-to-relational-databases--ud197'
    },
    {
      'title': 'Intro to DevOps',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/intro-to-devops--ud611'
    },
    {
      'title': 'Configuring Linux Web Servers',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/configuring-linux-web-servers--ud299'
    }
  ]
};

education.display = function () {
  education.schools.forEach(function (school) {
    var formattedSchoolName = HTMLschoolName.
      replace('#', school.url).
      replace('%data%', school.name);
    var formattedSchoolDegree = HTMLschoolDegree.
      replace('%data%', school.degree);
    var formattedSchoolDates = HTMLschoolDates.
      replace('%data%', school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.
      replace('%data%', school.location);

    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(
      formattedSchoolName +
      formattedSchoolDegree +
      formattedSchoolDates +
      formattedSchoolLocation
    );

    school.majors.forEach(function (major) {
      var formattedSchoolMajor = HTMLschoolMajor.
        replace('%data%', major);
      $('.education-entry:last').append(formattedSchoolMajor);
    });
  });

  $('#education').append(HTMLonlineClasses);
  education.onlineCourses.forEach(function (onlineCourse) {
    var formattedOnlineTitle = HTMLonlineTitle.
      replace('%data%', onlineCourse.title).
      replace('#', onlineCourse.url);
    var formattedOnlineSchool = HTMLonlineSchool.
      replace('%data%', onlineCourse.school);
    var formattedOnlineDates = HTMLonlineDates.
      replace('%data%', onlineCourse.date);

    $('#education').append(HTMLonlineClassStart);
    $('.education-entry:last').append(
      formattedOnlineTitle +
      formattedOnlineSchool +
      formattedOnlineDates
    );
  });
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

/* Education */
education.display();

/* Append internationalizeButton to the main div */
$('#main').append(internationalizeButton);

/* Add a google map */
$('#map-div').append(googleMap);

