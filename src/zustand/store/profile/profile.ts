import { create } from 'zustand';
import { ProfileState } from './profileTypes';



export const useProfileStore = create<ProfileState>((set) => ({
    profileId: 'recruiter',
    setProfileId: (id: string) => set({ profileId: id }),
}));