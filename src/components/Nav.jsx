// It can also use arrow function
export const Nav = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-999">
            <nav className="flex justify-end">
                <ul className="flex justify-end gap-5 uppercase text-sm p-5 pl-6 bg-white *:cursor-pointer *:hover:text-blue-400">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </header>
    )
};