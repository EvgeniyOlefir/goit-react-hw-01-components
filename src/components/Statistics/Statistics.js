import PropTypes from "prop-types";
// import s from "./Statistics.module.css";
// import generateColor from "../../helpers/GenerateColor";

export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
