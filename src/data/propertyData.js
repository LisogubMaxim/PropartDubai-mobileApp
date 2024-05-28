import ConciergeSvg from "../../assets/svg/ConciergeSvg"
import ElevatorSvg from "../../assets/svg/ElevatorSvg"
import GreenAreasSvg from "../../assets/svg/GreenAreasSvg"
import StorageRoomSvg from "../../assets/svg/StorageRoomSvg"

export const heroData = {
  name: "Oakley Square Residences",
  location: "Jumeirah Village Circle (JVL)",
  priceFrom: 347222,
  images: [
    "https://files.alnair.ae/uploads/2023/7/15/92/1592a1be0a9d578640fdab77705b7cde.jpg",
    "https://files.alnair.ae/uploads/2023/7/9a/83/9a83e8e348675434016c29ea74436eb2.jpg",
    "https://files.alnair.ae/uploads/2023/7/48/67/4867d4be2e4f8c958e7a895a65b8bc3b.jpg",
    "https://files.alnair.ae/uploads/2023/7/c1/1e/c11e8d3b2049c1c0ba28d860dea4db9a.jpg"
  ]
}

export const detailsData = {
  bedrooms: 2,
  size: 64,
  pricePerSquareMeter: 230
}

export const amenitiesData = [
  { img: <ElevatorSvg />, name: 'Elevator' },
  { img: <ConciergeSvg />, name: 'Concierge' },
  { img: <StorageRoomSvg />, name: 'Storage room' },
  { img: <GreenAreasSvg />, name: 'Green areas' },
]

export const interiorImages = [
  "https://files.alnair.ae/uploads/2023/7/c0/68/c0686d402ca8845c1597b017fd56136e.jpg",
  "https://files.alnair.ae/uploads/2023/7/98/fe/98fe6ee304d82588ca74d29fd4aeb186.jpg",
]

export const plansData = {
  "1": [
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/42/cb/42cb9afd017d8b7380338f542238a2b0.jpg",
      "price": 2576300.5,
      "size": 78.11,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/7c/47/7c47c98e954b2966443b23f588970de4.jpg",
      "price": 2351750.5,
      "size": 85.50999999999999,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/88/1b/881b56e6aefa6f25da1901ed1c99590d.jpg",
      "price": 2318292.0,
      "size": 100.14,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/39/5a/395a2b62de526ef93f417ad64230ae81.jpg",
      "price": 2407131.0,
      "size": 63.86,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/ca/8d/ca8d05898f3f64febb7d5c122741b6f2.jpg",
      "price": 3369000.0,
      "size": 84.73,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/d7/01/d701bfe47472410f58b4a4b235cb33f9.jpg",
      "price": 3082306.0,
      "size": 92.36500000000001,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/57/ff/57ff08332394843dec060b254c00e655.jpg",
      "price": 2963941.0,
      "size": 92.87,
      "visible": true
    }
  ],
  "2": [
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/9a/33/9a33df1ff9d3008d871fbd36a1255a60.jpg",
      "price": 6186971.0,
      "size": 161.69,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/00/e2/00e2dd3d534ef822e3fcc4bbf7fe328a.jpg",
      "price": 3622865.0,
      "size": 109.9,
      "visible": true
    },
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/52/38/523806c6c30bc3055c03aa26894ebde3.jpg",
      "price": 3192413.0,
      "size": 102.98,
      "visible": true
    }
  ],
  "Studio": [
    {
      "image": "https://files.alnair.ae/uploads/presentation/2023/7/d6/7e/d67ea387dc9d91b1da8c98ec5b62adb4.jpg",
      "price": 1764750.0,
      "size": 44.93,
      "visible": true
    }
  ]
}

export const polygon = [
  {
    "lat": "25.059927",
    "lng": "55.211336"
  },
  {
    "lat": "25.060281",
    "lng": "55.211696"
  },
  {
    "lat": "25.060534",
    "lng": "55.212592"
  },
  {
    "lat": "25.059786",
    "lng": "55.212882"
  },
  {
    "lat": "25.059475",
    "lng": "55.211862"
  },
  {
    "lat": "25.059927",
    "lng": "55.211336"
  }
]