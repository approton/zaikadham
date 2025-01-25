import React, { lazy, Suspense, useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/header"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./components/About"
import Contacts from "./components/Contacts"
import ErrorComponent from "./components/ErrorComponent"
import RestoMenu from "./components/RestoMenu"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
// const resList = [
//   {
//       "info": {
//         "id": "636723",
//         "name": "Chinese Wok",
//         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//         "locality": "Mahanagar",
//         "areaName": "Mahanagar",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Chinese",
//           "Asian",
//           "Tibetan",
//           "Desserts"
//         ],
//         "avgRating": 4.3,
//         "parentId": "61955",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1.2K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 6.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "6.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹199"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "3.5",
//             "ratingCount": "42"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/chinese-wok-mahanagar-rest636723",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "803172",
//         "name": "Burger King",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_803172.JPG",
//         "locality": "CHOWK",
//         "areaName": "Lucknow",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4.4,
//         "parentId": "166",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "2.4K+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 1.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/burger-king-chowk-lucknow-rest803172",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "532693",
//         "name": "McDonald's",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/d11235da-f841-46b7-be25-782461fc04c7_532693.JPG",
//         "locality": "Habibullah Estate Road",
//         "areaName": "Hazratganj",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "American"
//         ],
//         "avgRating": 4.5,
//         "parentId": "630",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "6.6K+",
//         "sla": {
//           "deliveryTime": 26,
//           "lastMileTravel": 4.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 00:45:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹129"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/mcdonalds-habibullah-estate-road-hazratganj-rest532693",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "804656",
//         "name": "KFC",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804656.JPG",
//         "locality": "Chandralok",
//         "areaName": "Sector E",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Fast Food",
//           "Rolls & Wraps"
//         ],
//         "avgRating": 4.4,
//         "parentId": "547",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "816",
//         "sla": {
//           "deliveryTime": 24,
//           "lastMileTravel": 4.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "4.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 04:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "40% OFF",
//           "subHeader": "UPTO ₹80"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/kfc-chandralok-sector-e-rest804656",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "78862",
//         "name": "Domino's Pizza",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/66d2bcc4-8ed8-4c34-80e8-a4c06dcbbc74_78862.jpg",
//         "locality": "Khun Khunji Road",
//         "areaName": "Chowk",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Pastas",
//           "Desserts"
//         ],
//         "avgRating": 4.4,
//         "parentId": "2456",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "8.8K+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 2.4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "2.4 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 03:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "Ratnesh_Badges/free%20del%20icon.png",
//               "shortDescription": "Free Delivery",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "Ratnesh_Badges/free%20del%20icon.png",
//                     "shortDescription": "Free Delivery"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹189"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.1",
//             "ratingCount": "3.4K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/dominos-pizza-khun-khunji-road-chowk-rest78862",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "65084",
//         "name": "Alamgir Hotel",
//         "cloudinaryImageId": "ruczyhnam8hjwkkzgiwl",
//         "locality": "Aminabad",
//         "areaName": "Aminabad",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Mughlai"
//         ],
//         "avgRating": 4.4,
//         "parentId": "29676",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "39K+",
//         "sla": {
//           "deliveryTime": 24,
//           "lastMileTravel": 4.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "4.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-29 23:59:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹100 OFF",
//           "subHeader": "ABOVE ₹199",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.2",
//             "ratingCount": "2.3K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/alamgir-hotel-aminabad-rest65084",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "65085",
//         "name": "Mughal Zaika Aminabad",
//         "cloudinaryImageId": "yood4aumr1wbxed1odxk",
//         "locality": "Aminabad",
//         "areaName": "Aminabad",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Mughlai",
//           "Biryani",
//           "Kebabs"
//         ],
//         "avgRating": 4.4,
//         "parentId": "140984",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "75K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 4.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 01:10:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Biryani.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Mughlai.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//               "description": "OnlyOnSwiggy"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "Ratnesh_Badges/test2.png",
//               "shortDescription": "Perfect ice cream delivery",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Mughlai.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "OnlyOnSwiggy",
//                     "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "Ratnesh_Badges/test2.png",
//                     "shortDescription": "Perfect ice cream delivery"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹199",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.2",
//             "ratingCount": "911"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/mughal-zaika-aminabad-aminabad-rest65085",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "636724",
//         "name": "Big Bowl",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_636724.JPG",
//         "locality": "Umrao Mall",
//         "areaName": "Mahanagar",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Chinese",
//           "Tibetan",
//           "Desserts"
//         ],
//         "avgRating": 4.4,
//         "parentId": "434792",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "758",
//         "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 6.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "6.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹199"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/big-bowl-umrao-mall-mahanagar-rest636724",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "579744",
//         "name": "Grameen Kulfi",
//         "cloudinaryImageId": "td6ljdd9zc3irk96edep",
//         "locality": "Dargi Bagh",
//         "areaName": "Chowk",
//         "costForTwo": "₹120 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Desserts"
//         ],
//         "avgRating": 4.8,
//         "veg": true,
//         "parentId": "12175",
//         "avgRatingString": "4.8",
//         "totalRatingsString": "281",
//         "sla": {
//           "deliveryTime": 22,
//           "lastMileTravel": 1.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹99"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/grameen-kulfi-dargi-bagh-chowk-rest579744",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "76869",
//         "name": "Radhey Lal Premium Sweets",
//         "cloudinaryImageId": "bzupoiynxjbgogvumixa",
//         "locality": "Chowk",
//         "areaName": "Chowk",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Sweets",
//           "Chinese",
//           "Desserts"
//         ],
//         "avgRating": 4.6,
//         "veg": true,
//         "parentId": "164351",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "65K+",
//         "sla": {
//           "deliveryTime": 19,
//           "lastMileTravel": 1.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "15-20 mins",
//           "lastMileTravelString": "1.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.1",
//             "ratingCount": "2.3K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/radhey-lal-premium-sweets-chowk-rest76869",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "637321",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/8d5d8f49-22b5-47ec-ab3b-7bcfc7a256ec_637321.jpg",
//         "locality": "Hardoi Road",
//         "areaName": "Daulatganj",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 4.2,
//         "parentId": "721",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "1.4K+",
//         "sla": {
//           "deliveryTime": 26,
//           "lastMileTravel": 2.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "2.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹189"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/pizza-hut-hardoi-road-daulatganj-rest637321",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "426638",
//         "name": "La Pino'z Pizza",
//         "cloudinaryImageId": "yq7lqeehl9dsjjsogv5g",
//         "locality": "Chowk",
//         "areaName": "Chowk",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Pizzas",
//           "Pastas",
//           "Italian",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "veg": true,
//         "parentId": "4961",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "9.5K+",
//         "sla": {
//           "deliveryTime": 19,
//           "lastMileTravel": 1.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "15-20 mins",
//           "lastMileTravelString": "1.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.3",
//             "ratingCount": "875"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/la-pinoz-pizza-chowk-rest426638",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "59654",
//         "name": "Subway",
//         "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//         "locality": "Hazratganj",
//         "areaName": "Hazratganj",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Healthy Food",
//           "Salads",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "parentId": "2",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "15K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 04:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.1",
//             "ratingCount": "2.2K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/subway-hazratganj-rest59654",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "812774",
//         "name": "Baskin Robbins - Ice Cream Desserts",
//         "cloudinaryImageId": "58abba330fd6086e4a14f2b78e6cb64e",
//         "locality": "Sector KS",
//         "areaName": "Sitapur Road",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Desserts",
//           "Ice Cream"
//         ],
//         "avgRating": 4.6,
//         "veg": true,
//         "parentId": "5588",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "22",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-29 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹90"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/baskin-robbins-ice-cream-desserts-sector-ks-sitapur-road-rest812774",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "368396",
//         "name": "Bikkgane Biryani",
//         "cloudinaryImageId": "56646c3f698b3c5ae53639c49a4725af",
//         "locality": "AGRASEN NAGAR",
//         "areaName": "Aliganj",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Biryani",
//           "Hyderabadi",
//           "Andhra",
//           "South Indian",
//           "North Indian",
//           "Mughlai",
//           "Kebabs"
//         ],
//         "avgRating": 4.3,
//         "parentId": "5070",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "5.4K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 5.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "5.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹199"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/bikkgane-biryani-agrasen-nagar-aliganj-rest368396",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "635227",
//         "name": "Bakingo",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/f79d2bef-b1ef-4fdb-ba51-52dda55aa52f_635227.JPG",
//         "locality": "Gokhle Marg",
//         "areaName": "Hazratganj",
//         "costForTwo": "₹299 for two",
//         "cuisines": [
//           "Bakery",
//           "Desserts",
//           "Beverages",
//           "Snacks"
//         ],
//         "avgRating": 4.7,
//         "parentId": "3818",
//         "avgRatingString": "4.7",
//         "totalRatingsString": "5.9K+",
//         "sla": {
//           "deliveryTime": 33,
//           "lastMileTravel": 6.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "6.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 01:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Desserts.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Desserts.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/bakingo-gokhle-marg-hazratganj-rest635227",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "789168",
//         "name": "Theobroma",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/0b47244e-f28d-441d-aa32-9f67dbded8ea_789168.jpg",
//         "locality": "Shahad",
//         "areaName": "ASHOK MARG",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Bakery",
//           "Desserts"
//         ],
//         "avgRating": 4.5,
//         "parentId": "1040",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "393",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-30 02:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/theobroma-shahad-ashok-marg-rest789168",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "444136",
//         "name": "Wendy's Burgers",
//         "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
//         "locality": "Habibulla Estate Road",
//         "areaName": "Hazratganj",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Burgers",
//           "American",
//           "Fast Food",
//           "Snacks",
//           "Beverages"
//         ],
//         "avgRating": 4.6,
//         "parentId": "972",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "2.2K+",
//         "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-29 23:59:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/wendys-burgers-habibulla-estate-road-hazratganj-rest444136",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "322635",
//         "name": "Oven Story Pizza - Standout Toppings",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/1639c8ab-5dad-4d36-87d9-2eee83860f54_322635.jpg",
//         "locality": "Sitapur Road",
//         "areaName": "Aliganj",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas",
//           "Pastas",
//           "Italian",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.2,
//         "parentId": "3534",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "2.4K+",
//         "sla": {
//           "deliveryTime": 35,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-29 23:59:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/oven-story-pizza-standout-toppings-sitapur-road-aliganj-rest322635",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "322634",
//         "name": "Behrouz Biryani",
//         "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
//         "locality": "Sitapur Road",
//         "areaName": "Aliganj",
//         "costForTwo": "₹500 for two",
//         "cuisines": [
//           "Biryani",
//           "North Indian",
//           "Kebabs",
//           "Mughlai",
//           "Beverages",
//           "Desserts"
//         ],
//         "avgRating": 4.4,
//         "parentId": "1803",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "3.6K+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-09-29 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Biryani.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹95"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/city/lucknow/behrouz-biryani-sitapur-road-aliganj-rest322634",
//         "type": "WEBLINK"
//       }
//     }
//   ]

//Lazy Loading
//dynamic bundling
//dynamic Import
//chunking
//code Splitting

const Groceries = lazy(()=>import("./components/Groceries"))
const AppLayout = () =>{
  const [userName, setUserName] = useState();

  useEffect(()=>{
    //Make API call to get Dynmic Username and password
    const data={
      name: "Ram Niwash Pandey",
    }
    setUserName(data.name)
  }, [])

    return (
      <Provider store= {appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
          <div className= "app">
    
              <Header />
              <Outlet />

              {/* <div className="container">

                  
                  <Body />
              </div> */}
          </div>
        </UserContext.Provider>
      </Provider>
    )

}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <ErrorComponent />
      },
      {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorComponent />
      },
      {
        path: "/contacts",
        element: <Contacts />,
        errorElement: <ErrorComponent />
      },
      {
        path: "/groceries",
        element: <Suspense fallback={<h1>Loading....</h1>}>
                    <Groceries />
                  </Suspense>,
        errorElement: <ErrorComponent />
      },
      {
        path: "/restaurants/:resId",
        element: <RestoMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <ErrorComponent />
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorComponent />
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <ErrorComponent />
  }
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);