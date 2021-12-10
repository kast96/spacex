import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import routes from "../utils/routes/routes";

export const withBreadcrumb = (Component) => {
    const breadcrumbComponent = (props) => {
        let crumbs = routes
            .filter(({ path }) => props.match.path.includes(path))
            .map(({ path, ...rest }) => ({
            path: Object.keys(props.match.params).length
                ? Object.keys(props.match.params).reduce(
                (path, param) => path.replace(
                    `:${param}`, props.match.params[param]
                ), path
                )
                : path,
            ...rest
            }));

        console.log(crumbs);

        return (
            <>
                <Breadcrumb crumbs={crumbs} />
                <Component {...props} />
            </>
        );
    }
    return breadcrumbComponent;
}