export const useGoToSection = () => {
  const router = useRouter()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return true
    }
    return false
  }

  const goToSection = async (id: string) => {
    const found = scrollTo(id)

    if (!found) {
      await router.push('/')
      const stop = watch(
        () => document.readyState === 'complete',
        () => {
          setTimeout(() => scrollTo(id), 200)
          stop()
        },
        { immediate: true }
      )
    }
  }

  return { goToSection }
}
