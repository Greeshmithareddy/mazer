// Feather icons are used on some pages
// Replace() replaces [data-feather] elements with icons
import featherIcons from "feather-icons"
featherIcons.replace()

// Mazer internal JS. Include this in your project to get
// the sidebar running.
import "./mazer" 
fetch('/assets/data/data.json')
  .then(res => res.json())
  .then(data => {
    const studentsEl = document.getElementById('totalStudents');
    if (studentsEl) {
      studentsEl.innerText = data.students;
    }

    const teachersEl = document.getElementById('totalTeachers');
    if (teachersEl) {
      teachersEl.innerText = data.teachers;
    }
  })
  .catch(err => console.error('JSON load error:', err));
