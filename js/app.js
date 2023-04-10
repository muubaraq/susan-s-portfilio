const text = "Hello! I’m OLALEYE SUZAN DAMILOLA";
let index = 0;

function type() {
  const heading = document.getElementById("typewriter");
  heading.innerHTML += text.charAt(index);
  index++;

  if (index >= text.length) {
    clearInterval(timer);
  }
}

const timer = setInterval(type, 100);

// cv download

const cvBtn = document.querySelector('.cv-btn');
cvBtn.addEventListener('click', () => {
  const url = 'https://shorturl.at/ahFX6'; // replace with your CV URL
  const fileName = 'my-cv.pdf'; // replace with your CV file name
  downloadFile(url, fileName);
});

function downloadFile(url, fileName) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const url = `mailto:dsuzan19@gmail.com?subject=Contact Form Submission&body=${formData.get('message')}%0D%0A%0D%0AFrom: ${formData.get('name')} <%0D%0A${formData.get('email')}%0D%0A>`;
  window.open(url);
  form.reset();
});
