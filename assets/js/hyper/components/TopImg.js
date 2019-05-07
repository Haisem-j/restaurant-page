import { h, app } from "hyperapp";
export default function TopImg({ state, actions }) {
  return (
    <section id="TopImg">
    <div className="container">
      <div className="title">
        <h5>Welcome</h5>
        <h1>
          {state.globalState.companyInfo.title}
        </h1>
      </div>
      <div className="contact-info">
      <div className="container">
        <div className="booking">Book Table Directly</div>
        <h2>(718) - 219 - 8652</h2>
        <div className="hours">
          Opening Hours <strong>Mon - Fri</strong> 9am - 9pm{" "}
          <strong>Weekend: </strong> 9am - 11:00pm
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
