var emoji = require('node-emoji');
var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();

module.exports = async message => {
  const inputString = message.text

  console.dir(message);

  return {
    "response": emoji.emojify(md.render(inputString))
  };
}
