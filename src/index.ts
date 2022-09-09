import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Liang", age: 26 });

const root = document.getElementById("root");

if (root) {
  const form = new UserForm(root, user);
  form.render();
} else {
  throw new Error("No root found");
}
