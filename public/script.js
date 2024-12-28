const products = {
  featured: [
    {
      id: 'f1',
      name: 'Diamond Eternity Ring',
      price: 1999.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
      description: 'Stunning diamond eternity ring in 18k white gold'
    },
    {
      id: 'f2',
      name: 'Pearl Necklace',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338',
      description: 'Elegant freshwater pearl necklace with sterling silver clasp'
    },
    {
      id: 'f3',
      name: 'Sapphire Earrings',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d',
      description: 'Beautiful sapphire and diamond drop earrings'
    }
  ],
  accessories: [
    {
      id: 'a1',
      name: 'Gold Chain Bracelet',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
      description: '18k gold chain bracelet with delicate design'
    },
    {
      id: 'a2',
      name: 'Silver Anklet',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908',
      description: 'Sterling silver anklet with charm details'
    },
    {
      id: 'a3',
      name: 'Rose Gold Watch',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e',
      description: 'Elegant rose gold watch with crystal details'
    },
    {
      id: 'a4',
      name: 'Pearl Hair Pins',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36',
      description: 'Set of 3 pearl hair pins in silver setting'
    },
    {
      id: 'a5',
      name: 'Crystal Brooch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1',
      description: 'Vintage-style crystal brooch in silver'
    },
    {
      id: 'a6',
      name: 'Gold Bangle Set',
      price: 449.99,
      image: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36',
      description: 'Set of 3 stackable gold bangles'
    },
    {
      id: 'a7',
      name: 'Diamond Tennis Bracelet',
      price: 1899.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
      description: 'Classic diamond tennis bracelet in white gold'
    },
    {
      id: 'a8',
      name: 'Pearl Drop Earrings',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1615655096345-61a54750068d',
      description: 'Elegant pearl drop earrings with silver posts'
    }
  ],
  gifting: [
    {
      id: 'g1',
      name: 'Heart Pendant',
      price: 699.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Elegant heart pendant in 18k gold'
    },
    {
      id: 'g2',
      name: 'Engraved Cufflinks',
      price: 299.99,
      image: 'https://img.freepik.com/free-photo/shiny-gold-jewelry-wooden-table-exudes-elegance-luxury-generated-by-artificial-intelligence_188544-85008.jpg?t=st=1735140659~exp=1735144259~hmac=58c47de3a6e7584c7b2ea8316f6dc197b9d513d9e8ec07fc2df67c7f801a54f9&w=1060',
      description: 'Personalized engraved cufflinks in sterling silver'
    },
    {
      id: 'g3',
      name: 'Birthstone Ring',
      price: 499.99,
      image: 'https://img.freepik.com/free-photo/luxurious-golden-ring-with-purple-gemstone_1203-1528.jpg?t=st=1735140777~exp=1735144377~hmac=365d596fc6e2e459a0d536ef6b90e0d3ca90c34835f24faa422f93490662eb5a&w=740',
      description: 'Customizable birthstone ring in 14k gold'
    },
    {
      id: 'g1',
      name: 'Heart Pendant',
      price: 699.99,
      image: 'https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Elegant heart pendant in 18k gold'
    },
    {
      id: 'g2',
      name: 'Engraved Cufflinks',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Personalized engraved cufflinks in sterling silver'
    },
    {
      id: 'g3',
      name: 'Birthstone Ring',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
      description: 'Customizable birthstone ring in 14k gold'
    }
    
  ],
  offers: [
    {
      id: 'o1',
      name: 'Discounted Diamond Studs',
      price: 799.99,
      image: 'https://plus.unsplash.com/premium_photo-1681276169830-7bd1678b0c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
      description: 'Diamond stud earrings at a special price'
    },
    {
      id: 'o2',
      name: 'Clearance Silver Bracelet',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1543295204-2ae345412549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
      description: 'Sterling silver bracelet on clearance'
    },
    {
      id: 'o3',
      name: 'Limited Time Gold Necklace',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1597006354775-2955b15ec026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
      description: '18k gold necklace available for a limited time'
    },
    {
      id: 'o4',
      name: 'Discounted Diamond Studs',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1535556261192-f718879e7f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
      description: 'Diamond stud earrings at a special price'
    },
    {
      id: 'o5',
      name: '',
      price: 199.99,
      image: 'https://plus.unsplash.com/premium_photo-1681276170568-a5632dc01a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
      description: 'Sterling silver bracelet on clearance'
    },
    {
      id: 'o6',
      name: '',
      price: 999.99,
      image: '',
      description: 'https://images.unsplash.com/photo-1611087388916-b6c97e01735b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxqZXdlbHJ5fGVufDB8fDB8fHww'
    },
    {
      id: 'o7',
      name: '',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1511253819057-5408d4d70465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxqZXdlbHJ5fGVufDB8fDB8fHww',
      description: 'Diamond stud earrings at a special price'
    }
  ],
  diamonds: [
    {
      id: 'd1',
      name: 'Solitaire Diamond Ring',
      price: 2999.99,
      image: 'https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D',
      description: 'Classic solitaire diamond ring in platinum'
    },
    {
      id: 'd2',
      name: 'Diamond Pendant',
      price: 1499.99,
      image: 'https://images.unsplash.com/photo-1685970731194-e27b477e87ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D',
      description: 'Elegant diamond pendant in 18k white gold'
    },
    {
      id: 'd3',
      name: 'Diamond Cluster Earrings',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1676120963306-8969fa6a810e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D',
      description: 'Stunning diamond cluster earrings in white gold'
    },
    {
      id: 'd4',
      name: 'Diamond Cluster Earrings',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1677045419465-5c64f8277e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D',
      description: 'Stunning diamond cluster earrings in white gold'
    },
    {
      id: 'd5',
      name: 'Diamond Cluster Earrings',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1676120963306-8969fa6a810e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D',
      description: 'Stunning diamond cluster earrings in white gold'
    },
    {
      id: 'd6',
      name: 'Diamond Cluster Earrings',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1676120963306-8969fa6a810e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D',
      description: 'Stunning diamond cluster earrings in white gold'
    },
    {
      id: 'd7',
      name: 'Diamond Cluster Earrings',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1676120963306-8969fa6a810e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D',
      description: 'Stunning diamond cluster earrings in white gold'
    }
  ]
};

let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCartDisplay();
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
  let cartCountElements = document.querySelectorAll('.cart-count');
  cartCountElements.forEach(element => {
    element.textContent = cart.length;
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}


function calculateTotalPrice() {
  let total = 0;
  for (let item of cart) {
    total += parseFloat(item.price);
  }
  return total.toFixed(2);
}

function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  if (!cartItemsContainer || !totalPriceElement) {
    return;
  }

  cartItemsContainer.innerHTML = '';
  let index = 0;
  for (let item of cart) {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
      <span>${item.name} - $${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    
    cartItemsContainer.appendChild(cartItemDiv);
    index++;
  }

  totalPriceElement.textContent = `Total: $${calculateTotalPrice()}`;
}

// Load cart from local storage on page load
let storedCart = localStorage.getItem('cart');
if (storedCart) {
  cart = JSON.parse(storedCart);
  updateCartDisplay();
  if (document.getElementById('cart-items')) {
    displayCartItems();
  }
}

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
  // Example: Fetch user email from local storage or backend
  const userEmail = localStorage.getItem('userEmail') || ''; // Replace with your method of retrieving user email

  if (userEmail) {
      const firstLetter = userEmail.charAt(0).toUpperCase(); // Get the first letter and convert to uppercase
      const userIcon = document.getElementById('user-icon');
      const userIconLink = document.getElementById('user-icon-link');

      // Hide the default user icon
      userIcon.style.display = 'none';

      // Show the user info
      const userInfo = document.getElementById('user-info');
      const userNameSpan = document.getElementById('user-name');
      userInfo.style.display = 'block';
      userNameSpan.textContent = firstLetter;

      // Style the text to look like an icon
      userNameSpan.style.cssText = `
          display: inline-block;
          width: 40px;
          height: 40px;
          background-color: #ddd;
          border-radius: 50%;
          color: #333;
          font-size: 20px;
          text-align: center;
          line-height: 40px;
      `;
  }
});
// Example of setting user email after login/signup
function onUserLogin(userEmail) {
  localStorage.setItem('userEmail', userEmail); // Save email to local storage
  window.location.href = 'index.html'; // Redirect to index page
}
