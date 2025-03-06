CREATE MIGRATION m1abpmvmqd2xo254344syync5z6bl7khhz6l4c4ulwzw3rmpl3fv5a
    ONTO m1gn2c6qpdgoymrva3mw7adcb3a2cfrhz664o3onnvyr3x4bnrhxfa
{
  ALTER TYPE default::MultiDayEventDay {
      CREATE REQUIRED PROPERTY dayNumer: std::int16 {
          SET REQUIRED USING (<std::int16>{});
      };
  };
};
