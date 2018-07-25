var xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
   var students = JSON.parse(xhr.responseText);
   var html = '<ul class="list-unstyled">';
   for(var i=0; i<students.length; i++)
   {
     if(students[i].hasWindows === true)
     {
       html += `<li>${students[i].name} has windows.</li>`;
     }
     else
     {
       html += `<li>${students[i].name} does not have windows.</li>`;
     }
   }
   html += '</ul>';
   $('#students').html(html);
  }
};

xhr.open("GET", './data.json');

xhr.send();