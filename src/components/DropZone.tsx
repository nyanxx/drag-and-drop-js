import type { ReactNode } from "react";

export default function DropZone({ children }: { children?: ReactNode }) {
  function drop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const elementId = event.dataTransfer.getData("text");
    (event.currentTarget as HTMLDivElement).appendChild(
      document.getElementById(elementId)!,
    );
  }

  return (
    <div
      className="my-10 border border-dotted p-3 w-75 h-100"
      id="drop-box"
      onDragOver={(e) => e.preventDefault()}
      onDrop={drop}
    >
      <>{children}</>
    </div>
  );
}
