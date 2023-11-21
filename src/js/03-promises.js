
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit)


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  })
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const delay = Number(formData.get('delay'));
  const step = Number(formData.get('step'));
  const amount = Number(formData.get('amount'));

  for (let i = 0; i < amount; i++){
    createPromise(i + 1, delay + i * step)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }

  form.reset();
}




