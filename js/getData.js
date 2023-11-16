const url = "https://script.google.com/macros/s/AKfycbygrUMUgjNFC_FBbYGul3wCrssutxPTQckqYhht7BNyk7n6kwpSmNAhQcXEjjvFMwa2/exec";
const gr = "https://script.google.com/macros/s/AKfycbxyMCOef0XseI4BjPeNygHqUwH_Vf5Phq-pgbNCKsixJiUSfE2lf0ht12gsL-hbR1aOMA/exec";
const url_kepadatan_penduduk = "https://script.google.com/macros/s/AKfycbzg5hpWQRD9ywHvwIo8vo46mSqNFDMr172qNMjfrDCiFBXYPQrMhSMunii871815-KC/exec";

const cPenduduk = document.getElementById("myChart");
const cGr = document.getElementById("chartGr");
const cPadat = document.getElementById("chartKepadatanPenduduk");
const cUHH = document.getElementById("chartUHH");
const cHLS = document.getElementById("chartHLS");
const cIPM = document.getElementById("chartIPM");

// Get Jumlah Penduduk
fetch(`${url}`)
  .then(response => response.json())
  .then(({data})=> {
    let tahun = [];
    let penduduk = [];
    let sumber = [];
    let interpretasi = [];
    let ket = [];
    for(const item of data){
      tahun.push(item['Tahun']);
      penduduk.push(item['Jumlah Penduduk']);
      sumber.push(item['Sumber']);
      interpretasi.push(item['Interpretasi Jumlah Penduduk']);
      ket.push(item['Keterangan']);
    }

    if(sumber[0] != null){
      const sumberdata = document.getElementById("sumberPenduduk");
      var sumberPenduduk = document.createElement("p");
      sumberPenduduk.setAttribute("class","card-subtitle text-start");
      sumberPenduduk.innerText = "Sumber: "+sumber[0];
      sumberdata.appendChild(sumberPenduduk);
    }

    if(interpretasi[0] != null){
      const inter = document.getElementById("interPenduduk");
      var interPenduduk = document.createElement("p");
      interPenduduk.setAttribute("class","card-text text-start text-muted mt-2 mb-2");
      interPenduduk.innerText = interpretasi[0];
      inter.appendChild(interPenduduk);
    }
    
    if(ket[0] != null){
      const keterang = document.getElementById("ketPenduduk");
      var ketPenduduk = document.createElement("p");
      ketPenduduk.setAttribute("class","card-text text-start text-muted mt-2 mb-2");
      ketPenduduk.innerText = "Catatan: "+ket[0];
      keterang.appendChild(ketPenduduk);
    }

    const table = document.getElementById("tablePenduduk");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tbody.setAttribute("class","text-start");
    const tr = document.createElement("tr");
    const thTahun = document.createElement("th");
    thTahun.setAttribute("class","text-center");
    const thPenduduk = document.createElement("th");
    thPenduduk.setAttribute("class","text-center");
    thTahun.innerText = "Tahun";
    thPenduduk.innerText = "Jumlah Penduduk (Jiwa)";
    tr.appendChild(thTahun);
    tr.appendChild(thPenduduk);
    thead.appendChild(tr);
    table.appendChild(thead);

    for(var i=0;i<tahun.length;i++){
      var tdTahun = document.createElement("td");
      var tdPenduduk = document.createElement("td");
      var trBody = document.createElement("tr");
      tdTahun.innerText = tahun[i];
      tdTahun.setAttribute("class","text-center");
      tdPenduduk.innerText = penduduk[i];
      tdPenduduk.setAttribute("class","text-center");
      trBody.appendChild(tdTahun);
      trBody.appendChild(tdPenduduk);
      tbody.appendChild(trBody);
      table.appendChild(tbody);
    }

    $(document).ready(function() {
      $('#tablePenduduk').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );

    var mode = 'index'
    var intersect = true

    new Chart(cPenduduk, {
      type: 'line',
      data: {
        labels: tahun,
        datasets: [{
          label: 'Jumlah Penduduk Teluk Wondama',
          data: penduduk,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          pointBorderColor: '#007bff',
          pointBackgroundColor: '#007bff',
          fill: false
        }]
      },
      options: {
        interaction: {
          intersect: false
        },
        maintainAspectRatio: false,
        tooltips: {
          mode: mode,
          intersect: intersect
        },
        hover: {
          mode: mode,
          intersect: intersect
        },
        plugins: {
          legend: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tahun'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'Jumlah Penduduk (Jiwa)'
            },
            grid: {
              display: false
            }
          }
        }
      },
    });

    

  })


// Get Gini Ratio, UHH, HLS, IPM
fetch(`${gr}`)
.then(response => response.json())
.then(({data})=> {
  let tahun = [];
  let gR = [];
  let interGr = [];
  let interUhh = [];
  let interHls = [];
  let interIpm = [];
  let sumber = [];
  let uhh = [];
  let hls = [];
  let ipm = [];
  for(const item of data){
    tahun.push(item['Tahun']);
    gR.push(item['Gini Ratio']);
    uhh.push(item['UHH']);
    hls.push(item['HLS']);
    ipm.push(item['IPM']);
    interGr.push(item['Interpretasi GR']);
    interUhh.push(item['Interpretasi UHH']);
    interHls.push(item['Interpretasi HLS']);
    interIpm.push(item['Interpretasi IPM']);
    sumber.push(item['Sumber']);
  }

  if(sumber[0] != null){
    const sumberdata = document.getElementById("sumberGr");
    var sumberPenduduk = document.createElement("p");
    sumberPenduduk.setAttribute("class","card-subtitle text-start");
    sumberPenduduk.innerText = "Sumber: "+sumber[0];
    sumberdata.appendChild(sumberPenduduk);

    var sumberPenduduk2 = document.createElement("p");
    sumberPenduduk2.setAttribute("class","card-subtitle text-start");
    sumberPenduduk2.innerText = "Sumber: "+sumber[0];

    var sumberPenduduk3 = document.createElement("p");
    sumberPenduduk3.setAttribute("class","card-subtitle text-start");
    sumberPenduduk3.innerText = "Sumber: "+sumber[0];

    var sumberPenduduk4 = document.createElement("p");
    sumberPenduduk4.setAttribute("class","card-subtitle text-start");
    sumberPenduduk4.innerText = "Sumber: "+sumber[0];

    const sumberdata2 = document.getElementById("sumberUhh");
    const sumberdata3 = document.getElementById("sumberHls");
    const sumberdata4 = document.getElementById("sumberIpm");

    sumberdata2.appendChild(sumberPenduduk2);
    sumberdata3.appendChild(sumberPenduduk3);
    sumberdata4.appendChild(sumberPenduduk4);
  }

  function makeInter(interpre, key){
    const inter = document.getElementById(key);
    var interPenduduk = document.createElement("p");
    interPenduduk.setAttribute("class","card-text text-start text-muted mt-2 mb-2");
    interPenduduk.innerText = interpre[0];
    inter.appendChild(interPenduduk);
  }

  if(interGr[0] != null){
    makeInter(interGr, "interGr");
  }

  if(interUhh[0] != null){
    makeInter(interUhh, "interUhh");
  }

  if(interHls[0] != null){
    makeInter(interHls, "interHls");
  }

  if(interIpm[0] != null){
    makeInter(interIpm, "interIpm");
  }

    const table = document.getElementById("tableGR");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tbody.setAttribute("class","text-start");
    const tr = document.createElement("tr");
    const thTahun = document.createElement("th");
    thTahun.setAttribute("class","text-center");
    const thPenduduk = document.createElement("th");
    thPenduduk.setAttribute("class","text-center");
    thTahun.innerText = "Tahun";
    thPenduduk.innerText = "Gini Ratio";
    tr.appendChild(thTahun);
    tr.appendChild(thPenduduk);
    thead.appendChild(tr);
    table.appendChild(thead);

    for(var i=0;i<tahun.length;i++){
      var tdTahun = document.createElement("td");
      var tdPenduduk = document.createElement("td");
      var trBody = document.createElement("tr");
      tdTahun.innerText = tahun[i];
      tdTahun.setAttribute("class","text-center");
      tdPenduduk.innerText = gR[i];
      tdPenduduk.setAttribute("class","text-center");
      trBody.appendChild(tdTahun);
      trBody.appendChild(tdPenduduk);
      tbody.appendChild(trBody);
      table.appendChild(tbody);
    }

    $(document).ready(function() {
      $('#tableGR').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );

    const table2 = document.getElementById("tableUHH");
    const thead2 = document.createElement("thead");
    const tbody2 = document.createElement("tbody");
    tbody2.setAttribute("class","text-start");
    const tr2 = document.createElement("tr");
    const thTahun2 = document.createElement("th");
    thTahun2.setAttribute("class","text-center");
    const thPenduduk2 = document.createElement("th");
    thPenduduk2.setAttribute("class","text-center");
    thTahun2.innerText = "Tahun";
    thPenduduk2.innerText = "Usia Harapan Hidup (Tahun)";
    tr2.appendChild(thTahun2);
    tr2.appendChild(thPenduduk2);
    thead2.appendChild(tr2);
    table2.appendChild(thead2);

    for(var i=0;i<tahun.length;i++){
      var tdTahun2 = document.createElement("td");
      var tdPenduduk2 = document.createElement("td");
      var trBody2 = document.createElement("tr");
      tdTahun2.innerText = tahun[i];
      tdTahun2.setAttribute("class","text-center");
      tdPenduduk2.innerText = uhh[i];
      tdPenduduk2.setAttribute("class","text-center");
      trBody2.appendChild(tdTahun2);
      trBody2.appendChild(tdPenduduk2);
      tbody2.appendChild(trBody2);
      table2.appendChild(tbody2);
    }

    $(document).ready(function() {
      $('#tableUHH').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );

    const table3 = document.getElementById("tableHLS");
    const thead3 = document.createElement("thead");
    const tbody3 = document.createElement("tbody");
    tbody3.setAttribute("class","text-start");
    const tr3 = document.createElement("tr");
    const thTahun3 = document.createElement("th");
    thTahun3.setAttribute("class","text-center");
    const thPenduduk3 = document.createElement("th");
    thPenduduk3.setAttribute("class","text-center");
    thTahun3.innerText = "Tahun";
    thPenduduk3.innerText = "Harapan Lama Sekolah (Tahun)";
    tr3.appendChild(thTahun3);
    tr3.appendChild(thPenduduk3);
    thead3.appendChild(tr3);
    table3.appendChild(thead3);

    for(var i=0;i<tahun.length;i++){
      var tdTahun3 = document.createElement("td");
      var tdPenduduk3 = document.createElement("td");
      var trBody3 = document.createElement("tr");
      tdTahun3.innerText = tahun[i];
      tdTahun3.setAttribute("class","text-center");
      tdPenduduk3.innerText = hls[i];
      tdPenduduk3.setAttribute("class","text-center");
      trBody3.appendChild(tdTahun3);
      trBody3.appendChild(tdPenduduk3);
      tbody3.appendChild(trBody3);
      table3.appendChild(tbody3);
    }

    $(document).ready(function() {
      $('#tableHLS').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );

    const table4 = document.getElementById("tableIPM");
    const thead4 = document.createElement("thead");
    const tbody4 = document.createElement("tbody");
    tbody4.setAttribute("class","text-start");
    const tr4 = document.createElement("tr");
    const thTahun4 = document.createElement("th");
    thTahun4.setAttribute("class","text-center");
    const thPenduduk4 = document.createElement("th");
    thPenduduk4.setAttribute("class","text-center");
    thTahun4.innerText = "Tahun";
    thPenduduk4.innerText = "Indeks Pembangunan Manusia";
    tr4.appendChild(thTahun4);
    tr4.appendChild(thPenduduk4);
    thead4.appendChild(tr4);
    table4.appendChild(thead4);

    for(var i=0;i<tahun.length;i++){
      var tdTahun4 = document.createElement("td");
      var tdPenduduk4 = document.createElement("td");
      var trBody4 = document.createElement("tr");
      tdTahun4.innerText = tahun[i];
      tdTahun4.setAttribute("class","text-center");
      tdPenduduk4.innerText = ipm[i];
      tdPenduduk4.setAttribute("class","text-center");
      trBody4.appendChild(tdTahun4);
      trBody4.appendChild(tdPenduduk4);
      tbody4.appendChild(trBody4);
      table4.appendChild(tbody4);
    }

    $(document).ready(function() {
      $('#tableIPM').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );

  var mode = 'index'
  var intersect = true

  // chart GR
  new Chart(cGr, {
    type: 'line',
    data: {
      labels: tahun,
      datasets: [{
        label: 'Gini Ratio',
        data: gR,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
      }]
    },
    options: {
      interaction: {
        intersect: false
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tahun'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'Gini Ratio'
          },
          grid: {
            display: false
          }
        }
      }
    },
  });

  // Chart UHH
  new Chart(cUHH, {
    type: 'bar',
    data: {
      labels: tahun,
      datasets: [{
        label: 'Usia Harapan Hidup (Tahun)',
        data: uhh,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
      }]
    },
    options: {
      interaction: {
        intersect: false
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tahun'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'UHH (Tahun)'
          },
          grid: {
            display: true
          }
        }
      }
    },
  });

  // chart hls
  new Chart(cHLS, {
    type: 'bar',
    data: {
      labels: tahun,
      datasets: [{
        label: 'Harapan Lama Sekolah (Tahun)',
        data: hls,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
      }]
    },
    options: {
      interaction: {
        intersect: false
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tahun'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'HLS (Tahun)'
          },
          grid: {
            display: true
          }
        }
      }
    },
  });

  // Chart IPM
  new Chart(cIPM, {
    type: 'line',
    data: {
      labels: tahun,
      datasets: [{
        label: 'IPM',
        data: ipm,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
      }]
    },
    options: {
      interaction: {
        intersect: false
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tahun'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'IPM'
          },
          grid: {
            display: false
          }
        }
      }
    },
  });
})

// Get Kepadatan Penduduk
fetch(`${url_kepadatan_penduduk}`)
.then(response => response.json())
.then(({data})=> {
  let tahun = [];
  let kepadatanPenduduk = [];
  let sumber = [];
  let interpretasi = [];
  for(const item of data){
    tahun.push(item['Tahun']);
    kepadatanPenduduk.push(item['Kepadatan Penduduk']);
    sumber.push(item['Sumber']);
    interpretasi.push(item['Interpretasi']);
  }

  if(sumber[0] != null){
    const sumberdata = document.getElementById("sumberPadat");
    var sumberPenduduk = document.createElement("p");
    sumberPenduduk.setAttribute("class","card-subtitle text-start");
    sumberPenduduk.innerText = "Sumber: "+sumber[0];
    sumberdata.appendChild(sumberPenduduk);
  }

  function makeInter(interpre, key){
    const inter = document.getElementById(key);
    var interPenduduk = document.createElement("p");
    interPenduduk.setAttribute("class","card-text text-start text-muted mt-2 mb-2");
    interPenduduk.innerText = interpre[0];
    inter.appendChild(interPenduduk);
  }

  if(interpretasi[0] != null){
    makeInter(interpretasi, "interPadat");
  }

  const table = document.getElementById("tablePadat");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  tbody.setAttribute("class","text-start");
  const tr = document.createElement("tr");
  const thTahun = document.createElement("th");
  thTahun.setAttribute("class","text-center");
  const thPenduduk = document.createElement("th");
  thPenduduk.setAttribute("class","text-center");
  thTahun.innerText = "Tahun";
  thPenduduk.innerText = "Kepadatan Penduduk (jiwa/kilometer persegi)";
  tr.appendChild(thTahun);
  tr.appendChild(thPenduduk);
  thead.appendChild(tr);
  table.appendChild(thead);

  for(var i=0;i<tahun.length;i++){
    var tdTahun = document.createElement("td");
    var tdPenduduk = document.createElement("td");
    var trBody = document.createElement("tr");
    tdTahun.innerText = tahun[i];
    tdTahun.setAttribute("class","text-center");
    tdPenduduk.innerText = kepadatanPenduduk[i];
    tdPenduduk.setAttribute("class","text-center");
    trBody.appendChild(tdTahun);
    trBody.appendChild(tdPenduduk);
    tbody.appendChild(trBody);
    table.appendChild(tbody);
  }

  $(document).ready(function() {
    $('#tablePadat').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
  } );
  
  var mode = 'index'
  var intersect = true

  new Chart(cPadat, {
    type: 'line',
    data: {
      labels: tahun,
      datasets: [{
        label: 'Kepadatan Penduduk',
        data: kepadatanPenduduk,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
      }]
    },
    options: {
      interaction: {
        intersect: false
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tahun'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'Kepadatan Penduduk (jiwa per km persegi)'
          },
          grid: {
            display: false
          }
        }
      }
    },
  });
})

// Get PDRB
const url_pdrb = "https://script.google.com/macros/s/AKfycbxfqq8ZkGM8JKmc7ov0FrF3e9cw_pQ9P167_BECpT7enGYusi1dz9RyPH4Q41ddN_1CQw/exec";
const cPdrbB = document.getElementById("chartPdrbB");
const cPdrbK = document.getElementById("chartPdrbK");


fetch(`${url_pdrb}`)
  .then(response => response.json())
  .then(({data})=> {
    let tahun = [];
    let pdrbB = [];
    let pdrbK = [];
    let sumber = [];
    let interB = [];
    let interK = [];
    for(const item of data){
      tahun.push(item['Tahun']);
      pdrbB.push(item['PDRB ADHB']);
      pdrbK.push(item['PDRB ADHK']);
      sumber.push(item['Sumber']);
      interB.push(item['Interpretasi ADHB']);
      interK.push(item['Interpretasi ADHK']);
    }

    if(sumber[0] != null){
      const sumberdata = document.getElementById("sumberAdhb");
      const sumberdata2 = document.getElementById("sumberAdhk");
      var sumberPenduduk = document.createElement("p");
      sumberPenduduk.setAttribute("class","card-subtitle text-start");
      sumberPenduduk.innerText = "Sumber: "+sumber[0];

      var sumberPenduduk2 = document.createElement("p");
      sumberPenduduk2.setAttribute("class","card-subtitle text-start");
      sumberPenduduk2.innerText = "Sumber: "+sumber[0];

      sumberdata.appendChild(sumberPenduduk);
      sumberdata2.appendChild(sumberPenduduk2);
    }

    function makeInter(interpre, key){
      const inter = document.getElementById(key);
      var interPenduduk = document.createElement("p");
      interPenduduk.setAttribute("class","card-text text-start text-muted mt-2 mb-2");
      interPenduduk.innerText = interpre[0];
      inter.appendChild(interPenduduk);
    }
  
    if(interB[0] != null){
      makeInter(interB, "interAdhb");
    }

    if(interK[0] != null){
      makeInter(interB, "interAdhk");
    }
    
    const table = document.getElementById("tableADHB");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tbody.setAttribute("class","text-start");
    const tr = document.createElement("tr");
    const thTahun = document.createElement("th");
    thTahun.setAttribute("class","text-center");
    const thPenduduk = document.createElement("th");
    thPenduduk.setAttribute("class","text-center");
    thTahun.innerText = "Tahun";
    thPenduduk.innerText = "PDRB ADHB (Juta Rupiah)";
    tr.appendChild(thTahun);
    tr.appendChild(thPenduduk);
    thead.appendChild(tr);
    table.appendChild(thead);

    for(var i=0;i<tahun.length;i++){
      var tdTahun = document.createElement("td");
      var tdPenduduk = document.createElement("td");
      var trBody = document.createElement("tr");
      tdTahun.innerText = tahun[i];
      tdTahun.setAttribute("class","text-center");
      tdPenduduk.innerText = new Intl.NumberFormat().format(pdrbB[i]);
      tdPenduduk.setAttribute("class","text-center");
      trBody.appendChild(tdTahun);
      trBody.appendChild(tdPenduduk);
      tbody.appendChild(trBody);
      table.appendChild(tbody);
    }

    const table2 = document.getElementById("tableADHK");
    const thead2 = document.createElement("thead");
    const tbody2 = document.createElement("tbody");
    tbody2.setAttribute("class","text-start");
    const tr2 = document.createElement("tr");
    const thTahun2 = document.createElement("th");
    thTahun2.setAttribute("class","text-center");
    const thPenduduk2 = document.createElement("th");
    thPenduduk2.setAttribute("class","text-center");
    thTahun2.innerText = "Tahun";
    thPenduduk2.innerText = "PDRB ADHB (Juta Rupiah)";
    tr2.appendChild(thTahun2);
    tr2.appendChild(thPenduduk2);
    thead2.appendChild(tr2);
    table2.appendChild(thead2);

    for(var i=0;i<tahun.length;i++){
      var tdTahun2 = document.createElement("td");
      var tdPenduduk2 = document.createElement("td");
      var trBody2 = document.createElement("tr");
      tdTahun2.innerText = tahun[i];
      tdTahun2.setAttribute("class","text-center");
      tdPenduduk2.innerText = new Intl.NumberFormat().format(pdrbK[i]);
      tdPenduduk2.setAttribute("class","text-center");
      trBody2.appendChild(tdTahun2);
      trBody2.appendChild(tdPenduduk2);
      tbody2.appendChild(trBody2);
      table2.appendChild(tbody2);
    }

    $(document).ready(function() {
      $('#tableADHB').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );
    $(document).ready(function() {
      $('#tableADHK').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );

    var mode = 'index'
    var intersect = true

    new Chart(cPdrbB, {
      type: 'line',
      data: {
        labels: tahun,
        datasets: [{
          label: 'PDRB ADHB Kabupaten Teluk Wondama (Juta Rupiah)',
          data: pdrbB,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          pointBorderColor: '#007bff',
          pointBackgroundColor: '#007bff',
          fill: false
        }]
      },
      options: {
        interaction: {
          intersect: false
        },
        maintainAspectRatio: false,
        tooltips: {
          mode: mode,
          intersect: intersect
        },
        hover: {
          mode: mode,
          intersect: intersect
        },
        plugins: {
          legend: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tahun'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'PDRB (Juta Rupiah)'
            },
            grid: {
              display: false
            }
          }
        }
      },
    });

    new Chart(cPdrbK, {
      type: 'line',
      data: {
        labels: tahun,
        datasets: [{
          label: 'PDRB ADHK Kabupaten Teluk Wondama (Juta Rupiah)',
          data: pdrbK,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          pointBorderColor: '#007bff',
          pointBackgroundColor: '#007bff',
          fill: false
        }]
      },
      options: {
        interaction: {
          intersect: false
        },
        maintainAspectRatio: false,
        tooltips: {
          mode: mode,
          intersect: intersect
        },
        hover: {
          mode: mode,
          intersect: intersect
        },
        plugins: {
          legend: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tahun'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'PDRB (Juta Rupiah)'
            },
            grid: {
              display: false
            }
          }
        }
      },
    });

  })

//Get Kondef

const url_kondef = "https://script.google.com/macros/s/AKfycbyFiawtgkoU7uu-Vh4dgKVoLvvUZfLRrGq42NR7NoeZEjjuSRPbAorFgHBUQlY8rfDQ/exec";

fetch(`${url_kondef}`)
  .then(response => response.json())
  .then(({data})=>{
    let konsep = [];
    let definisi = [];
    for(const item of data){
      konsep.push(item['Konsep']);
      definisi.push(item['Definisi']);
    }

    const table = document.getElementById("tabelKondef");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tbody.setAttribute("class","text-start");
    const tr = document.createElement("tr");
    const thKonsep = document.createElement("th");
    thKonsep.setAttribute("class","text-center");
    const thDefinisi = document.createElement("th");
    thDefinisi.setAttribute("class","text-center");
    thKonsep.innerText = "Konsep";
    thDefinisi.innerText = "Definisi";
    tr.appendChild(thKonsep);
    tr.appendChild(thDefinisi);
    thead.appendChild(tr);
    table.appendChild(thead);

    for(var i=0;i<konsep.length;i++){
      var tdKondef = document.createElement("td");
      var tdDefinisi = document.createElement("td");
      var trBody = document.createElement("tr");
      tdKondef.innerText = konsep[i];
      tdDefinisi.innerText = definisi[i];
      trBody.appendChild(tdKondef);
      trBody.appendChild(tdDefinisi);
      tbody.appendChild(trBody);
      table.appendChild(tbody);
    }

    new DataTable("#tabelKondef");
  })

// Get Naker
const url_naker = "https://script.google.com/macros/s/AKfycbza4rSY3DM5GPKJsLln9D_0RGGva-te7-iSswHkj1Z4-KjA7ySlR4-NPpoCwAA_3NFr/exec";
const cNaker = document.getElementById("chartNaker");

fetch(`${url_naker}`)
.then(response => response.json())
.then(({data})=> {
  let tahun = [];
  let tpak = [];
  let tpt = [];
  let sumber = [];
  let interpretasi = [];
  for(const item of data){
    tahun.push(item['Tahun']);
    tpak.push(item['TPAK']);
    tpt.push(item["TPT"]);
    sumber.push(item["Sumber"]);
    interpretasi.push(item["Interpretasi"])
  }
  
  if(sumber[0] != null){
    const sumberdata = document.getElementById("sumberTP");
    var sumberPenduduk = document.createElement("p");
    sumberPenduduk.setAttribute("class","card-subtitle text-start");
    sumberPenduduk.innerText = "Sumber: "+sumber[0];
    sumberdata.appendChild(sumberPenduduk);
  }

  function makeInter(interpre, key){
    const inter = document.getElementById(key);
    var interPenduduk = document.createElement("p");
    interPenduduk.setAttribute("class","card-text text-start text-muted mt-2 mb-2");
    interPenduduk.innerText = interpre[0];
    inter.appendChild(interPenduduk);
  }

  if(interpretasi[0] != null){
    makeInter(interpretasi, "interTP");
  }

    const table = document.getElementById("tableTP");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tbody.setAttribute("class","text-start");
    const tr = document.createElement("tr");
    const thTahun = document.createElement("th");
    thTahun.setAttribute("class","text-center");
    const thPenduduk = document.createElement("th");
    thPenduduk.setAttribute("class","text-center");
    const thTPT = document.createElement("th");
    thTPT.setAttribute("class","text-center");
    thTahun.innerText = "Tahun";
    thPenduduk.innerText = "TPAK";
    thTPT.innerText = "TPT";
    tr.appendChild(thTahun);
    tr.appendChild(thPenduduk);
    tr.appendChild(thTPT);
    thead.appendChild(tr);
    table.appendChild(thead);

    for(var i=0;i<tahun.length;i++){
      var tdTahun = document.createElement("td");
      var tdPenduduk = document.createElement("td");
      var tdTPT = document.createElement("td");
      var trBody = document.createElement("tr");
      tdTahun.innerText = tahun[i];
      tdTahun.setAttribute("class","text-center");
      tdPenduduk.innerText = tpak[i];
      tdPenduduk.setAttribute("class","text-center");
      tdTPT.innerText = tpt[i];
      tdTPT.setAttribute("class","text-center");
      trBody.appendChild(tdTahun);
      trBody.appendChild(tdPenduduk);
      trBody.appendChild(tdTPT);
      tbody.appendChild(trBody);
      table.appendChild(tbody);
    }

    $(document).ready(function() {
      $('#tableTP').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
    } );

  var mode = 'index'
  var intersect = true

  new Chart(cNaker, {
    type: 'line',
    data: {
      labels: tahun,
      datasets: [{
        label: 'Tingkat Pengangguran Terbuka (persen)',
        data: tpt,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
      },{
        label: 'Tingkat Partisipasi Angkatan Kerja (persen)',
        data: tpak,
        backgroundColor: 'transparent',
        borderColor: 'red',
        pointBorderColor: 'red',
        pointBackgroundColor: 'red',
        fill: false
      }]
    },
    options: {
      interaction: {
        intersect: false
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tahun'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'Persen(%)'
          },
          grid: {
            display: false
          }
        }
      }
    },
  });

})