import s from './RocketProperty.module.scss';

const RocketProperty = ({children, title, value}) => {
	return (
		<div className={s.property}>
			{title &&
				<span className={s.property__title}>{title}:</span>
			}
			<span>{children}</span>
		</div>
	);
}

export default RocketProperty;
