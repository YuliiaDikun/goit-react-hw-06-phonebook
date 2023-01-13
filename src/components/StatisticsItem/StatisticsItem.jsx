import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticsItem.styled';
import { IconContext } from 'react-icons';
import { theme } from '../../styles/theme';

export function StatisticsItem({ total, title, icon }) {
  return (
    <StatisticBox>
      <IconContext.Provider
        value={{ style: { color: theme.colors.accent, fontSize: '50px' } }}
      >
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
}
