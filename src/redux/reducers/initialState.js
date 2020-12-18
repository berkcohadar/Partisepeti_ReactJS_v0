export default {
    currentCategory : {},
    categories:[],
    products:[],
    menuItems : [
      {tabId:1,title:'Yılbaşı',id:'1',slug:'yilbasi',url:'/collections/ylbas',submenus:
        [
          {title:'Yılbaşı Ağacı',id:'2',slug:'yilbasi-agaci',url:'#',submenus:[
            {title:'Ağaçlar',id:'3',slug:'yilbasi-agaclar',url:'/collections/ylbas'},
            {title:'Ağaç Süsleri',id:'4',slug:'yilbasi-agac-susleri',url:'#'},
            ]},
          {title:'Eğlence',id:'5',slug:'eglence',url:'#',submenus:[
            {title:'Kostümler',id:'6',slug:'yilbasi-eglence-kostumler',url:'#'},
            {title:'Şapkalar',id:'7',slug:'yilbasi-eglence-sapkalar',url:'#'},
            {title:'Gözlükler',id:'8',slug:'yilbasi-eglence-gozlukler',url:'#'},
            ]},
          {title:'Dekorasyon',id:'9',slug:'yilbasi-dekorasyon',url:'yilbasi-dekorasyon',submenus:[
            {title:'Led Işıklar',id:'10',slug:'yilbasi-dekorasyon-led-isiklar',url:'#'},
            {title:'Süsler',id:'17',slug:'yilbasi-dekorasyon-susler',url:'#'},
            {title:'Kapı Süsleri',id:'18',slug:'yilbasi-dekorasyon-kapi',url:'#'},
            ]},
          
        ]
      },
      {tabId:2,title:'Yeniyıl',id:'1',slug:'erkek',url:'#',submenus:[
        {title:'Yılbaşı Ağacı',id:'2',slug:'yilbasi-agaci',url:'#',submenus:[
          {title:'Ağaçlar',id:'3',slug:'yilbasi-agaclar',url:'#'},
          {title:'Ağaç Süsleri',id:'4',slug:'yilbasi-agac-susleri',url:'#'},
        ]}
      ]},
      {tabId:3,title:'Kız',id:'1',slug:'kiz',url:'#',submenus:null},
      {tabId:4,title:'Parti',id:'1',slug:'parti',url:'#',submenus:null},
      {tabId:5,title:'Yetişkin',id:'1',slug:'yetiskin',url:'#',submenus:null},
      {tabId:6,title:'Kek & Kurabiye',id:'1',slug:'kek-kurabiye',url:'#',submenus:null},
    ],
    cart:[]
}