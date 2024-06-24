
let arr = [];

fetch('https://fakestoreapi.com/products')
  .then((pro) => pro.json())
  .then((data) => {
    arr = data;
    render(arr);
  });

function render(data) {
  const display = document.getElementById('display');
  display.innerHTML = '';
  data.forEach(function (d, i) {
    let div = `
      <div class="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
        <div class="col-span-12 lg:col-span-2 img box">
          <img src=${d.image} alt="category image" class="max-lg:w-full lg:w-[180px]">
        </div>
        <div class="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
          <div class="flex items-center justify-between w-full mb-4">
            <h5 class="font-manrope font-bold text-2xl leading-9 text-gray-900">${d.title}</h5>
            <button onclick="remove(${i})" class="rounded-full group flex items-center justify-center focus-within:outline-red-500">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-red-50 transition-all duration-500 group-hover:fill-red-400" cx="17" cy="17" r="17" />
                <path class="stroke-red-500 transition-all duration-500 group-hover:stroke-white" d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z" stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <p class="font-normal text-base leading-7 text-gray-500 mb-6">${d.description}</p>
          <p class="font-normal text-base leading-7 text-gray-500 mb-6">${d.category}</p>
          <div class="flex justify-between items-center">
            <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">${d.price}</h6>
          </div>
        </div>
      </div>`;
    display.innerHTML += div;
  });
}






function remove(i) {
  arr.splice(i, 1);
  render(arr);
}

function btn() {
  const inp = document.getElementById('search_input').value;
  const filtered = arr.filter((d) => d.price < inp);
  render(filtered);
}

function btn1() {
  const inp = document.getElementById('search_input').value.toUpperCase();
  const filtered = arr.filter((d) => d.title.toUpperCase().includes(inp));
  render(filtered);
}

function btn2() {
  const filtered = arr.filter((d) => d.category.includes('men'));
render(filtered)
}
function btn3() {
  const filtered = arr.filter((d) => d.category.includes('electronics'));
  render(filtered)
}
function btn4() {
  const filtered = arr.filter((d) => d.category.includes('jewelery'));
  render(filtered)
}

