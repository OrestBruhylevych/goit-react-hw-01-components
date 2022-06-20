import PropTypes from 'prop-types';

export default function StatisticListItem({label, percentage}) {
    return (
        <li className="item" >
            <span className="label">{ label}</span>
            <span className="percentage">{ percentage}</span>
        </li>
    );
};

StatisticListItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}