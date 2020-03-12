
export function getStateFromStore(key) {
    var state = localStorage.getItem(key);
    if (state == null) return null;
    return JSON.parse(state);
};

export function saveStateToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
