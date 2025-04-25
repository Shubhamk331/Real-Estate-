const properties = [
  {
    title: "Luxury Flat in South Mumbai",
    location: "Mumbai",
    price: "₹4.5 Cr",
    image: "https://source.unsplash.com/400x300/?mumbai,apartment"
  },
  {
    title: "2BHK in Indiranagar",
    location: "Bengaluru",
    price: "₹1.2 Cr",
    image: "https://source.unsplash.com/400x300/?bengaluru,flat"
  },
  {
    title: "Modern Villa in Jubilee Hills",
    location: "Hyderabad",
    price: "₹3.8 Cr",
    image: "https://source.unsplash.com/400x300/?hyderabad,villa"
  },
  {
    title: "Elegant House in South Delhi",
    location: "Delhi",
    price: "₹2.7 Cr",
    image: "https://source.unsplash.com/400x300/?delhi,home"
  },
  {
    title: "Beachside Property in Chennai",
    location: "Chennai",
    price: "₹2.3 Cr",
    image: "https://source.unsplash.com/400x300/?chennai,house"
  }
];

function displayProperties(list) {
  const container = document.getElementById("listings");
  container.innerHTML = "";
  list.forEach((prop) => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
      <img src="${prop.image}" alt="${prop.title}">
      <div class="info">
        <h3>${prop.title}</h3>
        <p><strong>City:</strong> ${prop.location}</p>
        <p><strong>Price:</strong> ${prop.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = properties.filter(p =>
    p.location.toLowerCase().includes(query)
  );
  displayProperties(filtered);
});

displayProperties(properties);
