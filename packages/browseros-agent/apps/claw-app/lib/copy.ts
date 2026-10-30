/** English cockpit UI copy, grouped by where it appears. */
export const cockpitCopy = {
  navigation: {
    home: 'Home',
    skills: 'Skills',
    connectedAgents: 'Connected agents',
    history: 'History',
    settings: 'Settings',
  },
  sidebar: {
    label: 'Sidebar',
    mainNavigation: 'Main',
    needsYou: (count: number): string =>
      `${count} ${count === 1 ? 'agent needs' : 'agents need'} you`,
    connectedAgents: (count: number): string =>
      count === 0
        ? 'No agents connected yet'
        : `${count} ${count === 1 ? 'agent' : 'agents'} connected`,
  },
} as const
