var regData = [{
  '手机号': '^1[35678]\d{9}$'
}, {
  '邮箱': '@[\w]+.[a-z]+$'
}, {
  '密码': '[\S]{8,22}'
}];

localStorage.setItem('regdata', regData);
