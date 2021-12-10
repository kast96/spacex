import Index from '../../components/Index/Index';
import RocketsContainer from '../../components/Rockets/RocketsContainer';
import RocketContainer from '../../components/Rockets/RocketContainer';
import Error404 from '../../components/Errors/Error404';
import {withContainer} from '../../hoc/withContainer';
import {withBreadcrumb} from '../../hoc/withBreadcrumb';
import { withRouter } from "react-router";

export default [
    { path: "/", name: "Главная", Component: Index, hocs: [withContainer, withRouter, withBreadcrumb] },
    { path: "/rockets/", name: "Ракеты", Component: RocketsContainer, hocs: [withContainer, withRouter, withBreadcrumb] },
    { path: "/rockets/:id", name: "Ракета", Component: RocketContainer, hocs: [withContainer, withRouter, withBreadcrumb] },
    { path: "/*", name: "404", Component: Error404, hocs: [withContainer, withRouter, withBreadcrumb] },
];