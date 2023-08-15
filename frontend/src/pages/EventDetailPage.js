import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from './../components/EventItem';


const EventDetailPage = (props) => { 
    const data = useRouteLoaderData('event-data-loader');
   return (
    <>
      <EventItem event = {data.event}/>
    </>
   )
}
export default EventDetailPage;

export async function loader({request, params}) {

   const response = await fetch('http://localhost:8080/events/'+ params.eventId)
   if(!response.ok)
      throw json({message : "Event content not present in list"}, {status : 500})
   return response;
}
