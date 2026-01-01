const langButtons = document.querySelectorAll("[data-lang]");
const elements = document.querySelectorAll("[data-i18n]");
const htmlTag = document.documentElement;
const whatsappBtn = document.querySelector("#booking a");

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Direction
  if (lang === "ar") {
    htmlTag.setAttribute("dir", "rtl");
    htmlTag.setAttribute("lang", "ar");
    document.body.style.fontFamily = "'Cairo', sans-serif";
  } else {
    htmlTag.setAttribute("dir", "ltr");
    htmlTag.setAttribute("lang", lang);
    document.body.style.fontFamily = "'Poppins', sans-serif";
  }

  // WhatsApp message
  const phone = "+212 688 055 961"; // غير الرقم
  const message = encodeURIComponent(translations[lang].whatsapp_msg);
  whatsappBtn.href = https//:wa.me/${phone}?text=${message};

  localStorage.setItem("lang", lang);
}

// Buttons click
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// Load saved language
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);