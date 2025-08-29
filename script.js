
// part of heart

const hearts = document.querySelectorAll(".heart");
const heartCount = document.getElementById("heart-count");

hearts.forEach(heart => {    
    heart.addEventListener('click', function(e){
        e.preventDefault()
        let count = parseInt(heartCount.innerText)
    
        count++
    
        heartCount.innerText = count
})

})


// part of copy


document.addEventListener("DOMContentLoaded", () => {

    const copies = document.querySelectorAll(".copy");
    const copyCount = document.getElementById("copy-count");
    
    copies.forEach(copy => {    
        copy.addEventListener('click', function(e){
            e.preventDefault()
            let count = parseInt(copyCount.innerText)
            count++
            copyCount.innerText = count
    
            const urgent = copy.closest(".urgent")
            const serviceNum = urgent.querySelector("h4").innerText
        
       
       })
    })
})




const coinCount = document.getElementById("coin-count");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

document.addEventListener("DOMContentLoaded", () => {
    const calls = document.querySelectorAll(".phone");

    calls.forEach(item => {
        item.addEventListener('click', () => {
            const urgent = item.closest(".urgent");
            const serviceName = urgent.querySelector("h3").innerText;
            const serviceNum = urgent.querySelector("h4").innerText;

            let available = parseInt(coinCount.innerText);

            if (available >= 20) {
                available -= 20;
                coinCount.innerText = available;

                const time = new Date().toLocaleTimeString();
                const historyItem = document.createElement("div");
                historyItem.className = "flex justify-between items-center bg-gray-100 p-2 rounded-md";
                historyItem.innerHTML = `
                    <div>
                        <p class="font-bold">${serviceName}</p>
                        <p class="text-sm">${serviceNum}</p>
                    </div>
                    <p class="text-xs">${time}</p>
                `;
                historyList.prepend(historyItem);

                alert('📞 Calling ' + serviceName + ' ' + serviceNum + '...');
            } else {
                alert('❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
            }
        });
    });

    clearHistoryBtn.addEventListener('click', () => {
        historyList.innerHTML = "";
    });
});