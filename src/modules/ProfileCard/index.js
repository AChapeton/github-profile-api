const ProfileCard = ({ userData }) => {
  if (userData.message === "Not Found") {
    return <p>Start looking...</p>;
  }

  return (
    <div>
      <img src={userData.avatar_url} alt="profile-pic" />
      <div>
        <h3>{userData.name}</h3>
        <p>{userData.login}</p>
        <p>Antiguo Cuscatlan, El Salvador</p>
        <p>{userData.bio}</p>
        <a href={userData.url}>Go to GitHub Profile</a>
      </div>
    </div>
  );
};

export { ProfileCard };
