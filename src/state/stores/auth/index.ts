import { ProfileResponse, UserResponse } from '@/models/auth.model';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

interface ISessionStore {
    session: {
        profile: ProfileResponse | null;
        session: UserResponse | null;
    };
    status: AuthStatus;
    clearSession: () => void;
    updateSession: () => void;
    updateProfile: (updates: Partial<ProfileResponse>) => void;
}

const fetchSessionFromApi = async () => {
    try {
        const response = await fetch('/api/auth/session');
        if (response.ok) {
            const data = await response.json();
            return data
                ? {
                      session: {
                          session: data.session ?? null,
                          profile: data.profile ?? null
                      },
                      status: 'authenticated' as AuthStatus
                  }
                : {
                      session: {
                          session: null,
                          profile: null
                      },
                      status: 'unauthenticated' as AuthStatus
                  };
        }

        return {
            session: {
                session: null,
                profile: null
            },
            status: 'unauthenticated' as AuthStatus
        };
    } catch {
        return {
            session: {
                session: null,
                profile: null
            },
            status: 'unauthenticated' as AuthStatus
        };
    }
};

export const useSessionStore = create<ISessionStore>()(
    persist(
        (set) => ({
            session: {
                profile: null,
                session: null
            },
            status: 'loading',
            clearSession: () => {
                set({
                    session: {
                        profile: null,
                        session: null
                    },
                    status: 'unauthenticated'
                });
            },
            updateSession: async () => {
                const { session, status } = await fetchSessionFromApi();
                set({ session, status });
            },
            updateProfile: (updates) => {
                set((state) => ({
                    session: {
                        ...state.session,
                        profile: state.session.profile ? { ...state.session.profile, ...updates } : null
                    }
                }));
            }
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                session: state.session,
                status: state.status
            })
        }
    )
);

if (typeof window !== 'undefined') {
    useSessionStore.getState().updateSession();
}
