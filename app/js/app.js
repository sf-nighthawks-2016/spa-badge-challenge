$(document).ready(function() {
  // handlebarsTest();
  getTeachers();
  getTeacher();
  addBadge();
  vote();
});

// function handlebarsTest() {
//   var template = $('#hbarsexample').html();
//   var templateScript = Handlebars.compile(template);
//   var info = {name: 'Red', occupation: 'Pokemon Master'};
//   var html = templateScript(info);
//   $('.logo').append(html);
// }

// baseURL = "http://localhost:3000/"; // localhost
baseURL = "http://sample-badges-api.herokuapp.com/"; // H's API


function getTeachers() {
  $('body').on('click', '#teachers', function(event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: baseURL + "teachers",
      dataType: "json"
    }).done(function(jsonifiedAllTeachers){
      console.log(jsonifiedAllTeachers);
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
      url: baseURL + "teachers/" + teacherID,
      dataType: "json"
    }).done(function(jsonifiedTeacherBadges){
      console.log(jsonifiedTeacherBadges);
      // populate a 'partial' (handlebars?) with this json
      // then display it
    });
  });
};


function addBadge() {
  $('#add_badge').on('submit', function(event) {
    event.preventDefault();
    var teacher_id = $(this)[0].elements[0].value;
    var phrase = $(this)[0].elements[1].value;
    var newBadgeData = {"badge":{"phrase": phrase, "teacher_id": teacher_id}};
    $.ajax({
      method: "POST",
      url: baseURL + "badges",
      data: newBadgeData,
      dataType: "json"
    }).done(function(jsonifiedBadge){
      console.log(jsonifiedBadge);
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
    // var voteData = '{"vote": {"id": "' + badgeID + '", "vote_type": "' + voteType + '"}}'
    var voteData = {"vote": {"id": badgeID, "vote_type": voteType}}
    console.log(voteData);
    $.ajax({
      method: "PUT",
      url: baseURL + "badges/" + badgeID,
      data: voteData,
      dataType: "json"
    }).done(function(jsonifiedBadge){
      console.log(jsonifiedBadge);
      // just for testing, actually only need to get 'success' back,
      // no actual data
      // populate a 'partial' (handlebars?) with this json
      // then display it
    });
  });
};
