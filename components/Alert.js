export default class Alert extends HTMLElement {
    css = `
    <style>
        .primaryNotif {
            background-color: rgba(184, 184, 184, 0.61);
            border: 2px solid rgba(184, 184, 184, 0.822);
        }
        .successNotif {
            background-color: rgba(89, 192, 89, 0.726);
            border: 2px solid rgba(89, 192, 89, 0.938);
        }
        .dangerNotif {
            background-color: rgba(192, 89, 89, 0.726);
            border: 2px solid rgba(192, 89, 89, 0.938);
        }
        aside.notif {
            border-radius: 4px;
            padding: 2px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: -100%; /* Awalnya tersembunyi di atas layar */
            left: 0;
            right: 0;
            width: 85%;
            margin: auto;
            transition: top 0.3s ease; /* Transisi untuk posisi */
        }
        aside.show {
            top: 12px; /* Tampilkan di posisi 12px dari atas */
        }
        span.notif {
            font-size: 20px;
            cursor: pointer;
        }
    </style>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    // Method to display the alert with custom message and type
    showAlert = (message = 'This Is Alert', type = 'dangerNotif') => {
        this.shadowRoot.innerHTML = `
            ${this.css}
            <aside class="notif ${type}">
                <p>${message}</p>
                <span>&times;</span>
            </aside>
        `;

        const alertBox = this.shadowRoot.querySelector('aside');

        // Tampilkan alert dengan menambahkan kelas 'show'
        requestAnimationFrame(() => {
            alertBox.classList.add('show');
        });

        // Add event listener to close the alert
        const closeButton = this.shadowRoot.querySelector('span');
        closeButton.addEventListener('click', this.hideAlert);

        // Menghapus alert secara otomatis setelah beberapa detik
        setTimeout(() => {
            this.hideAlert();
        }, 3000); // Menghilang setelah 3 detik
    }

    // Method to hide the alert
    hideAlert = () => {
        const alertBox = this.shadowRoot.querySelector('aside');
        if (alertBox) {
            alertBox.classList.remove('show'); // Menghapus kelas 'show' sebelum menghapus
            setTimeout(() => {
                alertBox.remove();
            }, 300); // Tunggu transisi selesai sebelum menghapus
        }
    }
}
