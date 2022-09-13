import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Liang", age: 26 });

const root = document.getElementById("root");

if (root) {
  const form = new UserEdit(root, user);
  console.log(form)
  form.render();
} else {
  throw new Error("No root found");
}
