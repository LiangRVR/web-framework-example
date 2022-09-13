import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(user: User, itemParent: Element): void {
    new UserShow(itemParent, user).render();
  }
}
