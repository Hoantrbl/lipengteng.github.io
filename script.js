const publications = [...document.querySelectorAll('.publication[data-tags]')];
const filters = [...document.querySelectorAll('.filter')];
const emptyState = document.querySelector('.empty-state');

filters.forEach((button) => {
  const tag = button.dataset.filter;
  const count = tag === 'all' ? publications.length : publications.filter((item) => item.dataset.tags.split(',').includes(tag)).length;
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

const toast = document.querySelector('.toast');
document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      toast.textContent = `${button.dataset.label} copied`;
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 1600);
    } catch (_) {
      window.location.href = button.dataset.label === 'Email' ? `mailto:${button.dataset.copy}` : '#about';
    }
  });
});

const sections = [...document.querySelectorAll('.section-anchor')];
const navLinks = [...document.querySelectorAll('.side-nav a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-32% 0px -58%', threshold: 0 });
sections.forEach((section) => observer.observe(section));

document.querySelector('#year').textContent = new Date().getFullYear();
