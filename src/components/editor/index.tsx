import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface Props {}

const Editor: FC<Props> = (props): JSX.Element => {

    const editor = useEditor({ extensions: [StarterKit] });
    
    return (
        <div className=''>
            <button onClick={() => {
                if (!editor) return
                editor?.chain().toggleBold().run();
            }}>Bold</button>
        <EditorContent editor={editor} />;
      </div>
    );
};

export default Editor;