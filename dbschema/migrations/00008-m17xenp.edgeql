CREATE MIGRATION m17xenpz3enbw6w2xilnymvcydnxesob2sjsnrokuygy4775dyt6wq
    ONTO m1vhv57v5voobh4yxj6xeipqd6s6asf46q6ibj23v5fdjgvtadakka
{
  ALTER TYPE default::OneDayEventEdition {
      ALTER LINK day {
          USING (.<edition[IS default::EventDay]);
          RESET CARDINALITY;
      };
  };
};
