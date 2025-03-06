select EventDay {
  date,
  dayNumber := [is MultiDayEventDay].dayNumber,
  edition: {
    name,
  },
}
