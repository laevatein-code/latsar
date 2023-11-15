const url_data = "https://script.google.com/macros/s/AKfycbx-H6pS-D9Rqao99P3djY_3RLpOMZj42AT3yGZtwyJZrO49KwjGzVm9TE8CGn2JAvnykA/exec";

fetch(`${url_data}`)
  .then(response => response.json())
  .then(({data})=> {
    let tahunP = [];
    let penduduk = [];
    let tahunK = [];
    let kPenduduk = [];
    let lWilayah = [];
    let tahunGR = [];
    let gR = [];
    let tahunUHH = [];
    let uHH = [];
    let tahunHLS = [];
    let hLS = [];
    let tahunIPM = [];
    let iPM = [];

    for(const item of data){
        tahunP.push(item['Tahun_P']);
        penduduk.push(item['Jumlah Penduduk']);
        tahunK.push(item['Tahun_K']);
        kPenduduk.push(item['Kepadatan Penduduk']);
        lWilayah.push(item['Luas Wilayah']);
        tahunGR.push(item['Tahun_GR']);
        gR.push(item['Gini Ratio']);
        tahunUHH.push(item['Tahun_UHH']);
        uHH.push(item['UHH']);
        tahunHLS.push(item['Tahun_HLS']);
        hLS.push(item['HLS']);
        tahunIPM.push(item['Tahun_IPM']);
        iPM.push(item['IPM']);
    }

    function makeData(keyT, tahun, keyD, data){
        const keyTahun = document.getElementById(keyT);

        const strong = document.createElement("strong");
        strong.innerText = data;

        keyTahun.appendChild(strong);

        const keyData = document.getElementById(keyD);
        keyData.setAttribute("class", "small-box-footer");
        keyData.innerText = tahun;
    }

    makeData("jP","Jumlah Penduduk ("+tahunP+")","jPT",penduduk + " Jiwa");
    makeData("kPenduduk","Kepadatan Penduduk ("+tahunK+")","kTahun",kPenduduk+ " Jiwa/km persegi");
    makeData("giniR", "Gini Ratio ("+tahunGR+")","giniT", gR);
    makeData("uHHD", "Usia Harapan Hidup ("+tahunUHH+")","uHHT", uHH + " Tahun");
    makeData("hLSD", "Harapan Lama Sekolah ("+tahunHLS+")","hLST", hLS + " Tahun");
    makeData("iPMD", "Indeks Pembangunan Manusia ("+tahunIPM+")","iPMT", iPM);
  })