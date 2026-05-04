// 1. COUNTDOWN TIMER (15:00)
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset timer for demo purposes
        }
    }, 1000);
}

window.onload = function () {
    let fifteenMinutes = 60 * 15,
        displayTop = document.querySelector('#timer'),
        displayCard = document.querySelector('.timer-card');
    
    startTimer(fifteenMinutes, displayTop);
    if (displayCard) startTimer(fifteenMinutes, displayCard);
};

// 2. FAQ ACCORDION
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-q');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// 3. SMOOTH SCROLL (handled by CSS, but good for custom triggers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. SALE NOTIFICATION LOGIC
const salesData = [
    { name: "João de São Paulo", plan: "Plano Completo" },
    { name: "Maria do Rio de Janeiro", plan: "Plano Completo" },
    { name: "Pedro de Belo Horizonte", plan: "Plano Completo" },
    { name: "Ana de Curitiba", plan: "Plano Essencial" },
    { name: "Lucas de Porto Alegre", plan: "Plano Completo" },
    { name: "Juliana de Salvador", plan: "Plano Completo" },
    { name: "Marcos Vinícius de Fortaleza", plan: "Plano Completo" },
    { name: "Carla de Brasília", plan: "Plano Essencial" },
    { name: "Ricardo de Manaus", plan: "Plano Completo" },
    { name: "Fernanda de Recife", plan: "Plano Completo" }
];

const notification = document.getElementById('sale-notification');
const saleName = document.getElementById('sale-name');
const salePlan = document.getElementById('sale-plan');

function showNotification() {
    const randomSale = salesData[Math.floor(Math.random() * salesData.length)];
    
    // Weighted logic: 80% Complete, 20% Essential
    const isComplete = Math.random() < 0.8;
    const planName = isComplete ? "Plano Completo" : "Plano Essencial";
    
    saleName.innerHTML = randomSale.name;
    salePlan.innerHTML = `acabou de comprar o ${planName}!`;
    
    notification.classList.add('active');

    setTimeout(() => {
        notification.classList.remove('active');
    }, 5000);
}

// Start notifications loop
setInterval(showNotification, 12000); // Every 12 seconds
setTimeout(showNotification, 3000); // First one after 3 seconds

// 5. UPSELL MODAL LOGIC
const basicBtn = document.querySelector('.btn-buy-basic');
const upsellModal = document.getElementById('upsell-modal');
const closeUpsell = document.getElementById('btn-no-thanks');

if (basicBtn) {
    basicBtn.addEventListener('click', (e) => {
        e.preventDefault();
        upsellModal.classList.add('active');
    });
}

if (closeUpsell) {
    closeUpsell.addEventListener('click', (e) => {
        e.preventDefault();
        upsellModal.classList.remove('active');
        // Redirecionamento futuro para o checkout básico pode ser adicionado aqui
    });
}
