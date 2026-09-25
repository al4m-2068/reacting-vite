import { Navigate, NavLink, Outlet, useNavigate } from 'react-router'
import { MinusIcon, PlusIcon, SquareHalfBottomIcon, SignOutIcon, UserIcon } from '@phosphor-icons/react'
import { useAuthStore } from '../../auth/store/useAuthStore'
import { useState } from 'react'

export default function UserTheme() {
  const userData = useAuthStore((state) => state.user)
  const authStore = useAuthStore()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  if (!userData) {
    return <Navigate to={'/sign-in'} replace />
  }
  if (userData.role !== 'user') {
    return <Navigate to={'/admin'} replace />
  }

  const handleLogout = () => {
    if (authStore.logout) authStore.logout()
    navigate('/sign-in')
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-blam">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white border-b-2 border-blam">
        <div
          className={`transition-all duration-300 bg-slate-100 border-b-2 border-blam overflow-hidden ${
            isOpen ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-6">
            <ul className="flex items-center gap-6 font-rhdis font-bold text-sm uppercase tracking-wider">
              <li>
                <NavLink
                  to={'/user'}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 border-2 border-blam bg-white transition-all ${
                      isActive ? 'bg-blam text-white shadow-[3px_3px_0px_0px_#000640]' : 'hover:bg-yelam'
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/user/profile'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 border-2 border-blam bg-white transition-all ${
                      isActive ? 'bg-blam text-white shadow-[3px_3px_0px_0px_#000640]' : 'hover:bg-yelam'
                    }`
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-between h-14 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 border-2 border-blam bg-slate-100 hover:bg-yelam transition-colors cursor-pointer shadow-[2px_2px_0px_0px_#000640]"
            >
              <SquareHalfBottomIcon size={22} weight="bold" />
            </button>
            <div className="w-0.5 h-6 bg-blam/30" />
            <h1 className="font-rhdis font-black text-xl tracking-wide">USER PORTAL</h1>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold bg-slate-100 border border-blam px-3 py-1">
            <UserIcon size={14} weight="bold" /> {userData.name}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-blam text-white border-t-2 border-blam py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs uppercase font-bold tracking-widest text-yelam">
            Role: {userData.role}
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white text-blam border-2 border-blam shadow-[2px_2px_0px_0px_#f3ae41] font-mono text-xs font-bold">
              <span className="px-3 py-1 border-r-2 border-blam text-trim">Count: {authStore.count ?? 0}</span>
              <button
                onClick={() => authStore.increment?.()}
                className="p-1.5 hover:bg-yelam border-r border-blam cursor-pointer"
              >
                <PlusIcon size={14} weight="bold" />
              </button>
              <button
                onClick={() => authStore.decrement?.()}
                className="p-1.5 hover:bg-yelam cursor-pointer"
              >
                <MinusIcon size={14} weight="bold" />
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 bg-red-500 text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 border-2 border-white hover:bg-red-600 transition-colors cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
            >
              <SignOutIcon size={16} weight="bold" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}