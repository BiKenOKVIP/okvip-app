import Home from "~/pages/Home";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/okvip-app/", component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
