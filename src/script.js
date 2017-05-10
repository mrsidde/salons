(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  var returnButton = document.querySelector('.js-returnButton');
  var filterMenu = document.querySelector('.js-Header-bottom');
  var filteredOptions = filterMenu.querySelectorAll('.js-FilterItem');
  var firstFilter = filterMenu.querySelector("[data-index='1']");
  var salonList = document.querySelector('.js-HairSalon-list');
  var allSalons = [];
  var listView = document.querySelector('.js-ListView');
  var salonPage = document.querySelector('.js-SingleView');
  var salons = [];
  var filteredSalons = [];

  var salonTitle = salonPage.querySelector('.js-title');
  var salonTotal = salonPage.querySelector('.js-total');
  var salonAddress = salonPage.querySelector('.js-address');
  var salonOpeningHours = salonPage.querySelector('.js-openingHours');
  var salonPhone = salonPage.querySelector('.js-phone');
  var salonSite = salonPage.querySelector('.js-site');
  var apiUrl = './js/data.json';

  fetchData(apiUrl);

  function fetchData(url) {
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      allSalons.push.apply(allSalons, _toConsumableArray(data.salons));
      showSalons(allSalons);
    });
  }

  function openFilterMenu(e) {
    if (!this.classList.contains('is-open')) {
      firstFilter.style.marginTop = '0';
    }
    this.classList.toggle('is-open');
  }

  function selectFilter() {
    if (!filterMenu.classList.contains('is-open')) {
      return;
    }

    var listIndex = parseInt(this.dataset.index);
    var marginTop = (listIndex - 1) * 50;
    firstFilter.style.marginTop = '-' + marginTop + 'px';

    var filteredRange = this.dataset.priceRange.split(",");
    var minPrice = parseInt(filteredRange[0]);
    var maxPrice = parseInt(filteredRange[1]);
    filteredSalons = allSalons.filter(function (salonA, salonB) {
      if (salonA.price >= minPrice && salonA.price <= maxPrice) {
        return true;
      }
    });
    showSalons(filteredSalons);
  }

  function showSalons(salons) {
    var html = salons.sort(function (a, b) {
      return a.price > b.price ? 1 : -1;
    }).map(function (salon) {
      return '\n          <div class="HairSalon-listItem" data-id="' + salon.id + '">\n            <div class="HairSalon-listItem-left">\n              <span class="HairSalon-time">' + salon.availability[0] + '</span>\n            </div>\n            <div class="HairSalon-listItem-middle">\n              <span class="HairSalon-title">' + salon.title + '</span>\n              <span class="HairSalon-score">\n                  <span class="HairSalon-star"></span>\n                  <span class="HairSalon-star"></span>\n                  <span class="HairSalon-star"></span>\n                  <span class="HairSalon-star"></span>\n                  <span class="HairSalon-star HairSalon-star--empty"></span>\n                  <span class="HairSalon-totalReviews">(' + salon.totalReviews + ')</span>\n              </span>\n              <span class="HairSalon-address">' + salon.address + '</span>\n            </div>\n            <div class="HairSalon-listItem-right">\n              <span class="HairSalon-price">' + salon.price + 'kr</span>\n              <span class="HairSalon-duration">' + salon.duration + ' min</span>\n            </div>\n            <div class="HairSalon-listItem-rightIcon u-OpenIcon">\n            </div>\n          </div>\n        ';
    }).join('');
    salonList.innerHTML = html;
    salons = salonList.querySelectorAll('.HairSalon-listItem');
    salons.forEach(function (salon) {
      salon.addEventListener('click', selectSalon);
    });
  }

  function selectSalon(e) {
    var selectedId = this.dataset.id;
    var salon = allSalons.find(function (salon) {

      if (salon.id === selectedId) {
        salonPage.addEventListener('transitionend', function () {
          salonTitle.innerHTML = salon.title;
          salonTotal.innerHTML = salon.totalReviews;
          salonAddress.innerHTML = salon.address;
          salonOpeningHours.innerHTML = salon.openingHours;
          salonPhone.innerHTML = salon.phone;
          salonSite.innerHTML = salon.site;
        });
      }
    });
    toggleView();
  }

  function toggleView() {
    salonPage.classList.toggle('is-hidden');
    listView.classList.toggle('is-hidden');
  }

  filterMenu.addEventListener('click', openFilterMenu);
  filteredOptions.forEach(function (option) {
    option.addEventListener('click', selectFilter);
  });
  returnButton.addEventListener('click', toggleView);
})();

},{"./test":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = status;
function status() {
    return 'OK';
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFFQSxDQUFDLFlBQU07QUFDTCxNQUFNLGVBQWUsU0FBUyxhQUFULENBQXVCLGtCQUF2QixDQUFyQjtBQUNBLE1BQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBQW5CO0FBQ0EsTUFBTSxrQkFBa0IsV0FBVyxnQkFBWCxDQUE0QixnQkFBNUIsQ0FBeEI7QUFDQSxNQUFNLGNBQWMsV0FBVyxhQUFYLENBQXlCLGtCQUF6QixDQUFwQjtBQUNBLE1BQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCO0FBQ0EsTUFBTSxZQUFZLEVBQWxCO0FBQ0EsTUFBTSxXQUFXLFNBQVMsYUFBVCxDQUF1QixjQUF2QixDQUFqQjtBQUNBLE1BQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCO0FBQ0EsTUFBSSxTQUFTLEVBQWI7QUFDQSxNQUFJLGlCQUFpQixFQUFyQjs7QUFFQSxNQUFNLGFBQWEsVUFBVSxhQUFWLENBQXdCLFdBQXhCLENBQW5CO0FBQ0EsTUFBTSxhQUFhLFVBQVUsYUFBVixDQUF3QixXQUF4QixDQUFuQjtBQUNBLE1BQU0sZUFBZSxVQUFVLGFBQVYsQ0FBd0IsYUFBeEIsQ0FBckI7QUFDQSxNQUFNLG9CQUFvQixVQUFVLGFBQVYsQ0FBd0Isa0JBQXhCLENBQTFCO0FBQ0EsTUFBTSxhQUFhLFVBQVUsYUFBVixDQUF3QixXQUF4QixDQUFuQjtBQUNBLE1BQU0sWUFBWSxVQUFVLGFBQVYsQ0FBd0IsVUFBeEIsQ0FBbEI7QUFDQSxNQUFNLFNBQVMsZ0JBQWY7O0FBRUEsWUFBVSxNQUFWOztBQUVBLFdBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF1QjtBQUNyQixVQUFNLEdBQU4sRUFDRyxJQURILENBQ1EsVUFBQyxR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QUFRRDtBQUNGLEtBWmEsQ0FBZDtBQWFBO0FBQ0Q7O0FBRUQsV0FBUyxVQUFULEdBQXFCO0FBQ25CLGNBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixXQUEzQjtBQUNBLGFBQVMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixXQUExQjtBQUNEOztBQUVELGFBQVcsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBb0MsY0FBcEM7QUFDQSxrQkFBZ0IsT0FBaEIsQ0FBd0IsVUFBQyxNQUFELEVBQVk7QUFDbEMsV0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFqQztBQUNELEdBRkQ7QUFHQSxlQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQXZDO0FBR0QsQ0FqSUQ7Ozs7Ozs7O2tCQ0Z3QixNO0FBQVQsU0FBUyxNQUFULEdBQWtCO0FBQzdCLFdBQU8sSUFBUDtBQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBzdGF0dXMgZnJvbSAnLi90ZXN0JztcblxuKCgpID0+IHtcbiAgY29uc3QgcmV0dXJuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJldHVybkJ1dHRvbicpXG4gIGNvbnN0IGZpbHRlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtSGVhZGVyLWJvdHRvbScpO1xuICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJNZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1GaWx0ZXJJdGVtJyk7XG4gIGNvbnN0IGZpcnN0RmlsdGVyID0gZmlsdGVyTWVudS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5kZXg9JzEnXVwiKTtcbiAgY29uc3Qgc2Fsb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLUhhaXJTYWxvbi1saXN0Jyk7XG4gIGNvbnN0IGFsbFNhbG9ucyA9IFtdO1xuICBjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1MaXN0VmlldycpO1xuICBjb25zdCBzYWxvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtU2luZ2xlVmlldycpO1xuICBsZXQgc2Fsb25zID0gW107XG4gIGxldCBmaWx0ZXJlZFNhbG9ucyA9IFtdO1xuXG4gIGNvbnN0IHNhbG9uVGl0bGUgPSBzYWxvblBhZ2UucXVlcnlTZWxlY3RvcignLmpzLXRpdGxlJyk7XG4gIGNvbnN0IHNhbG9uVG90YWwgPSBzYWxvblBhZ2UucXVlcnlTZWxlY3RvcignLmpzLXRvdGFsJyk7XG4gIGNvbnN0IHNhbG9uQWRkcmVzcyA9IHNhbG9uUGFnZS5xdWVyeVNlbGVjdG9yKCcuanMtYWRkcmVzcycpO1xuICBjb25zdCBzYWxvbk9wZW5pbmdIb3VycyA9IHNhbG9uUGFnZS5xdWVyeVNlbGVjdG9yKCcuanMtb3BlbmluZ0hvdXJzJyk7XG4gIGNvbnN0IHNhbG9uUGhvbmUgPSBzYWxvblBhZ2UucXVlcnlTZWxlY3RvcignLmpzLXBob25lJyk7XG4gIGNvbnN0IHNhbG9uU2l0ZSA9IHNhbG9uUGFnZS5xdWVyeVNlbGVjdG9yKCcuanMtc2l0ZScpO1xuICBjb25zdCBhcGlVcmwgPSAnLi9qcy9kYXRhLmpzb24nO1xuXG4gIGZldGNoRGF0YShhcGlVcmwpO1xuXG4gIGZ1bmN0aW9uIGZldGNoRGF0YSh1cmwpe1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgYWxsU2Fsb25zLnB1c2goLi4uZGF0YS5zYWxvbnMpO1xuICAgICAgICBzaG93U2Fsb25zKGFsbFNhbG9ucyk7XG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkZpbHRlck1lbnUoZSl7XG4gICAgaWYoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpe1xuICAgICAgZmlyc3RGaWx0ZXIuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuICAgIH1cbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gc2VsZWN0RmlsdGVyKCl7XG4gICAgaWYoIWZpbHRlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpe1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbGlzdEluZGV4ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LmluZGV4KTtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSAoKGxpc3RJbmRleC0xKSAqIDUwKVxuICAgIGZpcnN0RmlsdGVyLnN0eWxlLm1hcmdpblRvcCA9IGAtJHttYXJnaW5Ub3B9cHhgO1xuXG5cbiAgICBjb25zdCBmaWx0ZXJlZFJhbmdlID0gKHRoaXMuZGF0YXNldC5wcmljZVJhbmdlKS5zcGxpdChcIixcIilcbiAgICBjb25zdCBtaW5QcmljZSA9IHBhcnNlSW50KGZpbHRlcmVkUmFuZ2VbMF0pO1xuICAgIGNvbnN0IG1heFByaWNlID0gcGFyc2VJbnQoZmlsdGVyZWRSYW5nZVsxXSk7XG4gICAgZmlsdGVyZWRTYWxvbnMgPSBhbGxTYWxvbnMuZmlsdGVyKChzYWxvbkEsIHNhbG9uQikgPT4ge1xuICAgICAgaWYoc2Fsb25BLnByaWNlID49IG1pblByaWNlICYmIHNhbG9uQS5wcmljZSA8PSBtYXhQcmljZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHNob3dTYWxvbnMoZmlsdGVyZWRTYWxvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1NhbG9ucyhzYWxvbnMpe1xuICAgICAgY29uc3QgaHRtbCA9IHNhbG9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiAgYS5wcmljZSA+IGIucHJpY2UgPyAxIDogLTE7XG4gICAgICB9KS5tYXAoc2Fsb24gPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJIYWlyU2Fsb24tbGlzdEl0ZW1cIiBkYXRhLWlkPVwiJHtzYWxvbi5pZH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJIYWlyU2Fsb24tbGlzdEl0ZW0tbGVmdFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkhhaXJTYWxvbi10aW1lXCI+JHtzYWxvbi5hdmFpbGFiaWxpdHlbMF19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiSGFpclNhbG9uLWxpc3RJdGVtLW1pZGRsZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkhhaXJTYWxvbi10aXRsZVwiPiR7c2Fsb24udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkhhaXJTYWxvbi1zY29yZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJIYWlyU2Fsb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSGFpclNhbG9uLXN0YXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkhhaXJTYWxvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJIYWlyU2Fsb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSGFpclNhbG9uLXN0YXIgSGFpclNhbG9uLXN0YXItLWVtcHR5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJIYWlyU2Fsb24tdG90YWxSZXZpZXdzXCI+KCR7c2Fsb24udG90YWxSZXZpZXdzfSk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJIYWlyU2Fsb24tYWRkcmVzc1wiPiR7c2Fsb24uYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJIYWlyU2Fsb24tbGlzdEl0ZW0tcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJIYWlyU2Fsb24tcHJpY2VcIj4ke3NhbG9uLnByaWNlfWtyPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkhhaXJTYWxvbi1kdXJhdGlvblwiPiR7c2Fsb24uZHVyYXRpb259IG1pbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkhhaXJTYWxvbi1saXN0SXRlbS1yaWdodEljb24gdS1PcGVuSWNvblwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9KS5qb2luKCcnKTtcbiAgICBzYWxvbkxpc3QuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBzYWxvbnMgPSBzYWxvbkxpc3QucXVlcnlTZWxlY3RvckFsbCgnLkhhaXJTYWxvbi1saXN0SXRlbScpO1xuICAgIHNhbG9ucy5mb3JFYWNoKHNhbG9uID0+IHtcbiAgICAgIHNhbG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0U2Fsb24pO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RTYWxvbihlKXtcbiAgICBjb25zdCBzZWxlY3RlZElkID0gdGhpcy5kYXRhc2V0LmlkXG4gICAgY29uc3Qgc2Fsb24gPSBhbGxTYWxvbnMuZmluZChzYWxvbiA9PiB7XG5cbiAgICAgIGlmKHNhbG9uLmlkID09PSBzZWxlY3RlZElkKXtcbiAgICAgICAgc2Fsb25QYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCgpID0+IHtcbiAgICAgICAgICBzYWxvblRpdGxlLmlubmVySFRNTCA9IHNhbG9uLnRpdGxlO1xuICAgICAgICAgIHNhbG9uVG90YWwuaW5uZXJIVE1MID0gc2Fsb24udG90YWxSZXZpZXdzO1xuICAgICAgICAgIHNhbG9uQWRkcmVzcy5pbm5lckhUTUwgPSBzYWxvbi5hZGRyZXNzO1xuICAgICAgICAgIHNhbG9uT3BlbmluZ0hvdXJzLmlubmVySFRNTCA9IHNhbG9uLm9wZW5pbmdIb3VycztcbiAgICAgICAgICBzYWxvblBob25lLmlubmVySFRNTCA9IHNhbG9uLnBob25lO1xuICAgICAgICAgIHNhbG9uU2l0ZS5pbm5lckhUTUwgPSBzYWxvbi5zaXRlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRvZ2dsZVZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVZpZXcoKXtcbiAgICBzYWxvblBhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZGVuJyk7XG4gICAgbGlzdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZGVuJyk7XG4gIH1cblxuICBmaWx0ZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxvcGVuRmlsdGVyTWVudSk7XG4gIGZpbHRlcmVkT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RGaWx0ZXIpO1xuICB9KVxuICByZXR1cm5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVWaWV3KVxuXG5cbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0dXMoKSB7XG4gICAgcmV0dXJuICdPSyc7XG59O1xuIl19

//# sourceMappingURL=script.js.map
