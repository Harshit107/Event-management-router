import { Outlet, useNavigation } from "react-router-dom";
import EventsNavigation from './../components/EventsNavigation';


const EventRootLayout = (props) => {  
  const navigate = useNavigation()
   return (
     <>
       <EventsNavigation />
       {navigate.state === "loading" && <p>Loading...</p>}
       <Outlet />
     </>
   );
}
export default EventRootLayout;