
const MENU_ITEMS = [
    {
    
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and foam.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    
   
    name: "Caramel Latte",
    description: "Smooth espresso mixed with caramel syrup and milk.",
    price: "₹190",
    image: "https://www.freepik.com/free-photo/cup-coffee-with-wooden-spoon_999654.htm#fromView=search&page=1&position=3&uuid=d7e2aee0-3bab-47f2-a12c-1c421e9e2842&query=caramel+latte",
  },
  {
    
    name: "Cheese Sandwich",
    description: "Grilled sandwich with melted cheese and herbs.",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1601050690597-df0c18f2dfe6",
  },
  {
    
    name: "Cold Coffee",
    description: "Chilled coffee blended with ice and cream.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c937d",
  },
  

  
  {
    
    name: "Cheese Sandwich",
    description: "Grilled sandwich with melted cheese and herbs.",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1601050690597-df0c18f2dfe6",
  },
  {
    
    name: "French Fries",
    description: "Crispy golden fries served with ketchup.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1541592106381-f3e06cc4b9af",
  },

  {
    
    name: "Pasta Alfredo",
    description: "Creamy white sauce pasta with herbs and cheese.",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
   {
    
    name: "Donuts",
    description: "Soft and fluffy donuts glazed with chocolate.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1565958011705-44e211c59e2a",
  },
    {
    
    name: "French Fries",
    description: "Crispy golden fries with a side of ketchup.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1541592106381-f3e06cc4b9af",
  },
   {
    
    name: "Mocha",
    description: "Espresso mixed with chocolate and steamed milk.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    
    name: "Strawberry Milkshake",
    description: "Creamy shake with fresh strawberries and ice cream.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
  },
  {
    
    name: "Lemon Mojito",
    description: "Cool and refreshing mint-lemon drink.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1590080875831-89453b9b1d9d",
  },
   {
    id: 20,
    name: "Masala Chai",
    description: "Indian spiced tea brewed with milk and cardamom.",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1615485296707-1e2b1c7d34c9",
  },
  {
    id: 21,
    name: "Espresso Shot",
    description: "Strong and bold espresso served hot.",
    price: "₹100",
    image: "https://images.unsplash.com/photo-1510626176961-4b37d6bbfab9",
  },

  // 🍞 Breakfast & Snacks
  {
    id: 22,
    name: "Veg Pizza Slice",
    description: "Cheesy pizza slice with bell peppers and corn.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1601924582971-df6b0f4c9c4a",
  },
  {
    id: 23,
    name: "Paneer Puff",
    description: "Flaky pastry filled with spicy paneer stuffing.",
    price: "₹80",
    image: "https://www.freepik.com/free-photo/sliced-piroshki-with-potatoes-black-bowl_17189074.htm#fromView=search&page=1&position=0&uuid=d7e2aee0-3bab-47f2-a12c-1c421e9e2842&query=paneer+puff",
  },
  {
    id: 24,
    name: "Veg Momos",
    description: "Steamed dumplings stuffed with vegetables and served with chutney.",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1589308078055-145a1b6b13e0",
  },
  {
    id: 25,
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with veggies and noodles.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1626082927389-6b38a4aa2a65",
  },
  {
    id: 26,
    name: "Paneer Tikka",
    description: "Grilled paneer cubes marinated in spicy yogurt mix.",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1625943555418-186d2bdc375d",
  },
  {
    id: 27,
    name: "Nachos with Cheese",
    description: "Crispy nachos topped with melted cheese and salsa.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1625943555418-186d2bdc375d",
  },
  {
    id: 28,
    name: "Garlic Cheese Breadsticks",
    description: "Cheesy and buttery breadsticks with garlic seasoning.",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1606755962773-0b9f0b0a1f5c",
  },
  {
    id: 29,
    name: "Club Sandwich",
    description: "Triple-layer sandwich with veggies, mayo, and cheese.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1606756792957-84baf23a1b8c",
  },
  {
    id: 30,
    name: "Oreo Shake",
    description: "Blended Oreo cookies with ice cream and milk.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1590080875831-89453b9b1d9d",
  },
  {
    id: 31,
    name: "Fruit Salad Bowl",
    description: "Fresh fruits with honey and cream topping.",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  },
  {
    id: 32,
    name: "Chocolate Pancakes",
    description: "Fluffy pancakes drizzled with chocolate syrup.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
  },
  {
    id: 33,
    name: "Banana Smoothie",
    description: "Thick banana shake with milk and honey.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1556741533-f6acd6472a8e",
  },
   {
    id: 35,
    name: "Grilled Corn",
    description: "Smoky and tangy grilled corn with lemon and masala.",
    price: "₹100",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
];


function Menu() {
  return (
    <div className="mt-10">
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
        ☕ Yum Yum Cafe Menu
      </h1>
      <div  className="  flex flex-wrap justify-center">
      
      {MENU_ITEMS.map((menuObj)=>{
        const {name,description,price,image} = menuObj;
        return (
          <div  className=" bg-[#E06B80] rounded-xl shadow-md p-4 mb-6 text-center mx-5 ">
            <img src={image}   className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2  className="text-xl font-semibold text-[#FFC69D]">{name}</h2>
            <p  className="text-gray-600 text-sm mt-1 mb-2">{description}</p>
            <h3 className="text-lg font-bold text-gray-800">{price}</h3>
          </div>
        )
      })}
      </div>
      </div>
    
  )
}

export default Menu
