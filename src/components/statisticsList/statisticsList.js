
import PropTypes from 'prop-types';

import StatisticListItem from '../statisticListItem/statisticListItem';



export default function StatisticsList ({title, stats}) {
  const items = stats.map(({ id, label, percentage }) => {
    return (
      <StatisticListItem key={id} label={label} percentage={percentage} />
    )
  });

    return (
<section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
    {items}
  </ul>
</section>
    );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape)
}
