import classNames from 'classnames';
import s from './Rocket.module.scss';
import Fancybox from '../Fancybox/Fancybox';
import RocketProperty from './RocketProperty';

const Rocket = ({rocket}) => {
	return (
		<div className={s.rocket}>
			<div className={s.rocket__header}>
				<h2>{rocket.name}</h2>
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
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Общая информация</h3>
					<RocketProperty title="Компания">{rocket.company}</RocketProperty>
					<RocketProperty title="Страна">{rocket.country}</RocketProperty>
					<RocketProperty title="Стоимость запуска">{rocket.cost_per_launch + '$'}</RocketProperty>
					<RocketProperty title="Дата первого запуска">{rocket.first_flight}</RocketProperty>
					<RocketProperty title="Процент успеха">{rocket.success_rate_pct + '%'}</RocketProperty>
					<RocketProperty title="Тип">{rocket.type}</RocketProperty>
					<RocketProperty title="Страница на wikipedia">
						<a href="${rocket.wikipedia}" target="_blank">Открыть</a>
					</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Описание</h3>
					<RocketProperty>{rocket.description}</RocketProperty>
				</div>
			</div>

			<div>Количество ускорителей: {rocket.boosters}</div>
			<div>Диаметр ракеты: {rocket.diameter.meters} м</div>
			<div>Высора ракеты: {rocket.height.meters} м</div>
			<div>Масса: {rocket.mass.kg} кг</div>
			<div>Количество ступеней: {rocket.stages}</div>
			<div>Первая ступень, время горения: {rocket.first_stage.burn_time_sec} сек</div>
			<div>Первая ступень, кол-во двигателей: {rocket.first_stage.engines}</div>
			<div>Первая ступень, кол-во топлива: {rocket.first_stage.fuel_amount_tons} тон</div>
			<div>Первая ступень, сила над уровнем моря: {rocket.first_stage.thrust_sea_level.kN} кН</div>
			<div>Первая ступень, сила в вакууме: {rocket.first_stage.thrust_vacuum.kN} кН</div>
			<div>Вторая сутпень, время горения: {rocket.second_stage.burn_time_sec} сек</div>
			<div>Вторая сутпень, кол-во двигателей: {rocket.second_stage.engines}</div>
			<div>Вторая сутпень, кол-во топлива: {rocket.second_stage.fuel_amount_tons} тон</div>
			<div>Количество посадочных ног: {rocket.landing_legs.number}</div>
			<div>Материал посадочных ног: {rocket.landing_legs.material}</div>
			<div>Полезная нагрузка: {rocket.payload_weights.map((payload_weight, index) => (
				<div key={index}>
					<div>Максимальная масса: {payload_weight.kg}</div>
					<div>Название: {payload_weight.name}</div>
				</div>
			))}</div>
			<div>Максимальная мощность двигателя: {rocket.engines.engine_loss_max}</div>
			<div>Массовый импульс двигателя над уровнем моря: {rocket.engines.isp.sea_level}</div>
			<div>Массовый импульс двигателя в вакууме: {rocket.engines.isp.vacuum}</div>
			<div>Макет двигателя: {rocket.engines.layout}</div>
			<div>Пропеллант 1: {rocket.engines.propellant_1}</div>
			<div>Пропеллант 2: {rocket.engines.propellant_2}</div>
			<div>Cила двигателя над уровнем моря: {rocket.engines.thrust_sea_level.kN} кН</div>
			<div>Cила двигателя в вакууме: {rocket.engines.thrust_vacuum.kN} кН</div>
			<div>Тяга к весу двигателя: {rocket.engines.thrust_to_weight}</div>
			<div>Тип двигателя: {rocket.engines.type}</div>
			<div>Версия двигателя: {rocket.engines.version}</div>
		</div>
	);
}

export default Rocket;
