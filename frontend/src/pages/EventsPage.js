import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const response = useLoaderData();
  if(response.isError)
    // return <p>{response.message}</p>
    throw new Error('No Events found');

  const events = response.events;
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //...
    // throw new Response(JSON.stringify({message : "Event Not Found"}), {status : 500})
    throw json({ message: "Event Not Found" }, { status: 500 });
  } else {
    return response;
  }
};
