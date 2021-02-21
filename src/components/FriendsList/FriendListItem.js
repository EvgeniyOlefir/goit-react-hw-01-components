import PropTypes from 'prop-types';
// import defaultImg from 'img/defaultImg.png';
import s from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.online : s.ofline}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
