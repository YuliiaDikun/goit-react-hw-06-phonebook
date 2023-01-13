import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';
import { LeaderBoard, BoardHeader, BoardTitle, TitleTop, TitleBottom, LeaderBoardProfiles} from './Forbes.styled'
  
export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(({ id, name, capital, avatar, isIncrease }) => {
          return <ForbesListItem key={id} avatar={avatar} name={name} capital={capital} isIncrease={isIncrease} />;
        })}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
