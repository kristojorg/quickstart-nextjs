select EventEdition {
  _tag,
  name,
  name_capitalized,
  day:= [is OneDayEventEdition].day ?? {},
  days:=[is MultiDayEventEdition].days ?? {},
}
