import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  model;

  // ACTION PAGER
  pageCapacities = [
    {
      "id": 1,
      "label": "25 risultati",
      "value": "100"
    },
    {
      "id": 2,
      "label": "50 risultati",
      "value": "200"
    },
    {
      "id": 3,
      "label": "75 risultati",
      "value": "300"
    },
    {
      "id": 4,
      "label": "100 risultati",
      "value": "400"
    }
  ];

  defaultPageCapacity = {
    "id": 1,
    "label": "25 risultati",
    "value": "100"
  };

  defaultPage = {
    "id": 1,
    "label": "pag 1",
    "value": "pag1"
  };

  pages = [
    {
      "id": 1,
      "label": "pag 1",
      "value": "pag1"
    },
    {
      "id": 2,
      "label": "pag 2",
      "value": "pag2"
    },
    {
      "id": 3,
      "label": "pag 3",
      "value": "pag3"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },
    {
      "id": 4,
      "label": "pag 4",
      "value": "pag4"
    },

  ];

  // TABLE
  configuration: any = {
    "headers": [],
    "rowOptions": []
  };

  data: any = [];

  columnsToShow: any = [];

  // TABLE WITH OPTIONS
  configuration2: any = {
    "headers": [],
    "rowOptions": []
  };

  data2: any = [];

  columnsToShow2: any = [];

  loadData() {
    this.configuration2 = {
      "headers": [
          {
              "id": "3288",
              "displayName": "File Description"
          },
          {
              "id": "3291",
              "displayName": "Language"
          },
          {
              "id": "3298",
              "displayName": "Attachment Category"
          },
          {
              "id": "3296",
              "displayName": "Issue type"
          },
          {
              "id": "3292",
              "displayName": "Product Family"
          },
          {
              "id": "3293",
              "displayName": "Product Type"
          },
          {
              "id": "3300",
              "displayName": "Material Code"
          },
          {
              "id": "3301",
              "displayName": "Company"
          }
      ],
      "rowOptions": [
          {
              "id": "EXPORT",
              "icon": "general-document"
          },
          {
              "id": "DELETE",
              "icon": "action-trash"
          }
      ]
    }

    this.data2 = [
      {
          "3288": "CLONE - Verbale di collaudo e messa in servizio",
          "3291": "Italian",
          "3292": "CANCELLI MANUALI",
          "3293": "CANCELLO BATTENTE VEICOLARE",
          "3296": "New Installation",
          "3298": "Verbale di collaudo e messa in servizio",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909466",
          "name": "CLONE - Verbale di collaudo e messa in servizio"
      },
      {
          "3288": "Verbale di collaudo e messa in servizio",
          "3291": "Italian",
          "3292": "CANCELLI MANUALI",
          "3293": "CANCELLO BATTENTE VEICOLARE",
          "3296": "New Installation",
          "3298": "Verbale di collaudo e messa in servizio",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909465",
          "name": "Verbale di collaudo e messa in servizio"
      },
      {
          "3288": "Segnalazione cliente rischi",
          "3291": "Italian",
          "3292": "CANCELLI MANUALI",
          "3293": "CANCELLO BATTENTE VEICOLARE",
          "3296": "",
          "3298": "Segnalazione cliente rischi",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909464",
          "name": "Segnalazione cliente rischi"
      },
      {
          "3288": "Verbale di collaudo e messa in servizio",
          "3291": "Italian",
          "3292": "CONTROLLO ACCESSI PEDONALE",
          "3293": "TERMINALE",
          "3296": "New Installation",
          "3298": "Verbale di collaudo e messa in servizio",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909462",
          "name": "Verbale di collaudo e messa in servizio"
      },
      {
          "3288": "Verbale di collaudo e messa in servizio",
          "3291": "Italian",
          "3292": "CONTROLLO ACCESSI PEDONALE",
          "3293": "LETTORE",
          "3296": "New Installation",
          "3298": "Verbale di collaudo e messa in servizio",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909461",
          "name": "Verbale di collaudo e messa in servizio"
      },
      {
          "3288": "Segnalazione cliente rischi",
          "3291": "Italian",
          "3292": "CONTROLLO ACCESSI PEDONALE",
          "3293": "LETTORE",
          "3296": "",
          "3298": "Segnalazione cliente rischi",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909459",
          "name": "Segnalazione cliente rischi"
      },
      {
          "3288": "Segnalazione cliente rischi",
          "3291": "Italian",
          "3292": "CONTROLLO ACCESSI PEDONALE",
          "3293": "TERMINALE",
          "3296": "",
          "3298": "Segnalazione cliente rischi",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909458",
          "name": "Segnalazione cliente rischi"
      },
      {
          "3288": "Analisi rischi primo intervento",
          "3291": "Italian",
          "3292": "CONTROLLO ACCESSI PEDONALE",
          "3293": "TERMINALE",
          "3296": "",
          "3298": "Analisi rischi primo intervento",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909457",
          "name": "Analisi rischi primo intervento"
      },
      {
          "3288": "Analisi rischi primo intervento",
          "3291": "Italian",
          "3292": "CONTROLLO ACCESSI PEDONALE",
          "3293": "LETTORE",
          "3296": "",
          "3298": "Analisi rischi primo intervento",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909456",
          "name": "Analisi rischi primo intervento"
      },
      {
          "3288": "Verbale di collaudo e messa in servizio",
          "3291": "Italian",
          "3292": "CONTROLLO ACCESSI VEICOLARE",
          "3293": "LETTORE",
          "3296": "New Installation",
          "3298": "Verbale di collaudo e messa in servizio",
          "3300": "",
          "3301": "FAAC S.p.A. (1100)",
          "id": "909455",
          "name": "Verbale di collaudo e messa in servizio"
      }
    ];

    this.columnsToShow2 = [
      "3288",
      "3291",
      "3298",
      "3296",
      "3292",
      "3293",
      "3300",
      "3301"
    ];
  }

  // TABLE WITH LONG HEADERS
  configuration3: any = {
    "headers": [],
    "rowOptions": []
  };

  data3: any = [];

  columnsToShow3: any = [];

  loadData3() {
    this.configuration3 = {
      "headers": [
          {
              "id": "Status",
              "displayName": "Status"
          },
          {
              "id": "Key",
              "displayName": "Tkt #"
          },
          {
              "id": "OP_TKT_TYPE",
              "displayName": "TKT Type"
          },
          {
              "id": "OP_CUSTOMER",
              "displayName": "Customer"
          },
          {
              "id": "OP_SITE",
              "displayName": "Site"
          },
          {
              "id": "OP_ASSET",
              "displayName": "Asset"
          },
          {
              "id": "OP_PRIORITY",
              "displayName": "Priority"
          },
          {
              "id": "OP_SUPPLIER",
              "displayName": "Supplier"
          },
          {
              "id": "OP_REQUESTED_DATE",
              "displayName": "Request Date"
          },
          {
              "id": "OP_SALES_ORDER",
              "displayName": "Sales Order #"
          },
          {
              "id": "OP_SALES_ORDER_DATE",
              "displayName": "Sales Order Date"
          },
          {
              "id": "OP_SALES_ORDER_TOTAL",
              "displayName": "Sales Order Total Amount"
          },
          {
              "id": "OP_PURCHASE_ORDER",
              "displayName": "Purchase Order #"
          },
          {
              "id": "OP_PURCHASE_ORDER_DATE",
              "displayName": "Purchase Order Date"
          },
          {
              "id": "OP_PURCHASE_ORDER_TOTAL",
              "displayName": "Purchase Order Total Amount"
          },
          {
              "id": "OP_ASSET_STATUS_PRE",
              "displayName": "Asset working before repair?"
          },
          {
              "id": "OP_ASSET_STATUS_POST",
              "displayName": "Asset working after repair?"
          },
          {
              "id": "OP_RISK_ONSITE",
              "displayName": "Risk found during repair?"
          },
          {
              "id": "OP_EXECUTION_DATE",
              "displayName": "Execution Date"
          }
      ],
      "rowOptions": []
    }

    this.data3 = [
      {
          "idDetail": 308713,
          "id": 308713,
          "Status": "",
          "Key": "",
          "OP_TKT_TYPE": "",
          "OP_CUSTOMER": "0000066213 ELMET SRL ",
          "OP_SITE": "",
          "OP_ASSET": "",
          "OP_PRIORITY": "",
          "OP_SUPPLIER": "0000102880 - ELETEC SNC DI TILLI E VICARI ",
          "OP_REQUESTED_DATE": "",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308704,
          "id": 308704,
          "Status": "",
          "Key": "",
          "OP_TKT_TYPE": "",
          "OP_CUSTOMER": "0000040118 RICCI CASA S.p.A. ",
          "OP_SITE": "",
          "OP_ASSET": "",
          "OP_PRIORITY": "",
          "OP_SUPPLIER": "0000118608 - SIGNORELLI GIAN LUIGI ",
          "OP_REQUESTED_DATE": "",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308701,
          "id": 308701,
          "Status": "",
          "Key": "",
          "OP_TKT_TYPE": "",
          "OP_CUSTOMER": "0000040118 RICCI CASA S.p.A. ",
          "OP_SITE": "",
          "OP_ASSET": "",
          "OP_PRIORITY": "",
          "OP_SUPPLIER": "0000128559 - AIR TEK TRONIK SRL ",
          "OP_REQUESTED_DATE": "",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308698,
          "id": 308698,
          "Status": "",
          "Key": "",
          "OP_TKT_TYPE": "",
          "OP_CUSTOMER": "0000040118 RICCI CASA S.p.A. ",
          "OP_SITE": "",
          "OP_ASSET": "",
          "OP_PRIORITY": "",
          "OP_SUPPLIER": "0000125926 - S.I.R.E. ELETTRONICA DI IANDOL ",
          "OP_REQUESTED_DATE": "",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308679,
          "id": 308679,
          "Status": "Open",
          "Key": "AAS-3124",
          "OP_TKT_TYPE": "Maintenance Ticket",
          "OP_CUSTOMER": "0000040118 RICCI CASA S.p.A. ",
          "OP_SITE": "514 - RICCI CASA CIANO D'ENZA (RE) ",
          "OP_ASSET": "514/003 - Porta scorrevole a due ante con sfondamento -  -  - ",
          "OP_PRIORITY": "3 - Normale",
          "OP_SUPPLIER": "",
          "OP_REQUESTED_DATE": "",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308678,
          "id": 308678,
          "Status": "Open",
          "Key": "AAS-3123",
          "OP_TKT_TYPE": "Maintenance Ticket",
          "OP_CUSTOMER": "0000066213 ELMET SRL ",
          "OP_SITE": "11634 - G.C.I. - Auchan San Rocco Al Porto ",
          "OP_ASSET": "11634/004 - Porta automatica dx esterna lato sud. Barcode: 01252514 -  - Barcode: 01252514 - Porta fronte ingresso ipermercato ",
          "OP_PRIORITY": "3 - Normale",
          "OP_SUPPLIER": "",
          "OP_REQUESTED_DATE": "",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308674,
          "id": 308674,
          "Status": "Confirmed and Planned",
          "Key": "AAS-3119",
          "OP_TKT_TYPE": "Maintenance Ticket",
          "OP_CUSTOMER": "0000040118 RICCI CASA S.p.A. ",
          "OP_SITE": "511 - RICCI CASA CRESPELLANO (BO) ",
          "OP_ASSET": "511/003 - Porta Automatica Scorrevole -  -  - Uscita Laterale - Vista Interna DX ",
          "OP_PRIORITY": "1 - Emergenza",
          "OP_SUPPLIER": "0000125926 - S.I.R.E. ELETTRONICA DI IANDOL ",
          "OP_REQUESTED_DATE": "2021-06-09",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308673,
          "id": 308673,
          "Status": "In Progress",
          "Key": "AAS-3118",
          "OP_TKT_TYPE": "Maintenance Ticket",
          "OP_CUSTOMER": "0000040118 RICCI CASA S.p.A. ",
          "OP_SITE": "511 - RICCI CASA CRESPELLANO (BO) ",
          "OP_ASSET": "511/003 - Porta Automatica Scorrevole -  -  - Uscita Laterale - Vista Interna DX ",
          "OP_PRIORITY": "1 - Emergenza",
          "OP_SUPPLIER": "0000125926 - S.I.R.E. ELETTRONICA DI IANDOL ",
          "OP_REQUESTED_DATE": "2021-06-09",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "Yes",
          "OP_ASSET_STATUS_POST": "Yes",
          "OP_RISK_ONSITE": "No",
          "OP_EXECUTION_DATE": "2021-06-09"
      },
      {
          "idDetail": 308655,
          "id": 308655,
          "Status": "Confirmed and Planned",
          "Key": "AAS-3100",
          "OP_TKT_TYPE": "Maintenance Ticket",
          "OP_CUSTOMER": "0000040118 RICCI CASA S.p.A. ",
          "OP_SITE": "511 - RICCI CASA CRESPELLANO (BO) ",
          "OP_ASSET": "511/002 - Porta Automatica Scorrevole -  -  - Ingresso Laterale - Vista Interna SX ",
          "OP_PRIORITY": "1 - Emergenza",
          "OP_SUPPLIER": "0000120652 - EXCALIBUR SERVICE SRL ",
          "OP_REQUESTED_DATE": "2021-06-09",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      },
      {
          "idDetail": 308637,
          "id": 308637,
          "Status": "Accepted By Supplier",
          "Key": "AAS-3082",
          "OP_TKT_TYPE": "Maintenance Ticket",
          "OP_CUSTOMER": "0000066213 ELMET SRL ",
          "OP_SITE": "14930 - Conforama - Aprilia (LT) ",
          "OP_ASSET": "14930/005 - PORTA ALZATA RAPIDA -  -  - MONTACARICHI ",
          "OP_PRIORITY": "3 - Normale",
          "OP_SUPPLIER": "0000100859 - SEI   S.R.L. ",
          "OP_REQUESTED_DATE": "2021-06-08",
          "OP_SALES_ORDER": "",
          "OP_SALES_ORDER_DATE": "",
          "OP_SALES_ORDER_TOTAL": "",
          "OP_PURCHASE_ORDER": "",
          "OP_PURCHASE_ORDER_DATE": "",
          "OP_PURCHASE_ORDER_TOTAL": "",
          "OP_ASSET_STATUS_PRE": "",
          "OP_ASSET_STATUS_POST": "",
          "OP_RISK_ONSITE": "",
          "OP_EXECUTION_DATE": ""
      }
    ];

    this.columnsToShow3 = [
      "Status",
      "Key",
      "OP_TKT_TYPE",
      "OP_CUSTOMER",
      "OP_SITE",
      "OP_ASSET",
      "OP_PRIORITY",
      "OP_SUPPLIER",
      "OP_REQUESTED_DATE",
      "OP_SALES_ORDER",
      "OP_SALES_ORDER_DATE",
      "OP_SALES_ORDER_TOTAL",
      "OP_PURCHASE_ORDER",
      "OP_PURCHASE_ORDER_DATE",
      "OP_PURCHASE_ORDER_TOTAL",
      "OP_ASSET_STATUS_PRE",
      "OP_ASSET_STATUS_POST",
      "OP_RISK_ONSITE",
      "OP_EXECUTION_DATE"
    ];
  }

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

  // BUTTON
  actionsDropdown = [
    {
      "id": 1,
      "label": "Option 1"
    },
    {
      "id": 2,
      "label": "Option 2"
    },
    {
      "id": 3,
      "label": "Option 3"
    },
    {
      "id": 4,
      "label": "Option 4"
    }
  ];

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
  modelDropdown = {
    "id": 2,
    "label": "test2"
  };

  // INPUT DATE
  modelDate = new Date(2018, 11, 24, 10, 33, 30, 0);

  // INPUT NUMBER
  modelNumber = 3;

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
  modelTextfield = "Testo";
  warning = false;

  setWarning() {
    this.warning = !this.warning;
  }

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
    this.loadData();
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

  // TIMETABLE EDITOR
  timetableEditor = {
    "times": [
      {
        "name": "LUN",
        "description": "Custom Text",
        "allDay": false,
        "turns": [
          {
            "from": "00:00",
            "to": "09:00"
          },
          {
            "from": "09:30",
            "to": "18:45"
          }
        ]
      },
      {
        "name": "MAR",
        "description": "",
        "allDay": true,
        "turns": [
          {
            "from": "00:30",
            "to": "18:45"
          }
        ]
      },
      {
        "name": "MER",
        "description": "",
        "allDay": false,
        "turns": [
          {
            "from": "00:30",
            "to": "08:45"
          },
          {
            "from": "08:45",
            "to": "12:45"
          }
        ]
      },
      {
        "name": "GIO",
        "description": "",
        "allDay": true,
        "turns": [
          {
            "from": "00:30",
            "to": "18:45"
          }
        ]
      },
      {
        "name": "VEN",
        "description": "",
        "allDay": true,
        "turns": [
          {
            "from": "00:30",
            "to": "18:45"
          }
        ]
      },
      {
        "name": "SAB",
        "description": "",
        "allDay": true,
        "turns": [
          {
            "from": "00:30",
            "to": "18:45"
          }
        ]
      },
      {
        "name": "DOM",
        "description": "Festivo",
        "inactive": true,
        "turns": []
      }
    ]
  };

  timetableEditorNoTurns = {
    "times": [
        {
            "name": "Monday",
            "description": "",
            "turns": [
                {
                    "from": "1",
                    "to": "12"
                },
                {
                    "from": "13",
                    "to": "18"
                }
            ]
        },
        {
            "name": "Tuesday",
            "description": "",
            "turns": [
                {
                    "from": "10",
                    "to": "12"
                }
            ],
            "allDay": true
        },
        {
            "name": "Wednesday",
            "description": "",
            "turns": [],
            inactive: true
        },
        {
            "name": "Thursday",
            "description": "",
            "turns": [],
            inactive: true
        },
        {
            "name": "Friday",
            "description": "",
            "turns": [],
            inactive: true
        },
        {
            "name": "Saturday",
            "description": "",
            "turns": [],
            inactive: true
        },
        {
            "name": "Sunday",
            "description": "",
            "turns": [],
            inactive: true
        }
    ]
};

trowserSteps = [
  {
    id: 1,
    label: 'Costi Fissi'
  },
  {
    id: 2,
    label: 'Costi Manutenzione'
  },
  {
    id: 3,
    label: 'Preventivo Sostituzione'
  },
  {
    id: 4,
    label: 'Materiali Sostituiti'
  },
  {
    id: 5,
    label: 'Stato Impianto'
  }
];
trowserListButtons = [
  {
    id: '1',
    label: 'Annulla',
    disabled: false,
    type: 'ghost',
    icon: ''
  },
  {
    id: '2',
    label: 'Salva come bozza e chiudi',
    disabled: false,
    type: 'outline',
    icon: ''
  },
  {
    id: '3',
    label: 'Prosegui',
    disabled: false,
    type: 'primary',
    icon: ''
  }
];

  signature;

}
