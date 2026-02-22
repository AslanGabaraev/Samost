let studentsSection = document.querySelector(".students");
let goalsSection = document.querySelector(".goals");

let goalsArr = [];
let studentsArr = [];

let studentButton = document.querySelector('.student__button');
let studentsForm = document.querySelector('.students__form');
let goalForm = document.querySelector(".goals__form")
let goalButton = document.querySelector('.goal__button');


studentsForm.addEventListener('submit', function(event){
    event.preventDefault();

    let groupValue = document.querySelector('.group__input').value.trim();
    let nameValue = document.querySelector('.name__input').value.trim();
    let lastNameValue = document.querySelector('.lastname__input').value.trim();
    let studentIDValue = document.querySelector('.code__input').value.trim();
    let goalIDValue = document.querySelector('.goalcode__input').value.trim();
    let phoneNumberValue = document.querySelector('.number__input').value.trim();

    if (!groupValue || !nameValue || !lastNameValue || !studentIDValue || !goalIDValue || !phoneNumberValue) {
        alert("Заполните все поля!");
        return;
    }

    let newStudent = {
        group: groupValue,
        name: nameValue,
        lastName: lastNameValue,
        studentID: studentIDValue,
        goalID: goalIDValue,
        phone: phoneNumberValue
    };

    studentsArr.push(newStudent);
    updateStudentsDisplay();
    studentsForm.reset();
});

goalForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    let GoalDescryption =  document.querySelectorAll('.goals__descryption').value.trim() || ' ';
    let goalIDValue = document.querySelector('.goalcode__input').value.trim();
    let goalDateValue = new Date().toLocaleString();  
    
    if (!GoalDesryption || !goalIDValue) {
        alert("Заполните все поля!");
        return;
    } 
    let newGoals = {
        goalDesryption: GoalDescryption,
        goalID: goalIDValue,
        goalDate: goalDateValue,
    };    
    goalsArr.push(newGoals);
    updateGoalsDisplay();
    goalForm.reset();
});

goalButton.addEventListener("click", GoalButton);






function updateStudentsDisplay() {
    studentsSection.innerHTML = '';
    studentsArr.forEach(el => {
      let box1 = document.createElement("div");
      box1.innerHTML = `
        <span>Группа: ${el.group}</span>
        <span>Имя: ${el.name}</span>
        <span>Фамилия: ${el.lastName}</span>
        <span>Код студента: ${el.studentID}</span>
        <span>Код цели: ${el.goalID}</span>
        <span>Телефон: ${el.phone}</span>
    `;
    box1.classList.add("students__Box");
    studentsSection.appendChild(box1);
    });
}

function updateGoalsDisplay() {
    goalsSection.innerHTML = '';
    goalsArr.forEach(el => {
      let box = document.createElement("div");
      box.innerHTML = `
        <span>Код цели: ${el.goalID}</span>
        <span>Дата цели: ${el.goalDate}</span>
        <span>Описание: ${el.goalDesryption}</span>
    `;
    box.classList.add("students__Box");
    goalsSection.appendChild(box);
    });
}

function StudentButton() {
    if (studentsSection.style.display === "none" || studentsSection.style.display === "") {
        studentsSection.style.display = "flex";
    } else {
        studentsSection.style.display = "none";
    }
}
studentButton.addEventListener("click", StudentButton);

function GoalButton() {
    if (goalsSection.style.display === "none" || goalsSection.style.display === "") {
        goalsSection.style.display = "flex";
    } else {
        goalsSection.style.display = "none";
    }
}


