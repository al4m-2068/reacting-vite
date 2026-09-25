import { Navigate, NavLink, Outlet, useNavigate } from 'react-router'
import { MinusIcon, PlusIcon, SquareHalfBottomIcon, SignOutIcon, ShieldIcon } from '@phosphor-icons/react'
import { useAuthStore } from '../../auth/store/useAuthStore'
import { useState } from 'react'

export default function AdminTheme() {
  const authStore = useAuthStore()
  const userData = useAuthStore((state) => state.user)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  if (!userData) {
    return <Navigate to={'/sign-in'} replace />
  }
  if (userData.role !== 'admin') {
    return <Navigate to={'/user'} replace />
  }

  const handleLogout = () => {
    if (authStore.logout) authStore.logout()
    navigate('/sign-in')
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-blam">
      {/* Sticky Header */}
      <header className="sticky top-0 w-full z-50 bg-white border-b-2 border-blam">
        {/* Collapsible Drawer Nav */}
        <div
          className={`transition-all duration-300 bg-yelam border-b-2 border-blam overflow-hidden ${
            isOpen ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-6">
            <ul className="flex items-center gap-6 font-rhdis font-bold text-sm uppercase tracking-wider">
              <li>
                <NavLink
                  to={'/admin'}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 border-2 border-blam bg-white transition-all ${
                      isActive ? 'bg-blam text-white shadow-[3px_3px_0px_0px_#000640]' : 'hover:bg-blam hover:text-white'
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/admin/profile'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 border-2 border-blam bg-white transition-all ${
                      isActive ? 'bg-blam text-white shadow-[3px_3px_0px_0px_#000640]' : 'hover:bg-blam hover:text-white'
                    }`
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Bar */}
        <div className="flex items-center justify-between h-14 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              title="Toggle Menu"
              className="flex items-center justify-center p-2 border-2 border-blam bg-slate-100 hover:bg-yelam transition-colors cursor-pointer shadow-[2px_2px_0px_0px_#000640]"
            >
              <SquareHalfBottomIcon size={22} weight="bold" />
            </button>
            <div className="w-0.5 h-6 bg-blam/30" />
            <h1 className="font-rhdis font-black text-xl tracking-wide flex items-center gap-2">
              DASHBOARD <span className="font-sky text-xs bg-blam text-yelam px-2 py-0.5 border border-blam">ADMIN</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold bg-yelam/30 border border-blam px-3 py-1 rounded-full">
              <ShieldIcon size={14} weight="fill" className="text-blam" /> Admin Control
            </span>
          </div>
        </div>
      </header>

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Funky Footer */}
      <footer className="mt-auto bg-blam text-white border-t-2 border-blam py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-widest text-yelam bg-blam border border-yelam px-2.5 py-1">
              Role: {userData.role}
            </span>
            <span className="text-xs text-slate-300 font-medium">&bull; System Online</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white text-blam border-2 border-blam shadow-[2px_2px_0px_0px_#f3ae41] font-mono text-xs font-bold">
              <span className="px-3 py-1 border-r-2 border-blam text-trim">Count: {authStore.count ?? 0}</span>
              <button
                onClick={() => authStore.increment?.()}
                className="p-1.5 hover:bg-yelam transition-colors border-r border-blam cursor-pointer"
                title="Increment"
              >
                <PlusIcon size={14} weight="bold" />
              </button>
              <button
                onClick={() => authStore.decrement?.()}
                className="p-1.5 hover:bg-yelam transition-colors cursor-pointer"
                title="Decrement"
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