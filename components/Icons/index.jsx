import Svg, { Circle, Path } from 'react-native-svg';

export const IconPlay = () => {
  return (
    <Svg width="11" height="14" viewBox="0 0 11 14" fill="none">
      <Path d="M0.015625 0.015625L10.9844 7L0.015625 13.9844V0.015625Z" fill="white"/>
    </Svg>
  )
}

export const IconPause = () => {
  return (
    <Svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M8.01562 0.015625H12V13.9844H8.01562V0.015625ZM0 13.9844V0.015625H3.98438V13.9844H0Z" fill="white"/>
    </Svg>
  )
}

export const IconCheck = ({checked}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="12" cy="12" r="12" fill={checked ? '#00F4BF' : 'white'}/>
      <Path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#021123"/>
    </Svg>
  )
}

export const IconPencil = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="16" cy="16" r="15.5" stroke="#021123"/>
      <Path d="M24.7188 11.0312L22.8906 12.8594L19.1406 9.10938L20.9688 7.28125C21.1562 7.09375 21.3906 7 21.6719 7C21.9531 7 22.1875 7.09375 22.375 7.28125L24.7188 9.625C24.9062 9.8125 25 10.0469 25 10.3281C25 10.6094 24.9062 10.8438 24.7188 11.0312ZM7 21.25L18.0625 10.1875L21.8125 13.9375L10.75 25H7V21.25Z" fill="#021123"/>
    </Svg>
  )
}

export const IconTrash = () => {
  return (
    <Svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7 0.65625H9.3125V2H0V0.65625H2.3125L3 0H6.3125L7 0.65625ZM2 4V10.6562H7.3125V4H2ZM0.65625 10.6562V2.65625H8.65625V10.6562C8.65625 11.0104 8.52083 11.3229 8.25 11.5938C7.97917 11.8646 7.66667 12 7.3125 12H2C1.64583 12 1.33333 11.8646 1.0625 11.5938C0.791667 11.3229 0.65625 11.0104 0.65625 10.6562Z" fill="#021123"/>
    </Svg>
  )
}
