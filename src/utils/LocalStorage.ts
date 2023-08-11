import { isObject } from "lodash";

const LocalStorage = {
  // ENTRIES: {},

  // never used
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? "{}");
  },

  set(key: string, value: any) {
    if (isObject(value)) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
    this.refresh();
  },

  remove(entries: any) {
    if (Array.isArray(entries)) {
      entries.forEach((key: string) => this.remove(key));
    } else if (typeof entries === "string") {
      localStorage.removeItem(entries);
    }
    this.refresh();
  },

  clear() {
    localStorage.clear();
    this.refresh();
  },

  refresh() {
    Reflect.ownKeys(localStorage).forEach((key: any) => {
      try {
        this[key] = JSON.parse(localStorage[key]);
      } catch {
        this[key] = localStorage[key];
      }
    });
  },
};

LocalStorage.refresh();

export default LocalStorage;
