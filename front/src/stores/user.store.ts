import { create } from "zustand"; // domain X

interface UserStore {
    role: string,
    setRole: (role: string) => void, 
}

const useUserStore = create<UserStore>(set => ({
    // 객체
    role: '',
    setRole: (role: string) => set(state => ({ ...state, role }))
    
}));

export default useUserStore;

