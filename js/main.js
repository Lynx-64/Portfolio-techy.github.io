//Here YOU CAn change the project Name Description<name,title< stuff. :)

const projects = [
  {
    id: 9,
    title: "Project Name",
    tools: "HTML, CSS, JS, React, Google Maps API, Foursquare [TOOLS Name Here]",
    img: "img/Neighborhood_Map.jpg",
    url: "",
    description:
      "Project Description HERE",
    alt: "Project Name"
  },
  {
    id: 8,
    title: "PROJECT Name",
    tools: "HTML, CSS, JS, React [tools name]",
    img: "img/My_Books.jpg",
    url: "",
    description:
      "PROJECT DESCRIPTION",
    alt: "PROJECT Name"
  },
  {
    id: 7,
    title: "PROJECT Name",
    tools: "HTML, CSS, JS, Sass [tools name]",
    img: "img/index_desktop_copia.jpg",
    url: "",
    description:
      "Project Name",
    alt: "PROject Name"
  },
  {
    id: 6,
    title: "PROject name",
    tools: "HTML, CSS, JS [tools name]",
    img: "img/Frogger_game.jpg",
    url: "",
    description:
      "Project DEscription",
    alt: "PROject Name"
  },
  {
    id: 5,
    title: "PRoject name",
    tools: "HTML, CSS, JS [tools name]",
    img: "img/Matching_Game2.jpeg",
    url: "",
    description:
      "project DEscription",
    alt: "PRoject Name"
  },
  {
    id: 4,
    title: "PRoject Name",
    tools: "HTML, CSS, JS (jQuery) [tools name]",
    img: "img/Pixel_Art_Maker.jpg",
    url: "",
    description:
      "Project Description",
    alt: "Project name"
  },
  {
    id: 3,
    title: "PROject Name",
    tools: "HTML, CSS",
    img: "img/Animal_Trading_Card2.jpg",
    url: "",
    description:
      "PROject DEScription",
    alt: "PROject NAme"
  },

  {
    id: 1,
    title: "Project Name",
    tools: "HTML, CSS, JS (jQuery) [Tools Name]",
    img: "img/Fortune_Cookie.jpg",
    url: "",
    description:
      "Project Description",
    alt: "Project Name"
  }
];
//THis TEMplate made by SHubham Mali

projects.forEach(function(project) {
  const worksList = document.getElementById("worksList");

  let textBox = document.createElement("div");
  textBox.className = "works__item__textbox";

  let container = document.createElement("div");
  container.className = "works__item";

  let title = document.createElement("h3");
  title.className = "works__item__textbox--h3";
  title.textContent = project.title;

  let p1 = document.createElement("p");
  p1.textContent = project.tools;

  let p2 = document.createElement("p");
  p2.textContent = project.description;

  let link = document.createElement("a");
  link.className = "works__item--more-btn";
  link.setAttribute("href", project.url);
  link.setAttribute("target", "_blank");
  link.textContent = "CODE LINKS/GITHUB LINK";

  let img = document.createElement("img");
  img.className = "works__item--img";
  img.setAttribute("src", project.img);
  img.setAttribute("alt", project.alt);

  textBox.appendChild(title);
  textBox.appendChild(p1);
  textBox.appendChild(p2);
  textBox.appendChild(link);

  container.appendChild(textBox);
  container.appendChild(img);

  worksList.appendChild(container);
});
//THis TEMplate made by SHubham Mali
