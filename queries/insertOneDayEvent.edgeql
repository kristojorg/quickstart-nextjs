insert OneDayEventDay {
  date:= datetime_current(),
  edition:= (insert OneDayEventEdition {
    name:= <str>$name
  })
}