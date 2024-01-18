import React from "react";
import instagramimg from '../images/instagram.png'
const Layout = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_links">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            About me
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            Blog
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            Careers
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            Contact me
          </a>
        </div>
        <div className="footer_links">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            Support
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            Source
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            Inspirations
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            Community
          </a>
        </div>
        <div className="footer_links">
          <span>My socials</span>
          <a href="https://instagram.com/kanakldrov?igshid=MTk0NTkyODZkYg%3D%3D&utm_source=qr">
            Follow my social life
          </a>
          <img src={instagramimg} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Layout;
