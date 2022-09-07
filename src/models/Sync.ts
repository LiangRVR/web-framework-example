import axios, { AxiosPromise } from "axios";
import { HasId } from "./Model";

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise{
    return axios.get(`${this.rootUrl}/${id}`);
  };

  save(data: T): AxiosPromise{
    const { id } = data;
    console.log(id);
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  };
}
