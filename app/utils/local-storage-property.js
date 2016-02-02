export default function localStorageProperty(localStorageKey) {
  return Ember.computed({
    get(key) {
      let json = window.localStorage.getItem(localStorageKey);
      if (json) { json = JSON.parse(json); }
      return json;
    },
    set(key, value) {
      window.localStorage.setItem(localStorageKey, JSON.stringify(value));
      return value;
    }
  });
}
