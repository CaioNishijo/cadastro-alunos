// Seleção de elementos
const registerForm = document.querySelector("#register-form")
const studentsList = document.querySelector("#students-list")
const nameInput = document.querySelector("#name")
const raInput = document.querySelector("#ra")
const moduloInput = document.querySelector("#modulo")

// Criação dos elementos
registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nameValue = nameInput.value
    const raValue = raInput.value
    const moduloValue = moduloInput.value 

    // Criar a div
    const student = document.createElement("div")
    student.classList.add("student")

    // Criando botão
    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    student.appendChild(removeBtn)

    // Criando nome
    const name = document.createElement("h3")
    name.innerText = "Name: "+nameValue
    student.appendChild(name)

    // Criando Ra
    const ra = document.createElement("h4")
    ra.innerText = "RA: "+raValue
    student.appendChild(ra)

    // Criando modulo
    const modulo = document.createElement("h4")
    modulo.innerText = "Módulo: "+moduloValue
    student.appendChild(modulo)

    // Append na list
    studentsList.appendChild(student)

    // Zerando as infos
    nameInput.value = ""
    raInput.value = ""
    moduloInput.value = ""
})

// Código do removeBtn
document.addEventListener("click", (e) => {
    const targetElement = e.target
    const parentElement = targetElement.closest("div")
    if(targetElement.classList.contains("remove")){
        parentElement.remove()
    }
})