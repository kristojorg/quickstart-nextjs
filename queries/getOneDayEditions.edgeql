select OneDayEventEdition {
  name,
  name_capitalized,
  day := .<edition[is OneDayEventDay],
}
