

export type ModelState = Readonly<{
  listUsers: Array<object>
}>;

export const INITIAL_MODELS_STATE: ModelState = {
  listUsers: []
};
