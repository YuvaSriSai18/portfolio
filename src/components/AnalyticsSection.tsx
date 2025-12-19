import { motion } from 'framer-motion';
import { Github,Handshake, Star, GitFork, Code, Trophy, TrendingUp, BarChart3, Loader } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useAnalyticsData } from '@/hooks/useAnalyticsData';

const StatCard = ({ icon: Icon, label, value, color }: { icon: React.ElementType; label: string; value: string | number; color: string }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="glass-card-hover p-5 flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4"
  >
    <div 
      className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon size={20} sm-size={24} style={{ color }} className="sm:w-6 sm:h-6 w-5 h-5" />
    </div>
    <div className="text-center sm:text-left">
      <p className="text-lg sm:text-2xl font-bold">{value}</p>
      <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  </motion.div>
);

const AnalyticsSection = () => {
  const { data: analyticsData, loading, error } = useAnalyticsData();

  if (loading) {
    return (
      <section id="analytics" className="py-20">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading analytics data...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !analyticsData) {
    return (
      <section id="analytics" className="py-20">
        <div className="text-center">
          <p className="text-red-500">Failed to load analytics data</p>
        </div>
      </section>
    );
  }

  const { github, coding } = analyticsData;

  return (
    <section id="analytics" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Coding <span className="gradient-text">Analytics</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A data-driven overview of my coding journey and contributions.
        </p>

        {/* GitHub Stats */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Github className="text-foreground" size={24} />
            <h3 className="text-xl font-semibold">GitHub Statistics</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Code} label="Total Commits" value={github.currentMonthCommits} color="#10B981" />
            <StatCard icon={GitFork} label="Repositories" value={github.totalRepos} color="#3B82F6" />
            <StatCard icon={Handshake} label="Collaborators" value={github.totalCollaborators} color="#F59E0B" />
            <StatCard icon={TrendingUp} label="Contributions" value={github.yearlyContributions} color="#8B5CF6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contribution Activity
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={github.contributionData}>
                  <defs>
                    <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="contributions"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fill="url(#colorContributions)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Language Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Language Distribution
              </h4>
              <div className="flex items-center gap-6">
                <ResponsiveContainer width={140} height={140}>
                  <PieChart>
                    <Pie
                      data={github.languageUsage}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={65}
                      paddingAngle={3}
                      dataKey="percentage"
                    >
                      {github.languageUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-2">
                  {github.languageUsage.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-sm">{lang.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Competitive Programming Stats */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="text-accent" size={24} />
            <h3 className="text-xl font-semibold">Competitive Programming</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LeetCode Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg">LeetCode</h4>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#FFA116]/20 text-[#FFA116]">
                  #{coding.leetcode.ranking}
                </span>
              </div>
              <p className="text-3xl font-bold mb-4">{coding.leetcode.solved}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-500">Easy</span>
                  <span>{coding.leetcode.easy}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-500">Medium</span>
                  <span>{coding.leetcode.medium}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-500">Hard</span>
                  <span>{coding.leetcode.hard}</span>
                </div>
              </div>
            </motion.div>

            {/* LeetCode Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Problem Solving Activity
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={coding.leetcode.contributionData}>
                  <defs>
                    <linearGradient id="colorLeetcode" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFA116" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#FFA116" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="contributions"
                    stroke="#FFA116"
                    strokeWidth={2}
                    fill="url(#colorLeetcode)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AnalyticsSection;
