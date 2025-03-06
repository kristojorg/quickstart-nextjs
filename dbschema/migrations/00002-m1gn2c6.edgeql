CREATE MIGRATION m1gn2c6qpdgoymrva3mw7adcb3a2cfrhz664o3onnvyr3x4bnrhxfa
    ONTO m17tq5kqzzm7s7nu2xv7yp26dkyln6runp4ydylxjcv4mixqqiyifq
{
  ALTER TYPE default::MultiDayEventEdition {
      DROP LINK days;
  };
  ALTER TYPE default::MultiDayEventDay {
      DROP LINK edition;
  };
  ALTER TYPE default::OneDayEventEdition {
      DROP LINK day;
  };
  ALTER TYPE default::OneDayEventDay {
      DROP LINK edition;
  };
  ALTER TYPE default::EventDay {
      CREATE REQUIRED LINK edition: default::EventEdition {
          SET REQUIRED USING (<default::EventEdition>{});
      };
  };
};
