import classNames from 'classnames';
import s from './RocketItem.module.scss';
import Fancybox from '../Fancybox/Fancybox';
import PropertyGroup from '../Property/PropertyGroup';
import { NavLink } from 'react-router-dom';

const RocketItem = ({rocket}) => {
	let propertiesGroups = {
		general: {
			name: 'Общая информация',
			properties: [
				{name: 'Компания', value: rocket?.company},
				{name: 'Страна', value: rocket?.country},
				{name: 'Стоимость запуска', value: rocket?.cost_per_launch, dimension: '$'},
				{name: 'Дата первого запуска', value: rocket?.first_flight},
				{name: 'Процент успеха', value: rocket?.success_rate_pct, dimension: '%'},
				{name: 'Тип', value: rocket?.type},
			]
		},
		description: {
			name: 'Описание',
			properties: [
				{value: rocket.description}
			]
		}
	};

	return (
		<div className={s.rocket}>
			<div className={s.rocket__header}>
				<NavLink to={rocket.id+'/'}>
					<h2>{rocket.name}</h2>
				</NavLink>
				<div className={classNames(s.rocket__active, {
					'active': rocket.active === true,
					'not-active': rocket.active === false,
				})}>
					{rocket.active === true && 'Активна'}
					{rocket.active === false && 'Не активна'}
					{rocket.active !== true && rocket.active !== false && 'Неизвестно'}
				</div>
			</div>

			{rocket.flickr_images && 
				<div className={s.rocket__imgs}>
					<Fancybox options={{ infinite: false }}>
						{rocket.flickr_images.map((src, index) => (
							<img key={index} className={s.rocket__img} src={src} data-src={src} alt={rocket.name} data-fancybox={`gallery-${rocket.id}`} />
						))}
					</Fancybox>
				</div>
			}

			<div className={s.rocket__props}>
				{Object.keys(propertiesGroups).map((key) => <PropertyGroup key={key} name={propertiesGroups[key].name} properties={propertiesGroups[key].properties} />)}
			</div>
			<div className={s.rocket__footer}>
				<NavLink to={rocket.id+'/'}>Подробнее</NavLink>
			</div>
		</div>
	);
}

export default RocketItem;
