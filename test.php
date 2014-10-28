 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="css/codemirror.css">
    <script src="js/libs/codemirror.js"></script>
    <script>
      window.onload = function() {
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
         lineNumbers: true
      });
      };
    </script>
  </head>
  <body>
    <textarea name="code" id="code">helo ther</textarea>
  </body>
</html>