import Link from "next/link";
import css from './SidebarNotes.module.css'

const SidebarNotes = () => {
  const tags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
    return (
    <ul className={css.menuList}>
    {/* список тегів */}
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {tags.map(tag => (
      <li className={css.menuItem}>
        <Link href={`notes`} className={css.menuLink}>
          {tag}
        </Link>
      </li>

      ))}
    </ul>
    )
}

export default SidebarNotes