const xml = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();

const DOM = parser.parseFromString(xml, "text/xml");

const students = DOM.querySelectorAll("student");

const studentsList = [];

students.forEach(student => {
  const cardUser = {
    name: getFullName(student),
    age: student.querySelector("age").textContent,
    prof: student.querySelector("prof").textContent,
    lang: student.querySelector("name").getAttribute("lang"),
  };

  studentsList.push(cardUser);
});

console.log(studentsList);

function getFullName(user) {
  return (
    user.querySelector("first").textContent +
    " " +
    user.querySelector("second").textContent
  );
}
