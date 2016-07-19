$(document).ready(function() {
  getTeachers();
  getTeacher();
  createBadge();
});

function getTeachers() {
  $('body').on('click', '#teachers', function(event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/teachers",
      dataType: "json"
    }).done(function(jsonifiedAllTeachers){
      // populate a 'partial' (handlebars?) with this json
      // then display it
    });
  });
};

function getTeacher() {
  $('body').on('click', '.teacher', function(event) {
    event.preventDefault();
    var teacherID = $(this).attr('id');
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/teacher/" + teacherID,
      dataType: "json"
    }).done(function(jsonifiedTeacher){
      // populate a 'partial' (handlebars?) with this json
      // then display it
    });
  });
};


function createBadge() {
  $('.add-badge').on('click', 'input[type="image"]', function(event) {
    event.preventDefault();
    var newBadgeName = $(this).closest('form').serialize();
    console.log(newBadgeName);
    debugger;
  })

}
