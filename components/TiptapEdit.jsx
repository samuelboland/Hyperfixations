import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';

import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineStrikethrough,
    AiOutlineUnderline,
    AiOutlineCode,
    AiOutlineUnorderedList,
    AiOutlineOrderedList,
    AiOutlineLine,
    AiOutlineUndo,
    AiOutlineRedo,
} from 'react-icons/ai';
import { BsChatRightQuote } from 'react-icons/bs';

import styles from './Tiptap.module.scss';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <AiOutlineBold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <AiOutlineItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <AiOutlineStrikethrough />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                <AiOutlineCode />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                p
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                h1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                h2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                h3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
            >
                h4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
            >
                h5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
            >
                h6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <AiOutlineUnorderedList />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                <AiOutlineOrderedList />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                <BsChatRightQuote />
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <AiOutlineLine />
            </button>
            <button onClick={() => editor.chain().focus().undo().run()}>
                <AiOutlineUndo />
            </button>
            <button onClick={() => editor.chain().focus().redo().run()}>
                <AiOutlineRedo />
            </button>
            <input
                type="color"
                onInput={(event) => editor.chain().focus().setColor(event.target.value).run()}
                value={editor.getAttributes('textStyle').color}
            />
        </>
    );
};

// I might want to use this editor in multiple places, so I don't want to hardcode a particular
// way of saving the information here. This editor will be used inside of html <form> elements,
// so I want to return the value of the form continuously as I type. This will let me use
// regular old onSubmit handlers in whatever page I want.

// However, this introduces a problem. The parent element will be calling this child element. I could
// store the state here, but the parent element needs it to submit. I think that a more reacty way
// of doing this would be to define a function in the parent element to handle the state, and pass that
// function to this child element. Let's see if that works!

const TiptapEdit = (props) => {
    const [hasBeenFocusedAlready, setHasBeenFocusedAlready] = useState(false);
    const [initialContent, setInitialContent] = useState(props.content);

    const editor = useEditor({
        extensions: [StarterKit, TextStyle, Color],
        onUpdate: ({ editor }) => {
            props.stateHandler(editor.getHTML());
            // I expect the parent element to pass a "stateHandler" function that deals with this
            // data that's being returned. It can do whatever it wants with it.
        },
        onCreate: ({ editor }) => {
            editor.commands.setContent(initialContent);
        },
    });

    // Ok I'm getting a little fancy here, but: I have starting text in this editor. It is regular
    // text, and so I'd need to delete it to type. What if I delete it automatically on my first
    // focus? That would be cool. Let's do that!
    useEffect((editor) => {
        setHasBeenFocusedAlready(false);
    }, []);

    return (
        <div className={styles.editor}>
            <MenuBar editor={editor} />
            <EditorContent
                editor={editor}
                className={styles.inputBox}
                onFocus={(e) => {
                    hasBeenFocusedAlready ? null : editor.commands.setContent('');
                    setHasBeenFocusedAlready(true);
                }}
            />
            {}
        </div>
    );
};

export default TiptapEdit;
