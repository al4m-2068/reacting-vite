import React, { useState } from 'react'
import { useAuthStore } from './store/useAuthStore'
import { Navigate, useNavigate } from 'react-router'
import { SparkleIcon, ArrowRightIcon, ShieldCheckIcon } from '@phosphor-icons/react'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const error = useAuthStore((state) => state.error)
  const login = useAuthStore.getState().login
  const user = useAuthStore((state) => state.user)
  const navigate = useNavigate()

  if (user) {
    if (user.role === 'admin') return <Navigate to={'/admin'} replace />
    if (user.role === 'user') return <Navigate to={'/user'} replace />
  }

  function handleSubmit(e) {
    e.preventDefault()
    const isSuccess = login(email, password)
    if (isSuccess) {
      const currentUser = useAuthStore.getState().user
      if (currentUser?.role === 'admin') navigate('/admin')
      if (currentUser?.role === 'user') navigate('/user')
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-slate-50 text-blam">
      {/* Left Branding Side */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-blam text-white p-12 relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-yelam/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-yelam text-blam font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border-2 border-white shadow-[3px_3px_0px_0px_#ffffff]">
            <SparkleIcon size={16} weight="fill" /> Funky Portal v2.0
          </div>
          <h1 className="font-sky text-6xl mt-8 leading-tight tracking-wide">
            WELCOME <br />
            <span className="text-yelam underline decoration-wavy decoration-2">BACK!</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-md text-lg">
            Akses dashboard interaktif dengan analitik real-time dan manajemen role terintegrasi.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs tracking-wider uppercase opacity-75">
          <ShieldCheckIcon size={20} className="text-yelam" />
          <span>Encrypted Auth &bull; Zustand Powered</span>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-white border-2 border-blam p-8 shadow-[6px_6px_0px_0px_#000640]">
          <div className="mb-8">
            <h2 className="font-rhdis text-3xl font-black text-blam uppercase tracking-tight">Sign In</h2>
            <p className="text-slate-500 text-sm mt-1">Masukkan kredensial akun Anda untuk melanjutkan.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-blam mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="user@yourcomp.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-blam font-medium text-blam placeholder:text-slate-400 focus:outline-none focus:bg-yelam/10 focus:border-blam transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-blam mb-1.5">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-blam font-medium text-blam placeholder:text-slate-400 focus:outline-none focus:bg-yelam/10 focus:border-blam transition-all"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-100 border-2 border-red-500 text-red-700 text-xs font-bold tracking-wide">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-yelam text-blam font-bold uppercase tracking-wider border-2 border-blam shadow-[4px_4px_0px_0px_#000640] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000640] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Sign In Now</span>
              <ArrowRightIcon size={18} weight="bold" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <span className="text-xs text-slate-400 font-medium">
              Gunakan email & password dummy sesuai store Anda.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn