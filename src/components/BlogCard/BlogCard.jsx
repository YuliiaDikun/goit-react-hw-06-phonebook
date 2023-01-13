import { formatDate } from 'service/formatDate';
import { Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, UserName, Date } from './BlogCard.styled';
export const BlogCard = ({
  data: { poster, tag, title, description, name, avatar, postedAt },
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt="" />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt="" />
        <UserInfo>
          <UserName>{name}</UserName>
          <Date>{formatDate(postedAt)}</Date>
        </UserInfo>
        </UserBox>

      </CardFooter>
    </Card>
  );
};
