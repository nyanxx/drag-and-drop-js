import { nanoid } from "nanoid";
import DropZone from "./components/DropZone";

/**
 * There is no issue with this code, it works! but we are manipulating the DOM directly here
 * (for example the appendChild in the DropZone) and it bypasses reacts's reconciliation.
 * React doesn't expect us to move DOM direcly / manully and it may leads to unexpected behavior / effects.
 * There could be more react-friendly apprach.
 *
 */
export default function App() {
  function drag(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData(
      "text",
      (event.currentTarget as HTMLDivElement).id,
    );
  }

  const draggables = [
    "Draggable Element 1",
    "Draggable Element 2",
    "Draggable Element 3",
  ].map((txt) => (
    <div
      key={txt}
      className="border text-center bg-blue-50 mb-3"
      id={nanoid()}
      draggable="true"
      onDragStart={drag}
    >
      {txt}
    </div>
  ));

  return (
    <main className="flex justify-center gap-10 bg-amber-50 h-full">
      <DropZone>{draggables}</DropZone>
      <DropZone></DropZone>
    </main>
  );
}
