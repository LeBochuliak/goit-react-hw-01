import css from'./Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileInfo}>
        <img
          className={css.logo}
          src={image}
          alt="User avatar"
          width={120}
        />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.itemNumber}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.itemNumber}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.itemNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;