import { Todo } from "./todo";
import * as uuid from 'uuid';

export const TODO_DATABASE: Todo[] = [
  {
    id: "1",
    title: "Complete Observable Talk",
    completed: true
  },
  {
    id: uuid.v4(),
    title: "Add Example code",
    completed: true
  },
  {
    id: "1",
    title: "Present Talk",
    completed: false
  },
];
