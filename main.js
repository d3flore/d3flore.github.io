
document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("usertel");

    phoneInput.addEventListener("input", (event) => {
        let value = phoneInput.value.replace(/\D/g, ""); // Убираем все нецифровые символы
        
        if (value.startsWith("8")) {
            value = "7" + value.slice(1); // Меняем 8 на 7
        } else if (!value.startsWith("7")) {
            value = "7" + value; // Авто-добавление +7
        }

        let formattedValue = "+7 ";
        if (value.length > 1) formattedValue += `(${value.substring(1, 4)}`;
        if (value.length >= 5) formattedValue += `) ${value.substring(4, 7)}`;
        if (value.length >= 8) formattedValue += `-${value.substring(7, 9)}`;
        if (value.length >= 10) formattedValue += `-${value.substring(9, 11)}`;

        phoneInput.value = formattedValue;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-us__form");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeModal = document.getElementById("close-modal");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const name = document.getElementById("username").value;
        const email = document.getElementById("useremail").value;
        const phone = document.getElementById("usertel").value;

        // Заполняем сообщение в модальном окне
        modalMessage.innerHTML = `
            ✅ Данные отправлены! <br>
            <strong>Имя:</strong> ${name} <br>
            <strong>Email:</strong> ${email} <br>
            <strong>Телефон:</strong> ${phone}
        `;

        form.reset();

        // Показываем модальное окно
        modal.classList.add("show");
    });

    // Закрытие модального окна по кнопке
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Закрытие модального окна при клике вне его
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
