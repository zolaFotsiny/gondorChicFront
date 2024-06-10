import PageAcceuil from "../vue/PageAcceuil";

// ==============================|| MAIN ROUTING ||============================== //

const User = {
  path: "/",
  children: [
    {
      path: "/",
      element: <PageAcceuil />,
    },
  ],
};

export default User;
