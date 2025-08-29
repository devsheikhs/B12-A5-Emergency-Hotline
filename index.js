// --- STATE ---
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// --- DOM SHORTCUTS (direct IDs) ---
const heartEl = document.getElementById("heart-count");
const coinEl = document.getElementById("coin-count");
const copyEl = document.getElementById("copy-count");
const cardContainer = document.getElementById("card-container");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

// --- HELPERS ---
function updateCounters() {
    heartEl.innerText = heartCount;
    coinEl.innerText = coinCount;
    copyEl.innerText = copyCount;
}

function addHistoryItem(name, number, timeText) {
    const li = document.createElement("li");
    li.className = "border border-gray-200 rounded-lg p-3 flex items-start justify-between";
    li.innerHTML = `
    <div>
      <p class="font-medium leading-none">${name}</p>
      <p class="text-sm text-gray-600 leading-none mt-1">${number}</p>
    </div>
    <span class="text-xs text-gray-500">${timeText}</span>
  `;
    historyList.prepend(li); // latest first
}

// Safe clipboard copy with fallback
async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch (_) { }
    // fallback
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(temp);
    return ok;
}

// --- EVENT HANDLERS (Event Delegation for fewer listeners) ---
cardContainer.addEventListener("click", async function (e) {
    const likeBtn = e.target.closest(".like-btn");
    const copyBtn = e.target.closest(".copy-btn");
    const callBtn = e.target.closest(".call-btn");

    // Like (heart) -> increase navbar heart count
    if (likeBtn) {
        heartCount += 1;
        updateCounters();
        return;
    }

    // Copy -> alert + copy number + increase copy count
    if (copyBtn) {
        const number = copyBtn.getAttribute("data-number");
        const ok = await copyToClipboard(number);
        copyCount += 1;
        updateCounters();

        // Bangla messages
        alert(
            ok
                ? `নম্বর কপি হয়েছে: ${number}`
                : `কপি করা যায়নি। অনুগ্রহ করে নিজে কপি করুন: ${number}`
        );
        return;
    }


    // Call -> alert + coin check/deduct + add to history with time
    if (callBtn) {
        const name = callBtn.getAttribute("data-name");
        const number = callBtn.getAttribute("data-number");

        if (coinCount < 20) {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
            return;
        }

        // Deduct coins
        coinCount -= 20;
        updateCounters();

        // Call alert
        alert(`📞Calling ${name} at ${number}...`);

        // Time (exact local time)
        const now = new Date();
        const timeText = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

        // Add to history
        addHistoryItem(name, number, timeText);
        return;
    }
});

// Clear history
clearHistoryBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
});
