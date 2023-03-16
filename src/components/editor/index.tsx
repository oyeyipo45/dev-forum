import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ToolBar from './toolBar/Index';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

interface Props {}

const Editor: FC<Props> = (props): JSX.Element => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: 'My Custom Placeholder',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-lg  focus:outline-none dark:prose-invert max-w-full mx-auto h-full',
      },
    },
  });

  return (
    <div className='p-3 dark:bg-primary-dark bg:primary transition'>
      <ToolBar editor={editor} />
      <div className='w-full dark:secondary-light bg-secondary-dark h-[1px] my-3'></div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
