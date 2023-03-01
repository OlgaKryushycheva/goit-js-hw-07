const formEL = document.querySelector('.login-form');

formEL.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== '' && password.value !== '') {
    const data = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(data);
    event.target.reset();

    //   Репета использовал такой метод для сбора и передачи
    //   данных с форм:
    //   const formData = new FormData(event.currentTarget);
    //   formData.forEach((value, name) => {
    //     console.log(name, value);
    //   };
  } else {
    alert('Остались незаполненные поля!');
  }
});

// доступ к отдельным элементам формы:
// console.log(event.currentTarget.elements);
