/**
 * @license
 * Copyright 2026 BrowserOS
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import {
  Bookmark,
  History,
  House,
  type LucideIcon,
  Plug,
  Settings,
} from 'lucide-react'
import { cockpitCopy } from '@/lib/copy'

export interface NavItem {
  name: string
  to: string
  icon: LucideIcon
}

/** Daily destinations, in the order people use them. */
export const primaryNavItems: NavItem[] = [
  { name: cockpitCopy.navigation.home, to: '/', icon: House },
  { name: cockpitCopy.navigation.skills, to: '/skills', icon: Bookmark },
  { name: cockpitCopy.navigation.connectedAgents, to: '/mcp', icon: Plug },
  { name: cockpitCopy.navigation.history, to: '/audit', icon: History },
]

export const secondaryNavItems: NavItem[] = [
  { name: cockpitCopy.navigation.settings, to: '/settings', icon: Settings },
]

export function isNavItemActive(to: string, pathname: string): boolean {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}
