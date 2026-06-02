import SidebarNotes from './filter/@sidebar/page'

interface Props{
    children:React.ReactNode
}
const NotesLeyaout = ({children}: Props) => {
    return (
        <div>
            <SidebarNotes/>
            {children}
        </div>
    )
}

export default NotesLeyaout