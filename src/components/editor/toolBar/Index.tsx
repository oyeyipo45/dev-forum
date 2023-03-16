import DropdownOptions from '@/components/common/DropdownOptions';
import { Editor } from '@tiptap/react';
import { FC } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { getFocusedEditor } from '../EditorUtils';
import {
  BsTypeBold,
  BsTypeStrikethrough,
  BsBraces,
  BsCode,
  BsListOl,
  BsListUl,
  BsTypeItalic,
  BsTypeUnderline,
  BsLink45Deg,
  BsYoutube,
  BsImageFill,
} from 'react-icons/bs';
import Button from './Button';

interface Props {
  editor: Editor | null;
}

const ToolBar: FC<Props> = ({ editor }): JSX.Element | null => {
  if (!editor) return null;

  const options = [
    {
      label: 'Heading 1',
      onClick: () => {
        getFocusedEditor(editor).setParagraph().run();
      },
    },
    { label: 'Paragraph 1', onClick: () => getFocusedEditor(editor).toggleHeading({ level: 1 }).run() },
    { label: 'Paragraph 2', onClick: () => getFocusedEditor(editor).toggleHeading({ level: 2 }).run() },
    { label: 'Paragraph 3', onClick: () => getFocusedEditor(editor).toggleHeading({ level: 3 }).run() },
  ];

  const getLabel = (): string => {
    if (editor.isActive('heading', { level: 1 })) return 'Heading 1';
    if (editor.isActive('heading', { level: 2 })) return 'Heading 2';
    if (editor.isActive('heading', { level: 3 })) return 'Heading 3';

    return 'Paragraph';
  };

  const Head = () => {
    return (
      <div className='flex items-center space-x-2 text-primary-dark dark:text-primary'>
        <p>{getLabel()}</p>
        <AiFillCaretDown />
      </div>
    );
  };

  return (
    <div className='flex items-center'>
      <DropdownOptions options={options} head={<Head />} />
      <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8 ' />
      <div className='flex items-center space-x-3'>
        <Button>
          <BsTypeBold />{' '}
        </Button>
        <Button>
          <BsTypeItalic />{' '}
        </Button>

        <Button>
          <BsTypeStrikethrough />{' '}
        </Button>

        <Button>
          <BsCode />{' '}
        </Button>

        <Button>
          <BsListOl />{' '}
        </Button>

        <Button>
          <BsListUl />{' '}
        </Button>

        <Button>
          <BsTypeUnderline />{' '}
        </Button>
      </div>
      <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8 ' />

      <div className='flex items-center space-x-3'>
        <Button>
          <RiDoubleQuotesL />{' '}
        </Button>

        <Button>
          <BsBraces />{' '}
        </Button>

        <Button>
          <BsLink45Deg />{' '}
        </Button>
      </div>

      <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8 ' />

      <div className='flex items-center space-x-3'>
        <Button>
          <BsYoutube />{' '}
        </Button>

        <Button>
          <BsImageFill />{' '}
        </Button>
      </div>

      <BsTypeBold />{' '}
    </div>
  );
};

export default ToolBar;
