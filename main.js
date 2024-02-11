const currentYear = new Date().getFullYear();
const copyRights = document.getElementById("copy");
const sortableList = document.getElementsByClassName("sortable-list")[0];
let draggedItem = null;


copyRights.innerHTML = `
  <span>&copy;</span> ${currentYear} <b>k0nt1</b>. All rights reserved.
`;