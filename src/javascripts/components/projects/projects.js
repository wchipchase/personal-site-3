import util from '../../helpers/util';
import projectsData from '../../helpers/data/projectsData';


const printProjects = () => {
  let st = '';
  projectsData.getProjects().then((projects) => {
    projects.forEach((prj) => {
      // st += `<form id=form${prj.id}>`;
      // st += '<div class= "row">';
      st += `<div id="card${prj.id}" class="card col-3">`;
      st += `<div class="title"><h2>${prj.title}</h2></div>`;
      st += `<div class="screenshot"><img src=${prj.screenshot}></div>`;
      st += `<div class="description"><p>Description ${prj.description}</p></div>`;
      st += `<div class="technologiesUsed"><p>Technologies Used: ${prj.technologiesUsed}</p></div>`;
      st += `<div class="projectURL"><a href=${prj.url}>Project Link</a></div>`;
      st += `<div class="githubURL"><a href=${prj.githubUrl}>Github Link</a></div>`;
      st += '</div>';
      // st += '</div>';
      // st += '</form>';
    });
    util.printToDom('projectsPage', st);
  });
};

export default { printProjects };
