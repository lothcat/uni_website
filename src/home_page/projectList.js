// define an array of project data

const projects = [{
    name: "Haus Aus Mokka Online Ordering",
    lastModified: "6-16-2021",
    link: "../projects/final_project/html"
},
{
    name:"Who is Bjarke Ingels",
    lastModified: "1-22-2021",
    link: "http://sfernald.greenriverdev.com/117/final_project/"
},
{
    name:"Big Cat Guessing Game",
    lastModified: "6-3-2021",
    link:"/blah2.html"
},
{
    name:"Tea Party To-do List",
    lastModified: "5-26-2021",
    link:"/blahblah.html"
},
{
    name:"Grade Calculator",
    lastModified: "5-16-2021",
    link:"/blahblah.html"
},
{
    name:"Tic-Tac_Toe: Arrow Function Practice",
    lastModified: "5-10-2021",
    link:"/blahblah.html"
},
{
    name:"Flower Quiz",
    lastModified: "4-30-2021",
    link:"/blahblah.html"
},
{
    name:"Pick A Pet Quiz",
    lastModified: "4-28-2021",
    link:"/blahblah.html"
},
{
    name:"The Venture Brother's Simple Contact List",
    lastModified: "4-5-2021",
    link:"/blahblah.html"
},
{
    name:"Red Ball Pizza Home Page Mock-up",
    lastModified: "3-4-2021",
    link:"/blahblah.html"
},
{
    name:"Lakescape Lodge Home Page Mock-up",
    lastModified: "2-3-2021",
    link:"/blahblah.html"
},
{
    name:"About Me",
    lastModified: "1-14-2021",
    link:"/blahblah.html"
}
];

// get reference to the project-list element (get method by id)

const projectListElement = document.getElementById("project-list");

// iterate through projects and for each, append the project info to the DOM

projects.forEach(project => {
    const listItem = document.createElement("li");

    const title = document.createElement("a");
    title.href = project.link;
    title.innerHTML = project.name;

    const date = document.createElement("p");
    date.innerHTML = project.lastModified;

    listItem.append(title);
    listItem.append(date);

    projectListElement.append(listItem);
});