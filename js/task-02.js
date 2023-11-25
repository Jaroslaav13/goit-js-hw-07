const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');
let listImgHtml = '';
images.forEach(imag => {
  listImgHtml += `<li> <img src= '${imag.url}' alt= '${imag.alt}'> </li>`
  return listImgHtml
 })
gallery.insertAdjacentHTML('afterbegin', listImgHtml);

// Також можна використати innerHTML
// gallery.innerHTML = listImgHtml;

// Інший варіант 

// const gallery = document.querySelector('.gallery');
// const elements = images.map(image => {
//   const list = document.createElement('li');
//   const img = document.createElement('img');
//   img.src = image.url;
//   img.alt = image.alt;
//   list.appendChild(img);
//   return list;
// })
// gallery.append(...elements);
