var companyInfo = {
  title: "PRIME STEAK RESTAURANT",
  phone: '(718) - 219 - 8652',
  location: 'Toronto Ontario'
}

var specialMenuData = [
  {
    number: 0,
    title: 'Super BBQ Grill No Smoke',
    description: 'Steak, Baked Potato or French Fries, Side of Vegtables ',
    price: 23
  },
  {
    number: 1,
    title: 'Chicken Fingers',
    description: 'Chicken Fingers, French Fries, Side of Vegtables ',
    price: 13
  },
  {
    number: 2,
    title: 'All American Hamburger',
    description: 'Beef Hamburger French Fries, Side of Vegtables ',
    price: 15
  }
]

var reviewsData =[
  {
    company: 'NBC',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Chef Masters',
    highlight: 'Best Restaurant In Toronto',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
  },
  {
    company: 'NBC',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Chef Masters',
    highlight: 'Best Restaurant In Toronto',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
  },
  {
    company: 'HBO',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Chef Masters',
    highlight: 'Best Restaurant In Toronto',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
  },
  {
    company: 'CBC',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Chef Masters',
    highlight: 'Best Restaurant In Toronto',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
  },
  {
    company: 'New York Times',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Chef Masters',
    highlight: 'Best Restaurant In Toronto',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam? Amet nihil eligendi blanditiis ab quas odio quo ad facilis omnis, pariatur neque aperiam nam! Amet commodi dolorem rem? Pariatur dolorem aliquid et natus, alias nisi praesentium ut ratione doloribus aspernatur consequatur ab. Fugiat ipsam voluptatum necessitatibus nobis iste architecto'
  }
]

var randomQuote = [
  {
    author: 'Jeffory',
    quote: 'Good Painting Is Like Good Cooking; It Can Be Tasted But Not Explained'
  },
  {
    author: 'John',
    quote: 'Best Burger In the GTA!'
  },
  {
    author: 'Tyrion',
    quote: 'Cant Live Without Trying This'
  },
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuote,
  currentReview: 0
}

