import {reducer} from "./reducer";
import asyncActions from "./asyncActions";
import taskSelectors from "./selectors";

export const { toggle } = reducer.actions;

export const { fetchTasks } = asyncActions;

export const { selectAll } = taskSelectors;
