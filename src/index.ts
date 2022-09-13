import { User } from "./models/User";
import { UserList } from "./views/UserList";

const users = User.buildUserCollection();
const newUser = User.buildUser({name: "paco", age: 30})
newUser.save()

users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    new UserList(root, users).render();
  } else {
    throw new Error("No root found");
  }
});

users.fetch();
