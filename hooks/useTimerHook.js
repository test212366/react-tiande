import { useState } from "react"

export const useTimerHook = (date) => {
	const deadlineDate = new Date(date) // преобразовываем дату которая пришла с сервера в виде строки




	const nowDate = new Date()


	const difference = deadlineDate.getTime() - nowDate.getTime() // берет разницу между днями

	const days = Math.floor(difference / (24 * 3600 * 1000)),
		numberHour = difference % (24 * 3600 * 1000), // берет номер часа
		hours = Math.floor(numberHour / (3600 * 1000)), // берет сколько ВСЕГО часов осталось и высчитывает разницу в часах
		numberMinutes = numberHour % (3600 * 1000),
		minutes = Math.floor(numberMinutes / (60 * 1000)),
		numberSeconds = numberMinutes % (60 * 1000),
		seconds = Math.round(numberSeconds / 1000)


	if (seconds < 0) return {
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00'
	}

	return {
		days: days < 10 ? '0' + days : days,
		hours: hours < 10 ? '0' + hours : hours,
		minutes: minutes < 10 ? '0' + minutes : minutes,
		seconds: seconds < 10 ? '0' + seconds : seconds
	}



}

