student = {}

let firstName = 'Marina';
let lastName = 'Tozato';
let email = 'marinatozato@gmail.com';
let gitHub = 'https://github.com/marinatozato';
let linkedin = 'https://www.linkedin.com/in/marinatozato/';

function addProperty(object, key, value) {
    object[key] = value;
}

addProperty(student, 'firstName', 'Marina')
addProperty(student, 'lastName', 'Tozato')
addProperty(student, 'email', 'marinatozato@gmail.com')
addProperty(student, 'gitHub', 'github.com/marinatozato')
addProperty(student, 'linkedin', 'linkedin.com/marinatozato')

console.log(student);
