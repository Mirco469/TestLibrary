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
  configuration = {
    "headers": [
      {
        "id": "id",
        "displayName": "ID",
        "width": 50
      },
      {
        "id": "status",
        "displayName": "Stato",
        "width": 110
      },
      {
        "id": "priority",
        "displayName": "Priorità"
      },
      {
        "id": "customer",
        "displayName": "Cliente"
      },
      {
        "id": "impianto",
        "displayName": "Impianto"
      }
    ],
    "rowOptions": [
      {
        id: 1,
        hideInMore: false,
        disabled: false
      }
    ]
  }

  data = [
    {
      "id": "0",
      "customer": "Paul Simon",
      "impianto": "LOCALE",
      "priority": "Low",
      "status": "Pending"
    },
    {
      "id": "1",
      "customer": "Paul Simon",
      "impianto": "Barriera articolata contrapposta - parcheggio SUD - esterna DX uscita, con qualche riga di testo in più per mostrare come funziona quando c'è testo in più",
      "priority": "MYOB",
      "status": "Pending"
    },
    {
      "id": "2",
      "customer": "Art Garfunkel",
      "impianto": "DONE",
      "priority": "---",
      "status": "Closed"
    },
    {
      "id": "3",
      "customer": "Paul Simon",
      "impianto": "Barriera articolata contrapposta - parcheggio SUD - esterna DX uscita",
      "priority": "High",
      "status": "Shipping"
    }
  ]

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
  modelCheckbox;

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
  modelMulti = [];

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
    "id": 3,
    "label": "test3",
    "disabled": true
  };

  // INPUT DATE
  modelDate = new Date();

  // INPUT NUMNER
  modelNumber = 2;

  // INPUT TIME
  modelTime = "";

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

  listButtons: [
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

}
