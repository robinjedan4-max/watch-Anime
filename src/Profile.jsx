import { useState, useEffect } from 'react';
import { FiArrowLeft, FiEdit2, FiSave, FiX, FiUser, FiMail, FiCalendar } from 'react-icons/fi';

export default function Profile({ onBack, onLogout }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : {
      username: 'Anime Lover',
      email: 'user@example.com',
      joinedDate: new Date().toLocaleDateString(),
      bio: 'Exploring the world of anime',
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(profile);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile]);

  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="profile-page">
      <div className="background-glow" aria-hidden="true">
        <span className="float-dot dot-1" />
        <span className="float-dot dot-2" />
        <span className="float-dot dot-3" />
        <span className="float-dot dot-4" />
      </div>

      <div className="profile-card animate-entry">
        <div className="profile-header">
          <div className="nav-buttons">
            <button type="button" className="nav-back" onClick={onBack}>
              <FiArrowLeft /> Back
            </button>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-avatar">
            <FiUser />
          </div>

          {!isEditing ? (
            <>
              <div className="profile-info">
                <div className="profile-field">
                  <label className="field-label">
                    <FiUser /> Username
                  </label>
                  <p className="field-value">{profile.username}</p>
                </div>

                <div className="profile-field">
                  <label className="field-label">
                    <FiMail /> Email
                  </label>
                  <p className="field-value">{profile.email}</p>
                </div>

                <div className="profile-field">
                  <label className="field-label">
                    <FiCalendar /> Joined
                  </label>
                  <p className="field-value">{profile.joinedDate}</p>
                </div>

                <div className="profile-field">
                  <label className="field-label">Bio</label>
                  <p className="field-value">{profile.bio}</p>
                </div>
              </div>

              <button
                type="button"
                className="edit-profile-btn"
                onClick={() => setIsEditing(true)}
              >
                <FiEdit2 />
                Edit Profile
              </button>
            </>
          ) : (
            <>
              <div className="profile-form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={editData.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={editData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    value={editData.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    className="form-textarea"
                    rows="4"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>

              <div className="form-buttons">
                <button
                  type="button"
                  className="save-btn"
                  onClick={handleSave}
                >
                  <FiSave />
                  Save Changes
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  <FiX />
                  Cancel
                </button>
              </div>
            </>
          )}

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-label">Likes Given</span>
              <span className="stat-value">
                {Object.values(JSON.parse(localStorage.getItem('globalLikes') || '{}')).reduce((a, b) => a + b, 0)}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Comments Made</span>
              <span className="stat-value">
                {Object.values(JSON.parse(localStorage.getItem('comments') || '{}'))
                  .reduce((total, arr) => total + (Array.isArray(arr) ? arr.length : 0), 0)}
              </span>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <button type="button" className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
