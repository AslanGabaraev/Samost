let studentsSection = document.querySelector(".students");
let goalsSection = document.querySelector(".goals");



let students = [
    {
        group:"9a",
        name:"Аслан",
        lastName:"Габараев",
        studentID:"1",
        goalID:"1",
    },
]
let goals = [
    {
        goalID:"1",
        goalDate:"2026-02-20",
        goalDescryption: "Поехать домой",
    },
]
students.forEach((el =>{
    box1 = document.createElement("div");
    box1.innerHTML = `
        <span>${el.group}</span>
        <span>Имя: ${el.name}</span>
        <span>Фамилие: ${el.lastName}</span>
        <span>Код Студента: ${el.studentID}</span>
        <span>Код Задания: ${el.goalID}</span>
    `
    studentsSection.appendChild(box1);
    box1.classList.add("students__Box");
}))
goals.forEach((el =>{
    let box = document.createElement("div");
    box.innerHTML = `
        <span>Код Задания: ${el.goalID}</span>
        <span>Дата Задания: ${el.goalDate}</span>
        <span>Описание: ${el.goalDescryption}</span>
    `
    goalsSection.appendChild(box);
    box.classList.add("goal__Box");
}))

