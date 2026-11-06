// Mobile Menu
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('show');
}

// Menu Data
const dishes = [
  {name:"Jollof Royale", price:"₦8,500", cat:"main", img:"img 3.jpeg", desc:"Smoky party jollof with grilled chicken & plantain"},
  {name:"Grilled Tilapia", price:"₦12,000", cat:"grills", img:"img1.jpeg", desc:"Charcoal grilled tilapia, pepper sauce & sides"},
  {name:"Mixed Grill Platter", price:"₦18,500", cat:"grills", img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", desc:"Beef, chicken & turkey suya platter for 2"},
  {name:"Pasta Alfredo", price:"₦9,500", cat:"main", img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80", desc:"Creamy alfredo pasta with grilled prawns"},
  {name:"Chocolate Fondant", price:"₦6,000", cat:"dessert", img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80", desc:"Warm chocolate cake with vanilla ice cream"},
  {name:"Fruit Platter Royale", price:"₦7,500", cat:"dessert", img:"https://images.unsplash.com/photo-1564093497595-593b96d80180?w=600&q=80", desc:"Fresh seasonal fruits with honey drizzle"},
];

function renderMenu(list){
  const grid = document.getElementById('menuGrid');
  if(!grid) return;
  grid.innerHTML = list.map(d => `
    <div class="menu-card">
      <img src="${d.img}" alt="${d.name}">
      <div class="menu-card-body">
        <h3>${d.name} <span class="price">${d.price}</span></h3>
        <p>${d.desc}</p>
        <button class="add-btn" onclick="orderDish('${d.name}')">Order Now</button>
      </div>
    </div>
  `).join('');
}
renderMenu(dishes);

function filterMenu(cat, btn){
  document.querySelectorAll('.filter-btns button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(cat==='all') renderMenu(dishes);
  else renderMenu(dishes.filter(d=>d.cat===cat));
}

function orderDish(name){
  alert(name + " added! Order via WhatsApp to complete.");
  window.open("https://wa.me/2348000000000?text=Hello Maison Dorée, I want to order " + encodeURIComponent(name), "_blank");
}

function bookTable(e){
  e.preventDefault();
  const name = document.getElementById('custName').value;
  const guests = document.getElementById('guests').value;
  const date = document.getElementById('bookDate').value;
  document.getElementById('bookMsg').innerText = `Thank you ${name}! Your table for ${guests} on ${date} is received. We will confirm shortly. ✨`;
}
