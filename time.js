const time = document.querySelector('.time');

const date = new Date();

time.innerHTML = `${date.getFullYear()} - ${
  date.getMonth() + 1
} - ${date.getDate()}`;
