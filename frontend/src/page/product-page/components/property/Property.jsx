import styles from "./Property.module.css";

export const Property = ({ propertyName, value, className }) => {
	return (
		<div
			className={`${className ? styles.properties_desc : styles.properties}`}
		>
			<h3 className={styles.property_title}>{propertyName}:</h3>
			{value}
		</div>
	);
};
