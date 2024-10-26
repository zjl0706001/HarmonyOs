// var url = `
// https://api.m.jd.com/?h5st=20241024165818079%3Byhqef58lez1u1zz3%3Bb5216%3Btk03w734a1b3218n3b9KGgq4PTWgKEIC3ePPuoCyBzCFG4L9wMc7ada393W6Ri2bjYabZua3a33qVeKTfcSPCpPHiApO%3B8cf515be98ef03575f7b5addb48b04e4%3B4.9%3B1729760298079%3Bof7ruCLj4DEN6XUfxWlQzXISGmkRyipjxjpPFipjLDrg1nojxjJQIeFjLrJp-j5eJqYdKeld1X4fzXlfybYT7r4eGWld1T4TKalS0joeKipjxjpPl61SJW1OJrpjh7JjzfYfKq4e7X1T2nlfKGIe7fFS5PYeyTlSJi1fHalS2PIjLDIj4mFO9m1TJrpjh7Jj6zZd9bIOMWlQCS1U2LFjLDIj1ipjLDrgJLoV_b4P2GnQ-25SFipjxjZQ8aFQKiEjLrJp-jJf4zVRUipjxjJS7ipjLDrguqpjhrojxjpd2iFjLrpjLDrgJjpjxj5e2iFjLrpjLDrg3jojxjJe2iFjLrpjLDrg7rJdJXYOJipjLrpjh7pfLDIj3XETJrpjLrJp-roeLDIj4XETJrpjLrJp-nYgLDIj5XETJrpjLrJp-jpe9nIg7jpjxjZf2iFjLrpjLDrg7rJdJ-1OJrpjLrJp-Xojxj5P-ipjLrpjh7pfLDIj-ipjLrpjh7pfLDIjHOEjLrpjLD7NLDIjHyVS3KUSJrpjh7ZMwqJdJrkPJrpjh7Jj3ToNL-oe1zVRUq5d7zpf6rpWdq5P0ulS9G1WJrJdJnVO4ipjLD7N%3B89b1f227dd227328fda21d0fecb36158&appid=www-jd-com&body=%7B%22page%22%3A4%2C%22pagesize%22%3A25%2C%22area%22%3A%227_458_464_37568%22%2C%22source%22%3A%22pc-home%22%7D&clientVersion=1.0.0&client=pc&functionId=pc_home_feed&t=1729760298071&uuid=76161171.17297313284701349785342.1729731328.1729759937.1729760195.7&loginType=3&x-api-eid-token=jdd03L7MO2Q3WXZXK544B5FZLJIJO43YTI7KKW2BIHEDKW46WTKXYBVQNNICVPRMJJ4DBVZCSSAU2DTNKEQR7RC5K3QA4FYAAAAMSXW7SGYAAAAAAD344KYYDG7XHHQX&callback=jsonpMore2Goods&_=1729760298080`;
// const getData = async (url) => {
//   const resp = await fetch(url, {
//     headers: {
//       accept: "application/json",
//       "accept-encoding": "gzip, deflate, br, zstd",
//       "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
//       cookie:
//         "__jdv=76161171|cn.bing.com|-|referral|-|1729731328471; __jdu=17297313284701349785342; 3AB9D23F7A4B3C9B=L7MO2Q3WXZXK544B5FZLJIJO43YTI7KKW2BIHEDKW46WTKXYBVQNNICVPRMJJ4DBVZCSSAU2DTNKEQR7RC5K3QA4FY; areaId=7; ipLoc-djd=7-458-0-0; PCSYCityID=CN_410000_410700_0; shshshfpa=a89ec5f2-f0d1-16fa-6995-774f74478fd2-1729731331; shshshfpx=a89ec5f2-f0d1-16fa-6995-774f74478fd2-1729731331; mt_xid=V2_52007VwMUUVVeUFodShBZA2YDEFdVXlteHUwabFBhUEZSXVwHRktJSggZYgRGVEEIWw4dVU4LB2cVRQFVWFMInfkaXQZiHxJTQVtWSx5BElgHbAIbYl9oUmoXSR1UB2UCFVBfXVBYHEoaXwZgMxBWXF0%3D; unpl=JF8EAJxnNSttChtUARJVHxVDSlsDW1oKSUcHaWYCVwgIGAQNTgUdQRN7XlVdWBRLFh9sYhRUXVNLUg4fCisSEXteVV1YCE0TAGlnNWRtW0tkBCsCHREYTV9UXF4BThECb2UAXFtRT1YAGDIaIhBDWWRubQ1LFgJoYgNQXV97VTUaMlB8EQZdUl1VDkkXAWxuAFJcWElRDR0LHxAVSG1Vbl4; shshshfpb=BApXSyl0YvvdAaGviApb4TttcHjjPgT4IBmsyFB4X9xJ1MrWgBIG2; appCode=ms0ca95114; smb_track=5AD55C903ED34D1880D1EC23007900B7; __jdc=238391251; wxa_level=1; retina=1; cid=9; jxsid=17297566830270682036; webp=1; __jda=238391251.17297313284701349785342.1729731328.1729751224.1729756683.5; mba_muid=17297313284701349785342; cd_eid=jdd03L7MO2Q3WXZXK544B5FZLJIJO43YTI7KKW2BIHEDKW46WTKXYBVQNNICVPRMJJ4DBVZCSSAU2DTNKEQR7RC5K3QA4FYAAAAMSXU2Q3EQAAAAACN2AIRW7FI7IFAX; visitkey=6896773856317278840; 3AB9D23F7A4B3CSS=jdd03L7MO2Q3WXZXK544B5FZLJIJO43YTI7KKW2BIHEDKW46WTKXYBVQNNICVPRMJJ4DBVZCSSAU2DTNKEQR7RC5K3QA4FYAAAAMSXWEFXAYAAAAADI2DKDFNC4TC7UX; downloadAppPlugIn_downCloseDate=1729756689701_1800000; autoOpenApp_downCloseDate_jd_homePage=1729756695440_1; wqmnx1=MDEyNjM4Ny9tNzdvLm8wNiBiLk0gQzMgNWQuMzdhNVdEVSk%3D; __jdb=238391251.3.17297313284701349785342|5.1729756683; mba_sid=17297566831057743191346050624.3; __jd_ref_cls=MSearch_DarkLines",
//       origin: "https://m.jd.com",
//       priority: "u=1, i",
//       referer: "https://m.jd.com/",
//       "sec-ch-ua":
//         '"Chromium";v="130", "Microsoft Edge";v="130", "Not?A_Brand";v="99"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "Windows",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       "user-agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
//       "x-referer-page": "https://m.jd.com/",
//       "x-rp-client": "h5_1.0.0",
//     },
//   });
//   const data = await resp.json();
//   console.log(data);
//   data.feeds.content.forEach((item) => {
//     bodymain.innerHTML += `
//         <div class="body-main-item">
//           <img
//             src="https://img14.360buyimg.com/babel/s460x460_jfs/t1/137133/21/29656/43616/631fef61E8ccccb33/ae537060df877b20.jpg.avif"
//             alt=""
//           />
//           <div class="title">
//             施乐7835/7855/7970/3375/5575/7785/3370/5570/
//             原装拆机碳粉墨盒原装分装粉四色一套
//           </div>
//           <div class="money">700$</div>
//         </div>
//           `;
//   });
// };
// getData(url);

insertData = function (k) {
  while (k--) {
    bodymain.innerHTML += `
        <div class="body-main-item">
        <a href="">
        <img
            src="https://img14.360buyimg.com/babel/s460x460_jfs/t1/137133/21/29656/43616/631fef61E8ccccb33/ae537060df877b20.jpg.avif"
            alt=""
          />
          <div class="title">
            施乐7835/7855/7970/33 75/5575/7785/3370/5570/
            原装拆机碳粉墨盒原装分装粉四色一套
          </div>
          <div class="money">700$</div>
        </a>

        </div>
          `;
  }
};

insertData(12);
