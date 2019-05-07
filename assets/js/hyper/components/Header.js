import { h, app } from "hyperapp";
export default function Header({ state, actions }) {
  return (
    <header>
      <div className="container">
        <div className="logo"></div>
        <nav>
          <a href="#OurStory">Our Story</a>
          <a href="#Reviews">Reviews</a>
          <a href="#SpecialMenu">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#ContactUs">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
