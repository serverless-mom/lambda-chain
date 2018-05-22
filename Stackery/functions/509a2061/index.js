var emoji = require('node-emoji');
var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();

const inputString = 'I _really_ :heart:  :coffee:!'


module.exports = async message => {
  console.dir(message);

  return {
    emoji.emojify(md.render(inputString))
  };
}
