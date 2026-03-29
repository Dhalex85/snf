const app = document.getElementById("app");
const nav = document.getElementById("nav");

const images = {
  "Desayunos": "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  "Quesos y Ensaladas": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  "Sopas": "https://images.unsplash.com/photo-1547592180-85f173990554",
  "Carnes": "https://images.unsplash.com/photo-1558030006-450675393462",
  "Mariscos": "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
  "Bebidas": "https://images.unsplash.com/photo-1544145945-f90425340c7e"
};

const sections = [];

Object.keys(menuData).forEach(cat => {

  const btn = document.createElement("button");
  btn.textContent = cat;
  nav.appendChild(btn);

  const section = document.createElement("section");
  section.className = "section";
  section.id = cat;

  section.innerHTML = `
    <img src="${images[cat]}" alt="${cat}">
    <h2>${cat}</h2>
    <div class="menu">
      ${menuData[cat].map(i => `
        <div class="item">
          <span>${i[0]}</span>
          <span class="price">$${i[1]}</span>
        </div>
      `).join("")}
    </div>
  `;

  app.appendChild(section);

  btn.onclick = () => section.scrollIntoView({behavior:"smooth"});

  sections.push({btn, section});
});

/* SCROLL UX PRO */
window.addEventListener("scroll", () => {

  sections.forEach(s => {
    const rect = s.section.getBoundingClientRect();

    if(rect.top < window.innerHeight * 0.75){
      s.section.classList.add("visible");
    }

    if(rect.top < 120 && rect.bottom > 120){
      s.btn.classList.add("active");
    } else {
      s.btn.classList.remove("active");
    }
  });

});