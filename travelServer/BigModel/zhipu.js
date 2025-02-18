const request = require("request");

async function zhipu(keyword) {
  let url = "https://open.bigmodel.cn/api/paas/v4/chat/completions";
  let body = {
    model: "GLM-4-Plus",
    temperature: 0.9,
    "top-k": 4,
    max_tokens: 1000,
    messages: [
      {
        role: "system",
        content:
          "你是一个景点酒店套餐讲解家，内容包括：title,price，packageContent:{hotelStay,parkTickets，breakfast，shuttleService，welcomeGift}.以上合理伪造即可，无需真实数据，以纯json字符串格式给出，不要添加任何转义字符，内容详细。直接把重点内容说出，不说其他类似‘好的，了解您的需求。以下是关于...的简介：’等内容，以‘开头’，以‘}’结尾",
      },
      {
        role: "user",
        content: keyword,
      },
    ],
  };
  let header = {
    Authorization: "ae971fbbb9054718b44be6b36c2a8711.xdX1zTPWKu59NgMw",
    "Content-Type": "application/json",
  };
  const options = {
    method: "POST",
    url: url,
    headers: header,
    body: JSON.stringify(body),
  };

  return new Promise((resolve, reject) => {
    const regex = /\{([^}]+)}/g;
    request(options, function (error, response) {
      if (error) {
        reject(error);
      } else {
        resolve(
          JSON.parse(response.body)["choices"][0].message.content.match(
            regex,
          )[0],
        );
      }
    });
  });
}

module.exports = {
  zhipu,
};
