import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableItem = (props: { id: string | number }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.id}
    </li>
  );
};
