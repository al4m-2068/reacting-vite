import { useAuthStore } from '../../auth/store/useAuthStore'
import { CheckCircleIcon, ListChecksIcon, FireIcon, SparkleIcon, ClockIcon, ArrowRightIcon } from '@phosphor-icons/react'

export default function DashboardUser() {
  const userData = useAuthStore((state) => state.user)

  const userStats = [
    { title: 'Tasks Completed', value: '24 / 30', desc: '80% finished', icon: ListChecksIcon, bg: 'bg-yelam' },
    { title: 'Active Projects', value: '5 Ongoing', desc: '2 due this week', icon: SparkleIcon, bg: 'bg-white' },
    { title: 'Earned Points', value: '1,420 pts', desc: 'Level 4 Member', icon: CheckCircleIcon, bg: 'bg-white' },
    { title: 'Current Streak', value: '12 Days 🔥', desc: 'Keep it going!', icon: FireIcon, bg: 'bg-yelam' },
  ]

  const userTasks = [
    { id: 1, title: 'Lengkapi profil akun', status: 'Selesai', tag: 'Aktivitas' },
    { id: 2, title: 'Review modul dokumentasi API', status: 'Proses', tag: 'Pembelajaran' },
    { id: 3, title: 'Verifikasi nomor WhatsApp', status: 'Pending', tag: 'Keamanan' },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-white border-2 border-blam p-6 shadow-[6px_6px_0px_0px_#000640] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase bg-yelam text-blam px-2.5 py-1 border border-blam">
            Member Area
          </span>
          <h1 className="font-rhdis text-3xl font-black text-blam mt-2">
            Selamat Datang, <span className="text-blam underline decoration-yelam decoration-4">{userData?.name || 'User'}</span>!
          </h1>
          <p className="text-slate-500 text-sm mt-1">Berikut adalah ikhtisar aktivitas dan tugas harian Anda.</p>
        </div>

        <button className="bg-blam text-white font-bold text-xs uppercase tracking-wider px-4 py-3 border-2 border-blam hover:bg-yelam hover:text-blam transition-colors cursor-pointer flex items-center gap-2 shadow-[3px_3px_0px_0px_#f3ae41]">
          <span>Mulai Tugas Baru</span>
          <ArrowRightIcon size={16} weight="bold" />
        </button>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {userStats.map((st, i) => {
          const IconComponent = st.icon
          return (
            <div key={i} className={`p-5 border-2 border-blam ${st.bg} shadow-[4px_4px_0px_0px_#000640]`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase text-blam/80">{st.title}</span>
                <IconComponent size={20} weight="bold" className="text-blam" />
              </div>
              <div className="font-rhdis text-2xl font-black text-blam">{st.value}</div>
              <div className="text-xs font-medium text-slate-600 mt-1">{st.desc}</div>
            </div>
          )
        })}
      </div>

      {/* Tasks & Activity Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blam p-6 shadow-[5px_5px_0px_0px_#000640]">
          <h3 className="font-rhdis font-bold text-lg uppercase mb-4 pb-2 border-b-2 border-blam flex items-center gap-2">
            <ListChecksIcon size={20} className="text-yelam" /> Daftar Tugas Harian
          </h3>
          <div className="space-y-3">
            {userTasks.map((t) => (
              <div key={t.id} className="p-3 border border-blam bg-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-blam">{t.title}</h4>
                  <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 border border-blam/30 uppercase">
                    {t.tag}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 border border-blam ${
                    t.status === 'Selesai'
                      ? 'bg-green-200 text-green-900'
                      : t.status === 'Proses'
                      ? 'bg-yelam text-blam'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blam text-white border-2 border-blam p-6 shadow-[5px_5px_0px_0px_#f3ae41] flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-blam bg-yelam px-2 py-0.5 uppercase">Tips Hari Ini</span>
            <h3 className="font-rhdis font-bold text-xl mt-3 text-yelam">Tingkatkan Performa Anda!</h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Selesaikan minimal 3 tugas harian berturut-turut untuk mendapatkan bonus 200 Reward Points dan lencana eksklusif.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <ClockIcon size={16} className="text-yelam" /> Reset Harian: 00:00 WIB
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}