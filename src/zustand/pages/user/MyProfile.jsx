import { useState } from 'react'
import { useAuthStore } from '../../auth/store/useAuthStore'
import { UserIcon, CheckCircleIcon, FloppyDiskIcon } from '@phosphor-icons/react'

export default function ProfileUser() {
  const authStore = useAuthStore()
  const userData = useAuthStore((state) => state.user)
  const [newProfile, setNewProfile] = useState({
    name: userData?.name || '',
    role: userData?.role || 'user',
  })
  const [saved, setSaved] = useState(false)

  const handleUpdate = (e) => {
    e.preventDefault()
    if (newProfile.name && authStore.setUsername) {
      authStore.setUsername(newProfile.name)
    }
    if (newProfile.role && authStore.setRole) {
      authStore.setRole(newProfile.role)
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="font-rhdis text-3xl font-black text-blam uppercase tracking-tight">My Profile</h1>
        <p className="text-slate-500 text-sm mt-1">Atur nama tampilan dan preferensi akun pengguna Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white border-2 border-blam p-6 shadow-[6px_6px_0px_0px_#000640]">
          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-xs font-bold uppercase tracking-wider text-blam mb-1.5">
                Username / Display Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={userData?.name}
                onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-blam font-medium text-blam focus:outline-none focus:bg-yelam/10 focus:border-blam"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-xs font-bold uppercase tracking-wider text-blam mb-1.5">
                Role (Switch Test)
              </label>
              <select
                name="role"
                id="role"
                defaultValue={userData?.role}
                onChange={(e) => setNewProfile({ ...newProfile, role: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-blam font-bold text-blam focus:outline-none focus:bg-yelam/10 focus:border-blam cursor-pointer"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {saved && (
              <div className="p-3 bg-green-100 border-2 border-green-600 text-green-800 text-xs font-bold flex items-center gap-2">
                <CheckCircleIcon size={18} weight="fill" />
                <span>Profil pengguna diperbarui!</span>
              </div>
            )}

            <button
              type="submit"
              className="py-3 px-6 bg-yelam text-blam font-bold uppercase tracking-wider border-2 border-blam shadow-[4px_4px_0px_0px_#000640] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000640] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
            >
              <FloppyDiskIcon size={18} weight="bold" />
              <span>Simpan Perubahan</span>
            </button>
          </form>
        </div>

        <div className="bg-white border-2 border-blam p-6 shadow-[6px_6px_0px_0px_#f3ae41] flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-blam text-yelam border-2 border-blam flex items-center justify-center font-sky text-2xl font-bold mb-4 shadow-[3px_3px_0px_0px_#f3ae41]">
              {userData?.name ? userData.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <h3 className="font-rhdis font-bold text-xl text-blam">{userData?.name || 'User'}</h3>
            <span className="inline-block mt-1 text-xs font-extrabold uppercase bg-yelam text-blam px-2 py-0.5 border border-blam">
              Status: Active User
            </span>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-slate-200 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-bold">
              <UserIcon size={16} className="text-blam" /> Member sejak 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}