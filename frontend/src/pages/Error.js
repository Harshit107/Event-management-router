import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = (props) => {
  const error = useRouteError();

  let title = "An Error occurred";
  let message = "Something went wrong";

  if (error.status === 404) {
    title = "Page Not Found";
  }
  else if (error.status === 500) {
    title = "Event not found";
   //  message = JSON.parse(error.data).message;
    message = error.data.message;
  }
  else {
    if(error.status) 
      console.log(error.status);
    if(error)
      console.log(error);
    
  }


  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
};
export default Error;
