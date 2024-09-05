document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const main = document.getElementById('main');
    const rewardPopup = document.getElementById('reward-popup');
    const rewardAmountElem = document.getElementById('reward-amount');
    const claimBtn = document.getElementById('claim-btn');

    // Simulate loading for 3 seconds
    setTimeout(() => {
        loader.classList.add('hidden');
        main.classList.remove('hidden');
        
        // Generate a random reward between 1000 and 5000
        const randomReward = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        rewardAmountElem.textContent = randomReward;

        // Check if the balance is already saved
        let balance = localStorage.getItem('ratcoin_balance');
        if (balance === null) {
            balance = 0;
        } else {
            balance = parseInt(balance);
        }
        balance += randomReward;
        localStorage.setItem('ratcoin_balance', balance);

        // Set button click event
        claimBtn.addEventListener('click', () => {
            alert(`Вы получили ${randomReward} RatCoin и ваш новый баланс ${balance} RatCoin.`);
            localStorage.setItem('ratcoin_balance', balance);
            // Redirect or additional logic can go here
        });
    }, 3000);
});
