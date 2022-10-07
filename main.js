const createStudent = (name, grade) => {
     const student = {
        name: name,
        grade: grade
    }
    return student
}

const addMathGrade = (student) => {
    student.math = "B"
    return student
}

const addHistoryGrade = (student) => {
    student.history = "C"
    return student
}

addScienceGrade = (student) => {
    student.science = "A"
    return student
}

const newStudent = createStudent("Bob", 7)
const nextStep = addMathGrade(newStudent)
const thisStep = addHistoryGrade(nextStep)
const ok = addScienceGrade(thisStep)


console.log(ok)
