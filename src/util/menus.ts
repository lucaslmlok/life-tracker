import { capitalize } from "./util";

export class Menu {
  private _title: string = null;
  private _path: string = null;

  constructor(options: Partial<Menu> = {}) {
    Object.assign(this, options);
  }

  get title() {
    return capitalize(this._title);
  }
  set title(input: string) {
    this._title = input;
  }
  get path() {
    const p = (this._path || this._title).toLowerCase();
    return p.replace(" ", "_");
  }
  set path(input: string) {
    this._path = input;
  }
}

export const menus: Menu[] = [
  new Menu({ title: "All" }),
  new Menu({ title: "Money" }),
  new Menu({ title: "Time" }),
  new Menu({ title: "Health" }),
  new Menu({ title: "Entertainment" }),
  new Menu({ title: "Work" }),
];
