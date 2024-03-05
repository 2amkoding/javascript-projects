//TODO: Add Your Code Below
 
<script>

        window.addEventListener("load", function() {
            fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
                console.log(response);
            } );
        });
</script>