let input = document.querySelectorAll("input");
let button = document.querySelector("button");
button.onclick = () => {
  let user = {
    username: input[0].value,
    nickname: input[1].value,
    age: input[2].value,
    password: input[3].value,
    rpassword: input[4].value,
  };
  if (!user.username || !user.nickname || !user.age || !user.password) {
    alert("信息填写不完整");
    return;
  }
  if (user.password !== user.rpassword) {
    alert("密码输入不相同");
    return;
  }
  const url = `http://localhost:3000/api/users/register`;
  const request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log("注册成功:", response);
        alert("注册成功");
      } else {
        console.error("注册失败:", this.status, this.statusText);
        alert("注册失败");
      }
    }
  };

  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(user));
};
