CREATE MIGRATION m14j7aahtz46n7dxn23zegezif7xeyzezhgeaxowfei7ls2sx7lwua
    ONTO m1abpmvmqd2xo254344syync5z6bl7khhz6l4c4ulwzw3rmpl3fv5a
{
  ALTER TYPE default::Event {
      ALTER LINK editions {
          ON SOURCE DELETE DELETE TARGET;
          ON TARGET DELETE ALLOW;
      };
  };
  ALTER TYPE default::EventDay {
      ALTER LINK edition {
          ON SOURCE DELETE DELETE TARGET;
          ON TARGET DELETE DELETE SOURCE;
      };
  };
};
