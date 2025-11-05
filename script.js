// Mobile nav toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
	const navToggle = document.getElementById('navToggle');
	const primaryNav = document.getElementById('primaryNav');

	if (navToggle && primaryNav) {
		navToggle.addEventListener('click', function () {
			const expanded = this.getAttribute('aria-expanded') === 'true' || false;
			this.setAttribute('aria-expanded', !expanded);
			primaryNav.style.display = expanded ? '' : 'flex';
			primaryNav.style.flexDirection = 'column';
			primaryNav.style.gap = '12px';
			primaryNav.style.background = 'rgba(0,0,0,0.6)';
			primaryNav.style.padding = '12px';
			primaryNav.style.position = 'absolute';
			primaryNav.style.top = '72px';
			primaryNav.style.right = '24px';
			primaryNav.style.borderRadius = '8px';
		});

		// close when a nav link is clicked (mobile)
		primaryNav.querySelectorAll('a').forEach(a => {
			a.addEventListener('click', () => {
				if (window.innerWidth <= 700) {
					primaryNav.style.display = 'none';
					navToggle.setAttribute('aria-expanded', 'false');
				}
			});
		});
	}

	// smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

		// contact form submit handler - protects email from simple scraping by constructing it in JS
		const contactForm = document.getElementById('contactForm');
		if (contactForm) {
			contactForm.addEventListener('submit', function (e) {
				e.preventDefault();
				const name = document.getElementById('cf-name').value.trim();
				const email = document.getElementById('cf-email').value.trim();
				const message = document.getElementById('cf-message').value.trim();

				// construct email address (not present in DOM) to reduce scraping
				const user = 'annumathur003';
				const domain = 'gmail.com';
				const to = user + '@' + domain;

				const subject = encodeURIComponent('Portfolio message from ' + name);
				const body = encodeURIComponent('Name: ' + name + '\n' + 'Email: ' + email + '\n\n' + message);

				// open mail client
				window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
				// optional: clear the form after opening mail client
				contactForm.reset();
			});
		}
		
  // highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#primaryNav a');
  function setActive(){
    let index = sections.length;
    while(--index && window.scrollY + 120 < sections[index].offsetTop){}
    navLinks.forEach((link) => link.classList.remove('active'));
    const id = sections[index] ? sections[index].id : 'home';
    const activeLink = document.querySelector('#primaryNav a[href="#' + id + '"]');
    if(activeLink) activeLink.classList.add('active');
  }
  setActive();
  window.addEventListener('scroll', setActive);
});
