import "./styles.css";
import Animation from "../../assets/loading.gif";

const ProfileCard = ({ user, isLoading }) => {
  if (isLoading) {
    return (
      <div className="card loading">
        <img className="animation" src={Animation} alt="loading" />
        <h3>Give us a second</h3>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="card initial">
        <h2>:)</h2>
        <h3>Start looking for some users.</h3>
      </div>
    );
  }

  if (user.message === "Not Found") {
    return (
      <div className="card empty">
        <h2>:(</h2>
        <h3>We didn't found this user. Try again.</h3>
      </div>
    );
  }

  return (
    <div className="card profile">
      <img className="profile-img" src={user.avatar_url} alt="profile-pic" />
      <div className="profile-desc">
        <h3>{user.name}</h3>
        <span>{user.login}</span>
        <span>{user.location}</span>
        <span>{user.bio}</span>
        <a className="profile-button" href={user.url}>
          Go to GitHub Profile
        </a>
      </div>
    </div>
  );
};

export { ProfileCard };
