
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
    image:"https://tse3.mm.bing.net/th/id/OIP.ZL_flD2YAKPE4uQGMZvdOQHaFX?pid=Api&P=0&h=180",
  },
  {
    
    name: "Cheese Sandwich",
    description: "Grilled sandwich with melted cheese and herbs.",
    price: "₹150",
    image: "https://tse3.mm.bing.net/th/id/OIP.BvSpM9v7vSU5jM2L6_dxqAHaFj?pid=Api&P=0&h=180",
  },
  {
    
    name: "Cold Coffee",
    description: "Chilled coffee blended with ice and cream.",
    price: "₹160",
    image: "https://tse1.mm.bing.net/th/id/OIP.awzDrZu8VfZNt5Uy8x5B5QHaLT?pid=Api&P=0&h=180",
  },
  

  
 
  {
    
    name: "French Fries",
    description: "Crispy golden fries served with ketchup.",
    price: "₹120",
    image: "https://tse1.mm.bing.net/th/id/OIP.T96-l_gUGQYf8e0GFOosngHaHm?pid=Api&P=0&h=180",
  },

  {
    
    name: "Pasta Alfredo",
    description: "Creamy white sauce pasta with herbs and cheese.",
    price: "₹210",
    image: "https://tse2.mm.bing.net/th/id/OIP.1arYcLj0vUMBgPX9C7KgPAHaF1?pid=Api&P=0&h=180",
  },
   {
    
    name: "Donuts",
    description: "Soft and fluffy donuts glazed with chocolate.",
    price: "₹140",
    image: "https://tse2.mm.bing.net/th/id/OIP.AYOV9ZhIo2A2_lGyW1qqtgHaE8?pid=Api&P=0&h=180",
  },
   
   {
    
    name: "Mocha",
    description: "Espresso mixed with chocolate and steamed milk.",
    price: "₹190",
    image: "https://tse4.mm.bing.net/th/id/OIP.XA6wtDnxaMc20iGyjp7hDQHaGu?pid=Api&P=0&h=180",
  },
  {
    
    name: "Strawberry Milkshake",
    description: "Creamy shake with fresh strawberries and ice cream.",
    price: "₹160",
    image: "https://tse1.mm.bing.net/th/id/OIP.-MeyKDtk5WLL7SDEB8izNQHaLH?pid=Api&P=0&h=180",
  },
  {
    
    name: "Lemon Mojito",
    description: "Cool and refreshing mint-lemon drink.",
    price: "₹140",
    image: "https://tse1.mm.bing.net/th/id/OIP.ugu4YHd0ilU-lo4JnFllVwHaLH?pid=Api&P=0&h=180",
  },
   {
    id: 20,
    name: "Masala Chai",
    description: "Indian spiced tea brewed with milk and cardamom.",
    price: "₹90",
    image: "https://tse3.mm.bing.net/th/id/OIP.rPUSayGmsGzglnGmqnywhgHaLH?pid=Api&P=0&h=180",
  },
  {
    id: 21,
    name: "Espresso Shot",
    description: "Strong and bold espresso served hot.",
    price: "₹100",
    image: "https://tse1.mm.bing.net/th/id/OIP.qrb3lHWQR6bu2ftTRhJ0JQHaFk?pid=Api&P=0&h=180",
  },

  
  {
    
    name: "Veg Pizza Slice",
    description: "Cheesy pizza slice with bell peppers and corn.",
    price: "₹180",
    image: "https://tse2.mm.bing.net/th/id/OIP.CfxCwgdmIz9eFLP9LdTgtAHaHa?pid=Api&P=0&h=180",
  },
  {
    
    name: "Paneer Puff",
    description: "Flaky pastry filled with spicy paneer stuffing.",
    price: "₹80",
    image: "https://tse3.mm.bing.net/th/id/OIP.15oqJuakdpQn4yW7QQ_vLAHaE7?pid=Api&P=0&h=180",
  },
  {
    
    name: "Veg Momos",
    description: "Steamed dumplings stuffed with vegetables and served with chutney.",
    price: "₹130",
    image: "https://tse1.mm.bing.net/th/id/OIP.smTLo5uNsO93Y4Qs65FPPQHaHa?pid=Api&P=0&h=180",
  },
  {
    
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with veggies and noodles.",
    price: "₹140",
    image: "https://tse2.mm.bing.net/th/id/OIP.Szp2KEB2TWGX7SVrYoA9WwHaHa?pid=Api&P=0&h=180",
  },
  {
    
    name: "Paneer Tikka",
    description: "Grilled paneer cubes marinated in spicy yogurt mix.",
    price: "₹210",
    image: "https://tse1.mm.bing.net/th/id/OIP.uxZyx2BrmtT4eMIt88GfnAHaHa?pid=Api&P=0&h=180",
  },
  {
    
    name: "Nachos with Cheese",
    description: "Crispy nachos topped with melted cheese and salsa.",
    price: "₹170",
    image: "https://tse1.mm.bing.net/th/id/OIP.4ENFXtR_3lhS0ftvYrUeigHaLH?pid=Api&P=0&h=180",
  },
  {
    
    name: "Garlic Cheese Breadsticks",
    description: "Cheesy and buttery breadsticks with garlic seasoning.",
    price: "₹130",
    image: "https://i.pinimg.com/originals/36/a2/4b/36a24b38c20b0a8965555c0450cfad31.jpg",
  },
  {
    
    name: "Club Sandwich",
    description: "Triple-layer sandwich with veggies, mayo, and cheese.",
    price: "₹160",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg",
  },
  {
    
    name: "Oreo Shake",
    description: "Blended Oreo cookies with ice cream and milk.",
    price: "₹170",
    image: "https://thesaltymarshmallow.com/wp-content/uploads/2018/08/oreo-milkshakes1.jpg",
  },
  {
    
    name: "Fruit Salad Bowl",
    description: "Fresh fruits with honey and cream topping.",
    price: "₹150",
    image: "https://www.theroastedroot.net/wp-content/uploads/2023/05/THE-best-fruit-salad-4.jpg",
  },
  {
    
    name: "Chocolate Pancakes",
    description: "Fluffy pancakes drizzled with chocolate syrup.",
    price: "₹190",
    image: "https://www.biggerbolderbaking.com/wp-content/uploads/2022/05/chocolate-pancakes-2-1.jpg",
  },
  {
    
    name: "Banana Smoothie",
    description: "Thick banana shake with milk and honey.",
    price: "₹140",
    image: "https://tse2.mm.bing.net/th/id/OIP.Ot1zD_Mlb2Oy5rePOmVYJwHaE7?pid=Api&P=0&h=180",
  },

];


function Menu() {
  return (
    <div className="mt-10">
          <h1 className="text-3xl font-bold text-center text-[#CD2C58] mb-8">
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
