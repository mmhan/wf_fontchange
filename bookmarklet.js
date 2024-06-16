function injectStyle(doc){
  var css = 'body { font-family: "DroidSansMono Nerd Font", Monaco, Menlo, "Courier New", courier, monospace !important; }',
    head = doc.head || document.getElementsByTagName('head')[0],
    body = doc.body,  style = document.createElement('style');
  body.classList.remove('font-courier');
  head.appendChild(style);
  style.appendChild(document.createTextNode(css));
}

injectStyle(window.document);

var iframes = document.getElementsByTagName('iframe');
var iframesList = Array.prototype.slice.call(iframes);
iframesList.forEach((frame) => {
  const regex = /^https:\/\/workflowy.com/g;
  if(frame.src.match(regex)){
    injectStyle(frame.contentDocument);
  }}
);
void(0);