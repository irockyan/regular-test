//公共方法

const $ = (sel) => {
  return document.querySelector(sel);
}


$('button').addEventListener('click', function () {
  $('textarea').value = new RegExp($('input:first-child').value).test($('input:nth-of-type(2)').value);
});
