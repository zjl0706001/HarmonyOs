let str = `{title:古韵豫园体验之旅,price:2988元双人,packageContent:{hotelStay:1晚豫园附近五星级酒店住宿,sightseeing:豫园景区门票2张,breakfast:次日双人早餐,activity:参与每日限定古装游园活动,guideService:专业导游讲解服务}}`;

const jsonObject = JSON.parse(
  str
    .replace(/(\w+)(:)/g, '"$1"$2')
    .replace(/(:\s*)([^,{}\[]+)(?=\s*[,}\]])/g, '$1"$2"'),
);
console.log(jsonObject);
