$(function(){
  $("a").on("click", function(event){
    $this = $(this)

    var thisData = {"badge": {"teacher_id": "1", "phrase": "no way"}}

     // $.ajax({
     //    url:"http://sample-badges-api.herokuapp.com/badges",
     //    method: "post",
     //    data: thisData
     //  }).done(function(response){
     //    console.log(response);
     //    $this.html(response.phrase)
     //  }).fail(function(response){
     //    console.log("fail")
     //  })

      $.ajax({
        url:"http://sample-badges-api.herokuapp.com/teachers",
        method: "get",
        dataType: "json"
      }).done(function(response){
        var teachers = response
        console.log(teachers)
        for(i=0;i<teachers.length;i++){
          console.log(teachers[i].name)
        }
      }).fail(function(response){
        console.log("fail")
      })


    window.onhashchange = function(){
      $this
      location.hash = $this[0].text
    }
  });
})
