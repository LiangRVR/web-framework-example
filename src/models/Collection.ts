import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";

export class Collection {
  model: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse): void => {
      response.data.forEach((userData: UserProps): void => {
        const user = User.buildUser(userData);
        this.model.push(user);
      });

      this.trigger('change')
    });
  }
}
