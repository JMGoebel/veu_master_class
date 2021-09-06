import PageHome from "@/pages/PageHome";
import PageThreadShow from "@/pages/PageThreadShow";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
  },
];

export default routes;
