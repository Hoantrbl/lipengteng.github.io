const publications = [...document.querySelectorAll('.publication[data-tags]')];
const filters = [...document.querySelectorAll('.filter')];
const emptyState = document.querySelector('.empty-state');

filters.forEach((button) => {
  const tag = button.dataset.filter;
  const count = tag === 'all'
    ? publications.length
    : publications.filter((item) => item.dataset.tags.split(',').includes(tag)).length;
  button.querySelector('b').textContent = count;

  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    let visible = 0;
    publications.forEach((item) => {
      const show = tag === 'all' || item.dataset.tags.split(',').includes(tag);
      item.hidden = !show;
      if (show) visible += 1;
    });
    emptyState.hidden = visible !== 0;
  });
});

const newsList = document.querySelector('.news-list');
const moreNews = document.querySelector('.more-news');
moreNews?.addEventListener('click', () => {
  const expanded = newsList.classList.toggle('expanded');
  moreNews.setAttribute('aria-expanded', String(expanded));
  moreNews.innerHTML = expanded ? 'Show less <span>↑</span>' : 'Show more <span>↓</span>';
});

const toast = document.querySelector('.toast');
document.querySelector('[data-copy-email]')?.addEventListener('click', async (event) => {
  const email = 'your-email@example.com';
  if (!navigator.clipboard) return;
  event.preventDefault();
  await navigator.clipboard.writeText(email);
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1600);
});

const sections = [...document.querySelectorAll('.section-anchor')];
const navLinks = [...document.querySelectorAll('.side-nav a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
sections.forEach((section) => observer.observe(section));

document.querySelector('#year').textContent = new Date().getFullYear();
