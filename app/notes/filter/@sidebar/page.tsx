import Link from "next/link";
import css from './SidebarNotes.module.css'

const SidebarNotes = () => {
    return (
    <ul className={css.menuList}>
    {/* список тегів */}
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      <li className={css.menuItem}>
        <Link href={`notes`} className={css.menuLink}>
          Назва тегу
        </Link>
      </li>
    </ul>
    )
}

export default SidebarNotes