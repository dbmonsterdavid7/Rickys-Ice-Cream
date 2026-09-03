export interface MenuCategory {
  id: string;
  title: string;
  tagline?: string;
  pricingHeader?: string;
  sizes?: { name: string; price: number }[];
  subsections?: {
    title: string;
    description?: string;
    items: string[];
    priceNote?: string;
  }[];
  items?: {
    name: string;
    price?: number;
    description?: string;
    tags?: string[];
  }[];
  notes?: string[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'cones-cups',
    title: 'Cones & Cups',
    pricingHeader: 'Baby $2.00 • Small $3.19 • Medium $3.69 • Large $4.19',
    sizes: [
      { name: 'Baby Cone or Cup', price: 2.00 },
      { name: 'Small Cone or Cup', price: 3.19 },
      { name: 'Medium Cone or Cup', price: 3.69 },
      { name: 'Large Cone or Cup', price: 4.19 },
    ],
    subsections: [
      {
        title: 'Dips + Toppings Available on Cones and Cups',
        priceNote: '$0.75 each',
        items: [
          'Birthday Cake Cone Dip',
          'Blue Raspberry Cone Dip',
          'Cherry Dip',
          'Chocolate Dip',
          'Cotton Candy Dip',
          'Nuts',
          'Sprinkles',
          'Toasted Coconut',
        ],
      },
      {
        title: 'Soft Serve Flavors',
        description: 'Smooth, creamy soft-serve churned fresh.',
        items: ['Chocolate', 'Vanilla', 'Twist (Chocolate & Vanilla)'],
      },
      {
        title: 'Hard Scoop Flavors',
        description: 'Michigan favorites & signature hard scoops.',
        items: [
          'Cotton Candy',
          'Vanilla',
          'Mint Chocolate Chip',
          'Superman',
          'Michigan Pothole',
          'Butter Pecan (Sugar Free)',
        ],
      },
    ],
  },
  {
    id: 'flurrios',
    title: 'Flurrios',
    tagline: 'All Flurrios come with one free mix-in. Additional mix-ins or toppings available.',
    pricingHeader: 'Mini $4.39 • Small $5.29 • Medium $5.79 • Large $6.49',
    sizes: [
      { name: 'Mini', price: 4.39 },
      { name: 'Small', price: 5.29 },
      { name: 'Medium', price: 5.79 },
      { name: 'Large', price: 6.49 },
    ],
    subsections: [
      {
        title: 'Toppings & Mix-Ins',
        priceNote: 'All toppings and mix-ins are $0.75 (First mix-in included free!)',
        items: [
          'Brownie',
          'Butterfinger',
          'Chocolate',
          'Chocolate Syrup',
          'Cookie Dough',
          'Gummy Worms',
          'Heath Bar',
          'Hot Fudge',
          'Kit Kat',
          'M&Ms',
          'Mint Oreo',
          'Oreo',
          'Peanuts',
          'Pecans',
          'Pineapple',
          'Raspberry Syrup',
          'Reese\'s',
          'Snickers',
          'Sprinkles',
          'Toasted Coconut',
          'Twix',
          'Whipped Cream',
        ],
      },
    ],
  },
  {
    id: 'specialties',
    title: 'Specialties',
    pricingHeader: 'Crafted Dessert Creations • $5.89 each',
    items: [
      {
        name: 'Banana Split',
        price: 5.89,
        description: 'Pineapple, chocolate syrup, strawberry sauce, nuts, cherries and whipped cream.',
      },
      {
        name: 'Cookie Dough Monster',
        price: 5.89,
        description: 'Cookie dough, sprinkles and candy eyeballs.',
      },
      {
        name: 'Gold Mine',
        price: 5.89,
        description: 'Peanut butter, hot fudge, and rich chewy brownies.',
      },
      {
        name: 'Parfait',
        price: 5.89,
        description: 'Served layered with your choice of one free topping.',
      },
      {
        name: 'Strawberry Shortcake',
        price: 5.89,
        description: 'Topped with real shortcake, strawberries, strawberry syrup, and whipped cream.',
      },
      {
        name: 'Superbowl',
        price: 5.89,
        description: 'Fresh bananas, ripe strawberries, and chewy chocolate brownies.',
      },
      {
        name: 'Tin Roof',
        price: 5.89,
        description: 'Vanilla ice cream topped with roasted Spanish peanuts and rich hot fudge.',
      },
      {
        name: 'Trash Can',
        price: 5.89,
        description: 'Two free toppings included. Served in a fun neon souvenir trash can.',
      },
    ],
  },
  {
    id: 'sundaes',
    title: 'Sundaes',
    pricingHeader: 'Small $4.39 • Medium $4.79 • Large $5.09',
    sizes: [
      { name: 'Small', price: 4.39 },
      { name: 'Medium', price: 4.79 },
      { name: 'Large', price: 5.09 },
    ],
    subsections: [
      {
        title: 'Available Sundae Flavors & Sauces',
        items: [
          'Blueberry',
          'Caramel',
          'Hot Fudge',
          'Peanut Butter',
          'Pineapple',
          'Raspberry',
          'Strawberry',
        ],
      },
    ],
  },
  {
    id: 'milkshakes',
    title: 'Milkshakes',
    pricingHeader: 'Small $4.69 • Medium $5.19 • Large $6.09',
    sizes: [
      { name: 'Small', price: 4.69 },
      { name: 'Medium', price: 5.19 },
      { name: 'Large', price: 6.09 },
    ],
    subsections: [
      {
        title: 'Available Milkshake Flavors',
        items: [
          'Banana',
          'Blueberry',
          'Butterscotch',
          'Chocolate',
          'Hot Fudge',
          'Marshmallow',
          'Mint',
          'Peanut Butter',
          'Pineapple',
          'Raspberry',
          'Strawberry',
          'Vanilla',
        ],
      },
    ],
  },
  {
    id: 'slushies',
    title: 'Slushies',
    pricingHeader: 'Junior $2.00 • Small $2.79 • Medium $3.19 • Large $3.39',
    sizes: [
      { name: 'Junior', price: 2.00 },
      { name: 'Small', price: 2.79 },
      { name: 'Medium', price: 3.19 },
      { name: 'Large', price: 3.39 },
    ],
    subsections: [
      {
        title: 'Jolly Rancher Flavors',
        items: [
          'Watermelon',
          'Cherry',
          'Blue Raspberry',
          'Strawberry',
          'Grape',
          'Green Apple',
        ],
      },
      {
        title: 'Classic Flavors',
        items: [
          'Pineapple',
          'Banana',
          'Bubble Gum',
          'Cotton Candy',
          'Mango',
          'Orange',
        ],
      },
    ],
  },
  {
    id: 'floats',
    title: 'Floats',
    pricingHeader: 'Handcrafted Fountain Classics • $6.49 each',
    items: [
      {
        name: 'Boston Cooler',
        price: 6.49,
        description: 'The beloved Michigan classic: Genuine Vernors ginger soda blended or poured over rich vanilla ice cream.',
      },
      {
        name: 'Root Beer Float',
        price: 6.49,
        description: 'Old-fashioned creamy root beer poured over thick scoops of vanilla ice cream.',
      },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    pricingHeader: 'Cold Drinks',
    items: [
      {
        name: 'Sodas',
        price: 2.00,
        description: 'Pepsi, Diet Pepsi, Dr. Pepper, Starry, Mt. Dew, Root Beer, Vernors',
      },
      {
        name: 'Bottled Spring Water',
        price: 1.00,
        description: 'Chilled pure water',
      },
    ],
  },
];
