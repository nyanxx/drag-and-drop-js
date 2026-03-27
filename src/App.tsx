export default function App() {
  // Save the id of an element which is being dragged.
  function drag(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData("text", (event.target as HTMLDivElement).id);
  }

  // Drop the shit
  function drop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const elementId = event.dataTransfer.getData("text");
    // console.log(elementId);
    (event.target as HTMLDivElement).appendChild(
      document.getElementById(elementId)!,
    );
  }

  // Makes an element to accept drops
  function allowDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  return (
    <main className="flex justify-center gap-10 bg-amber-50 h-full">
      <div
        className="my-10 border border-dotted p-3 w-75 h-100"
        id="pick-box"
        onDragOver={allowDrop}
        onDrop={drop}
      >
        {/* <!-- Search : The draggable elements also allow other dg-elements to be dropped onto them, why?--> */}
        {/* <!-- Fix : The dg-elements can also be dragged and dropped into itself. --> */}
        <div
          className="border text-center bg-blue-50 mb-3"
          id="de1"
          draggable="true"
          onDragStart={drag}
        >
          Draggable Element 1
        </div>
        <div
          className="border text-center bg-blue-50 mb-3"
          id="de2"
          draggable="true"
          onDragStart={drag}
        >
          Draggable Element 2
        </div>
        <div
          className="border text-center bg-blue-50 mb-3"
          id="de3"
          draggable="true"
          onDragStart={drag}
        >
          Draggable Element 3
        </div>
      </div>
      <div
        className="my-10 border border-dotted p-3 w-75 h-100"
        id="drop-box"
        onDragOver={allowDrop}
        onDrop={drop}
      ></div>
    </main>
  );
}
