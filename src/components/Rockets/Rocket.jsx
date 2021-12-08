import classNames from 'classnames';
import s from './Rocket.module.scss';
import Fancybox from '../Fancybox/Fancybox';
import PropertyGroup from '../Property/PropertyGroup';

const Rocket = ({rocket}) => {
	let propertiesGroups = {
		general: {
			name: 'Общая информация',
			properties: [
				{name: 'Компания', value: rocket.company},
				{name: 'Страна', value: rocket.country},
				{name: 'Стоимость запуска', value: rocket.cost_per_launch+'$'},
				{name: 'Дата первого запуска', value: rocket.first_flight},
				{name: 'Процент успеха', value: rocket.success_rate_pct+'%'},
				{name: 'Тип', value: rocket.type},
				{name: 'Страница на wikipedia', value: rocket.wikipedia, type: 'wikipedia'},
			]
		},
		/*description: {
			name: 'Описание',
			properties: [
				{value: rocket.description}
			]
		},
		characteristic: {
			name: 'Характеристики',
			properties: [
				{name: 'Диаметр ракеты', value: rocket.diameter.meters+' м'},
				{name: 'Высора ракеты', value: rocket.height.meters+' м'},
				{name: 'Масса', value: rocket.mass.kg+' кг'},
				{name: 'Количество ускорителей', value: rocket.boosters},
				{name: 'Количество ступеней', value: rocket.stages},
				{name: 'Количество посадочных ног', value: rocket.landing_legs.number},
				{name: 'Материал посадочных ног', value: rocket.landing_legs.material},
			]
		},
		engine: {
			name: 'Двигатель',
			properties: [
				{name: 'Тип двигателя', value: rocket.engines.type},
				{name: 'Версия двигателя', value: rocket.engines.version},
				{name: 'Макет двигателя', value: rocket.engines.layout},
				{name: 'Максимальная мощность двигателя', value: rocket.engines.engine_loss_max},
				{name: 'Тяга к весу двигателя', value: rocket.engines.thrust_to_weight},
				{name: 'Массовый импульс двигателя над уровнем моря', value: rocket.engines.isp.sea_level},
				{name: 'Массовый импульс двигателя в вакууме', value: rocket.engines.isp.vacuum},
				{name: 'Пропеллант 1', value: rocket.engines.propellant_1},
				{name: 'Пропеллант 2', value: rocket.engines.propellant_2},
				{name: 'Cила двигателя над уровнем моря', value: rocket.engines.thrust_sea_level.kN+' кН'},
				{name: 'Cила двигателя в вакууме', value: rocket.engines.thrust_vacuum.kN+' кН'},
			]
		},
		first_stage: {
			name: 'Первая ступень',
			properties: [
				{name: 'Время горения', value: rocket.first_stage.burn_time_sec+' сек'},
				{name: 'Количество двигателей', value: rocket.first_stage.engines},
				{name: 'Количество топлива', value: rocket.first_stage.fuel_amount_tons+' тонн'},
				{name: 'Сила над уровнем моря', value: rocket.first_stage.thrust_sea_level.kN+' кН'},
				{name: 'Сила в вакууме', value: rocket.first_stage.thrust_vacuum.kN+' кН'},
			]
		},
		second_stage: {
			name: 'Вторая ступень',
			properties: [
				{name: 'Время горения', value: rocket.second_stage.burn_time_sec+' сек'},
				{name: 'Количество двигателей', value: rocket.second_stage.engines},
				{name: 'Количество топлива', value: rocket.second_stage.fuel_amount_tons+' тонн'},
			]
		},
		payload_weights: {
			name: 'Полезная нагрузка',
			properties: [
				{value: rocket.payload_weights, type: 'payload_weights'},
			]
		},*/
	};

	return (
		<div className={s.rocket}>
			<div className={s.rocket__header}>
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
		</div>
	);
}

export default Rocket;
