var ztxt;

(function() {
  
  function Ztxt() {
    this.mouseX = 0;
    this.mouseY = 0;
    $(document).mousemove(this.move.bind(this));
  }
  
  Ztxt.prototype = {
    constructor : Ztxt,
    move : function(e) {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
    }
  };
  
  ztxt = new Ztxt();
})();

$(function() {
  var columns = new ztxt.Columns(),
      fileList = new ztxt.FileList();
  
  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true
  });
});
