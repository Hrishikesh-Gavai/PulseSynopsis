export interface UserPreferences {
  topics: string[];
  summaryLength: 'tldr' | 'short' | 'full';
  tone: 'formal' | 'conversational' | 'bullets';
  digest: 'realtime' | 'daily' | 'weekly';
  theme: 'light' | 'dark';
  savedSummaries: string[];
}

const DEFAULT_PREFERENCES: UserPreferences = {
  topics: [],
  summaryLength: 'short',
  tone: 'conversational',
  digest: 'daily',
  theme: 'light',
  savedSummaries: [],
};

const STORAGE_KEY = 'newsPreferences';

export const getPreferences = (): UserPreferences => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) };
    } catch {
      return DEFAULT_PREFERENCES;
    }
  }
  return DEFAULT_PREFERENCES;
};

export const savePreferences = (preferences: Partial<UserPreferences>): void => {
  const current = getPreferences();
  const updated = { ...current, ...preferences };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const toggleSavedSummary = (summaryId: string): void => {
  const prefs = getPreferences();
  const saved = prefs.savedSummaries.includes(summaryId)
    ? prefs.savedSummaries.filter(id => id !== summaryId)
    : [...prefs.savedSummaries, summaryId];
  savePreferences({ savedSummaries: saved });
};

export const isSummarySaved = (summaryId: string): boolean => {
  const prefs = getPreferences();
  return prefs.savedSummaries.includes(summaryId);
};
