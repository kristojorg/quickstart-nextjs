CREATE MIGRATION m1vhv57v5voobh4yxj6xeipqd6s6asf46q6ibj23v5fdjgvtadakka
    ONTO m1xf3462l24ollebrooy4dkpeysy4ejxxpjf2fmravrrcwc77cvhwa
{
  ALTER TYPE default::MultiDayEventEdition {
      CREATE LINK days := (.<edition[IS default::EventDay]);
  };
  ALTER TYPE default::OneDayEventEdition {
      CREATE SINGLE LINK day := (std::assert_single(.<edition[IS default::EventDay]));
  };
};
