import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Liang", age: 26 });

const form = new UserForm(document.getElementById("root"), user);

form.render();
