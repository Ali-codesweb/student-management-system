import { routes as UIRoutes } from "./ui";
import { routes as HODRoutes } from "./hod";
import { routes as RecRoutes } from "./reception";
import { routes as StaffRoutes } from "./staff";
import { routes as StudentRoutes } from "./student";




let routes = [];
routes = routes.concat(UIRoutes,HODRoutes,RecRoutes,StaffRoutes,StudentRoutes);
console.log(routes)
export { routes };
