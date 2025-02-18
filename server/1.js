fetch('http://localhost:8888/users/rpwd', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzNDAwNjY4LCJleHAiOjE3MzM0MDQyNjh9.8AWrRLSdf5MqcZpuvsLCHDAw9JYd1SVpEbE95zp5ZHU',
    },
    body: JSON.stringify({
        id: 1,
        oldPassword: '123456',
        newPassword: '12345678',
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('网络错误或服务器响应失败');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);  // 打印返回的完整数据
        if (data.code === 1) {
            console.log('密码修改成功');
        } else {
            console.error('密码修改失败', data.message || '没有错误信息');
        }
    })
    .catch(error => {
        console.error('请求错误:', error.message);
    });
