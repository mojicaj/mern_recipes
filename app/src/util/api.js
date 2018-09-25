import axios from "axios";

function getRecipes() {
  return axios
    .get("/api/recipes")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
}

export default getRecipes;
