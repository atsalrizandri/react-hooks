import React, { useState, useEffect, useRef } from 'react';
import './assets/Style.css';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    fullName: 'Atsal Rizandri',
    title: 'Software Engineer',
    motto: 'Code with Passion',
    email: 'atsalrizandrii@gmail.com',
    birthday: '01-01-2001',
    country: 'Indonesia',
    state: 'Purwokerto',
    postalCode: '123456',
    phoneNumber: '+62 823-6902-2355'
  });

  const [links, setLinks] = useState({
    instagram: '',
    twitter: '',
    facebook: '',
    github: '',
    linkedIn: '',
  });

  const [isEditable, setIsEditable] = useState(false);
  const [isEditableLinks, setIsEditableLinks] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    if (profileRef.current) {
      console.log('Profile updated:', profile);
    }
  }, [profile]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleLinksChange = (e) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  const handleUpdateProfile = () => {
    setIsEditable(!isEditable);
    if (isEditable) {
      profileRef.current = profile;
      console.log('Profile saved:', profile);
    }
  };

  const handleUpdateLinks = () => {
    setIsEditableLinks(!isEditableLinks);
    if (isEditableLinks) {
      console.log('Links saved:', links);
    }
  };

  return (
    <div className="profile-settings">
      <div className="profile-section">
        <h2>Profile</h2>
        <div className="profile-picture-container">
          <img src="src/assets/profile.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          <p>{profile.fullName}</p>
          <p>{profile.title}</p>
          <p>{profile.motto}</p>
          <p>Email: {profile.email}</p>
          <p>Birthday: {profile.birthday}</p>
          <p>Country: {profile.country}</p>
          <p>State: {profile.state}</p>
          <p>Postal Code: {profile.postalCode}</p>
          <p>Phone Number: {profile.phoneNumber}</p>
          <div className="profile-links">
            {Object.entries(links).map(([key, value]) =>
              value ? (
                <p key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: <a href={value}>{value}</a>
                </p>
              ) : null
            )}
          </div>
        </div>
      </div>

      <div className="update-profile-section">
        <h2>Update Profile</h2>
        <input
          type="text"
          name="fullName"
          value={profile.fullName}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="text"
          name="title"
          value={profile.title}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="text"
          name="motto"
          value={profile.motto}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="date"
          name="birthday"
          value={profile.birthday}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="text"
          name="country"
          value={profile.country}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="text"
          name="state"
          value={profile.state}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="text"
          name="postalCode"
          value={profile.postalCode}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <input
          type="text"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleProfileChange}
          disabled={!isEditable}
        />
        <button onClick={handleUpdateProfile}>
          {isEditable ? 'Save Profile' : 'Update Profile'}
        </button>
      </div>

      <div className="update-links-section">
        <h2>Update Links</h2>
        <input
          type="text"
          name="instagram"
          placeholder='Instagram'
          value={links.instagram}
          onChange={handleLinksChange}
          disabled={!isEditableLinks}
        />
        <input
          type="text"
          name="twitter"
          placeholder='Twitter'
          value={links.twitter}
          onChange={handleLinksChange}
          disabled={!isEditableLinks}
        />
        <input
          type="text"
          name="facebook"
          placeholder='Facebook'
          value={links.facebook}
          onChange={handleLinksChange}
          disabled={!isEditableLinks}
        />
        <input
          type="text"
          name="github"
          placeholder='Github'
          value={links.github}
          onChange={handleLinksChange}
          disabled={!isEditableLinks}
        />
        <input
          type="text"
          name="linkedIn"
          placeholder='LinkedIn'
          value={links.linkedIn}
          onChange={handleLinksChange}
          disabled={!isEditableLinks}
        />
        <button onClick={handleUpdateLinks}>
          {isEditableLinks ? 'Save Links' : 'Update External Links'}
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
