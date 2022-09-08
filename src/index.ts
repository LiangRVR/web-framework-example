import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => User.buildUser(json)
);

users.on("change", () => {
  console.log(users.model);
});

users.fetch();
