import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapDisplay = (props) => {
    const editor = useEditor({
        editable: false,
        content: props.content,
        extensions: [StarterKit],
    });
    return (
        <>
            <EditorContent editor={editor} />
        </>
    );
};

export default TiptapDisplay;
