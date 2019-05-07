import { h, app } from "hyperapp";
export default function ContactUs({ state, actions }) {
  return (
    <section id="ContactUs">
      <div className="container">
        <h5 className="comp-title">Contact Us</h5>
        <h2>Delicious Flavor Of Autumn</h2>
        <div className="box">
          <div className="row">
            <div className="col-md-6">
              <div className="title">Toronto, Ontario</div>

              <h6 className="Address">
                435 front st
                <br />
                {state.globalState.companyInfo.location}
              </h6>

              <p>
                <strong>email:</strong>{" "}
                <a href="mailto:info@primesteak.com">info@primesteak.com</a>
              </p>
            </div>
            <div className="col-md-6">
              <h6> 
                Phone:
              </h6>
              <div className="title">
              416-843-9999
              </div>
              <h6>
                Lunch Service:
              </h6>
              <p>
                Friday, Saturday and Sunday: Bookings<br/> from 12pm - 1:30pm
              </p>
              <h6>
                Dinner Service:
              </h6>
              <p>
                Daily <br/> from 6pm - 12:00am
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
