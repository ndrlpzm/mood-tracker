import { Tag } from "../data/classes/tag";

interface TagInput {
  tag: Tag;
}

export function TagLabel({ tag }: TagInput) {
  return (
    <div className="tag">
      <div style={{ backgroundColor: tag.color }}></div>
      {tag.value}
    </div>
  );
}

export default TagLabel;