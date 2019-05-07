import { h, app } from "hyperapp";
export default function Footer({ state, actions }) {
  return (
    <footer>
      <div className="container">
        <nav className="menu">
          <a href="#OurStory">Our Story</a>
          <a href="#Reviews">Reviews</a>
          <a href="#SpecialMenu">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#ContactUs">Contact Us</a>
        </nav>
        <ul className="social-media">
          <li>
            <a href="https://www.facebook.com" target="now">
              <i className="fab fa-facebook-square" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="now">
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.google.com" target="now">
              <i className="fab fa-google-plus" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="now">
              <i className="fab fa-youtube" aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div className="copyright">© 2019 Copyright</div>
      </div>
    </footer>
  );
}
