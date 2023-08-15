
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EventPage, { loader as eventLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, {
  loader as eventDetailPageLoader,
 
} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventRoot  from "./pages/EventRoot";
import Error from "./pages/Error";
import { action as eventFormAction } from './components/EventForm'

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            path: "",
            element: <EventPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            id: "event-data-loader",

            loader: eventDetailPageLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventFormAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: eventFormAction,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: eventFormAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
