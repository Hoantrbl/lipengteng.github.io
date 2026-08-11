const toggler=document.querySelector('.navbar-toggler');
const menu=document.querySelector('.navbar-menu');
if(toggler&&menu){toggler.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggler.setAttribute('aria-expanded',String(open))});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggler.setAttribute('aria-expanded','false')}));}
const toast=document.querySelector('.toast');
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);toast.textContent='WeChat ID copied';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1600)}catch{toast.textContent=button.dataset.copy;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}}));
const sections=[...document.querySelectorAll('section[id]')];
const navLinks=[...document.querySelectorAll('.navbar-menu a[href^="#"]')];
const syncNav=()=>{let current='home';for(const section of sections){if(section.getBoundingClientRect().top<140)current=section.id}navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current}`))};
document.addEventListener('scroll',syncNav,{passive:true});syncNav();
