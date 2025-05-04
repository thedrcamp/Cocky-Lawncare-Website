const services = [
    {
      title: "General Lawncare",
      image: "mower.png",
      description: "We mow, edge, and keep your yard fresh and neat. Our general lawncare service includes weed control, seasonal trimming, and full turf care to make your property shine all year round."
    },
    {
      title: "Hedge Maintenance",
      image: "hedge.png",
      description: "Keep your shrubs and hedges clean and attractive! We trim, shape, and care for all kinds of hedges so your landscape always looks manicured and intentional."
    },
    {
      title: "Sprinkler Installation",
      image: "sprinkler.png",
      description: "We install top-quality irrigation systems designed to keep your lawn hydrated without over-watering. Smart timers and zoning ensure efficiency and a lush, green yard."
    },
    {
      title: "Stump Removal",
      image: "stump.png",
      description: "Old stumps are unsightly and can be dangerous. We'll safely grind and remove stumps of all sizes, then smooth the land for a clean, level lawn."
    }
  ];
  
  let current = 0;
  
  function updateService() {
    const slide = document.getElementById("service-slide");
    const service = services[current];
  
    slide.innerHTML = `
      <img src="${service.image}" alt="${service.title}">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
  }
  
  function nextService() {
    current = (current + 1) % services.length;
    updateService();
  }
  
  function prevService() {
    current = (current - 1 + services.length) % services.length;
    updateService();
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", updateService);
  