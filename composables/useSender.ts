export const useSendToTelegram = () => {
  const botToken = '7648602284:AAFljWadgckZ6NG5dbVy-0qDXcMmmYfc3mk'
  const chatId = '-4719621932'

  const sendToTelegram = async (formData: Record<string, string | number | null>) => {
    const message = `
      *Новая заявка с сайта*:
      🔥 *Имя:* ${formData.name}
      📩 *Email:* ${formData.email}
      📱 *Телефон:* ${formData.phone}
      📝 *Пожелания:* ${formData.comment || 'Не указано'}
    `

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        }
      )

      if (!response.ok) 

      return response.json()
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error)
    }
  }

  return { sendToTelegram }
}
