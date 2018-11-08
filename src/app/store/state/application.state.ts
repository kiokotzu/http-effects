import { INITIAL_MODELS_STATE, ModelState } from './model.state';

export type ApplicationState = Readonly<{
  models: ModelState;
}>;

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  models: INITIAL_MODELS_STATE
}
