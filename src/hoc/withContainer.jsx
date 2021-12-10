export const withContainer = (Component) => {
    const containerComponent = (props) => {
        return (
            <div className={'box'}>
                <Component {...props} />
            </div>
        );
    }
    return containerComponent;
}