document.addEventListener('DOMContentLoaded', function () {
    let score = 3; // امتیاز را اینجا تنظیم کنید
    let percentage = (score / 10) * 100; // محاسبه درصد

    let rightDiv = document.querySelector('.right-div');
    let angle = (percentage * 360) / 100;

    // تابع برای محاسبه رنگ بر اساس امتیاز
    function getGradientColor(score) {
        let red = Math.max(0, 255 - (score * 25.5)); // از 255 (قرمز کامل) به 0
        let green = Math.min(255, (score * 25.5));  // از 0 به 255 (سبز کامل)
        return `rgb(${red}, ${green}, 0)`;
    }

    let startAngle = 0;
    let animation = setInterval(function () {
        if (startAngle >= angle) {
            clearInterval(animation);
        } else {
            startAngle++;
            rightDiv.style.background = `conic-gradient(${getGradientColor(score)} ${startAngle}deg, #ffffff ${startAngle}deg, #ffffff 360deg)`;
        }
    }, 10); // سرعت انیمیشن
});
