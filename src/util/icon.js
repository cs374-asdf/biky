// npm install --save-dev @iconify/react @iconify-icons/twemoji

import { Icon, InlineIcon } from "@iconify/react";

import catIcon from "@iconify-icons/twemoji/cat"; // 고양이
import cloudIcon from "@iconify-icons/twemoji/cloud"; // 구름
import cloudWithRain from "@iconify-icons/twemoji/cloud-with-rain"; // 비
import cloudWithSnow from "@iconify-icons/twemoji/cloud-with-snow"; // 눈
import cryingFace from "@iconify-icons/twemoji/crying-face"; // 눈물
import deciduousTree from "@iconify-icons/twemoji/deciduous-tree"; // 나무
import dogIcon from "@iconify-icons/twemoji/dog"; // 강아지
import dollarBanknote from "@iconify-icons/twemoji/dollar-banknote"; // 돈
import droolingFace from "@iconify-icons/twemoji/drooling-face"; // 아마도 맛있는게 있어서 침흘림
import faceWithSymbolsOnMouth from "@iconify-icons/twemoji/face-with-symbols-on-mouth"; // 욕나옴
import faceWithThermometer from "@iconify-icons/twemoji/face-with-thermometer"; // 이시국에 열남
import firstQuarterMoonFace from "@iconify-icons/twemoji/first-quarter-moon-face"; // 달
import grinningFace from "@iconify-icons/twemoji/grinning-face"; // 웃음
import hamburgerIcon from "@iconify-icons/twemoji/hamburger"; // 햄버거
import hotBeverage from "@iconify-icons/twemoji/hot-beverage"; // 커피 (핫)
import redHeart from "@iconify-icons/twemoji/red-heart"; // 하트
import rollingOnTheFloorLaughing from "@iconify-icons/twemoji/rolling-on-the-floor-laughing"; // 데굴데굴 웃음
import shortcakeIcon from "@iconify-icons/twemoji/shortcake"; // 케이크
import sleepingFace from "@iconify-icons/twemoji/sleeping-face"; // 졸림
import sunIcon from "@iconify-icons/twemoji/sun"; // 해
import taxiIcon from "@iconify-icons/twemoji/taxi"; // 택시

// 날씨





// 감정








// 무언가 해시태그와 연결지어서 쓸 만한 것들







// 메타포





<Icon icon={cloudIcon} />; // 이런식으로 불러다가 넣으면 됩니다

export function getIconComponent(key)
{
  return <Icon icon={getIcon(key)} width="2em"/> 
}


export function getIcon(key)
{
  switch (key)
  {
    case "sad":
    case "힝":
    case "슬프다":
      return cryingFace

    case "angry":
    case "화나네":
      return faceWithSymbolsOnMouth
    
    case "excited":
    case "happy":
    case "행복해":
    case "기부니가 좋아요":
      return rollingOnTheFloorLaughing

    case "tired":
    case "exhausted":
    case "졸림":
    case "sleepy":
      return sleepingFace

    case "존맛":
    case "delicious":
    case "yummy":
      return droolingFace

    case "이시국":
    case "fever":
    case "sick":
    case "아파요":
      return faceWithThermometer

    default:
    return catIcon
  }
}