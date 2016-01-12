//  create bio object and display it on resume
var bio = {
    "name": "Quantong Shen",
    "role": "Research assistant",

    "contacts": {
        "mobile": "732 874 3985",
        "email": "quantongshen@gmail.com",
        "github": "https://github.com/qqttss",
        "location": "Highland Park, NJ"
    },

    "welcomemessage": "Hello, I'm in transition to look for a position of front-end web development",

    "skills": [
        "HTML5, CSS3, and Object-Oriented Javascript", "jQuery, Knockout.js, Angular.js, Bootstrap, D3.js, Jasmine, AJAX", "Gulp, Grunt and node.js",
        "Git/Github, Adobe Photoshop."
    ],

    "biopic": "images/fry.jpg"
};

bio.displayBio = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

    //  add contact info to footer
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedLocation);

};

bio.displayBio();

//  create work object and display it on resume
var work = {
    "jobs": [{
        "employer": "Udacity Front-End Web Development Nanodegree",
        "title": "Web Developer",
        "dates": "2015 ~ present",
        "location": "Highland Park, NJ",
        "workDescription": "Work on responsive design, rendering, and problem solving to provide exceptional user support and user experience"
    }, {
        "employer": "Rutgers, The State University New Jersey - New Brunswick",
        "title": "Research assistant",
        "dates": "2009 ~ present",
        "location": "Piscataway, NJ",
        "workDescription": "Exploring physical and chemical porperties of mestals and semiconduntors with state-of-art surface science techniques"
    }],
};

work.displayWork = function() {
    var len = work.jobs.length;

    for (var job = 0; job < len; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

work.displayWork();

//  create myProject object and display it on resume
var myProject = {
    "projects": [{
        "title": "Neighborhood Map:",
        "dates": "Oct. 2015 ~ Nov 2014",
        "projectDescription": "Developed single-page, responsive application built with Knockout.js framework, AJAX and Wikipedia API",
        "projectImage": ["images/197x148.gif", "images/197x148.gif"]
    }, {
        "title": "Website Optimization:",
        "dates": "Sept. 2015 ~ Oct. 2015",
        "projectDescription": "Optimized critical rendering path of existing website and eliminated inefficiencies in the website's scroll animation",
        "projectImage": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

myProject.displayProject = function() {
    var len = myProject.projects.length;

    for (var project = 0; project < len; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", myProject.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", myProject.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", myProject.projects[project].projectDescription);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", myProject.projects[project].projectImage[0]);
        $(".project-entry:last").append(formattedProjectImage);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", myProject.projects[project].projectImage[1]);
        $(".project-entry:last").append(formattedProjectImage);
    }
};

myProject.displayProject();

// create visualChart object, adding two interactive charts created using D3.js
var visualChart = {};

visualChart.display = function() {
    $("#projects").append('<div class="project-entry"></div>');
    $(".project-entry:last").append('<a href="#">Interactive Charts</a>');

    var formattedProjectDates = HTMLprojectDates.replace("%data%", "July 2015 ~ Aug. 2015");
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", "Used D3.js to create interactive bar chart and pie chart");
    $(".project-entry:last").append(formattedProjectDescription);

    $(".project-entry:last").append('<div id="project-chart"></div>');
    $("#project-chart").append('<div id="fig-one"></div>');
    $("#project-chart").append('<div id="fig-two"></div>');

    // create interactive pie chart
    var width = 320;
    var height = 320;
    var dataset = [30, 15, 43, 55, 13, 38];

    var svg = d3.select("#fig-one")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var pie = d3.layout.pie();

    var piedata = pie(dataset);

    var outerRadius = 140;
    var innerRadius = 70;

    var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    var color = d3.scale.category10();

    var arcs = svg.selectAll("g")
        .data(piedata)
        .enter()
        .append("g")
        .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", function(d) {
            return arc(d);
        });

    arcs.on("mouseover", function(d, i) {
        d3.select(this)
            .append("text")
            .attr("transform", function(d) {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text(function(d) {
                return d.data;
            })
            .transition()
            .ease(500);
    });

    arcs.on("mouseout", function() {
        d3.select(this)
            .select("text")
            .remove();
    });

    console.log(dataset);
    console.log(piedata);

    // create interactive Histogram
    var width = 320;
    var height = 320;

    var svg = d3.select("#fig-two")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var padding = {
        left: 25,
        right: 25,
        top: 20,
        bottom: 20
    };

    var dataset = [10, 20, 30, 40, 33, 22, 8];

    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([0, width - padding.left - padding.right]);

    var yScale = d3.scale.linear()
        .domain([0, d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var rectPadding = 4;

    var rects = svg.selectAll(".MyRect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "MyRect")
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d, i) {
            return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
            return yScale(d);
        })
        .attr("width", xScale.rangeBand() - rectPadding)
        .attr("height", function(d) {
            return height - padding.top - padding.bottom - yScale(d);
        })
        .attr("fill", "steelblue")
        .on("mouseover", function(d, i) {
            d3.select(this)
                .attr("fill", "yellow");
        })
        .on("mouseout", function(d, i) {
            d3.select(this)
                .transition()
                .duration(500)
                .attr("fill", "steelblue");
        });

    var texts = svg.selectAll(".MyText")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class", "MyText")
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d, i) {
            return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
            return yScale(d);
        })
        .attr("dx", function() {
            return (xScale.rangeBand() - rectPadding) / 2;
        })
        .attr("dy", function(d) {
            return 20;
        })
        .text(function(d) {
            return d;
        });

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
        .call(yAxis);
};   //  end visualChart.display

visualChart.display();

//  create education object and display it on resume
var education = {
    "schools": [{
        "name": "The Chinese Academy of Sciences",
        "degree": "Doctor of Philosophy",
        "dates": "2001 ~ 2008",
        "location": "Beijing, China",
        "major": ["Physics"],
        "url": "htp://example.com"
    }, {
    "name": "Nanjing University, China",
        "degree": "BS",
        "dates": "2001",
        "location": "Nanjing, China",
        "major": ["Physics"],
        "url": "htp://example.com"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "July 2015 ~ Jan. 2016",
        "url": "https://www.udacity.com/"
    }]
};

education.displayEducation = function() {
    var len = education.schools.length;

    for (var i = 0; i < len; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedMajor);
    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var len = education.onlineCourses.length;

    for (var i = 0; i < len; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedTitleSchool = formattedOnlineTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedURL);
    }
};

education.displayEducation();

// fucntion for internationalizing name when pressing the internationalizing button
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

//  add the internationalizing button to resume
$("#main").append('<div class="project-entry"></div>');
$(".project-entry:last").append(internationalizeButton);

//  add interactive google map to the resume
$("#mapDiv").append(googleMap);