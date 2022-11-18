import { combineReducers } from "redux";

import { baseApi } from "./services/base-service";

const rootReducer = combineReducers({
  mainApi: baseApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
