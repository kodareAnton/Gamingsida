import { Outlet } from "react-router-dom"

export const Layout = () => {

    return (
    <>
    <h1>MingJunior</h1>
    <ul>
        <li>Games</li>
        <li>Tips & tricks</li>
        <li>cheats</li>
    </ul>

<img src="../public/img/Apex.jpg" alt="Apex" />
<img src="" alt="Valorant" />
<img src="" alt="Fortnite" />
<img src="" alt="Mafia" />

    <main><Outlet></Outlet></main>

    <footer>
        <div><p>hej</p></div>
        <div><p>hej</p></div>
        <div><p>hej</p></div>
    </footer>
    </>
    )
}