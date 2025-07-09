const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const error = document.getElementById("error");
const payment = document.getElementById("payment");
const accountLink = document.getElementById("accountLink");
const linkError = document.getElementById("linkError");
const service = document.getElementById("service");

// السعر: 0.5 DA لكل متابع = 50 DA لكل 100 متابع
const UNIT_PRICE = 0.5;

// حساب السعر حسب الكمية
quantity.addEventListener("input", () => {
  const q = parseInt(quantity.value) || 0;

  if (q < 1000 || q > 1000000) {
    error.textContent = "❗ يجب أن تكون الكمية بين 1,000 و 1,000,000 متابع.";
    price.value = "0 DA";
    return;
  }

  error.textContent = "";

  const calculatedPrice = q * UNIT_PRICE;

  price.value = Math.ceil(calculatedPrice) + " DA";
});

// تحقق عند الضغط على زر الشراء
function validateAndShow() {
  const q = parseInt(quantity.value);
  const link = accountLink.value.trim();
  const selectedService = service.value;

  error.textContent = "";
  linkError.textContent = "";

  // تحقق من الكمية
  if (!q || q < 1000 || q > 1000000) {
    error.textContent = "❗ الكمية غير صالحة! يجب أن تكون بين 1,000 و 1,000,000.";
    return;
  }


  // التحقق من الروابط
  const isInstagram = link.includes("instagram.com");
  const isTikTok = link.includes("tiktok.com");
  const isFacebook = link.includes("facebook.com");
  const isYouTube = link.includes("youtube.com") || link.includes("youtu.be"); // ✅ دعم الرابط المختصر
  
  if (
    (selectedService.includes("Instagram") && !isInstagram) ||
    (selectedService.includes("TikTok") && !isTikTok) ||
    (selectedService.includes("Facebook") && !isFacebook) ||
    (selectedService.includes("YouTube") && !isYouTube) // ✅ تحقق YouTube
  ) {
    linkError.textContent = "❗ تأكد من أنك وضعت رابطًا صحيحًا يخص الخدمة المختارة.";
    return;
  }
  

  // حفظ البيانات في localStorage
  localStorage.setItem("selectedQuantity", q);
  localStorage.setItem("selectedPrice", price.value);
  localStorage.setItem("accountLink", link);

  // عرض وسائل الدفع
  payment.style.display = "flex";
}

// إخفاء الدفع
function hidePayment() {
  payment.style.display = "none";
}

// إعادة حساب السعر عند تحميل الصفحة (في حال رجع من صفحة أخرى)
window.onload = () => {
  if (quantity.value) {
    quantity.dispatchEvent(new Event("input"));
  }
};
































const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});















// عند الضغط على زر BaridiMob
function goToBaridiMob() {
    const q = parseInt(quantity.value);
    const p = price.value;
  
    if (!q || q < 1000 || q > 1000000) {
      error.textContent = "❗ الكمية غير صالحة! يجب أن تكون بين 1,000 و 1,000,000.";
      return;
    }
  
    // نحفظ المعلومات في localStorage
    localStorage.setItem("selectedQuantity", q);
    localStorage.setItem("selectedPrice", p);
  
    // نوجه إلى صفحة الدفع
    window.location.href = "ccp.html";
  }
  




  



















  function goToBinancePage() {
    const price = document.getElementById("price").value;
  
    if (!price || price === "0 DA") {
      alert("❗ الرجاء اختيار كمية صالحة لحساب السعر أولاً.");
      return;
    }
  
    // حفظ السعر في localStorage
    localStorage.setItem("selectedPrice", price);
  
    // توجيه إلى صفحة binans
    window.location.href = "binans.html";
  }
  


















  const stories = [
    "storyfolloersdzd.jpg",
    "followers.dzd.jpg",
    "facebook.jpg"
  ];
  let currentStory = 0;
  let storyTimeout;
  
  const storyBox = document.getElementById("storyBox");
  const storyImage = document.getElementById("storyImage");
  
  function openStory() {
    storyBox.style.display = "flex";
    currentStory = 0;
    showStory();
  }
  
  function closeStory() {
    storyBox.style.display = "none";
    clearTimeout(storyTimeout);
    resetProgressBars();
  }
  
  function showStory() {
    storyImage.src = stories[currentStory];
  
    // Update progress bar
    for (let i = 0; i < stories.length; i++) {
      const bar = document.getElementById(`prog${i}`);
      bar.classList.remove("active", "filled");
  
      if (i < currentStory) {
        bar.classList.add("filled");
      } else if (i === currentStory) {
        bar.classList.add("active");
      }
    }
  
    clearTimeout(storyTimeout);
    storyTimeout = setTimeout(() => {
      nextStory();
    }, 10000);
  }
  
  function nextStory() {
    if (currentStory < stories.length - 1) {
      currentStory++;
      showStory();
    } else {
      closeStory();
    }
  }
  
  function prevStory() {
    if (currentStory > 0) {
      currentStory--;
      showStory();
    }
  }
  
  function resetProgressBars() {
    for (let i = 0; i < stories.length; i++) {
      const bar = document.getElementById(`prog${i}`);
      bar.classList.remove("active", "filled");
    }
  }
  













  function goToRedotPayPage() {
    const q = parseInt(document.getElementById("quantity").value);
    const p = document.getElementById("price").value;

    if (!q || q < 1000 || q > 1000000) {
      alert("❗ الكمية غير صالحة! يجب أن تكون بين 1,000 و 1,000,000.");
      return;
    }

    localStorage.setItem("selectedPrice", p);
    localStorage.setItem("accountLink", document.getElementById("accountLink").value.trim());

    window.location.href = "redotpay.html";
  }




  window.onload = () => {
    const refreshBtn = document.getElementById("refreshBtn");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", () => {
        location.reload(); // يقوم بإعادة تحميل الصفحة
      });
    }
  };




  function refreshPage() {
    window.location.reload();
  }






  function goToTrial1() {
    window.location.href = "free/Freetrial.html";
  }

  function goToTrial2() {
    window.location.href = "free/anothertrial.html";
  }








  function showContactPopup() {
    document.getElementById("contactPopup").style.display = "flex";
  }

  function hideContactPopup() {
    document.getElementById("contactPopup").style.display = "none";
  }



















 //--------logconict---------//




 const banner = document.getElementById("offlineBanner");

  function checkOnlineStatus() {
    return navigator.onLine;
  }

  function showBanner() {
    banner.style.display = "flex";
  }

  function hideBanner() {
    banner.style.display = "none";
  }

  function retryConnection() {
    if (checkOnlineStatus()) {
      hideBanner();
    } else {
      alert("❗ لا يوجد اتصال بالإنترنت بعد.");
    }
  }

  // 🔄 مراقبة حالة الاتصال
  window.addEventListener('online', () => {
    hideBanner();
  });

  window.addEventListener('offline', () => {
    showBanner();
  });

  // ✅ تحقق عند تحميل الصفحة لأول مرة
  window.addEventListener("load", () => {
    if (!checkOnlineStatus()) {
      showBanner();
    }
  });