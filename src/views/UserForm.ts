export class UserForm {
  constructor(public parent: Element | null) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log("hover");
  }

  onButtonClick(): void {
    console.log("button");
  }

  template(): string {
    return `
            <div>
                <h1>User Form</h1>
                <input />
                <button>Click Me</button>
            </div>
        `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element: Element): void => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    if (!this.parent) {
      throw new Error("No selected parent");
    }
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
