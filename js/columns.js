ztxt.Columns = function() {
  this.win = $(window);
  this.fileList = $('#file-list');
  this.codeEditor = $('#code-editor');
  this.preview = $('#preview');
  this.drag = [$('#file-list-drag'), $('#code-editor-drag')];
  this.disable = $('#disable');
  
  this.dragging = false;
  this.dragLoop = function(){};
  this.loopId;
  
  this.initialPositions();
  $('.drag').mousedown(this.dragdown.bind(this));
  $(document).mouseup(this.mouseup.bind(this));
};

ztxt.Columns.prototype = {
  
  constructor : ztxt.Columns,
  
  initialPositions : function() {
    this.drag[0].css({
      left : this.fileList.outerWidth()
    });
    
    this.codeEditor.css({
      left : this.drag[0][0].getBoundingClientRect().right
    });
    
    this.drag[1].css({
      left : this.codeEditor[0].getBoundingClientRect().right
    });
    
    this.preview.css({
      left : this.drag[1][0].getBoundingClientRect().right
    });
  },
  
  updateLayout : function() {    
    var rects = [
      this.drag[0][0].getBoundingClientRect(),
      this.drag[1][0].getBoundingClientRect()
    ];
    
    this.fileList.css({
      width: posA
    });
    this.codeEditor.css({
      left: rects[0].right,
      width: rects[1].left - rects[0].left - this.drag[1].outerWidth()
    });
    this.preview.css({
      left: rects[1].right,
      width: this.win.width() - rects[1].left - this.drag[1].outerWidth()
    });
  },
  
  dragdown : function(e) {
    var drag = $(e.target),
        min, max;
    this.dragging = true;
    this.disable.show();
    
    if (drag[0] === this.drag[0][0]){
      min = 0;
      max = this.drag[1][0].getBoundingClientRect().left -  this.drag[0].outerWidth();
    } else {
      min = this.drag[0][0].getBoundingClientRect().right;
      max = this.win.width() - this.drag[1].outerWidth();
    }
    this.dragLoop = function() {
      if (ztxt.mouseX > max) ztxt.mouseX = max;
      if (ztxt.mouseX < min) ztxt.mouseX = min;
      drag.css({
        left: ztxt.mouseX
      });
      this.updateLayout();
      this.loopId = requestAnimationFrame(this.dragLoop.bind(this));
    };
    this.dragLoop();
  },
  
  mouseup : function() {
    this.dragging = false;
    this.disable.hide();
    cancelAnimationFrame(this.loopId);
  }
};
