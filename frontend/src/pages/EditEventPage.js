
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from './../components/EventForm';

const EditEventPage = (props) => { 

   const data = useRouteLoaderData('event-data-loader');
   return <EventForm event = {data.event} method="patch"/>
}
export default EditEventPage;