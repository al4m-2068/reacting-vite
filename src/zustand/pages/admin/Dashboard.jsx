import { useAuthStore } from '../../auth/store/useAuthStore'
import { TrendUpIcon, UsersIcon, LightningIcon, CrownIcon, ArrowUpRightIcon, ActivityIcon, ClockIcon } from '@phosphor-icons/react'

export default function DashboardAdmin() {
  const userData = useAuthStore((state) => state.user)

  const stats = [
    { title: 'Total Revenue', value: '$128,450', change: '+18.4%', isUp: true, icon: TrendUpIcon, color: 'bg-yelam' },
    { title: 'Active Users', value: '2,845', change: '+12 today', isUp: true, icon: UsersIcon, color: 'bg-white' },
    { title: 'System Health', value: '99.9%', change: 'Nominal', isUp: true, icon: LightningIcon, color: 'bg-white' },
    { title: 'Conversion Rate', value: '4.25%', change: '+0.8%', isUp: true, icon: CrownIcon, color: 'bg-yelam' },
  ]

  const recentLogs = [
    { id: 1, action: 'User role updated to Admin', user: 'Sarah Jenkins', time: '5m ago', type: 'security' },
    { id: 2, action: 'New subscription purchase', user: 'Tech Corp', time: '18m ago', type: 'billing' },
    { id: 3, action: 'Database backup completed', user: 'System Bot', time: '1h ago', type: 'system' },
    { id: 4, action: 'API key generated', user: 'Alex Rivera', time: '2h ago', type: 'dev' },
  ]

  return (
    <div className="space-y-8">
      {/* Header Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-blam text-white p-6 border-2 border-blam shadow-[6px_6px_0px_0px_#f3ae41]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blam bg-yelam px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
            <CrownIcon size={14} weight="fill" /> Admin Portal
          </div>
          <h1 className="font-rhdis text-3xl font-black tracking-tight">
            Welcome back, <span className="text-yelam underline underline-offset-4 decoration-2">{userData?.name || 'Administrator'}</span>
          </h1>
          <p className="text-slate-300 text-sm mt-1">Ringkasan statistik sistem dan performa aplikasi Anda hari ini.</p>
        </div>
        <button className="self-start md:self-auto bg-yelam text-blam font-bold text-xs uppercase tracking-wider px-4 py-2.5 border-2 border-white hover:bg-white transition-all cursor-pointer flex items-center gap-2 shadow-[2px_2px_0px_0px_#ffffff]">
          <span>Export Analytics</span>
          <ArrowUpRightIcon size={16} weight="bold" />
        </button>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, idx) => {
          const IconComponent = item.icon
          return (
            <div
              key={idx}
              className={`p-5 border-2 border-blam ${item.color} shadow-[4px_4px_0px_0px_#000640] flex flex-col justify-between hover:-translate-y-1 transition-transform`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blam/80">{item.title}</span>
                <div className="p-2 border-2 border-blam bg-white">
                  <IconComponent size={20} weight="bold" className="text-blam" />
                </div>
              </div>
              <div className="mt-4">
                <span className="font-rhdis text-3xl font-black text-blam">{item.value}</span>
                <div className="flex items-center gap-1 mt-1 text-xs font-bold text-blam/70">
                  <span className="bg-blam/10 px-1.5 py-0.5 border border-blam/20">{item.change}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Analytics & System Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border-2 border-blam p-6 shadow-[5px_5px_0px_0px_#000640]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-blam">
            <h3 className="font-rhdis font-bold text-lg uppercase tracking-wide flex items-center gap-2">
              <ActivityIcon size={20} weight="bold" className="text-yelam" /> Performa Server & Trafik
            </h3>
            <span className="text-xs font-bold bg-slate-100 border border-blam px-2.5 py-1 uppercase">Live Data</span>
          </div>

          <div className="h-48 flex items-end justify-between gap-2 pt-6 px-2 border-b-2 border-slate-200">
            {[45, 65, 30, 85, 95, 70, 50, 80, 60, 90, 75, 100].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  style={{ height: `${height}%` }}
                  className="w-full bg-blam group-hover:bg-yelam transition-colors border-t-2 border-x-2 border-blam relative"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-blam text-white px-1 py-0.5 whitespace-nowrap transition-opacity">
                    {height}%
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-400">M{i + 1}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Peak Bandwidth: 8.4 GB/s</span>
            <span>Avg Response: 42ms</span>
          </div>
        </div>

        <div className="bg-white border-2 border-blam p-6 shadow-[5px_5px_0px_0px_#000640] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-blam">
              <h3 className="font-rhdis font-bold text-lg uppercase tracking-wide flex items-center gap-2">
                <ClockIcon size={20} weight="bold" /> Activity Logs
              </h3>
            </div>

            <div className="space-y-3">
              {recentLogs.map((log) => (
                <div key={log.id} className="p-3 bg-slate-50 border border-blam text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-blam">
                    <span className="truncate">{log.action}</span>
                    <span className="text-[10px] bg-yelam/30 px-1.5 py-0.5 border border-blam">{log.time}</span>
                  </div>
                  <div className="text-slate-500 font-medium">By: {log.user}</div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-4 py-2 bg-slate-100 border border-blam font-bold text-xs uppercase tracking-wider hover:bg-yelam transition-colors cursor-pointer">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  )
}