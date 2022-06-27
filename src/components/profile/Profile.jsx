import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Box} from "../box/Box"


const StyledAvatar = styled.img`
    display: block;
    border-radius: 50%;
    width: 340px;
    margin-left: auto;
    margin-right: auto;
`;

const StyledUserName = styled.p`
    display: flex;
    border-radius: 50%;
    width: 340px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    color: ${p => p.theme.colors.black};
`;

const StyledText = styled(StyledUserName)`
  color: ${p => p.theme.colors.secondary};
`;

export const  StyledListInfo = styled.ul`

  display:flex;
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;

`;

export const StyledListInfoItem = styled.li`

  width: 100%;
  display: block;
  justify-content: space-between;
  border: 2px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.secondary};
`;

const StyledListInfoItemSpan = styled.span`
  display: flex;
  justify-content: center;

`;


export const Profile = ({userInfo}) => {
    const { username, tag, location, avatar, stats } = userInfo;
    const { followers, views, likes } = stats;

    return (
        
<Box  ml='auto' mr='auto' width='400px' boxShadow='10px 5px 5px red' className="profile">
  <Box as='div'  background='#fff' p={4} className="description">
    <StyledAvatar
      src={avatar}
      alt={`${username} avatar`}
      className="avatar"
    />
    <StyledUserName  className="name">{username}</StyledUserName>
    <StyledText  className="tag">{`@${tag}`}</StyledText>
    <StyledText  className="location">{location}</StyledText>
  </Box>

  <StyledListInfo className="stats">
    <StyledListInfoItem>
      <StyledListInfoItemSpan className="label">Followers</StyledListInfoItemSpan>
      <StyledListInfoItemSpan className="quantity">{followers}</StyledListInfoItemSpan>
    </StyledListInfoItem>
    <StyledListInfoItem>
      <StyledListInfoItemSpan className="label">Views</StyledListInfoItemSpan>
      <StyledListInfoItemSpan className="quantity">{views}</StyledListInfoItemSpan>
    </StyledListInfoItem>
    <StyledListInfoItem>
      <StyledListInfoItemSpan className="label">Likes</StyledListInfoItemSpan>
      <StyledListInfoItemSpan className="quantity">{likes}</StyledListInfoItemSpan>
    </StyledListInfoItem>
  </StyledListInfo>
</Box>
    );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
}