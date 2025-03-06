import { createClient } from "gel";
import { insertMultiDayEvent } from "@/queries/insertMultiDayEvent.query";
import { insertOneDayEvent } from "@/queries/insertOneDayEvent.query";
import { getEventDays } from "@/queries/getEventDays.query";
import { getOneDayEditions } from "@/queries/getOneDayEditions.query";
import { getAllEditions } from "@/queries/getAllEditions.query";

const client = createClient();

// clear the database
await client.query(
  `delete Event; 
  delete OneDayEventEdition; 
  delete MultiDayEventEdition; 
  delete OneDayEventDay; 
  delete MultiDayEventDay;`
);

// insert a one day event
await insertOneDayEvent(client, { name: "One Day Event" });

// insert a multi day event
await insertMultiDayEvent(client, { name: "Multi Day Event" });

// get all the event days
const eventDays = await getEventDays(client);
console.log("Event days:", eventDays);

// get all the one day editions
const oneDayEditions = await getOneDayEditions(client);
console.log("One day editions:", oneDayEditions);

// get all editions (polymorphic)
const allEditions = await getAllEditions(client);
console.log("All editions:", allEditions);
