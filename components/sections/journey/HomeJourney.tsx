import JourneyScene from "./JourneyScene";
import JourneyProgress from "./JourneyProgress";
import { rooms } from "./roomsData";

export default function HomeJourney() {
  return (
    <div className="relative">
      <JourneyProgress />
      {rooms.map((room) => (
        <JourneyScene key={room.id} room={room} />
      ))}
    </div>
  );
}
