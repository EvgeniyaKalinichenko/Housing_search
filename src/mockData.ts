const mockData = [
  {
    "id": "96e68723-9cdf-4915-ac30-eb2b4bd9c58d",
    "name": "Urban Hotel",
    "price_cad": 755,
    "price_usd": 558,
    "rating": 4.6,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "d1e0c7f0-4c98-49f7-b6ff-3cccc584aa6b",
    "name": "Luxury Hotel",
    "price_cad": 781,
    "price_usd": 578,
    "rating": 4.5,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "aa15cd32-cd73-4a76-bdde-c2d602c3ecc6",
    "name": "Urban Place",
    "price_cad": 1209,
    "price_usd": 895,
    "rating": 2.1,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "3ae2d16c-9de9-431b-8855-f420af18e909",
    "name": "Grand Inn",
    "price_cad": 794,
    "price_usd": 587,
    "rating": 4.5,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "8ed3e6be-2570-45b8-a0a6-01416d3df525",
    "name": "Charming Lodge",
    "price_cad": 1370,
    "price_usd": 1014,
    "rating": 2.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "12c82172-31ca-43ae-8226-b1a0b15cda9a",
    "name": "Urban Suites",
    "price_cad": 827,
    "price_usd": 612,
    "rating": 2.2,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "a7ae00f9-5534-44f1-9458-cdc070e66997",
    "name": "Modern Lodge",
    "price_cad": 685,
    "price_usd": 507,
    "rating": 4.3,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "b04b53cd-a6bc-47cc-963f-32c5cdb99c5f",
    "name": "Cozy Retreat",
    "price_cad": 522,
    "price_usd": 386,
    "rating": 2.6,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "8c5238ec-fc45-4efa-b8d5-5fcc658f076c",
    "name": "Rustic Place",
    "price_cad": 1476,
    "price_usd": 1092,
    "rating": 3.2,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "f39d0efb-4656-4096-90a5-9bed8bd5cf1f",
    "name": "Urban Retreat",
    "price_cad": 1294,
    "price_usd": 958,
    "rating": 3.9,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "7352882e-47c1-4ddd-8f89-ba45b2f384e8",
    "name": "Charming Suites",
    "price_cad": 705,
    "price_usd": 522,
    "rating": 3.3,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "dc4dc436-5a50-4565-8ef0-96449cb2642f",
    "name": "Rustic Residence",
    "price_cad": 1335,
    "price_usd": 988,
    "rating": 2.3,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "401636dc-3df7-4711-ab32-6ccb55700f09",
    "name": "Luxury Inn",
    "price_cad": 1617,
    "price_usd": 1197,
    "rating": 3.6,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "03e50a8c-2a32-44f1-b2c0-3dc9b623b190",
    "name": "Luxury Bungalow",
    "price_cad": 1212,
    "price_usd": 897,
    "rating": 2.5,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "6205a905-f1fe-4ec9-8413-90d8fad1e618",
    "name": "Rustic Villa",
    "price_cad": 1228,
    "price_usd": 909,
    "rating": 2.1,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "e7a09166-9fdc-4ad7-aaf7-bf12f5438c62",
    "name": "Sunny Inn",
    "price_cad": 1438,
    "price_usd": 1064,
    "rating": 2.3,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "c2a8e3c3-b58a-4912-bb02-960ae0f91b7d",
    "name": "Luxury Lodge",
    "price_cad": 1457,
    "price_usd": 1078,
    "rating": 4.3,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "b12a7c6c-0847-4a4d-96d8-ab582c45760a",
    "name": "Grand Retreat",
    "price_cad": 919,
    "price_usd": 680,
    "rating": 4.9,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "0bd593ce-3b3b-46f0-ae54-ee48f79cbd21",
    "name": "Charming Villa",
    "price_cad": 564,
    "price_usd": 418,
    "rating": 2.8,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "60f4b812-d3e1-4c8a-919f-3b12cdc9452c",
    "name": "Charming Hotel",
    "price_cad": 987,
    "price_usd": 731,
    "rating": 4.4,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "2431570a-9167-4dbc-b813-3a7ad4f45a59",
    "name": "Grand Villa",
    "price_cad": 1719,
    "price_usd": 1272,
    "rating": 3.0,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "8507c0c0-ff7d-4f85-9118-df533d409ff1",
    "name": "Quiet Suites",
    "price_cad": 1230,
    "price_usd": 911,
    "rating": 4.9,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "3aa7ff36-3c92-40e7-9438-06b1cfa70b38",
    "name": "Modern Residence",
    "price_cad": 603,
    "price_usd": 446,
    "rating": 3.3,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "5e6fd034-e18f-447c-a497-95cfee546651",
    "name": "Luxury Place",
    "price_cad": 1974,
    "price_usd": 1460,
    "rating": 2.5,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "8325a279-4fc2-4634-92aa-0643f0cfbe88",
    "name": "Grand Apartment",
    "price_cad": 848,
    "price_usd": 628,
    "rating": 2.2,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "1e98ac40-49da-4cdb-ba20-1aa93089335b",
    "name": "Quiet Villa",
    "price_cad": 495,
    "price_usd": 366,
    "rating": 4.6,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "ffb797bf-bd91-46e9-9c9c-e98d4460edcd",
    "name": "Elegant Villa",
    "price_cad": 613,
    "price_usd": 454,
    "rating": 2.1,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "c752a6f7-38b6-4b58-9d45-c2e5daf5faaa",
    "name": "Luxury Lodge",
    "price_cad": 1023,
    "price_usd": 757,
    "rating": 3.0,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "6499dda9-a053-4edd-928c-c3ae63050b4d",
    "name": "Rustic Inn",
    "price_cad": 379,
    "price_usd": 280,
    "rating": 2.9,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "a2f4f2c1-aea7-46b7-a65e-5965d453634b",
    "name": "Elegant Apartment",
    "price_cad": 1061,
    "price_usd": 785,
    "rating": 3.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "18243f0d-edd8-416a-8eff-6856901b08a7",
    "name": "Luxury Hotel",
    "price_cad": 776,
    "price_usd": 574,
    "rating": 4.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "f1cac53f-ef8c-436e-96ee-f2e8b9bef0ca",
    "name": "Quiet Inn",
    "price_cad": 887,
    "price_usd": 657,
    "rating": 3.4,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "feade32c-fdac-4a73-896c-0ab77fce0c6e",
    "name": "Rustic Residence",
    "price_cad": 1435,
    "price_usd": 1062,
    "rating": 3.9,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "8e1f366d-36e9-42e0-8fcd-ba1d2ab9e8d4",
    "name": "Cozy Residence",
    "price_cad": 1210,
    "price_usd": 895,
    "rating": 2.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "fc9b152b-f037-414b-8483-0fa4e18faa9d",
    "name": "Cozy Hotel",
    "price_cad": 887,
    "price_usd": 656,
    "rating": 2.4,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "84995c2f-7be4-4a86-9a4e-8942adbce3b2",
    "name": "Grand Hotel",
    "price_cad": 466,
    "price_usd": 345,
    "rating": 2.3,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "6f9a469b-2fee-445c-a7c5-2e9b8f25d576",
    "name": "Urban Inn",
    "price_cad": 822,
    "price_usd": 608,
    "rating": 4.9,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "42a411d3-9ccc-441c-b73d-6d34b7f4601a",
    "name": "Charming Retreat",
    "price_cad": 244,
    "price_usd": 180,
    "rating": 3.5,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "2087108d-e56f-46b9-80c1-00ff77525ca2",
    "name": "Charming Apartment",
    "price_cad": 1617,
    "price_usd": 1197,
    "rating": 3.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "b453bf1f-be36-4f3a-8b71-a7da66252356",
    "name": "Urban Apartment",
    "price_cad": 1931,
    "price_usd": 1429,
    "rating": 4.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "23dbc662-9dba-4326-8e1d-e6116aaefa3f",
    "name": "Charming Hotel",
    "price_cad": 1118,
    "price_usd": 828,
    "rating": 2.6,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "053929f9-dad4-424d-a06d-32c472105cd0",
    "name": "Elegant Place",
    "price_cad": 438,
    "price_usd": 324,
    "rating": 4.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "f0accaa2-4fc6-45c1-bc01-46826152d941",
    "name": "Luxury Apartment",
    "price_cad": 900,
    "price_usd": 666,
    "rating": 3.8,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "86ef2c49-3c43-4ba5-aebb-e382e228863e",
    "name": "Modern Residence",
    "price_cad": 466,
    "price_usd": 345,
    "rating": 3.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "f3e69d03-cca0-4860-8b24-b3f6277a532d",
    "name": "Sunny Villa",
    "price_cad": 805,
    "price_usd": 596,
    "rating": 2.6,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "dcb726c7-2690-42cd-8639-58d0d76f7353",
    "name": "Modern Villa",
    "price_cad": 1991,
    "price_usd": 1473,
    "rating": 2.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "1dc4511f-f434-470c-8bbe-9d05f27bb373",
    "name": "Elegant Hotel",
    "price_cad": 1405,
    "price_usd": 1040,
    "rating": 3.7,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "da3e2ae4-ecdb-47b6-9dbc-9f7c4f162f57",
    "name": "Rustic Retreat",
    "price_cad": 644,
    "price_usd": 476,
    "rating": 4.0,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "c34efa68-e87a-40d5-a361-480e329cc553",
    "name": "Luxury Suites",
    "price_cad": 1893,
    "price_usd": 1401,
    "rating": 3.5,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  },
  {
    "id": "ff58bfe4-a517-4e2d-8107-59d8e9d2cb1b",
    "name": "Luxury Suites",
    "price_cad": 1526,
    "price_usd": 1129,
    "rating": 3.1,
    "photos": [
      "https://placehold.co/600x400?text=Photo+1",
      "https://placehold.co/600x400?text=Photo+2",
      "https://placehold.co/600x400?text=Photo+3",
      "https://placehold.co/600x400?text=Photo+4",
      "https://placehold.co/600x400?text=Photo+5"
    ]
  }
]

export default mockData;