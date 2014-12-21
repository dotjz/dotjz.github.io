Anyone can edit the html page's text content without asking.  The only rule is that if you want to change something (change, not add), you must consult with the person who created the thing you wish to change BEFORE changing it.  Because of this, please ask Mateo before making any major css changes (I don't care if you change the color of font or anything like that, but if you want to change the entire layout, please ask).  Please do not create a <style> or <script> tag in the html file, just use the style.css and script.js files.  If you want to create new js or css files, that is fine, just don't forget to reference them in index.html. You may use outside libraries as well.  If you want to change the names of the classes, you don't need to ask, but blease be sure to change them in all 3 files so that you don't screw up the entire page.  The following is a list of all the classes.  Please edit this list if you change any class names.

The css file already styles everything, so please use the following layout.  If you wish to change it, please consult the rules stated above.

Each section is div.eg
Inside of this there are 2 divs, one for the text above the example box, and one for the actual box.
The text is div.egtext, and it contains a <p> tag for the description of the text, and two <h2> tags that read jQuery and dotjz.
	Feel free in a new section to edit the <p> tag, but the <h2> tags are counted as layout, so follow the above rules.
The example boxes are inside div.egenclose
Inside there are two identical divs.
The first is the jQuery example, the second is the dotjz example.
	Remember that the jQuery example has to be real jQuery, and the dotjz example has to correspond exactly to the jQuery example.  If you create any new commands here, please add them to the commands.txt file in the actual dotjz repo
Each div.egeg has ONE <p> tag.
For syntax highlighting, use a <span class="color"> tag where color is one of the already defined colors.  If you need a new color, simply add it in the css file with the same format as the others.  Feel free to change a color, but for simplicity, all the colors are 100% opacity and in hex format.  The class names correspond to the actual names of the hex color, I recomend you use the following site for this (//colours.neilorangepeel.com).  If you change the color, please change the class name as well.
Tabs are 7 spaces.

The easiest way to create a new section is to copy an entire div.eg and paste it underneath the last one.  Change everything BUT the <h2> tags.

For consistency with the syntax highlighting, please look at other examples to determine what colors to use where.  For plain white text, do not use a <span> tag, simply write in the <p> tag.

If you are unhappy with any of these rules, use the facebook chat so we can ALL discuss and then ammend them.

Happy holidays and happy hacking!