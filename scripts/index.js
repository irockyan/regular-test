//公共方法

const $ = (sel) => {
  return document.querySelector(sel);
}


$('button').addEventListener('click', function () {
  $('textarea').value = new RegExp($('input:first-child').value).test($('input:nth-of-type(2)').value);
});

$('button').addEventListener('mousedown', function () {
  this.classList.add('button-height');
});

$('button').addEventListener('mouseup', function () {
  this.classList.remove('button-height');
});

$('#regex').addEventListener('input', function () {
  if (this.value.length > 0) {
    $('label[for="regex"]').classList.remove('c-disappear');
  } else {
    $('label[for="regex"]').classList.add('c-disappear');
  }
})

$('#string').addEventListener('input', function () {
  if (this.value.length > 0) {
    $('label[for="string"]').classList.remove('c-disappear');
  } else {
    $('label[for="string"]').classList.add('c-disappear');
  }
})
