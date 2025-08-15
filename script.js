const names = [
    "الله", "الرحمن", "الرحيم", "الملك", "القدوس", "السلام", "المؤمن", "المهيمن",
    "العزيز", "الجبار", "المتكبر", "الخالق", "البارئ", "المصور", "الغفار", "القهار",
    "الوهاب", "الرزاق", "الفتاح", "العليم", "القابض", "الباسط", "الخافض", "الرافع",
    "المعز", "المذل", "السميع", "البصير", "الحكم", "العدل", "اللطيف", "الخبير"
];

let currentIndex = 0;
let currentUser = "";

function startApp() {
    const nameInput = document.getElementById("username");
    currentUser = nameInput.value.trim();
    if (!currentUser) {
        alert("من فضلك أدخل اسمك.");
        return;
    }

    document.getElementById("content").classList.remove("hidden");
    document.getElementById("welcome").textContent =` مرحبًا، "${currentUser}!"`;
    showNextName();
}

function showNextName() {
    const nameDisplay = document.getElementById("name-display");
    if (currentIndex < names.length) {
        nameDisplay.textContent = names[currentIndex];
        currentIndex++;
    } else {
        nameDisplay.textContent = "انتهيت من جميع الأسماء!";
        currentIndex = 0; // إعادة التهيئة للبدء من جديد
    }
}

function testUser() {
    const question = document.getElementById("question");
    const quiz = document.getElementById("quiz");
    const answer = document.getElementById("answer");
    const result = document.getElementById("result");

    if (currentIndex === 0) {
        alert("من فضلك، اعرض الأسماء أولاً باستخدام زر 'الاسم التالي'!");
        return;
    }

    question.classList.remove("hidden");
    const randomIndex = Math.floor(Math.random() * (currentIndex - 1));
    quiz.textContent =` ما الاسم رقم "${randomIndex + 1}"؟`;
    quiz.dataset.correct = names[randomIndex];
    answer.value = "";
    result.textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correct = document.getElementById("quiz").dataset.correct;
    const result = document.getElementById("result");

    if (userAnswer === correct) {
        result.textContent = "إجابة صحيحة ✅";
        result.style.color = "green";
    } else {
    result.textContent =" إجابة خاطئة ❌، الإجابة الصحيحة هي: " +correct; 

        result.style.color = "red";
    }
}