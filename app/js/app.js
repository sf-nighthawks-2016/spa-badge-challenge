$(function(){
  $("a").on("click", function(event){
    $this = $(this)
    var renderIt = null
    window.onhashchange = function(){
      $this
      // var teacherName = $this.text
      location.hash = $this[0].text
      // document.body.innerHTML = '<object type="text/html" data="sample-page.html" ></object>'

      var ajaxRequest = $.ajax({
        url :"http://sample-badges-api.herokuapp.com/",
        method: "get",


      })
    }
  });
})
