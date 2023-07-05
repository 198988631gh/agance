const template = document.querySelector('#employee');
const peoplesSection = document.querySelector('.meet__peoples');

const names = [{
    name: 'person 1',
    image: './img/person.jpg',
}, {
    name: 'person 2',
    image: './img/person2.jpg',
}, {
    name: 'person 3',
    image: './img/person3.jpg',
}, {
    name: 'person 4',
    image: './img/person4.jpg',
}]

function openPopup(employee, newImage) {
    const text = document.querySelector('.meet__heading');
    const image = document.querySelector('.meet__person');
    image.src = newImage;
    text.textContent = employee;
}

function createTemplate(name, image) {
    const element = template.content.cloneNode(true);
    const imageElement = element.querySelector('.meet__item_img');
    imageElement.src = image;
    const nameElement = element.querySelector('.meet__name-box');
    nameElement.textContent = name;
    imageElement.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup(name, image);
    })
    return element;
}

names.forEach(person => peoplesSection.append(createTemplate(person.name, person.image)));
for (let i = 0; i < 4; i++) {
    peoplesSection.append(createTemplate());
}
