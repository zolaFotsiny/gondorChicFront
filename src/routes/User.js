import Login from "../pages/users/login";

// ==============================|| MAIN ROUTING ||============================== //

const User = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Login />,
    },
  ],
};

export default User;
