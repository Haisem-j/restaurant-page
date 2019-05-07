webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  reviewRightClick: reviewRightClick,
  reviewLeftClick: reviewLeftClick,
  intro: intro,
  showMenu: showMenu
};

function reviewLeftClick(state, actions) {
  return { currentReview: state.globalState.currentReview-- };
}
function reviewRightClick(state, actions) {
  return { currentReview: state.globalState.currentReview++ };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: "PRIME STEAK RESTAURANT",
  phone: '(718) - 219 - 8652',
  location: 'Toronto Ontario'
};

var specialMenuData = [{
  number: 0,
  title: 'Super BBQ Grill No Smoke',
  description: 'Steak, Baked Potato or French Fries, Side of Vegtables ',
  price: 23
}, {
  number: 1,
  title: 'Chicken Fingers',
  description: 'Chicken Fingers, French Fries, Side of Vegtables ',
  price: 13
}, {
  number: 2,
  title: 'All American Hamburger',
  description: 'Beef Hamburger French Fries, Side of Vegtables ',
  price: 15
}];

var reviewsData = [{
  company: 'NBC',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of Chef Masters',
  highlight: 'Best Restaurant In Toronto',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
}, {
  company: 'NBC',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of Chef Masters',
  highlight: 'Best Restaurant In Toronto',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
}, {
  company: 'HBO',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of Chef Masters',
  highlight: 'Best Restaurant In Toronto',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
}, {
  company: 'CBC',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of Chef Masters',
  highlight: 'Best Restaurant In Toronto',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
}, {
  company: 'New York Times',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of Chef Masters',
  highlight: 'Best Restaurant In Toronto',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
}];

var randomQuote = [{
  author: 'Jeffory',
  quote: 'Good Painting Is Like Good Cooking; It Can Be Tasted But Not Explained'
}, {
  author: 'John',
  quote: 'Best Burger In the GTA!'
}, {
  author: 'Tyrion',
  quote: 'Cant Live Without Trying This'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuote: randomQuote,
  currentReview: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor Of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "box" },
        (0, _hyperapp.h)(
          "div",
          { className: "row" },
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "title" },
              "Toronto, Ontario"
            ),
            (0, _hyperapp.h)(
              "h6",
              { className: "Address" },
              "435 front st",
              (0, _hyperapp.h)("br", null),
              state.globalState.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@primesteak.com" },
                "info@primesteak.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "title" },
              "416-843-9999"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday and Sunday: Bookings",
              (0, _hyperapp.h)("br", null),
              " from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily ",
              (0, _hyperapp.h)("br", null),
              " from 6pm - 12:00am"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "nav",
        { className: "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#OurStory" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#Reviews" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#SpecialMenu" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#ContactUs" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { className: "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.facebook.com", target: "now" },
            (0, _hyperapp.h)("i", { className: "fab fa-facebook-square", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.twitter.com", target: "now" },
            (0, _hyperapp.h)("i", { className: "fab fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.google.com", target: "now" },
            (0, _hyperapp.h)("i", { className: "fab fa-google-plus", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.youtube.com", target: "now" },
            (0, _hyperapp.h)("i", { className: "fab fa-youtube", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "copyright" },
        "\xA9 2019 Copyright"
      )
    )
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)("div", { className: "logo" }),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#OurStory" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#Reviews" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#SpecialMenu" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#ContactUs" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { className: "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            " Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni animi pariatur earum quas ipsa quo? Culpa quisquam repudiandae doloremque inventore harum dolorem id laborum magni voluptatibus hic saepe animi aut accusamus voluptate voluptatum expedita excepturi, esse blanditiis, beatae delectus? Porro nobis maiores, nisi similique adipisci repellendus odio nesciunt officiis."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            "\"The best steak in the town of Huntington\" -",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", className: "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)("div", { className: "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"Good painting is like good cooking; it can be tasted, but not explained.\""
      ),
      (0, _hyperapp.h)(
        "span",
        { className: "author" },
        "-Johnny-"
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = function currentReview() {

    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Reviews"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.globalState.reviewsData[state.globalState.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        "\"",
        state.globalState.reviewsData[state.globalState.currentReview].highlight,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.globalState.reviewsData[state.globalState.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.globalState.reviewsData[state.globalState.currentReview].author
        ),
        " - ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.globalState.reviewsData[state.globalState.currentReview].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.globalState.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClick();
    }
  };
  var rightClickBTN = function rightClickBTN() {
    if (state.globalState.currentReview == state.globalState.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClick();
      console.log("The current review: " + state.globalState.currentReview);
    }
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { className: "side-image" },
            (0, _hyperapp.h)("img", { src: "https://s-i.huffpost.com/gen/1282658/images/o-FEMALE-CHEF-facebook.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { className: "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN, className: "fa fa-arrow-left " + (state.globalState.currentReview > 0 ? 'ready' : ''), "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN, className: "fa fa-arrow-right " + (state.globalState.currentReview < state.globalState.reviewsData.length - 1 ? 'ready' : ''), "aria-hidden": "true" })
          )
        )
      )
    )
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.globalState.specialMenuData.map(function (item) {
      console.log(item.title);
      return (0, _hyperapp.h)(
        "div",
        { className: "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { className: "box" },
          (0, _hyperapp.h)(
            "div",
            { className: "box-img-" + item.number },
            (0, _hyperapp.h)(
              "div",
              { className: "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { className: "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { className: "details" },
            item.description
          )
        )
      );
    });
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavour of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", className: "link" },
        "View Full Menu"
      )
    )
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { className: "container" },
          (0, _hyperapp.h)(
            "div",
            { className: "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(718) - 219 - 8652"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri"
            ),
            " 9am - 9pm",
            " ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Weekend: "
            ),
            " 9am - 11:00pm"
          )
        )
      )
    )
  );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[12]);