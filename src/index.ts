import { User } from "./models/User";

const user = new User({ name: "Liang", age: 26 });

console.log(user.get("name"), user.get("age"));