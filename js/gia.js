function gia() {
  var start = document.getElementById("go").value.toString();
  var end = document.getElementById("to").value.toString();
  var p = document.getElementById("plane").value.toString();
  var lv = document.getElementById("level").value.toString();
  var adu = document.getElementById("n-a").value;
  var chile = document.getElementById("n-c").value;
  var baby = document.getElementById("n-b").value;
  var nb = Number(adu) + Number(chile) + Number(baby);
  start = start + end + p;
  end = 0;
  switch (start) {
    case "460":
      end = 1588000;
      break;
    case "461":
      end = 1327000;
      break;
    case "462":
      end = 1763000;
      break;
    case "420":
      end = 1156000;
      break;
    case "421":
      end = 1039900;
      break;
    case "422":
      end = 1455000;
      break;
    case "410":
      end = 1622000;
      break;
    case "411":
      end = 1814000;
      break;
    case "412":
      end = 2102000;
      break;
    case "450":
      end = 763000;
      break;
    case "451":
      end = 861000;
      break;
    case "452":
      end = 1210000;
      break;
    case "640":
      end = 1681800;
      break;
    case "641":
      end = 1754000;
      break;
    case "642":
      end = 1927000;
      break;
    case "620":
      end = 1458000;
      break;
    case "621":
      end = 1512000;
      break;
    case "622":
      end = 1763000;
      break;
    case "630":
      end = 1479800;
      break;
    case "631":
      end = 1582000;
      break;
    case "632":
      end = 1576000;
      break;
    case "140":
      end = 1519000;
      break;
    case "141":
      end = 1749000;
      break;
    case "142":
      end = 1823000;
      break;
    case "120":
      end = 1658000;
      break;
    case "121":
      end = 1525000;
      break;
    case "122":
      end = 1857000;
      break;
    case "130":
      end = 1369000;
      break;
    case "131":
      end = 1571000;
      break;
    case "132":
      end = 1684000;
      break;
    case "510":
      end = 1926000;
      break;
    case "511":
      end = 2154000;
      break;
    case "512":
      end = 2382000;
      break;
    case "520":
      end = 1286000;
      break;
    case "521":
      end = 1472000;
      break;
    case "522":
      end = 1552000;
      break;
    case "560":
      end = 2251000;
      break;
    case "561":
      end = 2411000;
      break;
    case "562":
      end = 2752000;
      break;
    case "530":
      end = 1354000;
      break;
    case "531":
      end = 1541000;
      break;
    case "532":
      end = 1629000;
      break;
    default:
      end = 0;
      break;
  }
  if(end!=0)
  switch (lv) {
    case "0":
      break;
    case "1":
      switch (p) {
        case "0":
          end = end + 600000;
          break;
        case "1":
          end = end + 850000;
          break;
        case "2":
          end = end + 900000;
          break;
      }
      break;
    case "2":
      switch (p) {
        case "0":
          end = end + 700000;
          break;
        case "1":
          end = end + 925000;
          break;
        case "2":
          end = end + 1130000;
          break;
      }
      break;
    case "3":
      switch (p) {
        case "0":
          end = end + 2200000;
          break;
        case "1":
          end = end + 2700000;
          break;
        case "2":
          end = end + 3125000;
          break;
      }
      break;
  }
  end = end * nb;
  var money = end.toString();
  for (var i = money.length - 3; i > 0; i = i - 3)
    money = money.slice(0, i) + "." + money.slice(i)
  return money;
}
function draw() {
  var x = document.getElementById("piece").innerHTML;
  y = gia()
  if (y != "0")
    x = "Giá vé của quý khách là: " + y;
  else
    x = "Hiện tại không có chuyến bay dành cho quý khách"
  document.getElementById("piece").innerHTML = x;
}
