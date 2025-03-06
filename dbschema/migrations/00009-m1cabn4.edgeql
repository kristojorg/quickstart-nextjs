CREATE MIGRATION m1cabn45jbn4vjneppr3v6e3tjnfoxdz3s4b3ju67aih3f2lnnbsvq
    ONTO m17xenpz3enbw6w2xilnymvcydnxesob2sjsnrokuygy4775dyt6wq
{
  ALTER TYPE default::EventDay {
      CREATE PROPERTY _tag := (.__type__.name);
  };
  ALTER TYPE default::EventEdition {
      CREATE PROPERTY _tag := (.__type__.name);
  };
};
