CREATE MIGRATION m1xf3462l24ollebrooy4dkpeysy4ejxxpjf2fmravrrcwc77cvhwa
    ONTO m15hsnd7fa6cnf4x4fnhefabfqs6lyf2bww7ndhgj3j6z7srkqtqjq
{
  ALTER TYPE default::EventEdition {
      CREATE PROPERTY name_capitalized := (std::str_upper(.name));
  };
};
