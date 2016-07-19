$(document).ready(function() {
  getTeachers();
  getTeacher();
  createBadge();
  vote();
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
    var newBadgeData = $(this).closest('form').serialize();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/badges",
      data: newBadgeData,
      dataType: "json"
    }).done(function(jsonifiedBadge){
      // populate a 'partial' (handlebars?) with this json
      // then display it
    });
  });
};

function vote() {
  $('.slogan').on('click', 'button', function(event) {
    event.preventDefault();
    var badgeID = $(this).closest('div').parent().attr('id');
    var voteType = $(this).attr('class');
    var voteData = 'badge_id=' + badgeID + '&vote_type=' + voteType;
    console.log(voteData);
    // debugger;
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/badges",
      data: voteData,
      dataType: "json"
    }).done(function(jsonifiedBadge){
      // populate a 'partial' (handlebars?) with this json
      // then display it
    });
  });
};
