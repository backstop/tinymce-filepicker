/**
 * editor_plugin_src.js
 *
 * Copyright 2012, Brian Park
 * Released under MIT License.
 */

(function() {
  tinymce.create('tinymce.plugins.FilepickerPlugin', {
    init : function(ed, url) {
      ed.addButton('filepicker', {
        title : 'Insert an mp4, viewing a video on the admin site will only work in Chrome',
        image : url + '/img/fp-icon.png',
        onclick : function( event ) {
          $( event.current_target ).trigger( 'uploadFileToCloud' );
        }
      });
    },

    getInfo : function() {
      return {
        longname : 'Filepicker plugin',
        author : 'Brian Park',
        authorTwitterURL: 'https://twitter.com/yaru22',
        authorGithubURL: 'https://github.com/yaru22',
        authorurl : 'http://brianpark.ca',
        infourl : 'https://github.com/yaru22/tinymce-filepicker',
        version : '1.0'
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('filepicker', tinymce.plugins.FilepickerPlugin);
})();

