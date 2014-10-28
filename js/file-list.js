ztxt.FileList = function() {
  this.folders = $('#file-list .folders');
  this.documents = $('#file-list .documents');
  $.post('app/top-folders.php', this.loadTopFolders.bind(this));
  this.folders.change(this.changeTopFolders.bind(this));
  $(document).on('click', '.directory', this.loadDirectory.bind(this));
};

ztxt.FileList.prototype = {
  constructor : ztxt.FileList,
  
  loadTopFolders : function(data) {
   this.folders.html(data);
    this.folders.trigger('change');
  },
  
  changeTopFolders : function(e) {
    $.post('app/file-list.php', {
      dir : this.folders.val()
    }, this.loadDocs.bind(this));
  },
  
  loadDocs: function(data) {
    this.documents.html(data);
  },
  
  loadDirectory : function(e){
    var dir = $(e.target);
    $.post('app/file-list.php', {
      dir : dir.attr('data-path')
    }, function(data) {
      dir.append(data);
    });
  }
};