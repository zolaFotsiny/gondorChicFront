import PageAcceuil from "../vue/PageAcceuil";
import PageAcceuilClient from "../vue/PageAcceuilClient";

// ==============================|| MAIN ROUTING ||============================== //

const User = {
  path: "/",
  children: [
    {
      path: "/",
      element: <PageAcceuil />,
    }, 
    {
      path: "/page-acceuil-client", 
      element: <PageAcceuilClient />,  
    },
  ],
};

export default User;
