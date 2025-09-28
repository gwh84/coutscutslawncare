
// Swap to placeholder if real logo not present
const logoImg = document.getElementById('logo');
if (logoImg){
  logoImg.addEventListener('error', ()=>{
    logoImg.src = 'assets/logo_placeholder.svg';
  });
}

// Simple mailto form fallback
document.getElementById('contact-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const msg = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Quote Request - Couts Cuts Lawn Care');
  const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${msg}`);
  window.location.href = `mailto:info@coutscuts.com?subject=${subject}&body=${body}`;
});
