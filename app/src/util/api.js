import axios from "axios";

function getRecipes() {
  return axios
    .get("http://localhost:3001/recipes")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
}

export default getRecipes;
