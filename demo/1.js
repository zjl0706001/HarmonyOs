const express = require("express");
const app = express();
app.get("/music/:id", async (req, res) => {
  const getdata = async () => {
    const headers = new Headers({
      Cookie:
        "Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1733982808; HMACCOUNT=894CD3A3F6012FEC; _ga=GA1.2.1160833392.1733982809; _gid=GA1.2.919164997.1733982809; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1733983454; _ga_ETPBRPM9ML=GS1.2.1733982809.1.1.1733983454.2.0.0; Hm_Iuvt_cdb524f42f23cer9b268564v7y735ewrq2324=Kb2CPxhAGnz6zrmt6P7yDd2MSYFjZJ8A",
      Secret:
        "6832b9e1415f006a994bdaa731c8dc593e9fc6ae739eae4a5ad93df3dccc5dcd026d177b",
    });
    return await fetch(
      `https://www.kuwo.cn/api/www/artist/artistMusic?artistid=${req.params.id}&pn=1&rn=200&httpsStatus=1&reqId=144a3730-b84f-11ef-a690-5b9b3af86ed6&plat=web_www&from=`,
      {
        headers: headers,
      },
    ).then((response) => response.json());
  };
  res.send(await getdata());
});
app.get("/info/:id", async (req, res) => {
  const getdata = async () => {
    const headers = new Headers({
      Cookie:
        "Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1733982808; HMACCOUNT=894CD3A3F6012FEC; _ga=GA1.2.1160833392.1733982809; _gid=GA1.2.919164997.1733982809; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1733983454; _ga_ETPBRPM9ML=GS1.2.1733982809.1.1.1733983454.2.0.0; Hm_Iuvt_cdb524f42f23cer9b268564v7y735ewrq2324=Kb2CPxhAGnz6zrmt6P7yDd2MSYFjZJ8A",
      Secret:
        "6832b9e1415f006a994bdaa731c8dc593e9fc6ae739eae4a5ad93df3dccc5dcd026d177b",
    });
    return await fetch(
      `https://kuwo.cn/api/www/artist/artist?artistid=${req.params.id}&httpsStatus=1&reqId=67dbb3e0-b879-11ef-9d7b-011d225efbd2&plat=web_www`,
      {
        headers: headers,
      },
    ).then((response) => response.json());
  };
  res.send(await getdata());
});
app.listen(8080, () => {
  console.log("代理已开启，格式如下：");
  console.log("http://localhost:8080/music/:id");
  console.log("http://localhost:8080/info/:id");
});
