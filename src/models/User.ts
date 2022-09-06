import { Eventing } from "./Eventing";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(user: UserProps): void {
    Object.assign(this.data, user);
  }
}
