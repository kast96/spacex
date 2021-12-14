import s from './StarlinkItem.module.scss';
import PropertyGroup from '../Property/PropertyGroup';
import { NavLink } from 'react-router-dom';

const StarlinkItem = ({starlink}) => {
	let propertiesGroups = {
		general: {
			name: 'Общая информация',
			properties: [
				{name: 'Высота', value: starlink?.height_km, dimension: ' км'},
				{name: 'Скорость', value: starlink?.velocity_kms, dimension: ' км'},
				{name: 'Широта', value: starlink?.latitude},
				{name: 'Долгота', value: starlink?.longitude},
				{name: 'Версия', value: starlink?.version},
				{name: 'Код страны', value: starlink?.spaceTrack?.COUNTRY_CODE},
				{name: 'Дата создания', value: starlink?.spaceTrack?.CREATION_DATE},
				{name: 'Дата запуска', value: starlink?.spaceTrack?.LAUNCH_DATE},
				{name: 'Уничтожен', value: (starlink?.spaceTrack?.DECAYED) ? 'Да' : 'Нет'},
			]
		}
	};

	return (
		<div className={s.starlink}>
			<div className={s.starlink__header}>
				<NavLink to={starlink.id+'/'}>
					<h2>{starlink.spaceTrack.OBJECT_NAME}</h2>
				</NavLink>
			</div>

			<div className={s.starlink__props}>
				{Object.keys(propertiesGroups).map((key) => <PropertyGroup key={key} name={propertiesGroups[key].name} properties={propertiesGroups[key].properties} />)}
			</div>
			<div className={s.starlink__footer}>
				<NavLink to={starlink.id+'/'}>Подробнее</NavLink>
			</div>
		</div>
	);
}

export default StarlinkItem;
