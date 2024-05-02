const loadInitialState = () =>
  JSON.parse(localStorage.getItem("@MaximaTech:products") ?? ([] as any));

export const INITIAL_STATE = {
  list: loadInitialState(),
};
