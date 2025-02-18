let username = document.querySelector('input[type="text"]');
let password = document.querySelector('input[type="password"]');
let login = document.querySelector("button");

login.onclick = () => {
  const user = username.value.trim();
  const pass = password.value.trim();
  if (!user || !pass) {
    alert("请输入用户名和密码");
    return;
  }
  const url = `http://localhost:3000/api/users/login?username=${user}&password=${pass}`;
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log("登录成功:", response);
        alert("登录成功");
      } else {
        console.error("登录失败:", this.status, this.statusText);
        alert("登录失败，请检查用户名和密码");
      }
    }
  };
  request.open("GET", url, true);
  request.send();
};
