import create from 'zustand'
import {persist} from 'zustand/middleware'

export const useCurrentLetter = create(persist((set) => ({
  template: "",
  content: "",
  setTemplate: (template) => set({template: template}),
  setContent: (content) => set({content: content}),
}), {name: "letter"}))

export const useUser = create(persist((set) => ({
  user: null,
  setUser: (currentUser) => set({ user: currentUser }),
}), {name: 'user'}))

export const useSteps = create(persist((set) => ({
  step: 1,
  nextStep: () => set(state => ({ step: state.step + 1})),
  prevStep: () => set(state => ({ step: state.step - 1})),
  resetStep: () => set({step: 1})
}), {name: 'step'}))