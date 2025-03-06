CREATE MIGRATION m15hsnd7fa6cnf4x4fnhefabfqs6lyf2bww7ndhgj3j6z7srkqtqjq
    ONTO m14j7aahtz46n7dxn23zegezif7xeyzezhgeaxowfei7ls2sx7lwua
{
  ALTER TYPE default::MultiDayEventDay {
      ALTER PROPERTY dayNumer {
          RENAME TO dayNumber;
      };
  };
};
