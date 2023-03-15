import DropdownOptions from '@/components/common/DropdownOptions';
import { Editor } from '@tiptap/react';
import { FC } from 'react';

interface Props {
  editor: Editor | null;
}

const ToolBar: FC<Props> = ({ editor }): JSX.Element | null => {
  if (!editor) return null;
  return (
    <div>
      <DropdownOptions
        options={[
          { label: 'Heading 1', onClick: () => {} },
          { label: 'Paragraph 1', onClick: () => {} },
          { label: 'Paragraph 2', onClick: () => {} },
          { label: 'Paragraph 3', onClick: () => {} },
        ]}
        head={<>Paragraph</>}
      />
    </div>
  );
};

export default ToolBar;
