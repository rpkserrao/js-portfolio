// template_ytzl4xg
// service_RaiEmail
// JTVmoIJOL_tDx-jCv

function contact(event) {
  event.preventDefault()
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += ' modal__overlay--visible';

  emailjs
    .sendForm(
      'service_RaiEmail',
      'template_ytzl4xg',
      event.target,
      'JTVmoIJOL_tDx-jCv'
    ).then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList += ' modal__overlay--visible';
    }).catch(() => {
      loading.classList.remove('modal__overlay--visible');
      alert(
        "the email service is temporarily unavailable."
      );
    })
}

let isModalOpen = false
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open');
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}