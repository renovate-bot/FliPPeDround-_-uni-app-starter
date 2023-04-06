export function useTitle(title: string) {
  const { app } = createApp()
  app.config.globalProperties.$setTitle(title)
}
