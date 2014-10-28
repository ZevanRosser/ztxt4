<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>ztxt 4</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/theme.css">
    <link rel="stylesheet" href="css/codemirror.css">
    <script src="js/libs/codemirror.js"></script>
    <script src="js/libs/jquery-2.1.1.min.js"></script>
    <script src="js/ztxt.js"></script>
    <script src="js/columns.js"></script>
    <script src="js/file-list.js"></script>
  </head>
  <body>
    
    <div id="file-list">
      <div class="refresh">&#x21bb;</div>
      <select class="folders">
        <option value="">ztxt</option>
        <option value="">4.0</option>
      </select>
      <div class="documents"></div>
    </div>
    <div id="code-editor">
      <textarea id="code">this is the code editor</textarea>
    </div>
    <div id="preview">
    </div>
    <div id="file-list-drag" class="drag"></div>
    <div id="code-editor-drag" class="drag"></div>
    <div id="disable" class="cover"></div>
    <div id="overlay" class="cover"></div>
  </body>
</html>