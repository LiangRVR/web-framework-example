import { User } from "./models/User";

const user = new User({ name: "Liang", age: 26 });
user.save();
user.set({ name: "Lolo" });

setTimeout(() => {
  user.save();
}, 8000);
