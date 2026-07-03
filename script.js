Telegram.WebApp.ready();
Telegram.WebApp.expand();

document.getElementById("startBtn").addEventListener("click", function () {

    show_11235103('pop').then(() => {
        alert("🎉 Congratulations! You watched the ad.");
    }).catch(() => {
        alert("Ad was not completed.");
    });

});

document.getElementById("withdrawBtn").addEventListener("click", function () {
    alert("Withdraw clicked!");
});