import s from './Property.module.scss';

const Property = ({children, title}) => {
	return (
		<div className={s.property}>
			{title &&
				<span className={s.property__title}>{title}:</span>
			}
			<span>{children}</span>
		</div>
	);
}

export default Property;
