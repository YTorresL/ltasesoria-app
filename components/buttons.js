import Link from "next/link"

export function Button({
  button,
  link,
  styles,
  url,
  label,
  target,
  content,
  onClick,
  type,
}) {
  if (button) {
    return (
      <ButtonComponent
        styles={styles}
        onClick={onClick}
        type={type}
        content={content}
      />
    )
  } else if (link) {
    return (
      <LinkComponent
        styles={styles}
        url={url}
        label={label}
        target={target}
        content={content}
      />
    )
  } else {
    return null
  }
}

const LinkComponent = ({ url, target, label, styles, content }) => (
  <Link href={url} {...(target && { target })} title={label} className={styles}>
    {content}
  </Link>
)

const ButtonComponent = ({ styles, onClick, content, type = "button" }) => (
  <button className={styles} type={type} onClick={onClick} aria-label="button">
    {content}
  </button>
)
