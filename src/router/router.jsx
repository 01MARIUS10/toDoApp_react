import { createBrowserRouter } from "react-router-dom";

import Root from "../views/layout/Root";
import TaskList from "../views/TaskListView";
import AddTask from "../views/AddTaskView";
import EditTask from "../views/EditTaskView";
import NotFoundView from "../views/NotFoundView";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFoundView />,
        children: [
          {
            path: '',
            element: <TaskList />
          },
          {
            path: 'task/new',
            element: <AddTask />
          },
          {
            path: 'task/:id',
            element:<EditTask />
          },
        ]
    },
])