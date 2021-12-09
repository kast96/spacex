import s from './PropertyGroup.module.scss';
import Property from './Property.jsx';

const PropertyGroup = ({name, properties}) => {
	return (
		<div className={s.props__group}>
			<h3 className={s.props__title}>{name}</h3>
			{properties.map((property, index) => {
				if (!property.value) {
					return false;
				}

				switch (property.type) {
					case 'wikipedia':
						return (
							<Property key={index}>
								<a href={property.value} target="_blank" rel="noopener noreferrer">{property.name}</a>
							</Property>
						)

					case 'payload_weights':
						return (
							<div key={index}>
								{property.value.map((payload_weight, indexPayload) => (
									<div className={s.props__props_group} key={indexPayload}>
										{payload_weight.name &&
											<Property title="Название">{payload_weight.name}</Property>
										}
										{payload_weight.kg &&
											<Property title="Максимальная масса">{payload_weight.kg} кг</Property>
										}
									</div>
								))}
							</div>
						)
				
					default:
						return <Property key={index} title={property.name}>{property.value}{property.dimension}</Property>
				}
			})}
		</div>
	);
}

export default PropertyGroup;
