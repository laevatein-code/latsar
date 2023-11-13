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
    for(const item of data){
      tahun.push(item['Tahun']);
      penduduk.push(item['Jumlah Penduduk']);
    }
    
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
  let uhh = [];
  let hls = [];
  let ipm = [];
  for(const item of data){
    tahun.push(item['Tahun']);
    gR.push(item['Gini Ratio']);
    uhh.push(item['UHH']);
    hls.push(item['HLS']);
    ipm.push(item['IPM']);
  }
  
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
          grid: {
            display: false
          }
        },
        y: {
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
          grid: {
            display: false
          }
        },
        y: {
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
          grid: {
            display: false
          }
        },
        y: {
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
          grid: {
            display: false
          }
        },
        y: {
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
  for(const item of data){
    tahun.push(item['Tahun']);
    kepadatanPenduduk.push(item['Kepadatan Penduduk']);
  }
  
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
const cPdrb = document.getElementById("chartPdrb");


fetch(`${url_pdrb}`)
  .then(response => response.json())
  .then(({data})=> {
    let tahun = [];
    let pdrb = [];
    for(const item of data){
      tahun.push(item['Tahun']);
      pdrb.push(item['PDRB']);
    }
    
    var mode = 'index'
    var intersect = true

    new Chart(cPdrb, {
      type: 'line',
      data: {
        labels: tahun,
        datasets: [{
          label: 'PDRB Kabupaten Teluk Wondama (Juta Rupiah)',
          data: pdrb,
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
  for(const item of data){
    tahun.push(item['Tahun']);
    tpak.push(item['TPAK']);
    tpt.push(item["TPT"]);
  }
  
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