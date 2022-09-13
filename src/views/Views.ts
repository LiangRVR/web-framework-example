import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends {}> {
  regions: { [key: string]: Element } = {};
  constructor(public parent: Element | null, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionMaps(): { [key: string]: string } {
    return {};
  }

  bindModel = (): void => {
    this.model.on("change", () => {
      this.render();
    });
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element: Element): void => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(document: DocumentFragment): void {
    const regionsMap = this.regionMaps();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = document.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    if (!this.parent) {
      throw new Error("No selected parent");
    }
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
