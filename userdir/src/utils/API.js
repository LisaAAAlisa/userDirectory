import axios from "axios"

const obj = {
    getRandomUsers: function() {
      return axios.get("https://randomuser.me/api/?results=50&nat=us")
    }
   };
   export default obj;
   