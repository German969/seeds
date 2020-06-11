import {slice} from "./reducer";
import asyncActions from "./asyncActions";
import taskSelectors from "./selectors";

export const { toggle } = slice.actions;

export const { fetchTasks } = asyncActions;

export const { selectAllTasks, selectTaskErrors, selectTaskLoading } = taskSelectors;
