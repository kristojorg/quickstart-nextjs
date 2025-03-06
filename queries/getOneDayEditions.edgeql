select OneDayEventEdition {
  name,
  day := .<edition[is OneDayEventDay],
}
