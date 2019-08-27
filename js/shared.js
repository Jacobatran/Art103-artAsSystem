//   <script>
$( document ).ready(function() {


        $.get("shared/navigate.html", function(data){
            $("#nav-placeholder").replaceWith(data);
        });
//   </script>   
     
//   <script>
        $.get("shared/head.html", function(data){
            $("#head-placeholder").replaceWith(data);
        });
    
        console.log( "ready!" );
});
//   </script>      