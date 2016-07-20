$(function(){
  $("a").on("click", function(event){
    $this = $(this)

    var thisData = {"badge": {"teacher_id": "1", "phrase": "no way"}}

     $.ajax({
        url:"http://sample-badges-api.herokuapp.com/badges",
        method: "post",
        data: thisData
      }).done(function(response){
        console.log(response)
      }).fail(function(response){
        console.log("fail")
      })

    window.onhashchange = function(){
      $this
      // var teacherName = $this.text
      location.hash = $this[0].text
      // document.body.innerHTML = '<object type="text/html" data="sample-page.html" ></object>'
    }
  });
})
