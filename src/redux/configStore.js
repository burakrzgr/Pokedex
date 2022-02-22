import reducers from "./index";
import {createStore} from "redux";

export default function configStore() {
  return createStore(reducers);
}