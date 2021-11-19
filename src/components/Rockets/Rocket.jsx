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
					<RocketProperty title="Стоимость запуска">{rocket.cost_per_launch}$</RocketProperty>
					<RocketProperty title="Дата первого запуска">{rocket.first_flight}</RocketProperty>
					<RocketProperty title="Процент успеха">{rocket.success_rate_pct}%</RocketProperty>
					<RocketProperty title="Тип">{rocket.type}</RocketProperty>
					<RocketProperty title="Страница на wikipedia">
						<a href="${rocket.wikipedia}" target="_blank">Открыть</a>
					</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Описание</h3>
					<RocketProperty>{rocket.description}</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Характеристики</h3>
					<RocketProperty title="Диаметр ракеты">{rocket.diameter.meters} м</RocketProperty>
					<RocketProperty title="Высора ракеты">{rocket.height.meters} м</RocketProperty>
					<RocketProperty title="Масса">{rocket.mass.kg} кг</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Характеристики</h3>
					<RocketProperty title="Диаметр ракеты">{rocket.diameter.meters} м</RocketProperty>
					<RocketProperty title="Высора ракеты">{rocket.height.meters} м</RocketProperty>
					<RocketProperty title="Масса">{rocket.mass.kg} кг</RocketProperty>
					<RocketProperty title="Количество ускорителей">{rocket.boosters}</RocketProperty>
					<RocketProperty title="Количество ступеней">{rocket.stages}</RocketProperty>
					<RocketProperty title="Количество посадочных ног">{rocket.landing_legs.number}</RocketProperty>
					<RocketProperty title="Материал посадочных ног">{rocket.landing_legs.material}</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Двигатель</h3>
					<RocketProperty title="Тип двигателя">{rocket.engines.type}</RocketProperty>
					<RocketProperty title="Версия двигателя">{rocket.engines.version}</RocketProperty>
					<RocketProperty title="Макет двигателя">{rocket.engines.layout}</RocketProperty>
					<RocketProperty title="Максимальная мощность двигателя">{rocket.engines.engine_loss_max}</RocketProperty>
					<RocketProperty title="Тяга к весу двигателя">{rocket.engines.thrust_to_weight}</RocketProperty>
					<RocketProperty title="Массовый импульс двигателя над уровнем моря">{rocket.engines.isp.sea_level}</RocketProperty>
					<RocketProperty title="Массовый импульс двигателя в вакууме">{rocket.engines.isp.vacuum}</RocketProperty>
					<RocketProperty title="Пропеллант 1">{rocket.engines.propellant_1}</RocketProperty>
					<RocketProperty title="Пропеллант 2">{rocket.engines.propellant_2}</RocketProperty>
					<RocketProperty title="Cила двигателя над уровнем моря">{rocket.engines.thrust_sea_level.kN} кН</RocketProperty>
					<RocketProperty title="Cила двигателя в вакууме">{rocket.engines.thrust_vacuum.kN} кН</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Первая ступень</h3>
					<RocketProperty title="Время горения">{rocket.first_stage.burn_time_sec} сек</RocketProperty>
					<RocketProperty title="Количество двигателей">{rocket.first_stage.engines}</RocketProperty>
					<RocketProperty title="Количество топлива">{rocket.first_stage.fuel_amount_tons} тон</RocketProperty>
					<RocketProperty title="Сила над уровнем моря">{rocket.first_stage.thrust_sea_level.kN} кН</RocketProperty>
					<RocketProperty title="Сила в вакууме">{rocket.first_stage.thrust_vacuum.kN} кН</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Вторая ступень</h3>
					<RocketProperty title="Время горения">{rocket.second_stage.burn_time_sec} сек</RocketProperty>
					<RocketProperty title="Количество двигателей">{rocket.second_stage.engines}</RocketProperty>
					<RocketProperty title="Количество топлива">{rocket.second_stage.fuel_amount_tons} тон</RocketProperty>
				</div>
				<div className={s.rocket__props__group}>
					<h3 className={s.rocket__props__title}>Полезная нагрузка</h3>
					{rocket.payload_weights.map((payload_weight, index) => (
						<div key={index}>
							<RocketProperty title="Название">{payload_weight.name} кг</RocketProperty>
							<RocketProperty title="Максимальная масса">{payload_weight.kg} кг</RocketProperty>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Rocket;
