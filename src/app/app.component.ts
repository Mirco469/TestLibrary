import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  model;

  // ACTION PAGER
  items = [
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    },
    {
      "id": 1,
      "label": "elemento"
    }
  ];

  // TABLE
  configuration: any = {
    "headers": [],
    "rowOptions": []
  };

  data: any = [];

  columnsToShow: any = [];

  // SEARCH
  modelSearch;

  // BREADCRUMB
  breadcrumbs = [
    {
      "id": 4,
      "label": "Breadcrumb 1"
    },
    {
      "id": 2,
      "label": "Breadcrumb 2"
    },
    {
      "id": 1,
      "label": "Breadcrumb 3"
    },
    {
      "id": 3,
      "label": "Breadcrumb 4"
    }
  ]

  // CHECKBOX
  modelCheckbox = {checked: false, indeterminate: true};

  // DROPDOWN-MULTI
  options = [
    {
      "id": 0,
      "label": "Opzione 1"
    },
    {
      "id": 1,
      "label": "Opzione 2"
    },
    {
      "id": 2,
      "label": "Opzione 3"
    },
    {
      "id": 3,
      "label": "Opzione 4"
    },
    {
      "id": 4,
      "label": "Opzione 5"
    },
    {
      "id": 5,
      "label": "Opzione 6"
    },
    {
      "id": 6,
      "label": "Opzione 7"
    },
    {
      "id": 7,
      "label": "Opzione 8"
    },
    {
      "id": 8,
      "label": "Opzione 9"
    },
    {
      "id": 9,
      "label": "Opzione 10"
    },
    {
      "id": 10,
      "label": "Opzione 11"
    }
  ]
  modelMulti = [
    {
      "id": 9,
      "label": "Opzione 10"
    }
  ];

  // DROPDOWN
  itemsDropdown = [
    {
      "id": 1,
      "label": "test1",
      "disabled": false
    },
    {
      "id": 2,
      "label": "test2",
      "disabled": false
    },
    {
      "id": 3,
      "label": "test3",
      "disabled": true
    }
  ];
  selectedItemInput;
  modelDropdown = {
    "id": 2,
    "label": "test2"
  };

  // INPUT DATE
  modelDate = new Date(2018, 11, 24, 10, 33, 30, 0);

  // INPUT NUMBER
  modelNumber = 5;

  // INPUT TIME
  modelTime = "00:01";

  // RADIO BUTTON
  modelRadio;

  // STEPPER
  steps = [
    {
      "id": 4,
      "label": "primo"
    },
    {
      "id": 2,
      "label": "terzo"
    },
    {
      "id": 1,
      "label": "Preventivo sostituzione"
    },
    {
      "id": 3,
      "label": "Materiali sostituiti"
    },
    {
      "id": 5,
      "label": "Stato impianto"
    }
  ];

  // SWITCH
  modelSwitch;

  // TEXTAREA
  modelTextarea;

  // TEXTFIELD
  modelTextfield;

  // NAVIGATION
  currentCategory = {
    "id": "1",
    "icon": "bu-access-automation",
    "label": "Access automation"
  }

  categories = [
    {
      "id": "0",
      "icon": "bu-access-automation",
      "label": "Access automation"
    },
    {
      "id": "1",
      "icon": "value-dollaro",
      "label": "Moneymaker"
    }
  ];

  sections = []

  activeNavItem = {
    "id": "clienti"
  }

  stampa(data) {
    console.log(data);
  }

  ngOnInit() {
    this.order(null);

    this.sections = [
      {
        "title": "Anagrafiche",
        "items": [
          {
            "id": "clienti",
            "icon": "menu-clienti",
            "label": "Clienti"
          },
          {
            "id": "sedi",
            "icon": "menu-sedi",
            "label": "Sedi"
          },
          {
            "id": "impianti",
            "icon": "menu-installations",
            "label": "Impianti"
          },
          {
            "id": "fornitori",
            "icon": "menu-fornitori",
            "label": "Fornitori"
          }
        ]
      },
      {
        "title": "Ticket",
        "items": [
          {
            "id": "ticket",
            "icon": "menu-ticket",
            "label": "Ticket"
          },
          {
            "id": "calendario_ticket",
            "icon": "general-calendar",
            "label": "Calendario Ticket"
          }
        ]
      }
    ]
    this.activeNavItem = {
      "id": "sedi"
    }
  }

  extraOptionsRowCard = [
    {
      id: 'option@1',
      icon: 'action-close',
      disabled: true
    },
    {
      id: 'option@2',
      icon: 'action-cog',
      disabled: false
    },
    {
      id: 'option@3',
      icon: 'action-edit',
      disabled: false
    }
  ];

  listButtons = [
    {
      id: '1',
      label: 'Ghost',
      disabled: false,
      type: 'ghost',
      icon: ''
    },
    {
      id: '2',
      label: 'Primary button',
      disabled: true,
      type: 'primary',
      icon: ''
    }
  ];

  order($event) {
    setTimeout(
      () => {
        this.configuration = {
          "headers": [
            {
              "id": "707",
              "displayName": "Customer code"
            },
            {
              "id": "708",
              "displayName": "Customer name"
            },
            {
              "id": "712",
              "displayName": "Address"
            },
            {
              "id": "713",
              "displayName": "City"
            },
            {
              "id": "714",
              "displayName": "ZIP code"
            },
            {
              "id": "2259",
              "displayName": "Country"
            },
            {
              "id": "2260",
              "displayName": "Province"
            }
          ],
          "rowOptions": []
        }

        this.data = [
          {
            "707": "0000074369",
            "708": "RS MOTORS- Garage PORSCHE",
            "712": "KORTRIJKSTRAAT 155a",
            "713": "INGELMUNSTER",
            "714": "8770",
            "2259": "Belgium",
            "2260": "",
            "idDetail": "978878",
            "id": "978878"
          },
          {
            "707": "0000074368",
            "708": "TEPPER AUFZUGE GMB",
            "712": "HAFENGRENZWEG 11-19",
            "713": "MUNSTER",
            "714": "48155",
            "2259": "Germany",
            "2260": "",
            "idDetail": "978772",
            "id": "978772"
          },
          {
            "707": "0000074367",
            "708": "BODEM Elektro- Elektronik GmbH Wolfgang Bodem",
            "712": "Zetschdorf 17",
            "713": "Gutenborn",
            "714": "06712",
            "2259": "Germany",
            "2260": "15 - Saxen-Anhalt",
            "idDetail": "978771",
            "id": "978771"
          },
          {
            "707": "0000074365",
            "708": "GLOBAL ESTATE GROUP",
            "712": "KAPELLESTRAAT 117",
            "713": "OOSTKAMP",
            "714": "8020",
            "2259": "Belgium",
            "2260": "",
            "idDetail": "978770",
            "id": "978770"
          },
          {
            "707": "0000074366",
            "708": "WINLOCK SYSTEMS BV",
            "712": "WEVERSLAAN 32",
            "713": "LOKEREN",
            "714": "9160",
            "2259": "Belgium",
            "2260": "",
            "idDetail": "978769",
            "id": "978769"
          },
          {
            "707": "0000074364",
            "708": "OTRA SOLUTIONS BV",
            "712": "DORPSSTRAAT 122",
            "713": "KORTENAKEN",
            "714": "3470",
            "2259": "Belgium",
            "2260": "",
            "idDetail": "978768",
            "id": "978768"
          },
          {
            "707": "0000074277",
            "708": "LEZO INSTALACIONES Y SVOS",
            "712": "C/ SALVADIOS 34. PTA 3.",
            "713": "COLMENAR VIEJO",
            "714": "28770",
            "2259": "Spain",
            "2260": "28 - Madrid",
            "idDetail": "978767",
            "id": "978767"
          },
          {
            "707": "0000074331",
            "708": "WORK & MANAGEMENT S.R.L.",
            "712": "VIALE SCALA GRECA 406",
            "713": "SIRACUSA",
            "714": "96100",
            "2259": "Italy",
            "2260": "SR - Siracusa",
            "idDetail": "978716",
            "id": "978716"
          },
          {
            "707": "0000074326",
            "708": "TOP CHASSIS BELGIUM",
            "712": "CHAUSSE DE TUBIZE 118",
            "713": "HENNUYRE",
            "714": "7090",
            "2259": "Belgium",
            "2260": "",
            "idDetail": "978715",
            "id": "978715"
          },
          {
            "707": "0000074308",
            "708": "Plegge + Bauer Baubeschläge GmbH",
            "712": "Hertelsbrunnenring 19",
            "713": "Kaiserslautern",
            "714": "67657",
            "2259": "Germany",
            "2260": "07 - Rhineland Palatinate",
            "idDetail": "978714",
            "id": "978714"
          }
        ]
        this.columnsToShow = this.configuration.headers.map( x => x.id );

      }, 1000
    )
  }

}
