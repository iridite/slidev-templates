const themeManagedLayouts = new Set([
  'center',
  'contents-toc',
  'cover',
  'default',
  'end',
  'intro',
  'page',
  'page-wide',
  'section',
])

export function isThemeManagedLayout(layout?: string) {
  return themeManagedLayouts.has(layout || 'default')
}

