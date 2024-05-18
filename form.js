document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formbilgileri');
    const nameInput = document.getElementById('isim');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('numara');
    const messageInput = document.getElementById('mesaj');

    const nameError = document.getElementById('isimhatası');
    const emailError = document.getElementById('emailhatası');
    const phoneError = document.getElementById('telefonhatası');
    const messageError = document.getElementById('mesajhatası');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        // İsim kontrolü
        if (!nameInput.value.trim()) {
            nameError.textContent = 'İsim gerekli';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email kontrolü
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email gerekli';
            valid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Geçerli bir email girin';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Telefon numarası kontrolü
        const phonePattern = /^[0-9]+$/;
        if (!phoneInput.value.trim()) {
            phoneError.textContent = 'Telefon numarası gerekli';
            valid = false;
        } else if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Geçerli bir telefon numarası girin';
            valid = false;
        } else {
            phoneError.textContent = '';
        }

        // Mesaj kontrolü
        if (!messageInput.value.trim()) {
            messageError.textContent = 'Mesaj gerekli';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (valid) {
            // Form verilerini URL parametreleri olarak yeni sayfaya yönlendir
            const queryString = `name=${encodeURIComponent(nameInput.value)}&email=${encodeURIComponent(emailInput.value)}&phone=${encodeURIComponent(phoneInput.value)}&message=${encodeURIComponent(messageInput.value)}`;
            window.location.href = `gönder.html?${queryString}`;
        }
    });

    document.getElementById('butonlaritemizle').addEventListener('click', () => {
        form.reset();
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';
    });
});
