<template>
  <div class="api-docs">
    <h1>API 文档</h1>
    <table class="api-table">
      <thead>
        <tr>
          <th>接口名称</th>
          <th>URL</th>
          <th>请求方式</th>
          <th>认证方式</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="api in apis" :key="api.name">
          <td>{{ api.name }}</td>
          <td>{{ api.url }}</td>
          <td>{{ api.method }}</td>
          <td>{{ api.auth || "继承父级" }}</td>
          <td>
            <button @click="showDetails(api)">详情</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedAPI" class="api-details">
      <h2>{{ selectedAPI.name }}</h2>
      <p><strong>接口URL:</strong> {{ selectedAPI.url }}</p>
      <p><strong>请求方式:</strong> {{ selectedAPI.method }}</p>
      <p>
        <strong>Content-Type:</strong> {{ selectedAPI.contentType || "none" }}
      </p>
      <div v-if="selectedAPI.headers && selectedAPI.headers.length">
        <h4>请求Header参数:</h4>
        <ul>
          <li v-for="header in selectedAPI.headers" :key="header.name">
            <strong>{{ header.name }}:</strong> {{ header.example }} ({{
              header.type
            }}) - {{ header.required ? "必填" : "可选" }}
          </li>
        </ul>
      </div>
      <div v-if="selectedAPI.body">
        <h4>请求Body参数:</h4>
        <pre>{{ selectedAPI.body }}</pre>
      </div>
      <div v-if="selectedAPI.queryParams && selectedAPI.queryParams.length">
        <h4>请求Query参数:</h4>
        <ul>
          <li v-for="query in selectedAPI.queryParams" :key="query.name">
            <strong>{{ query.name }}:</strong> {{ query.example }} ({{
              query.type
            }}) - {{ query.required ? "必填" : "可选" }}
          </li>
        </ul>
      </div>
      <div>
        <h4>认证方式:</h4>
        <p>{{ selectedAPI.auth || "继承父级" }}</p>
      </div>
      <div>
        <h4>响应示例:</h4>
        <p><strong>成功(200):</strong></p>
        <pre>{{ selectedAPI.responses.success || "暂无数据" }}</pre>
        <p><strong>失败(404):</strong></p>
        <pre>{{ selectedAPI.responses.failure || "暂无数据" }}</pre>
      </div>
      <button @click="selectedAPI = null">关闭</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "ApiDocs",
  setup() {
    const apis = reactive([
      {
        name: "登录",
        url: "/api/users/login",
        method: "POST",
        contentType: "json",
        body: `{"username":"admin","password":"123456"}`,
        auth: "Bearer Token",
        headers: [
          {
            name: "Authorization",
            example: "Bearer your_access_token",
            type: "String",
            required: true,
          },
        ],
        responses: {
          success: "暂无数据",
          failure: "暂无数据",
        },
      },
      {
        name: "退出登录",
        url: "/api/users/loginout",
        method: "POST",
        headers: [
          {
            name: "token",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            type: "String",
            required: true,
          },
        ],
        responses: {
          success: "暂无数据",
          failure: "暂无数据",
        },
      },
      {
        name: "修改个人信息",
        url: "/api/users/alterinfo",
        method: "POST",
        contentType: "json",
        headers: [
          {
            name: "token",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            type: "String",
            required: true,
          },
        ],
        body: `{"username":"zjl003","email":"example@qq.com","phone_number":123456789,"sex":"女","age":18}`,
        responses: {
          success: "暂无数据",
          failure: "暂无数据",
        },
      },
      // 其他接口按照相同格式追加
    ]);

    const selectedAPI = ref(null);

    const showDetails = (api) => {
      selectedAPI.value = api;
    };

    return {
      apis,
      selectedAPI,
      showDetails,
    };
  },
};
</script>

<style scoped>
.api-docs {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.api-table th,
.api-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.api-table th {
  background-color: #f2f2f2;
}

.api-details {
  background: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
}

button:hover {
  background: #0056b3;
}
.api-details {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  max-width: 1400px;
  margin: 20px auto;
}

.api-details h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.api-details p {
  font-size: 16px;
  color: #555;
  margin: 8px 0;
}

.api-details strong {
  font-weight: bold;
  color: #333;
}

.api-details h4 {
  font-size: 18px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 8px;
}

.api-details ul {
  list-style: none;
  padding-left: 0;
}

.api-details li {
  background-color: #f1f1f1;
  margin: 5px 0;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}

.api-details li strong {
  color: #2a7ae2;
}

.api-details pre {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.api-details button {
  background-color: #2a7ae2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.api-details button:hover {
  background-color: #1a5bb8;
}
</style>
