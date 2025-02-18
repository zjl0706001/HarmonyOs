import axios from "axios";

axios
  .get(
    "http://localhost:1337/api/v1/admin/notices?page=1&name=%E4%BB%8A%E5%A4%A9%E5%BC%80%E5%A7%8B%E5%86%99%E9%A1%B9%E7%9B%AE",
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9",
        Connection: "keep-alive",
        Cookie:
          "sails.sid=s%3AtLoVHW4cm3uE1Yi28yj_2WGA76_h5Ui-.v6h7DnuzTw11ib7JePsZAe7eYxA%2BqU1GQF%2Bb0loh20s",
        Host: "localhost:1337",
        "If-None-Match": 'W/"13b-U74AeLJ+CwJumOTy69c2fPlgAWE"',
        Referer: "http://localhost:1337/manager/",
        "Sec-Ch-Ua":
          '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        Token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE2NjgyMjM4ODQyNjIsInVwZGF0ZWRBdCI6MTY2ODIyMzg4NDI2MiwiaWQiOjQsInVzZXJOYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIiwibmlja05hbWUiOiJBcml2aW4iLCJnZW5kZXIiOiLmnKrnn6UiLCJhdmF0YXIiOiJodHRwOi8vb3NzLnBlbmt1b2VyLmNvbS91UGljL3NzLmpwZWciLCJpYXQiOjE3MzY0OTgxMDEsImV4cCI6MTczNjUzNDEwMX0.dqwwI4GCnW2Yl3S0eIaJNPfIhluf-LwnYTWTDjSyO4c",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      },
    },
  )
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
