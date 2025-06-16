export function useAuth() {
  return {
    signOut: async () => {},
    signInWithCredentials: async () => {},
    signInWithGoogle: async () => {},
    signUpWithCredentials: async () => {},
    signUpWithGoogle: async () => {},
  };
}

export function useUser() {
  return { data: null, loading: false };
}
