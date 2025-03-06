CREATE MIGRATION m17tq5kqzzm7s7nu2xv7yp26dkyln6runp4ydylxjcv4mixqqiyifq
    ONTO initial
{
  CREATE ABSTRACT TYPE default::EventEdition {
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::Event {
      CREATE REQUIRED MULTI LINK editions: default::EventEdition;
  };
  CREATE ABSTRACT TYPE default::EventDay {
      CREATE REQUIRED PROPERTY date: std::datetime;
  };
  CREATE TYPE default::MultiDayEventDay EXTENDING default::EventDay;
  CREATE TYPE default::OneDayEventDay EXTENDING default::EventDay;
  CREATE TYPE default::MultiDayEventEdition EXTENDING default::EventEdition;
  CREATE TYPE default::OneDayEventEdition EXTENDING default::EventEdition;
  ALTER TYPE default::MultiDayEventDay {
      CREATE REQUIRED LINK edition: default::MultiDayEventEdition;
  };
  ALTER TYPE default::MultiDayEventEdition {
      CREATE LINK days := (.<edition[IS default::MultiDayEventDay]);
  };
  ALTER TYPE default::OneDayEventDay {
      CREATE REQUIRED LINK edition: default::OneDayEventEdition;
  };
  ALTER TYPE default::OneDayEventEdition {
      CREATE LINK day := (.<edition[IS default::OneDayEventDay]);
  };
};
