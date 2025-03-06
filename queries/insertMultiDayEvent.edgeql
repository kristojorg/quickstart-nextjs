with 
  edition:= (insert MultiDayEventEdition {
    name:= <str>$name
  })
for dayNumber in {1, 2, 3}
union (insert MultiDayEventDay {
  date:= datetime_current(),
  edition:= edition,
  dayNumber:= <int16>dayNumber
})