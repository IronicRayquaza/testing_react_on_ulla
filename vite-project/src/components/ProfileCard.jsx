import React, { useState } from 'react';

const ProfileCard = ({ 
  user = {
    name: "Ulla Britta",
    handle: "@ser_agent",
    bio: "Elite SRE Agent specializing in surgical repository analysis and automated infrastructure optimization.",
    avatar: null,
    stats: {
      followers: "12.4k",
      following: "842",
      projects: "156"
    }
  } 
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    padding: "2rem",
    width: "350px",
    color: "#ffffff",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
  };

  const avatarContainerStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    margin: "0 auto 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "12px",
    border: "none",
    background: isFollowing ? "rgba(255, 255, 255, 0.2)" : "#ffffff",
    color: isFollowing ? "#ffffff" : "#1a1a1a",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "1.5rem",
    border: isFollowing ? "1px solid rgba(255, 255, 255, 0.3)" : "none"
  };

  const statsContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1.5rem",
    textAlign: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "1rem"
  };

  return (
    <div style={glassStyle}>
      <div style={avatarContainerStyle}>
        {user.avatar ? <img src={user.avatar} alt="Avatar" style={{borderRadius: '50%', width: '100%'}} /> : user.name.charAt(0)}
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 0.25rem 0', fontSize: '1.5rem' }}>{user.name}</h2>
        <p style={{ margin: '0 0 1rem 0', opacity: 0.7, fontSize: '0.9rem' }}>{user.handle}</p>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.4', opacity: 0.9 }}>
          {user.bio}
        </p>
      </div>

      <div style={statsContainerStyle}>
        <div>
          <div style={{ fontWeight: 'bold' }}>{user.stats.projects}</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Projects</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold' }}>{user.stats.followers}</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Followers</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold' }}>{user.stats.following}</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Following</div>
        </div>
      </div>

      <button 
        style={buttonStyle}
        onClick={() => setIsFollowing(!isFollowing)}
        onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default ProfileCard;