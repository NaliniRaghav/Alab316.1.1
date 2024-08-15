 
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
const mainEl = document.querySelector('main');

 
mainEl.style.backgroundColor = 'var(--main-bg)';




 mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

 
 mainEl.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl)

topMenuEl.style.height= '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");

 
menuLinks.forEach(function(link) {
  
  
  
 const  Menubarchoices = document.createElement('a')
  
  Menubarchoices.setAttribute('href', link.href);
  
  
  Menubarchoices.textContent = link.text;
  
   
  topMenuEl.appendChild(Menubarchoices);
});
   