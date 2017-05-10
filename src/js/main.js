import status from './test';

(() => {
  const returnButton = document.querySelector('.js-returnButton')
  const filterMenu = document.querySelector('.js-Header-bottom');
  const filteredOptions = filterMenu.querySelectorAll('.js-FilterItem');
  const firstFilter = filterMenu.querySelector("[data-index='1']");
  const salonList = document.querySelector('.js-HairSalon-list');
  const allSalons = [];
  const listView = document.querySelector('.js-ListView');
  const salonPage = document.querySelector('.js-SingleView');
  let salons = [];
  let filteredSalons = [];

  const salonTitle = salonPage.querySelector('.js-title');
  const salonTotal = salonPage.querySelector('.js-total');
  const salonAddress = salonPage.querySelector('.js-address');
  const salonOpeningHours = salonPage.querySelector('.js-openingHours');
  const salonPhone = salonPage.querySelector('.js-phone');
  const salonSite = salonPage.querySelector('.js-site');
  const apiUrl = './js/data.json';

  fetchData(apiUrl);

  function fetchData(url){
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        allSalons.push(...data.salons);
        showSalons(allSalons);
      })
  }

  function openFilterMenu(e){
    if(!this.classList.contains('is-open')){
      firstFilter.style.marginTop = '0';
    }
    this.classList.toggle('is-open');
  }


  function selectFilter(){
    if(!filterMenu.classList.contains('is-open')){
      return
    }

    const listIndex = parseInt(this.dataset.index);
    const marginTop = ((listIndex-1) * 50)
    firstFilter.style.marginTop = `-${marginTop}px`;


    const filteredRange = (this.dataset.priceRange).split(",")
    const minPrice = parseInt(filteredRange[0]);
    const maxPrice = parseInt(filteredRange[1]);
    filteredSalons = allSalons.filter((salonA, salonB) => {
      if(salonA.price >= minPrice && salonA.price <= maxPrice) {
        return true;
      }
    })
    showSalons(filteredSalons);
  }

  function showSalons(salons){
      const html = salons.sort((a, b) => {
        return  a.price > b.price ? 1 : -1;
      }).map(salon => {
        return `
          <div class="HairSalon-listItem" data-id="${salon.id}">
            <div class="HairSalon-listItem-left">
              <span class="HairSalon-time">${salon.availability[0]}</span>
            </div>
            <div class="HairSalon-listItem-middle">
              <span class="HairSalon-title">${salon.title}</span>
              <span class="HairSalon-score">
                  <span class="HairSalon-star"></span>
                  <span class="HairSalon-star"></span>
                  <span class="HairSalon-star"></span>
                  <span class="HairSalon-star"></span>
                  <span class="HairSalon-star HairSalon-star--empty"></span>
                  <span class="HairSalon-totalReviews">(${salon.totalReviews})</span>
              </span>
              <span class="HairSalon-address">${salon.address}</span>
            </div>
            <div class="HairSalon-listItem-right">
              <span class="HairSalon-price">${salon.price}kr</span>
              <span class="HairSalon-duration">${salon.duration} min</span>
            </div>
            <div class="HairSalon-listItem-rightIcon u-OpenIcon">
            </div>
          </div>
        `
    }).join('');
    salonList.innerHTML = html;
    salons = salonList.querySelectorAll('.HairSalon-listItem');
    salons.forEach(salon => {
      salon.addEventListener('click', selectSalon);
    })
  }

  function selectSalon(e){
    const selectedId = this.dataset.id
    const salon = allSalons.find(salon => {

      if(salon.id === selectedId){
        salonPage.addEventListener('transitionend',() => {
          salonTitle.innerHTML = salon.title;
          salonTotal.innerHTML = salon.totalReviews;
          salonAddress.innerHTML = salon.address;
          salonOpeningHours.innerHTML = salon.openingHours;
          salonPhone.innerHTML = salon.phone;
          salonSite.innerHTML = salon.site;
        });
      }
    })
    toggleView();
  }

  function toggleView(){
    salonPage.classList.toggle('is-hidden');
    listView.classList.toggle('is-hidden');
  }

  filterMenu.addEventListener('click',openFilterMenu);
  filteredOptions.forEach((option) => {
    option.addEventListener('click', selectFilter);
  })
  returnButton.addEventListener('click', toggleView)


})();
