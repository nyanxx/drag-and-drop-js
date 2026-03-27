import { nanoid } from "nanoid";

export default function App() {
  function drag(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData(
      "text",
      (event.currentTarget as HTMLDivElement).id,
    );
    console.log(event);
  }

  function drop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const elementId = event.dataTransfer.getData("text");
    (event.currentTarget as HTMLDivElement).appendChild(
      document.getElementById(elementId)!,
    );
  }

  return (
    <main className="flex justify-center gap-10 bg-amber-50 h-full">
      {/* Drop Zone 1 */}
      <div
        className="my-10 border border-dotted p-3 w-75 h-100"
        id="pick-box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={drop}
      >
        {[
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
        ))}
      </div>

      {/* Drop Zone 1 */}
      <div
        className="my-10 border border-dotted p-3 w-75 h-100"
        id="drop-box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={drop}
      ></div>
    </main>
  );
}
