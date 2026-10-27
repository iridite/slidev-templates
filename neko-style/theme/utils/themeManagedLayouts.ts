const THEME_MANAGED_LAYOUTS: Record<string, true> = {
  'cards': true,
  'center': true,
  'compare': true,
  'contents-toc': true,
  'cover': true,
  'default': true,
  'end': true,
  'headline': true,
  'intro': true,
  'metrics': true,
  'page': true,
  'page-wide': true,
  'section': true,
  'split': true,
  'statement': true,
  'timeline': true,
}
export function isThemeManagedLayout(layout?: string): boolean {
  return Boolean(THEME_MANAGED_LAYOUTS[layout || 'default'])
}

