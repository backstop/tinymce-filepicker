/**
 * editor_plugin_src.js
 *
 * Copyright 2012, Brian Park
 * Released under MIT License.
 */

(function() {
  tinymce.create('tinymce.plugins.FilepickerPlugin', {
    init : function(ed, url) {
      // Register the command
      ed.addCommand('bpFilepicker', function() {
            filepicker.pick({ 'mimetype': 'video/mp4' }, function(FPFile) {
                var videoHTML = tinymce.activeEditor.dom.createHTML('video', {
                    src: FPFile.url,
                    controls: "controls",
                    class: "media-element",
                    type: "video/mp4"
                });
                ed.execCommand('mceInsertContent', false, videoHTML, {skip_undo : 1});
                ed.undoManager.add();
            });
        });

      // Register example button
      ed.addButton('filepicker', {
        title : 'Insert an image using Filepicker.io',
        cmd : 'bpFilepicker',
        image : url + '/img/fp-icon.png'
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

