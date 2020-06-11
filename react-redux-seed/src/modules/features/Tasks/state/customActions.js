import {setError, setLoading} from "../../../../store/rootReducer";
import {TASKS_KEY} from "./reducer";

export const setTaskError = ({key, message}) => setError({ slice: TASKS_KEY, key, message });
export const setTaskLoading = ({key, state}) => setLoading({ slice: TASKS_KEY, key, state });
