export function Title({ title, header, text, size, color }) {
  if (title) {
    return <TitleComponent text={text} size={size} color={color} />
  } else if (header) {
    return <HeaderComponent text={text} size={size} color={color} />
  } else {
    return null
  }
}

const TitleComponent = ({ text, size, color = "text-gray-900" }) => (
  <h2 class={`${size && size} leading-7 font-bold ${color}`}>{text}</h2>
)

const HeaderComponent = ({ text, size, color = "text-company-blue" }) => (
  <span className={`${size && size} font-bold uppercase ${color}`}>{text}</span>
)
