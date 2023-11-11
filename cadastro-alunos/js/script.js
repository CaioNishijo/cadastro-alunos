// Elements
const registerForm = document.querySelector("#register-form")
const studentsList = document.querySelector("#students-list")
const nameInput = document.querySelector("#name")
const raInput = document.querySelector("#ra")
const semesterInput = document.querySelector("#semester")

// Creating Elements
registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nameValue = nameInput.value
    const raValue = raInput.value
    const semesterValue = semesterInput.value 

    // Div
    const student = document.createElement("div")
    student.classList.add("student")

    // Button
    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    student.appendChild(removeBtn)

    // Name
    const name = document.createElement("h3")
    name.innerText = "Name: "+nameValue
    student.appendChild(name)

    // Ra
    const ra = document.createElement("h4")
    ra.innerText = "RA: "+raValue
    student.appendChild(ra)

    // Semester
    const semester = document.createElement("h4")
    semester.innerText = "Semester: "+semesterValue
    student.appendChild(semester)

    // List append
    studentsList.appendChild(student)

    // infos reset
    nameInput.value = ""
    raInput.value = ""
    semesterInput.value = ""
})

// removebtn
document.addEventListener("click", (e) => {
    const targetElement = e.target
    const parentElement = targetElement.closest("div")
    if(targetElement.classList.contains("remove")){
        parentElement.remove()
    }
})