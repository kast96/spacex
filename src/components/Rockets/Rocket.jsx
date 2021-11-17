const Rocket = ({rocket}) => {
  return (
    <div>
      <h2>{rocket.name}</h2>
      <div>Активна: {rocket.active === true ? 'Да' : 'Нет'}</div>
      <div>Количество ускорителей: {rocket.boosters}</div>
      <div>Компания: {rocket.company}</div>
      <div>Стоимость запуска: {rocket.cost_per_launch}$</div>
      <div>Страна: {rocket.country}</div>
      <div>Описание: {rocket.description}</div>
      <div>Диаметр ракеты: {rocket.diameter.meters} м</div>
      <div>Высора ракеты: {rocket.height.meters} м</div>
      <div>Масса: {rocket.mass.kg} кг</div>
      <div>Дата первого запуска: {rocket.first_flight}</div>
      <div>Количество ступеней: {rocket.stages}</div>
      <div>Первая ступень, время горения: {rocket.first_stage.burn_time_sec} сек</div>
      <div>Первая ступень, кол-во двигателей: {rocket.first_stage.engines}</div>
      <div>Первая ступень, кол-во топлива: {rocket.first_stage.fuel_amount_tons} тон</div>
      <div>Первая ступень, сила над уровнем моря: {rocket.first_stage.thrust_sea_level.kN} кН</div>
      <div>Первая ступень, сила в вакууме: {rocket.first_stage.thrust_vacuum.kN} кН</div>
      <div>Вторая сутпень, время горения: {rocket.second_stage.burn_time_sec} сек</div>
      <div>Вторая сутпень, кол-во двигателей: {rocket.second_stage.engines}</div>
      <div>Вторая сутпень, кол-во топлива: {rocket.second_stage.fuel_amount_tons} тон</div>
      <div>Изображения: {rocket.flickr_images.map((src, index) => <img width="100px" key={index} src={src} alt={rocket.name} />)}</div>
      <div>Количество посадочных ног: {rocket.landing_legs.number}</div>
      <div>Материал посадочных ног: {rocket.landing_legs.material}</div>
      <div>Полезная нагрузка: {rocket.payload_weights.map((payload_weight, index) => (
        <div key={index}>
          <div>Максимальная масса: {payload_weight.kg}</div>
          <div>Название: {payload_weight.name}</div>
        </div>
      ))}</div>
      <div>Процент успеха: {rocket.success_rate_pct}</div>
      <div>Тип: {rocket.type}</div>
      <div>Страница wikipedia: {rocket.wikipedia}</div>
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
