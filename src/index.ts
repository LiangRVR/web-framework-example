import { Collection } from "./models/Collection";
import { User } from "./models/User";

const users = new Collection("http://localhost:3000/users");

users.on("change", () => {
  console.log(users.model);
});


users.fetch()
