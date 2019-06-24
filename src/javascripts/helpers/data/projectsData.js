import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((resp) => {
      const projectResults = resp.data;
      const projectsArray = [];
      Object.keys(projectResults).forEach((projectId) => {
        projectResults[projectId].id = projectId;
        projectsArray.push(projectResults[projectId]);
      });
      console.error('I am here', projectsArray[0]);
      resolve(projectsArray);
    })
    .catch(err => reject(err));
});
export default { getProjects };
