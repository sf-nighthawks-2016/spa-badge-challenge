$(document).ready(function() {
  getTeachers();
  getTeacher();
  addBadge();
  vote();
});

var renderTemplate = function(scriptID, info) {
 var templateScript = $(scriptID).html();
 debugger;

 var theTemplate = Handlebars.compile(templateScript);
 var theCompiledHtml = theTemplate(info);
 $('.container').append(theCompiledHtml);
};


// baseURL = "http://localhost:3000/"; // localhost
baseURL = "http://sample-badges-api.herokuapp.com/"; // H's API


function getTeachers() {
  // $('body').on('click', '#teachers', function(event) {
  //   event.preventDefault();
    $.ajax({
      method: "GET",
      url: baseURL + "teachers",
      dataType: "json"
    }).done(function(allTeachers){
      var teacherArry = {teachers: allTeachers}
      renderTemplate(hbarsteacherlist, teacherArry);
    });
  // });
};

function getTeacher() {
  $('body').on('click', '.teacher', function(event) {
    event.preventDefault();
    var teacherID = $(this)[0]['id'];
    var teacherNameString = $(this)[0]['innerHTML'];
    var teacherName = {name: teacherNameString};
    $.ajax({
      method: "GET",
      url: baseURL + "teachers/" + teacherID,
      dataType: "json"
    }).done(function(teacherBadges){
      $('.tl').hide();
      $.get("../_bd.html", function(data){$('.bd').html(data);});

      console.log(teacherBadges);
      renderTemplate('#teachername', teacherName);


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
