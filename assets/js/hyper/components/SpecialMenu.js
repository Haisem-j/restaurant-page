import { h, app } from "hyperapp";
export default function SpecialMenu({ state, actions }) {
  var loopMenu = function() {
    return state.globalState.specialMenuData.map(function(item) {
      console.log(item.title);
      return (
        <div className="col-md-4">
          <div className="box">
            <div className={`box-img-${item.number}`}>
              <div className="price-circle">${item.price}</div>
            </div>
            <span className="title">{item.title}</span>
            <p className="details">
              {item.description}
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <section id="SpecialMenu">
      <div className="container">
        <h5 className="comp-title">Special Menu</h5>
        <h2>Delicious Flavour of Autumn</h2>
        <div className="row boxes">{loopMenu()}</div>
        <a href="#" className="link">
          View Full Menu
        </a>
      </div>
    </section>
  );
}

// <div className="col-md-4">
// <div className="box">
//   <div className="box-img">
//     <div className="price-circle">$25</div></div>
//     <span className="title">Super BBQ Grill No Smoke</span>
//     <p className="details">Fried Eggs, Steak, Baked Potato or French Fries, Side of Vegtables </p>
// </div>
// </div>
