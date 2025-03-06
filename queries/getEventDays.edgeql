select EventDay {
  _tag,
  date,
  dayNumber := [is MultiDayEventDay].dayNumber,
  edition: {
    name,
    name_capitalized,
  },
}
