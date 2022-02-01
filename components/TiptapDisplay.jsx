import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapDisplay = (props) => {
    const editable = false;
    const editor = useEditor({
        editable,
        content: props.content,
        extensions: [StarterKit],
    });
    console.log(props.content);
    return (
        <>
            <EditorContent editor={editor} />
        </>
    );
};

export default TiptapDisplay;
