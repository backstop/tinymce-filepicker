(function(){tinymce.create('tinymce.plugins.FilepickerPlugin',{init:function(ed,url){ed.addCommand('bpFilepicker',function(){filepicker.pick(function(FPFile){var imgHTML=tinymce.activeEditor.dom.createHTML('img',{src:FPFile.url,style:'max-width: 930px;'});ed.execCommand('mceInsertContent',false,imgHTML,{skip_undo:1});ed.undoManager.add()})});ed.addButton('filepicker',{title:'Insert an image using Filepicker.io',cmd:'bpFilepicker',image:url+'/img/fp-icon.png'})},getInfo:function(){return{longname:'Filepicker plugin',author:'Brian Park',authorTwitterURL:'http://twitter.com/yaru22',authorGithubURL:'http://github.com/yaru22',authorurl:'http://brianpark.ca',infourl:'<TODO: put github path>',version:"1.0"}}});tinymce.PluginManager.add('filepicker',tinymce.plugins.FilepickerPlugin)})();