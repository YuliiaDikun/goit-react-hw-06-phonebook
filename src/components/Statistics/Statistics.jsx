import { StatisticTitle, StatisticsList } from './Statistics.styled';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export function Statistics({ title, stats }) {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, total, title }, index) => (
          <StatisticsItem
            key={id}
            icon={icons[index]}
            total={total}
            title={title}
          />
        ))}
      </StatisticsList>
    </>
  );
}
