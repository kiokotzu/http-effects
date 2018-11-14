import { INITIAL_MODELS_STATE, GlobalState } from './global.state';

export type ApplicationState = Readonly<{
  global: GlobalState;
}>;

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  global: INITIAL_MODELS_STATE
}
