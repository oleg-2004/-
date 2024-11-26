document.getElementById('save-contact-button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const favorite = document.getElementById('favorite').checked;

    if (name && phone) {
        const contactList = document.getElementById('contact-list');

        const contactDiv = document.createElement('div');
        contactDiv.className = `contact-item ${favorite ? 'favorite' : ''}`;
        contactDiv.textContent = `${name} - ${phone} ${favorite ? '❤️' : ''}`;

        contactList.appendChild(contactDiv);

        // Очистка полей ввода
        document.getElementById('contact-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

