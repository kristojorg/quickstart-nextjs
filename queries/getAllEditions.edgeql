select EventEdition {
  name,
  day := .<edition[is EventDay],
}
