import { useState } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const defaultScroll = () => window.onscroll == null;

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
    return defaultScroll();
  };
  console.log(isScrolled);

  return (
    <div className={`navbar ${isScrolled && 'scrolled'}`}>
      <div className="container">
        <div className="left">
          <img src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png" alt="netflix-logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New an Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <i className="bx bx-search icon" />
          <span>KID</span>
          <i className="bx bxs-bell icon" />
          <img
            src="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?k=20&m=1287459398&s=612x612&w=0&h=-BH-AsvbdjM8G-Uc_UabWztbQxFmYstg_Z2-Ix4_IEg="
            alt="user-img"
          />
          <div className="profile">
            <i className="bx bxs-down-arrow icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
